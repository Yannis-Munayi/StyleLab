import { useRef, useState } from 'react'
import styles from './GuideTour.module.css'

export const GUIDE_STEPS = [
  // ── Home ──────────────────────────────────────────────────────────────────
  {
    tab:   'home',
    title: 'Welcome to StyleLab 👋',
    desc:  'This is your Home screen — the starting point. You\'ll find featured aesthetics, your personal stats, seasonal picks, and trending styles all in one place.',
  },
  {
    tab:   'home',
    title: 'Hero Carousel',
    desc:  'The large section at the top cycles through featured aesthetics. Swipe or wait for it to auto-advance. Tap "Explore look" on any slide to open the full aesthetic page.',
  },
  {
    tab:   'home',
    title: 'Stats & Picks',
    desc:  'Your Liked, Wishlist, and Shop List counts are shown as tappable pills — tap any to jump to that tab. Below, scroll the Seasonal Picks and Trending rows to discover new styles.',
  },

  // ── Explore ───────────────────────────────────────────────────────────────
  {
    tab:   'explore',
    title: 'Explore — Browse All Aesthetics 🔍',
    desc:  'Every aesthetic lives here, grouped by category. Use the search bar at the top to find one by name, vibe, or keyword. Tap any card to open it.',
  },

  // ── Aesthetic deep-dive ───────────────────────────────────────────────────
  {
    tab:    'aesthetic:oldmoney',
    subTab: 'story',
    title:  'Inside an Aesthetic — Story',
    desc:   'We\'ve opened Old Money as an example. The Story tab gives you the origin, vibe, and defining traits of the aesthetic — the best place to start if you\'re new to a style.',
  },
  {
    tab:    'aesthetic:oldmoney',
    subTab: 'items',
    title:  'Items Tab',
    desc:   'The Items tab shows the key clothing pieces that define this aesthetic. Tap 🤍 on any piece to add it to your Wishlist, or tap "Add to shop list" to queue it for purchase.',
  },
  {
    tab:    'aesthetic:oldmoney',
    subTab: 'looks',
    title:  'Looks Tab',
    desc:   'The Looks tab shows full outfit combinations built from the aesthetic\'s pieces — curated sets styled together for outfit inspiration.',
  },
  {
    tab:    'aesthetic:oldmoney',
    subTab: 'guide',
    title:  'Guide Tab',
    desc:   'The Guide tab breaks down how to wear the aesthetic — tops, bottoms, shoes, accessories. Each section loads real outfit photos for reference.',
  },
  {
    tab:    'aesthetic:oldmoney',
    subTab: 'story',
    title:  'Pin to Save 📌',
    desc:   'See the 📌 button near the top? Tap it to save this aesthetic. Pinned aesthetics float to the top of your Explore grid and appear in the Saved section on your Home screen.',
  },

  // ── Discover intro ────────────────────────────────────────────────────────
  {
    tab:   'quiz',
    title: 'Discover — Find Your Style ✦',
    desc:  'The quiz starts by picking your seasons and the clothing categories you care about. Let\'s do a quick demo — follow the highlighted prompts.',
  },

  // ── Forced season selection ───────────────────────────────────────────────
  {
    tab:         'quiz',
    forceScreen: 'seasons',
    forceSeason: 'spring',
    interactive: true,
    title:       'Pick a Season 🌸',
    desc:        'Seasons filter the items you\'ll see. Tap Spring (highlighted) to continue the demo.',
  },

  // ── Forced category selection ─────────────────────────────────────────────
  {
    tab:           'quiz',
    forceScreen:   'categories',
    forceCategory: 'outerwear',
    interactive:   true,
    title:         'Choose a Category 🧥',
    desc:          'Categories focus the quiz on the pieces you actually wear. Tap Jackets & Coats (highlighted) to continue.',
  },

  // ── Discover mechanics ────────────────────────────────────────────────────
  {
    tab:   'quiz',
    title: 'Swipe Right to Like ❤️',
    desc:  'You\'re in Discover! Swipe right or tap ❤️ to like an item. This adds it to your Liked tab and counts toward your aesthetic score.',
  },
  {
    tab:   'quiz',
    title: 'Swipe Left to Skip ✕',
    desc:  'Swipe left or tap ✕ to skip an item. Skipped items are removed from the queue and don\'t affect your score at all.',
  },
  {
    tab:   'quiz',
    title: 'Save to Wishlist 🤍',
    desc:  'Tap 🤍 on any card to save it to your Wishlist without affecting the quiz. Great for pieces you love but aren\'t sure fit your aesthetic.',
  },

  // ── Liked ─────────────────────────────────────────────────────────────────
  {
    tab:   'wardrobe',
    title: 'Liked — Your Saved Items ❤️',
    desc:  'Every item you swiped right on lives here as a grid. Tap × on any card to remove it. The more items you\'ve liked, the more accurate your next step.',
  },
  {
    tab:   'wardrobe',
    title: 'Generate Your Aesthetics',
    desc:  'Tap "Generate my aesthetics" to analyse your liked items and surface which styles they map to — ranked by match strength and linked to Pinterest.',
  },

  // ── Wishlist ──────────────────────────────────────────────────────────────
  {
    tab:   'wishlist',
    title: 'Wishlist 🤍',
    desc:  'Items saved with 🤍 during Discover or inside any aesthetic\'s Items tab collect here. Each links to Pinterest so you can track down where to buy it.',
  },

  // ── Shop ──────────────────────────────────────────────────────────────────
  {
    tab:   'shop',
    title: 'Shop List 🛍️',
    desc:  'Inside any aesthetic\'s Items tab, tap "Add to shop list" to queue pieces you\'re ready to buy. This tab keeps them all in one focused list.',
  },

  // ── Profile ───────────────────────────────────────────────────────────────
  {
    tab:   'profile',
    title: 'Profile — All Done! 🎉',
    desc:  'Set your gender preference here to personalise images, names, and Pinterest links across the whole app. Your quiz history and top aesthetics are saved here too.',
  },
]

