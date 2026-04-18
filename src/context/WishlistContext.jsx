import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth } from './AuthContext'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const { user } = useAuth()
  const [wishlist, setWishlist]   = useState([])
  const [loadReady, setLoadReady] = useState(false)
  const loadedUid = useRef(null)

  useEffect(() => {
    if (!user) {
      setWishlist([])
      setLoadReady(false)
      loadedUid.current = null
      return
    }
    if (loadedUid.current === user.uid) return
    loadedUid.current = user.uid
    setLoadReady(false)
    getDoc(doc(db, 'users', user.uid, 'prefs', 'wishlist'))
      .then((snap) => setWishlist(snap.exists() ? (snap.data().items ?? []) : []))
      .catch(() => {})
      .finally(() => setLoadReady(true))
  }, [user])

  useEffect(() => {
    if (!user || !loadReady || loadedUid.current !== user.uid) return
    setDoc(doc(db, 'users', user.uid, 'prefs', 'wishlist'), { items: wishlist }, { merge: true }).catch(() => {})
  }, [wishlist, user, loadReady])

  const addToWishlist = useCallback((entry) => {
    setWishlist((prev) => {
      if (prev.some((e) => e.id === entry.id)) return prev
      return [{ ...entry, addedAt: Date.now() }, ...prev]
    })
  }, [])

  const removeFromWishlist = useCallback((id) => {
    setWishlist((prev) => prev.filter((e) => e.id !== id))
  }, [])

  const isWishlisted = useCallback(
    (id) => wishlist.some((e) => e.id === id),
    [wishlist]
  )

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
