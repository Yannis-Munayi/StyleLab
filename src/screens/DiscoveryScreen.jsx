import { useApp } from '../context/AppContext'
import ClothingCard from '../components/ClothingCard'
import { CATEGORIES } from '../data/categories'
import styles from './screens.module.css'

export default function DiscoveryScreen() {
  const { state, dispatch } = useApp()
  const { itemQueue, currentItemIndex } = state

  const item = itemQueue[currentItemIndex]
  const progress = currentItemIndex / itemQueue.length
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
        <span className={styles.metaCategory}>{categoryLabel}</span>
        <span className={styles.metaCount}>
          {currentItemIndex + 1} / {itemQueue.length}
        </span>
      </div>

      <div className={styles.cardWrapper}>
        {/* Animate card swap — key forces remount on item change */}
        <ClothingCard key={item.id} item={item} />
      </div>

      <p className={styles.discoverHint}>
        Tap the card to flip it — then tell us what you love about it.
      </p>

      <button
        className={styles.ghostBtn}
        onClick={() => dispatch({ type: 'SKIP_ITEM' })}
      >
        Skip →
      </button>
    </div>
  )
}
