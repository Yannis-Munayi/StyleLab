import { useEffect, useRef, useState } from 'react'
import { STYLES } from '../data/styles'
import { fetchPhotos } from '../services/pexels'
import { useApp, SCREENS } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { useExplore } from '../context/ExploreContext'
import { useWishlist } from '../context/WishlistContext'
import { useShop } from '../context/ShopContext'
import AuthWidget from '../components/AuthWidget'
import styles from './HomeScreen.module.css'

// ── Static data ───────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  { id: 'oldmoney',     query: 'old money men fashion elegant luxury' },
  { id: 'darkacademia', query: 'dark academia men aesthetic tweed coat' },
  { id: 'streetwear',   query: 'streetwear men urban outfit editorial' },
  { id: 'gorpcore',     query: 'gorpcore men outdoor fashion mountain' },
  { id: 'minimalist',   query: 'minimalist men fashion clean neutral' },
]

const SEASON_PICKS = {
  winter: ['oldmoney', 'darkacademia', 'preppy', 'military', 'knitwearaesthetic', 'gorpcore'],
  spring: ['lightacademia', 'cottagecore', 'indie', 'minimalist', 'softboy', 'preppy'],
  summer: ['athleisure', 'streetwear', 'hiphop', 'techwear', 'normcore', 'vintage'],
  fall:   ['darkacademia', 'gorpcore', 'workwear', 'grunge', 'vintage', 'military'],
}

const TRENDING = ['preppy', 'y2k', 'techwear', 'indie', 'hiphop', 'skater', 'grunge', 'athleisure', 'edgy', 'scandi']

const SEASON_META = {
  winter: { icon: '❄️', label: 'Winter Picks',  sub: 'Layers, texture, warmth' },
  spring: { icon: '🌸', label: 'Spring Picks',  sub: 'Light layers, fresh palettes' },
  summer: { icon: '☀️', label: 'Summer Picks',  sub: 'Breathable, bold, bright' },
  fall:   { icon: '🍂', label: 'Fall Picks',    sub: 'Earth tones, rich textures' },
}

