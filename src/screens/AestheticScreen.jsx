import { useEffect, useMemo, useState } from 'react'
import { STYLES } from '../data/styles'
import { CLOTHING_ITEMS } from '../data/categories'
import { getLooks, getLookPieces } from '../data/looks'
import { getGuideForAesthetic } from '../data/itemGuide'
import { fetchPhotos } from '../services/pexels'
import { useExplore } from '../context/ExploreContext'
import styles from './AestheticScreen.module.css'

// ── Helpers ─────────────────────────────────────────────────────────────────

const ITEM_LOOKUP = (() => {
  const map = {}
  for (const [catId, items] of Object.entries(CLOTHING_ITEMS)) {
    for (const item of items) map[item.id] = { ...item, categoryId: catId }
  }
  return map
})()

const SEASONS = ['spring', 'summer', 'fall', 'winter']

// ── Items sub-tab ────────────────────────────────────────────────────────────

function ItemCard({ item }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchPhotos(`${item.name} men fashion outfit`, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [item.id])

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemPhoto} style={{ background: item.gradient }}>
        {photo && (
          <img
            src={photo}
            alt={item.name}
            className={styles.itemImg}
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        )}
        <span className={styles.itemEmoji}>{item.emoji}</span>
      </div>
      <p className={styles.itemName}>{item.name}</p>
    </div>
  )
}

