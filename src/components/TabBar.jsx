import { useAuth } from '../context/AuthContext'
import { useShop } from '../context/ShopContext'
import { useExplore } from '../context/ExploreContext'
import { STYLES } from '../data/styles'
import styles from './TabBar.module.css'

/* ── Icons ── */
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

function WardrobeIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
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
  const { user }                                = useAuth()
  const { shopList }                            = useShop()
  const { savedAesthetics, openAesthetic, isSaved, handleMainTabSwitch } = useExplore()

  // Temporary tab: open aesthetic that is NOT yet saved
  const tempAesthetic =
    openAesthetic && !savedAesthetics.includes(openAesthetic) ? openAesthetic : null

  function handleTabClick(tabId) {
    handleMainTabSwitch(tabId) // close unsaved aesthetic if navigating away
    setActiveTab(tabId)
  }

  const aestheticTabId = (id) => `aesthetic:${id}`

  return (
    <nav className={styles.tabBar}>
      <div className={styles.tabScroll}>

        {/* ── Explore ── */}
        <button
          className={`${styles.tab} ${activeTab === 'explore' ? styles.active : ''}`}
          onClick={() => handleTabClick('explore')}
        >
          <ExploreIcon active={activeTab === 'explore'} />
          <span>Explore</span>
        </button>

        {/* ── Temporary aesthetic tab ── */}
        {tempAesthetic && (
          <button
            className={`${styles.tab} ${styles.tabTemp} ${activeTab === aestheticTabId(tempAesthetic) ? styles.active : ''}`}
            onClick={() => handleTabClick(aestheticTabId(tempAesthetic))}
          >
            <span className={styles.aestheticTabIcon}>{STYLES[tempAesthetic]?.icon ?? '★'}</span>
            <span className={styles.aestheticTabLabel}>
              {(STYLES[tempAesthetic]?.name ?? tempAesthetic).split(' ')[0]}
            </span>
          </button>
        )}

        {/* ── Saved aesthetic tabs ── */}
        {savedAesthetics.map((id) => {
          const tabId = aestheticTabId(id)
          const s     = STYLES[id]
          if (!s) return null
          return (
            <button
              key={id}
              className={`${styles.tab} ${styles.tabSaved} ${activeTab === tabId ? styles.active : ''}`}
              onClick={() => handleTabClick(tabId)}
            >
              <span className={styles.aestheticTabIcon}>{s.icon}</span>
              <span className={styles.aestheticTabLabel}>
                {s.name.split(' ')[0].replace(/[^a-zA-Z]/g, '').slice(0, 9) || s.name.slice(0, 9)}
              </span>
            </button>
          )
        })}

        {/* ── Discover ── */}
        <button
          className={`${styles.tab} ${activeTab === 'quiz' ? styles.active : ''}`}
          onClick={() => handleTabClick('quiz')}
        >
          <QuizIcon active={activeTab === 'quiz'} />
          <span>Discover</span>
        </button>

        {/* ── Wardrobe ── */}
        <button
          className={`${styles.tab} ${activeTab === 'wardrobe' ? styles.active : ''}`}
          onClick={() => handleTabClick('wardrobe')}
        >
          <WardrobeIcon active={activeTab === 'wardrobe'} />
          <span>Wardrobe</span>
        </button>

        {/* ── Shop ── */}
        <button
          className={`${styles.tab} ${activeTab === 'shop' ? styles.active : ''}`}
          onClick={() => handleTabClick('shop')}
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

        {/* ── Profile ── */}
        <button
          className={`${styles.tab} ${activeTab === 'profile' ? styles.active : ''}`}
          onClick={() => handleTabClick('profile')}
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
