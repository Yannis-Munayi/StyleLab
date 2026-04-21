import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth } from './AuthContext'

const WishlistContext = createContext(null)

function usePersistedList(user, docId) {
  const [list, setList]         = useState([])
  const [loadReady, setReady]   = useState(false)
  const loadedUid               = useRef(null)

  useEffect(() => {
    if (!user) { setList([]); setReady(false); loadedUid.current = null; return }
    if (loadedUid.current === user.uid) return
    loadedUid.current = user.uid
    setReady(false)
    getDoc(doc(db, 'users', user.uid, 'prefs', docId))
      .then((snap) => setList(snap.exists() ? (snap.data().items ?? []) : []))
      .catch(() => {})
      .finally(() => setReady(true))
  }, [user, docId])

  useEffect(() => {
    if (!user || !loadReady || loadedUid.current !== user.uid) return
    setDoc(doc(db, 'users', user.uid, 'prefs', docId), { items: list }, { merge: true }).catch(() => {})
  }, [list, user, loadReady, docId])

  return [list, setList]
}

export function WishlistProvider({ children }) {
  const { user } = useAuth()
  const [wishlist, setWishlist] = usePersistedList(user, 'wishlist')
  const [liked,    setLiked]    = usePersistedList(user, 'liked')

  const addToWishlist = useCallback((entry) => {
    setWishlist((prev) => prev.some((e) => e.id === entry.id) ? prev : [{ ...entry, addedAt: Date.now() }, ...prev])
  }, [setWishlist])

  const removeFromWishlist = useCallback((id) => {
    setWishlist((prev) => prev.filter((e) => e.id !== id))
  }, [setWishlist])

  const isWishlisted = useCallback((id) => wishlist.some((e) => e.id === id), [wishlist])

  const addToLiked = useCallback((entry) => {
    setLiked((prev) => prev.some((e) => e.id === entry.id) ? prev : [{ ...entry, addedAt: Date.now() }, ...prev])
  }, [setLiked])

  const removeFromLiked = useCallback((id) => {
    setLiked((prev) => prev.filter((e) => e.id !== id))
  }, [setLiked])

  const isLiked = useCallback((id) => liked.some((e) => e.id === id), [liked])

  return (
    <WishlistContext.Provider value={{
      wishlist, addToWishlist, removeFromWishlist, isWishlisted,
      liked,    addToLiked,    removeFromLiked,    isLiked,
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
