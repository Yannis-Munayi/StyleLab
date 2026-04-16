import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import { STYLES } from '../data/styles'
import styles from './ProfileScreen.module.css'

function timeAgo(ts) {
  if (!ts) return ''
  const date = ts.toDate ? ts.toDate() : new Date(ts)
  const diff = (Date.now() - date.getTime()) / 1000
  if (diff < 60)   return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

export default function ProfileScreen({ onBack }) {
  const { user, logout }  = useAuth()
  const { dispatch }      = useApp()
  const [quizzes, setQuizzes] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    if (!user) return
    async function load() {
      try {
        const q = query(
          collection(db, 'users', user.uid, 'quizzes'),
          orderBy('timestamp', 'desc')
        )
        const snap = await getDocs(q)
        setQuizzes(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
      } catch (e) {
        console.error('Failed to load quizzes', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user])

  // Aggregate top aesthetics across all quizzes
  const aggregated = {}
  for (const quiz of quizzes) {
    for (const [id, score] of Object.entries(quiz.styleScores ?? {})) {
      aggregated[id] = (aggregated[id] ?? 0) + score
    }
  }
  const topOverall = Object.entries(aggregated)
    .sort(([, a], [, b]) => b - a)
    .filter(([, s]) => s > 0)
    .slice(0, 5)

  async function handleLogout() {
    await logout()
    // onBack resets the active tab (tab-bar usage); otherwise go to welcome screen
    if (onBack) {
      onBack()
    } else {
      dispatch({ type: 'GO_TO_WELCOME' })
    }
  }

  // Guard: no user — show sign-in prompt
  if (!user) {
    return (
      <div className={styles.screen}>
        <div className={styles.header}>
          {onBack && (
            <button className={styles.backBtn} onClick={onBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <p className={styles.userName} style={{ flex: 1 }}>Profile</p>
        </div>
        <div className={styles.body} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', gap: 16, padding: '80px 32px', textAlign: 'center' }}>
          <p style={{ fontSize: 48 }}>👤</p>
          <p className={styles.userName}>Not signed in</p>
          <p className={styles.userEmail}>Sign in to save your style, track quiz history, and pin aesthetics.</p>
          <button
            className={styles.retakeBtn}
            onClick={() => dispatch({ type: 'GO_TO_AUTH' })}
          >
            Sign in / Create account
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.screen}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => dispatch({ type: 'GO_TO_WELCOME' })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className={styles.headerInfo}>
          <div className={styles.avatar}>{(user?.displayName ?? user?.email ?? '?')[0].toUpperCase()}</div>
          <div>
            <p className={styles.userName}>{user?.displayName ?? 'User'}</p>
            <p className={styles.userEmail}>{user?.email}</p>
          </div>
        </div>
        <button className={styles.logoutBtn} onClick={handleLogout}>Sign out</button>
      </div>

      <div className={styles.body}>
        {/* Overall top aesthetics */}
        {topOverall.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Your top aesthetics</h3>
            <div className={styles.aestheticList}>
              {topOverall.map(([id], i) => {
                const s = STYLES[id]
                if (!s) return null
                return (
                  <a
                    key={id}
                    href={s.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.aestheticChip}
                    style={{ background: s.gradient }}
                  >
                    <span className={styles.aestheticRank}>#{i + 1}</span>
                    <span>{s.icon} {s.name}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )}

        {/* Quiz history */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Quiz history
            <span className={styles.quizCount}>{quizzes.length} {quizzes.length === 1 ? 'quiz' : 'quizzes'}</span>
          </h3>

          {loading && <p className={styles.empty}>Loading…</p>}
          {!loading && quizzes.length === 0 && (
            <p className={styles.empty}>No quizzes yet — take one to see your results here.</p>
          )}

          <div className={styles.quizList}>
            {quizzes.map((quiz) => {
              const top = Object.entries(quiz.styleScores ?? {})
                .sort(([, a], [, b]) => b - a)
                .filter(([, s]) => s > 0)
                .slice(0, 3)
              const primary = top[0]
              const primaryStyle = primary ? STYLES[primary[0]] : null
              const isOpen = expanded === quiz.id

              return (
                <div key={quiz.id} className={styles.quizCard}>
                  <button
                    className={styles.quizCardHeader}
                    onClick={() => setExpanded(isOpen ? null : quiz.id)}
                  >
                    <div className={styles.quizCardLeft}>
                      {primaryStyle && (
                        <div
                          className={styles.quizSwatch}
                          style={{ background: primaryStyle.gradient }}
                        />
                      )}
                      <div>
                        <p className={styles.quizPrimary}>
                          {primaryStyle?.name ?? 'Unknown'}
                        </p>
                        <p className={styles.quizMeta}>
                          {timeAgo(quiz.timestamp)} · {quiz.likedItems?.length ?? 0} liked
                        </p>
                      </div>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className={styles.quizCardBody}>
                      <div className={styles.quizTopStyles}>
                        {top.map(([id, score], i) => {
                          const s = STYLES[id]
                          if (!s) return null
                          const maxScore = top[0][1]
                          const pct = Math.round((score / maxScore) * 100)
                          return (
                            <div key={id} className={styles.quizStyleRow}>
                              <span className={styles.quizStyleName}>
                                {s.icon} {s.name}
                              </span>
                              <div className={styles.quizBarTrack}>
                                <div
                                  className={styles.quizBarFill}
                                  style={{ width: `${pct}%`, background: s.gradient }}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {quiz.likedItems?.length > 0 && (
                        <div className={styles.likedItems}>
                          <p className={styles.likedLabel}>Liked items</p>
                          <div className={styles.likedChips}>
                            {quiz.likedItems.map((item) => (
                              <span key={item.id} className={styles.likedChip}>
                                {item.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {primaryStyle && (
                        <a
                          href={primaryStyle.pinterest}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.exploreBtn}
                          style={{ background: primaryStyle.gradient }}
                        >
                          Explore {primaryStyle.name} on Pinterest →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <button className={styles.retakeBtn} onClick={() => dispatch({ type: 'GO_TO_SEASONS' })}>
          Take quiz again
        </button>
      </div>
    </div>
  )
}
