import { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext'
import { fetchPhotos } from '../services/pexels'
import ShopPanel from '../components/ShopPanel'
import AuthWidget from '../components/AuthWidget'
import styles from './ShopScreen.module.css'

function ShopItemCard({ entry, onRemove, onReopen }) {
  const { item, filters, retailers, addedAt } = entry
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen]     = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchPhotos(`${item.name} men fashion outfit`, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [item.id])

  const filterSummary = [
    filters.colour,
    filters.material,
    filters.size,
    filters.fit,
    filters.priceRange,
  ].filter(Boolean).join(' · ')

  return (
    <div className={styles.card}>
      <button className={styles.cardHeader} onClick={() => setOpen(!open)}>
        <div
          className={styles.cardPhoto}
          style={{ background: item.gradient }}
        >
          {photo && (
            <img
              src={photo}
              alt={item.name}
              className={styles.cardImg}
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
            />
          )}
          <span className={styles.cardEmoji}>{item.emoji}</span>
        </div>

        <div className={styles.cardInfo}>
          <p className={styles.cardName}>{item.name}</p>
          {filterSummary ? (
            <p className={styles.cardFilters}>{filterSummary}</p>
          ) : (
            <p className={styles.cardFilters}>No filters applied</p>
          )}
          <p className={styles.cardCount}>{retailers.length} stores</p>
        </div>

        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          className={styles.chevron}
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className={styles.cardBody}>
          <div className={styles.storeList}>
            {retailers.map((r, i) => (
              <a
                key={r.id}
                href={r.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeRow}
              >
                <span className={styles.storeRank}>#{i + 1}</span>
                <span className={styles.storeName}>{r.emoji} {r.name}</span>
                <span className={styles.storeTagline}>{r.tagline}</span>
                <span className={styles.shopNow}>Shop →</span>
              </a>
            ))}
          </div>

          <div className={styles.cardActions}>
            <button className={styles.reopenBtn} onClick={() => onReopen(entry)}>
              Update filters
            </button>
            <button className={styles.removeBtn} onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ShopScreen() {
  const { shopList, removeFromShop } = useShop()
  const [reopenEntry, setReopenEntry] = useState(null)

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>My Shop List</h1>
            {shopList.length > 0 && (
              <p className={styles.sub}>
                {shopList.length} item{shopList.length !== 1 ? 's' : ''} saved
              </p>
            )}
          </div>
          <AuthWidget />
        </div>
      </div>

      {shopList.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🛍️</span>
          <p className={styles.emptyTitle}>Nothing here yet</p>
          <p className={styles.emptySub}>
            Tap any item in your Wardrobe, choose "Shop this item", and save the store
            list here.
          </p>
        </div>
      )}

      <div className={styles.list}>
        {shopList.map((entry) => (
          <ShopItemCard
            key={entry.item.id}
            entry={entry}
            onRemove={removeFromShop}
            onReopen={setReopenEntry}
          />
        ))}
      </div>

      {reopenEntry && (
        <ShopPanel
          item={reopenEntry.item}
          onClose={() => setReopenEntry(null)}
        />
      )}
    </div>
  )
}
