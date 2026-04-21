import { useAuth } from '../context/AuthContext'
import { useShop } from '../context/ShopContext'
import { useWishlist } from '../context/WishlistContext'


import styles from './TabBar.module.css'

/* ── Icons ── */
function HomeIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

function ExploreIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function QuizIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function LikedIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      fill={active ? 'currentColor' : 'none'}
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

function WishlistIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      fill={active ? 'currentColor' : 'none'}
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  )
}

function ShopIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

function ProfileIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

/* ── TabBar ── */
export default function TabBar({ activeTab, setActiveTab }) {
  const { user }           = useAuth()
  const { shopList }       = useShop()
  const { wishlist, liked } = useWishlist()

  return (
    <nav className={styles.tabBar}>
      <div className={styles.tabScroll}>

        <button
          className={`${styles.tab} ${activeTab === 'home' ? styles.active : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <HomeIcon active={activeTab === 'home'} />
          <span>Home</span>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 'explore' ? styles.active : ''}`}
          onClick={() => setActiveTab('explore')}
        >
          <ExploreIcon active={activeTab === 'explore'} />
          <span>Explore</span>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 'quiz' ? styles.active : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <QuizIcon active={activeTab === 'quiz'} />
          <span>Discover</span>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 'wardrobe' ? styles.active : ''}`}
          onClick={() => setActiveTab('wardrobe')}
        >
          <div className={styles.shopIconWrap}>
            <LikedIcon active={activeTab === 'wardrobe'} />
            {liked.length > 0 && (
              <span className={styles.badge}>
                {liked.length > 9 ? '9+' : liked.length}
              </span>
            )}
          </div>
          <span>Liked</span>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 'wishlist' ? styles.active : ''}`}
          onClick={() => setActiveTab('wishlist')}
        >
          <div className={styles.shopIconWrap}>
            <WishlistIcon active={activeTab === 'wishlist'} />
            {wishlist.length > 0 && (
              <span className={styles.badge}>
                {wishlist.length > 9 ? '9+' : wishlist.length}
              </span>
            )}
          </div>
          <span>Wishlist</span>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 'shop' ? styles.active : ''}`}
          onClick={() => setActiveTab('shop')}
        >
          <div className={styles.shopIconWrap}>
            <ShopIcon active={activeTab === 'shop'} />
            {shopList.length > 0 && (
              <span className={styles.badge}>
                {shopList.length > 9 ? '9+' : shopList.length}
              </span>
            )}
          </div>
          <span>Shop</span>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 'profile' ? styles.active : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          {user ? (
            <div className={`${styles.avatar} ${activeTab === 'profile' ? styles.avatarActive : ''}`}>
              {(user.displayName ?? user.email ?? '?')[0].toUpperCase()}
            </div>
          ) : (
            <ProfileIcon active={activeTab === 'profile'} />
          )}
          <span>{user ? (user.displayName?.split(' ')[0] ?? 'Profile') : 'Profile'}</span>
        </button>

      </div>
    </nav>
  )
}
