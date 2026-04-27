import { useEffect, useMemo, useRef, useState } from 'react'
import { STYLES, getStyleName } from '../data/styles'
import { fetchPhotosWithFallback } from '../services/pexels'
import { useApp, SCREENS } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { useExplore } from '../context/ExploreContext'
import { useWishlist } from '../context/WishlistContext'
import { useShop } from '../context/ShopContext'
import { getLooks } from '../data/looks'
import AuthWidget from '../components/AuthWidget'
import styles from './HomeScreen.module.css'

// ── Static data ───────────────────────────────────────────────────────────────

const HERO_SLIDE_IDS = ['oldmoney', 'darkacademia', 'streetwear', 'gorpcore', 'minimalist']

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

function HeroCarousel({ setActiveTab, gender }) {
  const [photos, setPhotos]       = useState(new Array(HERO_SLIDE_IDS.length).fill(null))
  const [activeIdx, setActiveIdx] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setPhotos(new Array(HERO_SLIDE_IDS.length).fill(null))
    const hint = gender === 'women' ? 'women' : gender === 'men' ? 'men' : ''
    HERO_SLIDE_IDS.forEach((id, i) => {
      const s = STYLES[id]
      if (!s) return
      const name = getStyleName(s, gender)
      fetchPhotosWithFallback([
        `${name} ${hint} fashion aesthetic`.trim(),
        `${name} ${hint} outfit`.trim(),
        `${name} fashion`,
      ], 1).then(([url] = []) => {
        setPhotos((prev) => { const next = [...prev]; next[i] = url ?? null; return next })
        if (i === 0) setImgLoaded(false)
      })
    })
  }, [gender])

  function startTimer() {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % HERO_SLIDE_IDS.length)
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

  const slideId = HERO_SLIDE_IDS[activeIdx]
  const style   = STYLES[slideId]
  const photo   = photos[activeIdx]

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
        <h2 className={styles.heroName}>{getStyleName(style, gender)}</h2>
        <p className={styles.heroTagline}>{style?.tagline}</p>
        <button
          className={styles.heroBtn}
          onClick={() => setActiveTab(`aesthetic:${slideId}`)}
        >
          Explore look →
        </button>
      </div>

      {/* Dot nav */}
      <div className={styles.heroDots}>
        {HERO_SLIDE_IDS.map((_, i) => (
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

function AestheticMiniCard({ aestheticId, setActiveTab, gender }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)
  const cardRef  = useRef(null)
  const fetched  = useRef(false)
  const style    = STYLES[aestheticId]

  useEffect(() => {
    fetched.current = false
    setPhoto(null)
    setLoaded(false)
  }, [gender])

  useEffect(() => {
    const el = cardRef.current
    if (!el || !style) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fetched.current) {
        fetched.current = true
        const name = getStyleName(style, gender)
        const hint = gender === 'women' ? 'women' : gender === 'men' ? 'men' : ''
        fetchPhotosWithFallback([
          `${name} ${hint} outfit aesthetic`.trim(),
          `${name} ${hint} fashion`.trim(),
          `${name} fashion`,
          `${name} outfit`,
        ], 1).then(([url] = []) => setPhoto(url ?? null))
        obs.disconnect()
      }
    }, { rootMargin: '100px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [aestheticId, style, gender])

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
      <span className={styles.miniCardName}>{getStyleName(style, gender).split(' / ')[0]}</span>
    </button>
  )
}

function HorizontalScroll({ ids, setActiveTab, gender }) {
  return (
    <div className={styles.hScroll}>
      {ids.filter((id) => STYLES[id]).map((id) => (
        <AestheticMiniCard key={`${id}-${gender}`} aestheticId={id} setActiveTab={setActiveTab} gender={gender} />
      ))}
    </div>
  )
}

// ── Your Style journey CTA ────────────────────────────────────────────────────

function StyleJourneyCTA({ setActiveTab, gender }) {
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
          <h3 className={styles.ctaTitle}>{getStyleName(topStyleData, gender)}</h3>
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

// ── Capsule Wardrobe ──────────────────────────────────────────────────────────

function CapsuleLookCard({ look, gender, onClick }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    const q = gender === 'women' ? look.womenPexelsQuery : look.pexelsQuery
    fetchPhotosWithFallback([q, look.pexelsQuery], 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [look.id, look.pexelsQuery, look.womenPexelsQuery, gender])

  return (
    <div className={styles.capsuleCard} onClick={onClick}>
      <div className={styles.capsulePhoto}>
        {photo && (
          <img
            src={photo}
            alt={look.name}
            className={styles.capsuleImg}
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        )}
        <div className={styles.capsuleOverlay}>
          <p className={styles.capsuleName}>{look.name}</p>
          <p className={styles.capsuleVibe}>{look.vibe}</p>
        </div>
      </div>
    </div>
  )
}

function CapsuleWardrobe({ setActiveTab, gender, season }) {
  const { state }           = useApp()
  const { savedAesthetics } = useExplore()

  const capsuleAestheticId = useMemo(() => {
    // 1. Top score from current quiz session
    const scores = state.styleScores
    const topFromQuiz = Object.entries(scores)
      .filter(([, s]) => s > 0)
      .sort(([, a], [, b]) => b - a)[0]
    if (topFromQuiz) return topFromQuiz[0]

    // 2. First saved aesthetic
    if (savedAesthetics.length > 0) return savedAesthetics[0]

    // 3. First seasonal pick
    return SEASON_PICKS[season][0]
  }, [state.styleScores, savedAesthetics, season])

  const looks = useMemo(() => getLooks(capsuleAestheticId, { season }), [capsuleAestheticId, season])
  const style = STYLES[capsuleAestheticId]

  if (!style || looks.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>✦</span>
        <div>
          <h2 className={styles.sectionTitle}>Your Capsule Wardrobe</h2>
          <p className={styles.sectionSub}>
            {getStyleName(style, gender)} · {season.charAt(0).toUpperCase() + season.slice(1)} edition
          </p>
        </div>
      </div>
      <div className={styles.capsuleRow}>
        {looks.map((look) => (
          <CapsuleLookCard
            key={look.id}
            look={look}
            gender={gender}
            onClick={() => setActiveTab(`aesthetic:${capsuleAestheticId}`)}
          />
        ))}
      </div>
      <button
        className={styles.capsuleViewAll}
        onClick={() => setActiveTab(`aesthetic:${capsuleAestheticId}`)}
      >
        View all {getStyleName(style, gender)} looks →
      </button>
    </section>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function HomeScreen({ setActiveTab }) {
  const { user }            = useAuth()
  const { savedAesthetics } = useExplore()
  const { state }           = useApp()
  const gender              = state.gender
  const season              = getSeason()
  const meta                = SEASON_META[season]

  const firstName = user?.displayName?.split(' ')[0] ?? null

  return (
    <div className={styles.screen}>
      {/* Hero */}
      <HeroCarousel setActiveTab={setActiveTab} gender={gender} />

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
            <HorizontalScroll ids={savedAesthetics} setActiveTab={setActiveTab} gender={gender} />
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
          <HorizontalScroll ids={SEASON_PICKS[season]} setActiveTab={setActiveTab} gender={gender} />
        </section>

        {/* Seasonal Capsule Wardrobe */}
        <CapsuleWardrobe setActiveTab={setActiveTab} gender={gender} season={season} />

        {/* Style journey CTA */}
        <StyleJourneyCTA setActiveTab={setActiveTab} gender={gender} />

        {/* Trending */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🔥</span>
            <div>
              <h2 className={styles.sectionTitle}>Trending Now</h2>
              <p className={styles.sectionSub}>Styles gaining momentum</p>
            </div>
          </div>
          <HorizontalScroll ids={TRENDING} setActiveTab={setActiveTab} gender={gender} />
        </section>

        {/* Explore all */}
        <button className={styles.exploreAllBtn} onClick={() => setActiveTab('explore')}>
          Browse all {Object.keys(STYLES).length} aesthetics →
        </button>
      </div>
    </div>
  )
}
