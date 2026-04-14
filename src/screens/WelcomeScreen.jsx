import { useApp } from '../context/AppContext'
import styles from './screens.module.css'

export default function WelcomeScreen() {
  const { dispatch } = useApp()

  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeGlow} />
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
          <span className={styles.pill}>🎨 8 aesthetics</span>
          <span className={styles.pill}>👔 6 categories</span>
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
        <p className={styles.welcomeNote}>Takes about 5 minutes · No account needed</p>
      </div>
    </div>
  )
}