function getSeason() {
  const m = new Date().getMonth()
  if (m <= 1 || m === 11) return 'winter'
  if (m <= 4) return 'spring'
  if (m <= 7) return 'summer'
  return 'fall'
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

// ── Hero carousel ─────────────────────────────────────────────────────────────

function HeroCarousel({ setActiveTab }) {
  const [photos, setPhotos]     = useState(new Array(HERO_SLIDES.length).fill(null))
  const [activeIdx, setActiveIdx] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    HERO_SLIDES.forEach((slide, i) => {
      fetchPhotos(slide.query, 1).then(([url] = []) => {
        setPhotos((prev) => { const next = [...prev]; next[i] = url ?? null; return next })
        if (i === 0) setImgLoaded(false)
      })
    })
  }, [])

  function startTimer() {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % HERO_SLIDES.length)
      setImgLoaded(false)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  function goTo(i) {
    setActiveIdx(i)
    setImgLoaded(false)
    startTimer()
  }

  const slide  = HERO_SLIDES[activeIdx]
  const style  = STYLES[slide.id]
  const photo  = photos[activeIdx]

  return (
    <div className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBg} style={{ background: style?.gradient ?? '#1a1a1a' }}>
        {photo && (
          <img
            key={photo}
            src={photo}
            alt={style?.name}
            className={styles.heroImg}
            style={{ opacity: imgLoaded ? 1 : 0 }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(true)}
          />
        )}
      </div>
      <div className={styles.heroOverlay} />

      {/* Top bar */}
      <div className={styles.heroTopBar}>
        <span className={styles.heroWordmark}>StyleLab</span>
        <AuthWidget />
      </div>

      {/* Bottom content */}
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Featured Aesthetic</p>
        <h2 className={styles.heroName}>{style?.name}</h2>
        <p className={styles.heroTagline}>{style?.tagline}</p>
        <button
          className={styles.heroBtn}
          onClick={() => setActiveTab(`aesthetic:${slide.id}`)}
        >
          Explore look →
        </button>
      </div>

      {/* Dot nav */}
      <div className={styles.heroDots}>
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.heroDot} ${i === activeIdx ? styles.heroDotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Stats pills ───────────────────────────────────────────────────────────────

function StatsPills({ setActiveTab }) {
  const { wishlist }  = useWishlist()
  const { shopList }  = useShop()
  const { state }     = useApp()

  const likedCount = Object.values(state.responses).filter((r) => r.liked).length

  const pills = [
    { label: 'Liked',     value: likedCount,       icon: '❤️', tab: 'wardrobe' },
    { label: 'Wishlist',  value: wishlist.length,   icon: '🤍', tab: 'wishlist' },
    { label: 'Shop List', value: shopList.length,   icon: '🛍️', tab: 'shop'     },
  ]

  return (
    <div className={styles.statsRow}>
      {pills.map(({ label, value, icon, tab }) => (
        <button key={tab} className={styles.statPill} onClick={() => setActiveTab(tab)}>
          <span className={styles.statIcon}>{icon}</span>
          <span className={styles.statValue}>{value}</span>
          <span className={styles.statLabel}>{label}</span>
        </button>
      ))}
    </div>
  )
}

// ── Aesthetic mini-card (horizontal scroll) ───────────────────────────────────

function AestheticMiniCard({ aestheticId, setActiveTab }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)
  const cardRef  = useRef(null)
  const fetched  = useRef(false)
  const style    = STYLES[aestheticId]

  useEffect(() => {
    const el = cardRef.current
    if (!el || !style) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fetched.current) {
        fetched.current = true
        fetchPhotos(`${style.name} men outfit`, 1).then(([url] = []) => setPhoto(url ?? null))
        obs.disconnect()
      }
    }, { rootMargin: '100px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [aestheticId, style])

  if (!style) return null

  return (
    <button
      ref={cardRef}
      className={styles.miniCard}
      onClick={() => setActiveTab(`aesthetic:${aestheticId}`)}
    >
      <div className={styles.miniCardBg} style={{ background: style.gradient }}>
        {photo && (
          <img
            src={photo}
            alt={style.name}
            className={styles.miniCardImg}
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        )}
      </div>
      <div className={styles.miniCardOverlay} />
      <span className={styles.miniCardName}>{style.name.split(' / ')[0]}</span>
    </button>
  )
}

function HorizontalScroll({ ids, setActiveTab }) {
  return (
    <div className={styles.hScroll}>
      {ids.filter((id) => STYLES[id]).map((id) => (
        <AestheticMiniCard key={id} aestheticId={id} setActiveTab={setActiveTab} />
      ))}
    </div>
  )
}

// ── Your Style journey CTA ────────────────────────────────────────────────────

function StyleJourneyCTA({ setActiveTab }) {
  const { state }  = useApp()
  const { user }   = useAuth()

  const responsesCount = Object.keys(state.responses).length
  const inProgress     = state.screen === SCREENS.DISCOVERY && responsesCount > 0
  const isDone         = state.screen === SCREENS.RESULTS || responsesCount === state.itemQueue.length && state.itemQueue.length > 0

  const topStyle = isDone
    ? Object.entries(state.styleScores).sort(([, a], [, b]) => b - a)[0]?.[0]
    : null
  const topStyleData = topStyle ? STYLES[topStyle] : null

  if (topStyleData) {
    return (
      <div className={styles.ctaCard} style={{ background: topStyleData.gradient }}>
        <div className={styles.ctaCardOverlay} />
        <div className={styles.ctaCardContent}>
          <p className={styles.ctaEyebrow}>Your top aesthetic</p>
          <h3 className={styles.ctaTitle}>{topStyleData.name}</h3>
          <p className={styles.ctaSub}>{topStyleData.tagline}</p>
          <div className={styles.ctaActions}>
            <button className={styles.ctaBtn} onClick={() => setActiveTab(`aesthetic:${topStyle}`)}>
              Explore your style →
            </button>
            <button className={styles.ctaBtnGhost} onClick={() => setActiveTab('quiz')}>
              Retake quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (inProgress) {
    return (
      <div className={styles.ctaCard} style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className={styles.ctaCardContent}>
          <p className={styles.ctaEyebrow}>Quiz in progress</p>
          <h3 className={styles.ctaTitle}>Pick up where you left off</h3>
          <p className={styles.ctaSub}>
            You've rated {responsesCount} of {state.itemQueue.length} items.
          </p>
          <button className={styles.ctaBtn} onClick={() => setActiveTab('quiz')}>
            Continue quiz →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.ctaCard} style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)' }}>
      <div className={styles.ctaCardContent}>
        <p className={styles.ctaEyebrow}>Discover your aesthetic</p>
        <h3 className={styles.ctaTitle}>Find your personal style in 5 minutes</h3>
        <p className={styles.ctaSub}>
          Like &amp; rate outfits — we'll map your aesthetic and build your wardrobe blueprint.
        </p>
        <button
          className={styles.ctaBtnDark}
          onClick={() => setActiveTab('quiz')}
        >
          Start the quiz →
        </button>
      </div>
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function HomeScreen({ setActiveTab }) {
  const { user }            = useAuth()
  const { savedAesthetics } = useExplore()
  const season              = getSeason()
  const meta                = SEASON_META[season]

  const firstName = user?.displayName?.split(' ')[0] ?? null

  return (
    <div className={styles.screen}>
      {/* Hero */}
      <HeroCarousel setActiveTab={setActiveTab} />

      <div className={styles.body}>
        {/* Greeting */}
        <div className={styles.greeting}>
          <h1 className={styles.greetingText}>
            {getGreeting()}{firstName ? `, ${firstName}` : ''}.
          </h1>
          <p className={styles.greetingSub}>What are we wearing today?</p>
        </div>

        {/* Stats */}
        <StatsPills setActiveTab={setActiveTab} />

        {/* Saved aesthetics — only when the user has pinned some */}
        {savedAesthetics.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📌</span>
              <div>
                <h2 className={styles.sectionTitle}>Your Saved Aesthetics</h2>
                <p className={styles.sectionSub}>{savedAesthetics.length} pinned from Explore</p>
              </div>
            </div>
            <HorizontalScroll ids={savedAesthetics} setActiveTab={setActiveTab} />
          </section>
        )}

        {/* Season picks */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>{meta.icon}</span>
            <div>
              <h2 className={styles.sectionTitle}>{meta.label}</h2>
              <p className={styles.sectionSub}>{meta.sub}</p>
            </div>
          </div>
          <HorizontalScroll ids={SEASON_PICKS[season]} setActiveTab={setActiveTab} />
        </section>

        {/* Style journey CTA */}
        <StyleJourneyCTA setActiveTab={setActiveTab} />

        {/* Trending */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🔥</span>
            <div>
              <h2 className={styles.sectionTitle}>Trending Now</h2>
              <p className={styles.sectionSub}>Styles gaining momentum</p>
            </div>
          </div>
          <HorizontalScroll ids={TRENDING} setActiveTab={setActiveTab} />
        </section>

        {/* Explore all */}
        <button className={styles.exploreAllBtn} onClick={() => setActiveTab('explore')}>
          Browse all {Object.keys(STYLES).length} aesthetics →
        </button>
      </div>
    </div>
  )
}