export default function GuideTour({ step, onNext, onBack, onSkip }) {
  const s       = GUIDE_STEPS[step]
  const isFirst = step === 0
  const isLast  = step === GUIDE_STEPS.length - 1

  // ── Draggable card ────────────────────────────────────────────────────────
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const origin   = useRef({ mx: 0, my: 0, ox: 0, oy: 0 })

  function onPointerDown(e) {
    // only drag via the handle
    if (!e.currentTarget.classList.contains(styles.dragHandle)) return
    dragging.current = true
    origin.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e) {
    if (!dragging.current) return
    setOffset({
      x: origin.current.ox + (e.clientX - origin.current.mx),
      y: origin.current.oy + (e.clientY - origin.current.my),
    })
  }

  function onPointerUp() {
    dragging.current = false
  }

  return (
    <div className={styles.overlay}>
      <div
        className={styles.card}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        {/* Drag handle */}
        <div
          className={styles.dragHandle}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <span className={styles.dragPill} />
        </div>

        {/* Progress dots */}
        <div className={styles.dots}>
          {GUIDE_STEPS.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === step ? styles.dotActive : i < step ? styles.dotDone : ''}`}
            />
          ))}
        </div>

        {/* Step counter + skip */}
        <div className={styles.meta}>
          <span className={styles.counter}>{step + 1} / {GUIDE_STEPS.length}</span>
          <button className={styles.skipBtn} onClick={onSkip}>Skip tour</button>
        </div>

        <h3 className={styles.title}>{s.title}</h3>
        <p className={styles.desc}>{s.desc}</p>

        {/* Interactive steps: no Next button — user must tap the highlighted element */}
        {!s.interactive && (
          <div className={styles.actions}>
            {!isFirst && (
              <button className={styles.backBtn} onClick={onBack}>← Back</button>
            )}
            <button
              className={`${styles.nextBtn} ${isFirst ? styles.nextBtnFull : ''}`}
              onClick={isLast ? onSkip : onNext}
            >
              {isLast ? 'Done ✓' : 'Next →'}
            </button>
          </div>
        )}

        {s.interactive && (
          <p className={styles.interactiveHint}>Tap the highlighted option above to continue</p>
        )}
      </div>
    </div>
  )
}
