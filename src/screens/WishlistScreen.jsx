import { useEffect, useState } from 'react'
import { fetchPhotosWithFallback } from '../services/pexels'
import { useWishlist } from '../context/WishlistContext'
import { useApp } from '../context/AppContext'
import ItemActionSheet from '../components/ItemActionSheet'
import ShopPanel from '../components/ShopPanel'
import AuthWidget from '../components/AuthWidget'

import styles from './WishlistScreen.module.css'

function ItemWishCard({ entry, onRemove, onSelect }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { state } = useApp()
  const gender = state.gender

  useEffect(() => {
    let cancelled = false
    const hint = gender === 'women' ? 'women' : gender === 'men' ? 'men' : ''
    const queries = [
      `${entry.name} ${hint} fashion outfit`.trim(),
      `${entry.name} ${hint} outfit`.trim(),
      `${entry.name} fashion`,
    ]
    fetchPhotosWithFallback(queries, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [entry.id, entry.name, gender])

  return (
    <div className={styles.itemCard}>
      <button className={styles.itemPhotoBtn} onClick={() => onSelect(entry)}>
        <div className={styles.itemPhoto} style={{ background: entry.gradient }}>
          {photo && (
            <img
              src={photo}
              alt={entry.name}
              className={styles.itemImg}
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
            />
          )}
          <div className={styles.itemOverlay}>
            <span className={styles.itemOverlayIcon}>⋯</span>
          </div>
        </div>
      </button>
      <button className={styles.removeBtn} onClick={() => onRemove(entry.id)} aria-label="Remove">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <p className={styles.itemName}>{entry.name}</p>
    </div>
  )
}

function PhotoWishCard({ entry, onRemove }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={styles.photoCard}>
      <div className={styles.photoWrap}>
        <img
          src={entry.photoUrl}
          alt={entry.label}
          className={styles.photoImg}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
        <button className={styles.removeBtn} onClick={() => onRemove(entry.id)} aria-label="Remove">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className={styles.photoLabel}>{entry.label}</p>
      <p className={styles.photoSub}>{entry.catLabel}</p>
    </div>
  )
}

export default function WishlistScreen() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const [activeItem, setActiveItem] = useState(null)
  const [shopItem,   setShopItem]   = useState(null)

  const itemEntries  = wishlist.filter((e) => e.type === 'item')
  const photoEntries = wishlist.filter((e) => e.type === 'photo')
  const total = wishlist.length

  function handleOpenShop() {
    setShopItem(activeItem)
    setActiveItem(null)
  }

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>Wishlist</h1>
            {total > 0 && (
              <p className={styles.sub}>{total} piece{total !== 1 ? 's' : ''} saved</p>
            )}
          </div>
          <AuthWidget />
        </div>
      </div>

      {total === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🤍</span>
          <p className={styles.emptyTitle}>Your wishlist is empty</p>
          <p className={styles.emptySub}>
            Save items from the Explore tab to build your wishlist.
          </p>
        </div>
      )}

      <div className={styles.body}>
        {itemEntries.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>🧥 Clothing Pieces</h2>
            <div className={styles.itemGrid}>
              {itemEntries.map((entry) => (
                <ItemWishCard
                  key={entry.id}
                  entry={entry}
                  onRemove={removeFromWishlist}
                  onSelect={setActiveItem}
                />
              ))}
            </div>
          </section>
        )}

        {photoEntries.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>📸 Outfit Photos</h2>
            <div className={styles.photoGrid}>
              {photoEntries.map((entry) => (
                <PhotoWishCard key={entry.id} entry={entry} onRemove={removeFromWishlist} />
              ))}
            </div>
          </section>
        )}
      </div>

      {activeItem && (
        <ItemActionSheet
          item={activeItem}
          onShop={handleOpenShop}
          onClose={() => setActiveItem(null)}
        />
      )}

      {shopItem && (
        <ShopPanel
          item={shopItem}
          onClose={() => setShopItem(null)}
        />
      )}
    </div>
  )
}
