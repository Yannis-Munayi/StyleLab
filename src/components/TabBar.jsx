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

function DiscoverIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.2}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function MyStyleIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}
      strokeLinecap="round" strokeLinejoin="round">
      {/* Hanger hook */}
      <circle cx="12" cy="5" r="1.5" />
      {/* Hanger body */}
      <path d="M12 6.5L3 16h18L12 6.5z" />
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
  const { user }            = useAuth()
  const { shopList }        = useShop()
  const { wishlist, liked } = useWishlist()

  const isMyStyle = activeTab === 'mystyle'
  const myStyleCount = liked.length + wishlist.length + shopList.length

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

        {/* ── Center Discover button ── */}
        <div className={styles.discoverWrap}>
          <button
            className={`${styles.discoverBtn} ${activeTab === 'quiz' ? styles.discoverActive : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <DiscoverIcon />
          </button>
          <span className={`${styles.discoverLabel} ${activeTab === 'quiz' ? styles.discoverLabelActive : ''}`}>
            Discover
          </span>
        </div>

        <button
          className={`${styles.tab} ${isMyStyle ? styles.active : ''}`}
          onClick={() => setActiveTab('mystyle')}
        >
          <div className={styles.iconWrap}>
            <MyStyleIcon active={isMyStyle} />
            {myStyleCount > 0 && (
              <span className={styles.badge}>
                {myStyleCount > 9 ? '9+' : myStyleCount}
              </span>
            )}
          </div>
          <span>My Style</span>
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
