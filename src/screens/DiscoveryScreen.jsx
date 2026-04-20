import { useApp } from '../context/AppContext'
import ClothingCard from '../components/ClothingCard'
import { CATEGORIES } from '../data/categories'
import styles from './screens.module.css'

export default function DiscoveryScreen() {
  const { state, dispatch } = useApp()
  const { itemQueue, currentItemIndex, responses } = state

  const item = itemQueue[currentItemIndex]
  const progress = (currentItemIndex + 1) / itemQueue.length
  const categoryLabel = item
    ? CATEGORIES.find((c) => c.id === item.categoryId)?.label ?? ''
    : ''

  if (!item) {
    return (
      <div className={styles.screen} style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>All done!</p>
      </div>
    )
  }

  return (
    <div className={styles.screen}>
      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress * 100}%` }} />
      </div>

      <div className={styles.discoveryMeta}>
        <button
          className={styles.discoveryBackBtn}
          onClick={() => dispatch({ type: 'PREV_ITEM' })}
          aria-label="Previous item"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <span className={styles.metaCategory}>{categoryLabel}</span>
        <span className={styles.metaCount}>
          {currentItemIndex + 1} / {itemQueue.length}
        </span>
      </div>

      <div className={styles.cardWrapper}>
        <ClothingCard key={item.id} item={item} />
      </div>
    </div>
  )
}
