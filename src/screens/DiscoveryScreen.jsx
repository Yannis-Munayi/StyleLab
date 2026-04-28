import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useDiscoveryQueue } from '../hooks/useDiscoveryQueue'
import ProductCard from '../components/ProductCard'
import styles from './DiscoveryScreen.module.css'

const SEASONS = [
  { id: 'spring', label: 'Spring', emoji: '🌸' },
  { id: 'summer', label: 'Summer', emoji: '☀️' },
  { id: 'fall',   label: 'Fall',   emoji: '🍂' },
  { id: 'winter', label: 'Winter', emoji: '❄️' },
]

export default function DiscoveryScreen() {
  const { state } = useApp()
  const gender    = state.gender ?? 'both'

  const { currentProduct, remaining, onLike, onSkip, onPrev } = useDiscoveryQueue(gender)

  const [showFilter,     setShowFilter]     = useState(false)
  const [filterSeasons,  setFilterSeasons]  = useState([])
  const [activeSeasons,  setActiveSeasons]  = useState([])
  const [likedCount,     setLikedCount]     = useState(0)
  const [swipedCount,    setSwipedCount]    = useState(0)

  function handleLike(product) {
    // Filter by active seasons if a filter is set
    if (activeSeasons.length > 0 && !product.seasons?.some((s) => activeSeasons.includes(s))) {
      onSkip(product)
      return
    }
    onLike(product)
    setLikedCount((c) => c + 1)
    setSwipedCount((c) => c + 1)
  }

  function handleSkip(product) {
    onSkip(product)
    setSwipedCount((c) => c + 1)
  }

  function toggleSeason(id) {
    setFilterSeasons((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  function applyFilter() {
    setActiveSeasons(filterSeasons)
    setShowFilter(false)
  }

  function openFilter() {
    setFilterSeasons(activeSeasons)
    setShowFilter(true)
  }

  if (!currentProduct) {
    return (
      <div className={styles.loading}>
        <p>Loading more looks…</p>
      </div>
    )
  }

  const filterLabel = activeSeasons.length > 0
    ? activeSeasons.map((s) => SEASONS.find((x) => x.id === s)?.emoji ?? s).join(' ')
    : 'All seasons'

  return (
    <div className={styles.screen}>
      {/* Header */}
      <div className={styles.header}>
        <button
          className={styles.prevBtn}
          onClick={onPrev}
          aria-label="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className={styles.counterWrap}>
          <span className={styles.counter}>
            {swipedCount > 0 ? `${swipedCount} explored · ${likedCount} liked` : 'Swipe to explore'}
          </span>
        </div>

        <button className={styles.filterBtn} onClick={openFilter}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/>
            <line x1="11" y1="18" x2="13" y2="18"/>
          </svg>
          {filterLabel}
        </button>
      </div>

      {/* Card */}
      <div className={styles.cardArea}>
        <ProductCard
          key={currentProduct.id}
          product={currentProduct}
          onLike={handleLike}
          onSkip={handleSkip}
        />
      </div>

      {/* Filter bottom sheet */}
      {showFilter && (
        <>
          <div className={styles.backdrop} onClick={() => setShowFilter(false)} />
          <div className={styles.sheet}>
            <div className={styles.sheetHandle} />
            <h3 className={styles.sheetTitle}>Filter by season</h3>
            <p className={styles.sheetSub}>Leave all off to see everything</p>
            <div className={styles.chipRow}>
              {SEASONS.map((s) => (
                <button
                  key={s.id}
                  className={`${styles.chip} ${filterSeasons.includes(s.id) ? styles.chipActive : ''}`}
                  onClick={() => toggleSeason(s.id)}
                >
                  {s.emoji} {s.label}
                </button>
              ))}
            </div>
            <button className={styles.applyBtn} onClick={applyFilter}>
              Apply →
            </button>
          </div>
        </>
      )}
    </div>
  )
}
