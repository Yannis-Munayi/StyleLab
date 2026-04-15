import { useEffect, useMemo, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import { fetchPhotos } from '../services/pexels'
import { CLOTHING_ITEMS, CATEGORIES } from '../data/categories'
import styles from './WardrobeScreen.module.css'

// Flat lookup of every item by id
const ITEM_LOOKUP = (() => {
  const map = {}
  for (const [catId, items] of Object.entries(CLOTHING_ITEMS)) {
    for (const item of items) map[item.id] = { ...item, categoryId: catId }
  }
  return map
})()

function WardrobeItem({ item }) {
  const [photo, setPhoto]     = useState(null)
  const [loaded, setLoaded]   = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchPhotos(`${item.name} men fashion outfit`, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [item.id])

  return (
    <div className={styles.item}>
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

export default function WardrobeScreen() {
  const { user }           = useAuth()
  const { state }          = useApp()
  const { itemQueue, responses } = state

  const [pastItems, setPastItems] = useState([])
  const [loadingPast, setLoadingPast] = useState(false)

  // Load liked items from past quiz sessions if signed in
  useEffect(() => {
    if (!user) return
    setLoadingPast(true)
    const q = query(collection(db, 'users', user.uid, 'quizzes'), orderBy('timestamp', 'desc'))
    getDocs(q).then((snap) => {
      const seen = new Set()
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

  // Current session liked items
  const sessionItems = useMemo(() =>
    itemQueue.filter((item) => responses[item.id]?.liked),
    [itemQueue, responses]
  )

  // Merge: session items take precedence (they're more recent), then past
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
    // Return in CATEGORIES order
    return CATEGORIES
      .filter((cat) => map[cat.id])
      .map((cat) => ({ cat, items: map[cat.id] }))
  }, [allLiked])

  const totalCount = allLiked.length

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Wardrobe</h1>
        {totalCount > 0 && (
          <p className={styles.sub}>{totalCount} piece{totalCount !== 1 ? 's' : ''} saved</p>
        )}
      </div>

      {totalCount === 0 && !loadingPast && (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🪣</span>
          <p className={styles.emptyTitle}>Nothing saved yet</p>
          <p className={styles.emptySub}>
            Like items during the quiz and they'll appear here, grouped by category.
          </p>
        </div>
      )}

      {loadingPast && totalCount === 0 && (
        <div className={styles.empty}>
          <p className={styles.emptySub}>Loading your wardrobe…</p>
        </div>
      )}

      <div className={styles.sections}>
        {grouped.map(({ cat, items }) => (
          <section key={cat.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>{cat.emoji}</span>
              <h2 className={styles.sectionTitle}>{cat.label}</h2>
              <span className={styles.sectionCount}>{items.length}</span>
            </div>
            <div className={styles.grid}>
              {items.map((item) => (
                <WardrobeItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
