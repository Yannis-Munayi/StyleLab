import { useApp } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import styles from './screens.module.css'

export default function WelcomeScreen() {
  const { dispatch } = useApp()
  const { user }     = useAuth()

  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeGlow} />

      {/* Top-right: auth status */}
      <div className={styles.welcomeTopBar}>
        {user ? (
          <button
            className={styles.profilePill}
            onClick={() => dispatch({ type: 'GO_TO_PROFILE' })}
          >
            <span className={styles.profilePillAvatar}>
              {(user.displayName ?? user.email ?? '?')[0].toUpperCase()}
            </span>
            <span>{user.displayName ?? 'Profile'}</span>
          </button>
        ) : (
          <button
            className={styles.signInLink}
            onClick={() => dispatch({ type: 'GO_TO_AUTH' })}
          >
            Sign in
          </button>
        )}
      </div>

      <div className={styles.welcomeContent}>
        <div className={styles.logoMark}>SL</div>
        <h1 className={styles.welcomeTitle}>
          Find your<br />
          <span className={styles.accent}>style.</span>
        </h1>
        <p className={styles.welcomeSub}>
          Answer a few questions about what you're drawn to — we'll map your aesthetic and build your seasonal wardrobe blueprint.
        </p>
        <div className={styles.featurePills}>
          <span className={styles.pill}>🌿 Season-aware</span>
          <span className={styles.pill}>🎨 51 aesthetics</span>
          <span className={styles.pill}>👔 8 categories</span>
        </div>
        <button
          className={styles.primaryBtn}
          onClick={() => dispatch({ type: 'GO_TO_SEASONS' })}
        >
          Get started
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        {!user && (
          <p className={styles.welcomeNote}>Takes about 5 minutes · Results saved when signed in</p>
        )}
        {user && (
          <p className={styles.welcomeNote}>Signed in as {user.displayName ?? user.email}</p>
        )}
      </div>
    </div>
  )
}
