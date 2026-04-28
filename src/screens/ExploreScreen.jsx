import { useEffect, useRef, useState } from 'react'
import { STYLES, getStyleName } from '../data/styles'
import { useExplore } from '../context/ExploreContext'
import { useApp } from '../context/AppContext'
import { fetchPhotosWithFallback } from '../services/pexels'
import AestheticScreen from './AestheticScreen'
import AuthWidget from '../components/AuthWidget'
import styles from './ExploreScreen.module.css'

const ALL_AESTHETICS = Object.values(STYLES)

// Simple category groupings for the grid header sections
const GROUPS = [
  {
    label: 'Core',
    ids: ['oldmoney', 'minimalist', 'streetwear', 'preppy', 'vintage', 'techwear', 'gorpcore', 'athleisure', 'normcore'],
  },
  {
    label: 'Academic & Refined',
    ids: ['darkacademia', 'lightacademia', 'businesscasual', 'eurochic', 'royalcore'],
  },
  {
    label: 'Subculture',
    ids: ['grunge', 'punk', 'goth', 'emo', 'scene', 'indie', 'skater', 'softboy', 'eboy', 'hiphop', 'rockstar'],
  },
  {
    label: 'Creative & Expressive',
    ids: ['maximalist', 'arthoe', 'kpop', 'harajuku', 'y2k', 'baddie', 'fairycore', 'cottagecore', 'boho', 'romantic', 'edgy'],
  },
  {
    label: 'Heritage & Outdoors',
    ids: ['workwear', 'military', 'western', 'outdoor', 'cyberpunk', 'steampunk'],
  },
  {
    label: 'Material & Texture',
    ids: ['silksatin', 'denimcore', 'leatheraesthetic', 'knitwearaesthetic', 'linencore', 'cleangirl', 'scandi', 'coastalgrandma'],
  },
]

