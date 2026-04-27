import { useEffect, useMemo, useState } from 'react'
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import { fetchPhotos } from '../services/pexels'
import { CLOTHING_ITEMS, CATEGORIES } from '../data/categories'
import ItemActionSheet from '../components/ItemActionSheet'
import ShopPanel from '../components/ShopPanel'
import AuthWidget from '../components/AuthWidget'
import WardrobeUpload from '../components/WardrobeUpload'
import styles from './WardrobeScreen.module.css'

// Flat lookup of every item by id
const ITEM_LOOKUP = (() => {
  const map = {}
  for (const [catId, items] of Object.entries(CLOTHING_ITEMS)) {
    for (const item of items) map[item.id] = { ...item, categoryId: catId }
  }
  return map
})()

function WardrobeItem({ item, onSelect }) {
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
    <button className={styles.item} onClick={() => onSelect(item)}>
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
        <div className={styles.itemOverlay}>
          <span className={styles.itemOverlayIcon}>⋯</span>
        </div>
      </div>
      <p className={styles.itemName}>{item.name}</p>
    </button>
  )
}

// Uploaded item card (uses the actual photo URL from Storage)
function UploadedItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemPhoto} style={{ background: 'rgba(255,255,255,0.05)' }}>
        {item.imageUrl && (
          <img src={item.imageUrl} alt={item.name} className={styles.itemImg} style={{ opacity: 1 }} />
        )}
        {!item.imageUrl && <span className={styles.itemEmoji}>📦</span>}
        {item.aiDetected && <span className={styles.aiBadge}>✦ AI</span>}
      </div>
      <p className={styles.itemName}>{item.name}</p>
    </div>
  )
}

export default function WardrobeScreen() {
  const { user }           = useAuth()
  const { state }          = useApp()
  const { itemQueue, responses } = state

  const [pastItems,      setPastItems]      = useState([])
  const [loadingPast,    setLoadingPast]    = useState(false)
  const [uploadedItems,  setUploadedItems]  = useState([])
  const [showUpload,     setShowUpload]     = useState(false)
  const [activeItem,     setActiveItem]     = useState(null)
  const [shopItem,       setShopItem]       = useState(null)

  // Load liked items from past quiz sessions if signed in
  useEffect(() => {
    if (!user) return
    setLoadingPast(true)
    const q = query(collection(db, 'users', user.uid, 'quizzes'), orderBy('timestamp', 'desc'))
    getDocs(q).then((snap) => {
      const seen  = new Set()
      const items = []
      for (const doc of snap.docs) {
        for (const li of doc.data().likedItems ?? []) {
          if (!seen.has(li.id) && ITEM_LOOKUP[li.id]) {
            seen.add(li.id)
            items.push(ITEM_LOOKUP[li.id])
          }
        }
      }
      setPastItems(items)
    }).catch(() => {}).finally(() => setLoadingPast(false))
  }, [user])

  // Load uploaded items from Firestore
  useEffect(() => {
    if (!user) return
    const q = query(collection(db, 'users', user.uid, 'uploadedItems'), orderBy('uploadedAt', 'desc'))
    getDocs(q).then((snap) => {
      setUploadedItems(snap.docs.map((d) => ({ ...d.data(), firestoreId: d.id })))
    }).catch(() => {})
  }, [user])

  async function handleSaveUpload(item) {
    if (!user) return
    await addDoc(collection(db, 'users', user.uid, 'uploadedItems'), {
      ...item,
      uploadedAt: serverTimestamp(),
    })
    setUploadedItems((prev) => [item, ...prev])
  }

  // Current session liked items
  const sessionItems = useMemo(() =>
    itemQueue.filter((item) => responses[item.id]?.liked),
    [itemQueue, responses]
  )

  // Merge: session items take precedence, then past
  const allLiked = useMemo(() => {
    const sessionIds = new Set(sessionItems.map((i) => i.id))
    const past = pastItems.filter((i) => !sessionIds.has(i.id))
    return [...sessionItems, ...past]
  }, [sessionItems, pastItems])

  // Group by category, preserving CATEGORIES order
  const grouped = useMemo(() => {
    const map = {}
    for (const item of allLiked) {
      const catId = item.categoryId
      if (!map[catId]) map[catId] = []
      map[catId].push(item)
    }
    return CATEGORIES
      .filter((cat) => map[cat.id])
      .map((cat) => ({ cat, items: map[cat.id] }))
  }, [allLiked])

  const totalCount = allLiked.length

  function handleSelectItem(item) {
    setActiveItem(item)
  }

  function handleOpenShop() {
    setShopItem(activeItem)
    setActiveItem(null)
  }

  // Group uploaded items by category
  const uploadedGrouped = useMemo(() => {
    const map = {}
    for (const item of uploadedItems) {
      if (!map[item.category]) map[item.category] = []
      map[item.category].push(item)
    }
    return Object.entries(map).map(([catId, items]) => {
      const cat = CATEGORIES.find((c) => c.id === catId) ?? { id: catId, label: catId, emoji: '👕' }
      return { cat, items }
    })
  }, [uploadedItems])

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>My Wardrobe</h1>
            {(totalCount + uploadedItems.length) > 0 && (
              <p className={styles.sub}>{totalCount + uploadedItems.length} piece{(totalCount + uploadedItems.length) !== 1 ? 's' : ''} saved</p>
            )}
          </div>
          <div className={styles.headerRight}>
            {user && (
              <button className={styles.uploadBtn} onClick={() => setShowUpload(true)}>
                + Upload
              </button>
            )}
            <AuthWidget />
          </div>
        </div>
      </div>

      {totalCount === 0 && uploadedItems.length === 0 && !loadingPast && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🪣</span>
          <p className={styles.emptyTitle}>Nothing saved yet</p>
          <p className={styles.emptySub}>
            Like items during the quiz, or tap "+ Upload" to add your own pieces.
          </p>
        </div>
      )}

      {loadingPast && totalCount === 0 && uploadedItems.length === 0 && (
        <div className={styles.empty}>
          <p className={styles.emptySub}>Loading your wardrobe…</p>
        </div>
      )}

      <div className={styles.sections}>
        {/* Uploaded pieces — shown first */}
        {uploadedGrouped.map(({ cat, items }) => (
          <section key={`uploaded_${cat.id}`} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>{cat.emoji}</span>
              <h2 className={styles.sectionTitle}>{cat.label}</h2>
              <span className={styles.sectionBadge}>Uploaded</span>
              <span className={styles.sectionCount}>{items.length}</span>
            </div>
            <div className={styles.grid}>
              {items.map((item) => (
                <UploadedItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* Quiz liked pieces */}
        {grouped.map(({ cat, items }) => (
          <section key={cat.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>{cat.emoji}</span>
              <h2 className={styles.sectionTitle}>{cat.label}</h2>
              <span className={styles.sectionCount}>{items.length}</span>
            </div>
            <div className={styles.grid}>
              {items.map((item) => (
                <WardrobeItem key={item.id} item={item} onSelect={handleSelectItem} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Item action sheet */}
      {activeItem && (
        <ItemActionSheet
          item={activeItem}
          onShop={handleOpenShop}
          onClose={() => setActiveItem(null)}
        />
      )}

      {/* Shop panel (full-screen slide) */}
      {shopItem && (
        <ShopPanel
          item={shopItem}
          onClose={() => setShopItem(null)}
        />
      )}

      {/* Upload sheet */}
      {showUpload && (
        <WardrobeUpload
          uid={user?.uid}
          onSave={handleSaveUpload}
          onClose={() => setShowUpload(false)}
        />
      )}
    </div>
  )
}
