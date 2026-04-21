import { useApp } from '../context/AppContext'
import { getPinterestUrl } from '../data/styles'
import styles from './ItemActionSheet.module.css'

export default function ItemActionSheet({ item, onPinterest, onShop, onClose }) {
  const { state } = useApp()
  const pinterestUrl = getPinterestUrl(null, state.gender, item.name)

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        {/* Item preview */}
        <div className={styles.itemPreview} style={{ background: item.gradient }}>
          <span className={styles.itemEmoji}>{item.emoji}</span>
        </div>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemDesc}>{item.description}</p>

        <div className={styles.actions}>
          <a
            href={pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
            onClick={onClose}
          >
            <span className={styles.actionIcon}>📌</span>
            <span className={styles.actionText}>View on Pinterest</span>
            <span className={styles.actionArrow}>↗</span>
          </a>

          <button className={`${styles.actionBtn} ${styles.shopBtn}`} onClick={onShop}>
            <span className={styles.actionIcon}>🛍️</span>
            <span className={styles.actionText}>Shop this item</span>
            <span className={styles.actionArrow}>→</span>
          </button>
        </div>

        <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}
