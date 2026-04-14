import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { CATEGORIES } from '../data/categories'
import styles from './screens.module.css'

export default function CategoryScreen() {
  const { dispatch } = useApp()
  const [selected, setSelected] = useState([])

  function toggle(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  function handleNext() {
    if (selected.length === 0) return
    dispatch({ type: 'SET_CATEGORIES', categories: selected })
    dispatch({ type: 'START_DISCOVERY' })
  }

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <h2 className={styles.screenTitle}>What do you shop for most?</h2>
        <p className={styles.screenSub}>
          Select the clothing categories you actually care about. We'll walk through each one.
        </p>
      </div>

      <div className={styles.categoryGrid}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryCard} ${selected.includes(cat.id) ? styles.active : ''}`}
            onClick={() => toggle(cat.id)}
          >
            <span className={styles.catEmoji}>{cat.emoji}</span>
            <div className={styles.catText}>
              <span className={styles.catLabel}>{cat.label}</span>
              <span className={styles.catDesc}>{cat.description}</span>
            </div>
            {selected.includes(cat.id) && (
              <span className={styles.checkmark}>✓</span>
            )}
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerNote}>
          {selected.length === 0
            ? 'Pick at least one category'
            : `${selected.length} categor${selected.length > 1 ? 'ies' : 'y'} selected`}
        </p>
        <button
          className={styles.primaryBtn}
          onClick={handleNext}
          disabled={selected.length === 0}
        >
          Start exploring
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