function AestheticCard({ style, onOpen, pinned, gender }) {
  const [photos, setPhotos]       = useState([])
  const [imgIdx, setImgIdx]       = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)
  const cardRef    = useRef(null)
  const fetchedRef = useRef(false)

  // Lazy-load: fetch 4 photos only when card enters the viewport
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fetchedRef.current) {
          fetchedRef.current = true
          const name = style.name
          if (gender === 'both') {
            const outfitQ = style.outfitQuery
            Promise.all([
              fetchPhotosWithFallback([
                ...(outfitQ ? [outfitQ] : []),
                `${name} men outfit aesthetic`,
                `${name} men fashion`,
                `${name} men outfit`,
                `${name} fashion`,
              ], 2),
              fetchPhotosWithFallback([
                ...(outfitQ ? [outfitQ] : []),
                `${name} women outfit aesthetic`,
                `${name} women fashion`,
                `${name} women outfit`,
                `${name} outfit`,
              ], 2),
            ]).then(([men, women]) => {
              const interleaved = []
              const len = Math.max(men.length, women.length)
              for (let i = 0; i < len; i++) {
                if (men[i])   interleaved.push(men[i])
                if (women[i]) interleaved.push(women[i])
              }
              setPhotos(interleaved)
              setImgLoaded(false)
            })
          } else {
            const hint = gender === 'women' ? 'women' : 'men'
            const displayName = getStyleName(style, gender)
            fetchPhotosWithFallback([
              ...(style.outfitQuery ? [style.outfitQuery] : []),
              `${displayName} ${hint} outfit aesthetic`,
              `${displayName} ${hint} fashion`,
              `${displayName} ${hint} outfit`,
              `${name} ${hint} fashion`,
              `${name} aesthetic`,
            ], 4).then((urls) => {
              setPhotos(urls ?? [])
              setImgLoaded(false)
            })
          }
          obs.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [style.id, style.name, gender])

  function prev(e) {
    e.stopPropagation()
    setImgLoaded(false)
    setImgIdx((i) => (i - 1 + photos.length) % photos.length)
  }

  function next(e) {
    e.stopPropagation()
    setImgLoaded(false)
    setImgIdx((i) => (i + 1) % photos.length)
  }

  const photo = photos[imgIdx] ?? null

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${pinned ? styles.cardPinned : ''}`}
    >
      {/* Background: photo or gradient fallback */}
      <div className={styles.cardBg} style={{ background: style.gradient }}>
        {photo && (
          <img
            key={photo}
            src={photo}
            alt={style.name}
            className={styles.cardImg}
            style={{ opacity: imgLoaded ? 1 : 0 }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(true)}
          />
        )}
      </div>

      {/* Clickable overlay opens the aesthetic (covers whole card except nav buttons) */}
      <div className={styles.cardOverlay} onClick={() => onOpen(style.id)} />

      {/* Prev / Next arrows */}
      {photos.length > 1 && (
        <>
          <button className={`${styles.cardNav} ${styles.cardNavPrev}`} onClick={prev} aria-label="Previous">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className={`${styles.cardNav} ${styles.cardNavNext}`} onClick={next} aria-label="Next">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          {/* Dot indicators */}
          <div className={styles.cardDots}>
            {photos.map((_, i) => (
              <span key={i} className={`${styles.dot} ${i === imgIdx ? styles.dotActive : ''}`} />
            ))}
          </div>
        </>
      )}

      {/* Name + pin — also opens the aesthetic on click */}
      <div className={styles.cardFooter} onClick={() => onOpen(style.id)}>
        <span className={styles.cardName}>{getStyleName(style, gender)}</span>
        {pinned && <span className={styles.pinBadge}>📌</span>}
      </div>
    </div>
  )
}

export default function ExploreScreen({ setActiveTab }) {
  const { savedAesthetics, openAesthetic, openAestheticTab, isSaved } = useExplore()
  const { state } = useApp()
  const gender = state.gender
  const [search, setSearch] = useState('')

  const query = search.toLowerCase().trim()

  // Filtered aesthetics for search
  const filtered = query
    ? ALL_AESTHETICS.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.tagline?.toLowerCase().includes(query) ||
          s.icons?.some((i) => i.toLowerCase().includes(query))
      )
    : null

  function handleOpen(id) {
    openAestheticTab(id)
  }

  // Show aesthetic detail if one is open
  if (openAesthetic) {
    return (
      <AestheticScreen
        aestheticId={openAesthetic}
        setActiveTab={setActiveTab}
      />
    )
  }

  return (
    <div className={styles.screen}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>Explore</h1>
            <p className={styles.sub}>{ALL_AESTHETICS.length} aesthetics</p>
          </div>
          <AuthWidget />
        </div>
        <div className={styles.searchWrap}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className={styles.search}
            placeholder="Search aesthetics…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className={styles.searchClear} onClick={() => setSearch('')}>×</button>
          )}
        </div>
      </div>

      <div className={styles.body}>
        {/* Search results */}
        {filtered && (
          <div>
            {filtered.length === 0 ? (
              <p className={styles.noResults}>No aesthetics match "{search}"</p>
            ) : (
              <div className={styles.grid}>
                {filtered.map((s) => (
                  <AestheticCard
                    key={`${s.id}-${gender}`}
                    style={s}
                    onOpen={handleOpen}
                    pinned={isSaved(s.id)}
                    gender={gender}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Pinned aesthetics section */}
        {!filtered && savedAesthetics.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>📌 Saved</h2>
            <div className={styles.grid}>
              {savedAesthetics.map((id) => {
                const s = STYLES[id]
                if (!s) return null
                return (
                  <AestheticCard key={`${id}-${gender}`} style={s} onOpen={handleOpen} pinned gender={gender} />
                )
              })}
            </div>
          </section>
        )}

        {/* Grouped aesthetics */}
        {!filtered &&
          GROUPS.map((group) => {
            const groupStyles = group.ids
              .map((id) => STYLES[id])
              .filter(Boolean)
              .filter((s) => !savedAesthetics.includes(s.id)) // hide already pinned
            if (groupStyles.length === 0) return null
            return (
              <section key={group.label} className={styles.section}>
                <h2 className={styles.sectionLabel}>{group.label}</h2>
                <div className={styles.grid}>
                  {groupStyles.map((s) => (
                    <AestheticCard key={`${s.id}-${gender}`} style={s} onOpen={handleOpen} pinned={false} gender={gender} />
                  ))}
                </div>
              </section>
            )
          })}
      </div>
    </div>
  )
}
