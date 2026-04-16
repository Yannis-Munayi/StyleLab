import { useState } from 'react'
import { STYLES } from '../data/styles'
import { useExplore } from '../context/ExploreContext'
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

function AestheticCard({ style, onOpen, pinned }) {
  return (
    <button
      className={`${styles.card} ${pinned ? styles.cardPinned : ''}`}
      style={{ background: style.gradient }}
      onClick={() => onOpen(style.id)}
    >
      <span className={styles.cardIcon}>{style.icon}</span>
      <span className={styles.cardName}>{style.name}</span>
      {pinned && <span className={styles.pinBadge}>📌</span>}
    </button>
  )
}

export default function ExploreScreen({ setActiveTab }) {
  const { savedAesthetics, openAesthetic, openAestheticTab, isSaved } = useExplore()
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
                    key={s.id}
                    style={s}
                    onOpen={handleOpen}
                    pinned={isSaved(s.id)}
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
                  <AestheticCard key={id} style={s} onOpen={handleOpen} pinned />
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
                    <AestheticCard key={s.id} style={s} onOpen={handleOpen} pinned={false} />
                  ))}
                </div>
              </section>
            )
          })}
      </div>
    </div>
  )
}