function ItemsTab({ aestheticId }) {
  const allItems = useMemo(() => {
    const result = []
    for (const [catId, items] of Object.entries(CLOTHING_ITEMS)) {
      for (const item of items) {
        const weight = item.styleWeights?.[aestheticId] ?? 0
        if (weight >= 1) result.push({ ...item, categoryId: catId, weight })
      }
    }
    return result.sort((a, b) => b.weight - a.weight)
  }, [aestheticId])

  if (allItems.length === 0) {
    return <p className={styles.emptyText}>No items tagged for this aesthetic yet.</p>
  }

  return (
    <div className={styles.itemsGrid}>
      {allItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

// ── Looks sub-tab ────────────────────────────────────────────────────────────

function LookCard({ look }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen]     = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchPhotos(look.pexelsQuery, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [look.id])

  const pieces = look.pieces
    .map((id) => ITEM_LOOKUP[id])
    .filter(Boolean)

  return (
    <div className={styles.lookCard}>
      <button className={styles.lookHeader} onClick={() => setOpen(!open)}>
        <div className={styles.lookThumb} style={{ background: 'rgba(255,255,255,0.06)' }}>
          {photo && (
            <img
              src={photo}
              alt={look.name}
              className={styles.lookImg}
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
            />
          )}
        </div>
        <div className={styles.lookInfo}>
          <p className={styles.lookName}>{look.name}</p>
          <p className={styles.lookVibe}>{look.vibe}</p>
          <div className={styles.lookSeasons}>
            {look.seasons.map((s) => (
              <span key={s} className={styles.seasonChip}>{s}</span>
            ))}
          </div>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className={styles.lookBody}>
          <p className={styles.piecesLabel}>Pieces in this look</p>
          <div className={styles.piecesList}>
            {pieces.map((item) => (
              <span key={item.id} className={styles.pieceChip}>
                {item.emoji} {item.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function LooksTab({ aestheticId }) {
  const [activeSeason, setActiveSeason] = useState(null)
  const [requiredPieces, setRequiredPieces] = useState([])

  const allPieces = useMemo(() => getLookPieces(aestheticId), [aestheticId])
  const filtered  = useMemo(
    () => getLooks(aestheticId, { season: activeSeason, requiredPieces }),
    [aestheticId, activeSeason, requiredPieces]
  )

  function togglePiece(id) {
    setRequiredPieces((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const hasLooks = getLooks(aestheticId).length > 0

  if (!hasLooks) {
    return (
      <div className={styles.emptyLooks}>
        <p className={styles.emptyText}>
          Curated looks for this aesthetic are coming soon. Try browsing the Items tab.
        </p>
        <a
          href={`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(
            (STYLES[aestheticId]?.name ?? '') + ' men outfit'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pinterestLink}
        >
          📌 Browse on Pinterest →
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Season filter */}
      <div className={styles.filterRow}>
        <button
          className={`${styles.filterPill} ${!activeSeason ? styles.filterActive : ''}`}
          onClick={() => setActiveSeason(null)}
        >
          All seasons
        </button>
        {SEASONS.map((s) => (
          <button
            key={s}
            className={`${styles.filterPill} ${activeSeason === s ? styles.filterActive : ''}`}
            onClick={() => setActiveSeason(activeSeason === s ? null : s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Piece filter */}
      {allPieces.length > 0 && (
        <div className={styles.pieceFilter}>
          <p className={styles.pieceFilterLabel}>Include piece</p>
          <div className={styles.filterRow}>
            {allPieces.map((id) => {
              const item = ITEM_LOOKUP[id]
              if (!item) return null
              return (
                <button
                  key={id}
                  className={`${styles.filterPill} ${requiredPieces.includes(id) ? styles.filterActive : ''}`}
                  onClick={() => togglePiece(id)}
                >
                  {item.emoji} {item.name}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Look cards */}
      {filtered.length === 0 ? (
        <p className={styles.emptyText}>No looks match the current filters.</p>
      ) : (
        <div className={styles.looksList}>
          {filtered.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Guide sub-tab ────────────────────────────────────────────────────────────

function GuideTab({ aestheticId }) {
  const [expanded, setExpanded] = useState(null)
  const categories = useMemo(() => getGuideForAesthetic(aestheticId), [aestheticId])

  if (categories.length === 0) {
    return <p className={styles.emptyText}>No guide content for this aesthetic yet.</p>
  }

  return (
    <div className={styles.guideList}>
      {categories.map((cat) => (
        <section key={cat.id} className={styles.guideSection}>
          <div className={styles.guideSectionHeader}>
            <span className={styles.guideSectionEmoji}>{cat.emoji}</span>
            <div>
              <p className={styles.guideSectionTitle}>{cat.label}</p>
              <p className={styles.guideSectionIntro}>{cat.intro}</p>
            </div>
          </div>

          {cat.types.map((type) => {
            const typeId = `${cat.id}-${type.name}`
            const isOpen = expanded === typeId
            return (
              <button
                key={typeId}
                className={styles.guideItem}
                onClick={() => setExpanded(isOpen ? null : typeId)}
              >
                <div className={styles.guideItemTop}>
                  <span className={styles.guideItemName}>{type.name}</span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                {isOpen && (
                  <div className={styles.guideItemBody}>
                    <p className={styles.guideItemDesc}>{type.description}</p>
                    {type.iconic && (
                      <p className={styles.guideItemIconic}>
                        <span className={styles.guideIconicLabel}>Iconic examples: </span>
                        {type.iconic}
                      </p>
                    )}
                  </div>
                )}
              </button>
            )
          })}
        </section>
      ))}
    </div>
  )
}

// ── Main AestheticScreen ─────────────────────────────────────────────────────

const TABS = [
  { id: 'items', label: 'Items' },
  { id: 'looks', label: 'Looks' },
  { id: 'guide', label: 'Guide' },
]

export default function AestheticScreen({ aestheticId, setActiveTab }) {
  const { closeAestheticTab, saveAesthetic, unsaveAesthetic, isSaved } = useExplore()
  const [subTab, setSubTab] = useState('items')

  const style    = STYLES[aestheticId]
  const saved    = isSaved(aestheticId)

  if (!style) return null

  function handleBack() {
    closeAestheticTab()
    setActiveTab('explore')
  }

  function handleSaveToggle() {
    if (saved) {
      unsaveAesthetic(aestheticId)
    } else {
      saveAesthetic(aestheticId)
    }
  }

  return (
    <div className={styles.screen}>
      {/* ── Hero header ── */}
      <div className={styles.hero} style={{ background: style.gradient }}>
        <div className={styles.heroOverlay} />

        <button className={styles.backBtn} onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ''}`}
          onClick={handleSaveToggle}
          title={saved ? 'Unpin this tab' : 'Pin this tab'}
        >
          {saved ? '📌 Saved' : '+ Save tab'}
        </button>

        <div className={styles.heroContent}>
          <span className={styles.heroIcon}>{style.icon}</span>
          <h1 className={styles.heroName}>{style.name}</h1>
          <p className={styles.heroTagline}>{style.tagline}</p>
          {style.description && (
            <p className={styles.heroDesc}>{style.description}</p>
          )}
        </div>

        {/* Pinterest link */}
        <a
          href={style.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pinterestBtn}
        >
          📌 Pinterest
        </a>
      </div>

      {/* ── Sub-tab bar ── */}
      <div className={styles.subTabBar}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.subTab} ${subTab === tab.id ? styles.subTabActive : ''}`}
            onClick={() => setSubTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className={styles.subTabIndicator}
          style={{ left: `${TABS.findIndex((t) => t.id === subTab) * (100 / TABS.length)}%` }}
        />
      </div>

      {/* ── Tab content ── */}
      <div className={styles.tabContent}>
        {subTab === 'items' && <ItemsTab aestheticId={aestheticId} />}
        {subTab === 'looks' && <LooksTab aestheticId={aestheticId} />}
        {subTab === 'guide' && <GuideTab aestheticId={aestheticId} />}
      </div>
    </div>
  )
}
