import { useAuth } from '../context/AuthContext'
import styles from './TabBar.module.css'

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

function ProfileIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

export default function TabBar({ activeTab, setActiveTab }) {
  const { user } = useAuth()

  return (
    <nav className={styles.tabBar}>
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
        <WardrobeIcon active={activeTab === 'wardrobe'} />
        <span>Wardrobe</span>
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
    </nav>
  )
}
