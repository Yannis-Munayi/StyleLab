import { useEffect, useMemo, useRef, useState } from 'react'
import { STYLES } from '../data/styles'
import { CLOTHING_ITEMS } from '../data/categories'
import { AESTHETIC_ITEMS, TYPE_EMOJI, inferCat, inferSeasons } from '../data/aestheticItems'
import { getLooks, getLookPieces } from '../data/looks'
import { getGuideForAesthetic } from '../data/itemGuide'
import { fetchPhotos } from '../services/pexels'
import { useExplore } from '../context/ExploreContext'
import { useWishlist } from '../context/WishlistContext'
import styles from './AestheticScreen.module.css'

// ── Helpers ─────────────────────────────────────────────────────────────────

const ITEM_LOOKUP = (() => {
  const map = {}
  for (const [catId, items] of Object.entries(CLOTHING_ITEMS)) {
    for (const item of items) map[item.id] = { ...item, categoryId: catId }
  }
  return map
})()

const SEASONS = ['spring', 'summer', 'fall', 'winter']

// ── Items sub-tab ────────────────────────────────────────────────────────────

function HeartButton({ wishlisted, onToggle }) {
  return (
    <button
      className={`${styles.heartBtn} ${wishlisted ? styles.heartBtnActive : ''}`}
      onClick={(e) => { e.stopPropagation(); onToggle() }}
      aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="2.2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  )
}

function ItemCard({ item }) {
  const [photo, setPhoto]   = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist()
  const wishlisted = isWishlisted(item.id)

  useEffect(() => {
    let cancelled = false
    fetchPhotos(`${item.name} men fashion outfit`, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [item.id])

  function toggleWishlist() {
    if (wishlisted) {
      removeFromWishlist(item.id)
    } else {
      addToWishlist({
        id: item.id, type: 'item',
        name: item.name, emoji: item.emoji, gradient: item.gradient,
        categoryId: item.categoryId, seasons: item.seasons, description: item.description,
      })
    }
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemPhoto} style={{ background: item.gradient }}>
        {photo && (
          <img
            src={photo}
            alt={item.name}
            className={styles.itemImg}
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        )}
        <span className={styles.itemEmoji}>{item.emoji}</span>
        <HeartButton wishlisted={wishlisted} onToggle={toggleWishlist} />
      </div>
      <p className={styles.itemName}>{item.name}</p>
    </div>
  )
}

function ItemsTab({ aestheticId }) {
  const styleData = STYLES[aestheticId]
  const gradient  = styleData?.gradient ?? 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)'

  const { core, statement, accessory } = useMemo(() => {
    const raw = AESTHETIC_ITEMS[aestheticId] ?? []
    const enrich = (item) => ({
      ...item,
      description: item.desc,
      gradient,
      emoji:      TYPE_EMOJI[item.type],
      categoryId: inferCat(item.name),
      seasons:    inferSeasons(item.name),
    })
    return {
      core:      raw.filter((i) => i.type === 'core').map(enrich),
      statement: raw.filter((i) => i.type === 'statement').map(enrich),
      accessory: raw.filter((i) => i.type === 'accessory').map(enrich),
    }
  }, [aestheticId, gradient])

  if (core.length + statement.length + accessory.length === 0) {
    return <p className={styles.emptyText}>No items tagged for this aesthetic yet.</p>
  }

  return (
    <>
      {core.length > 0 && (
        <div className={styles.itemSection}>
          <p className={styles.itemSectionLabel}>Core Pieces</p>
          <div className={styles.itemsGrid}>
            {core.map((item) => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>
      )}
      {statement.length > 0 && (
        <div className={styles.itemSection}>
          <p className={styles.itemSectionLabel}>Statement Pieces</p>
          <div className={styles.itemsGrid}>
            {statement.map((item) => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>
      )}
      {accessory.length > 0 && (
        <div className={styles.itemSection}>
          <p className={styles.itemSectionLabel}>Accessories</p>
          <div className={styles.itemsGrid}>
            {accessory.map((item) => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>
      )}
    </>
  )
}

// ── Looks sub-tab ────────────────────────────────────────────────────────────

function LookCard({ look }) {
  const [photo, setPhoto]         = useState(null)
  const [loaded, setLoaded]       = useState(false)
  const [open, setOpen]           = useState(false)
  const [gridPhotos, setGridPhotos] = useState([])
  const [gridLoading, setGridLoading] = useState(false)
  const fetchedRef = useRef(false)

  useEffect(() => {
    let cancelled = false
    fetchPhotos(look.pexelsQuery, 1).then(([url] = []) => {
      if (!cancelled) setPhoto(url ?? null)
    })
    return () => { cancelled = true }
  }, [look.id])

  function handleToggle() {
    const next = !open
    setOpen(next)
    if (next && !fetchedRef.current) {
      fetchedRef.current = true
      setGridLoading(true)
      fetchPhotos(look.pexelsQuery, 6).then((urls) => {
        setGridPhotos(urls ?? [])
        setGridLoading(false)
      })
    }
  }

  const pieces = look.pieces
    .map((id) => ITEM_LOOKUP[id])
    .filter(Boolean)

  return (
    <div className={styles.lookCard}>
      <button className={styles.lookHeader} onClick={handleToggle}>
        <div className={styles.lookThumb} style={{ background: 'rgba(255,255,255,0.06)' }}>
          {photo && (
            <img
              src={photo}
              alt={look.name}
              className={styles.lookImg}
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
            />
          )}
        </div>
        <div className={styles.lookInfo}>
          <p className={styles.lookName}>{look.name}</p>
          <p className={styles.lookVibe}>{look.vibe}</p>
          <div className={styles.lookSeasons}>
            {look.seasons.map((s) => (
              <span key={s} className={styles.seasonChip}>{s}</span>
            ))}
          </div>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className={styles.lookBody}>
          {/* Outfit photo grid */}
          {gridLoading ? (
            <div className={styles.outfitGridLoading}>Loading outfits…</div>
          ) : gridPhotos.length > 0 && (
            <>
              <p className={styles.piecesLabel}>Outfit inspiration</p>
              <div className={styles.outfitGrid}>
                {gridPhotos.map((url, i) => (
                  <OutfitPhoto key={i} url={url} alt={`${look.name} outfit ${i + 1}`} />
                ))}
              </div>
            </>
          )}

          {/* Pieces chips */}
          <p className={styles.piecesLabel}>Pieces in this look</p>
          <div className={styles.piecesList}>
            {pieces.map((item) => (
              <span key={item.id} className={styles.pieceChip}>
                {item.emoji} {item.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function OutfitPhoto({ url, alt, wishlistEntry }) {
  const [loaded, setLoaded] = useState(false)
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist()
  const wishlisted = wishlistEntry ? isWishlisted(wishlistEntry.id) : false

  function toggleWishlist() {
    if (!wishlistEntry) return
    if (wishlisted) removeFromWishlist(wishlistEntry.id)
    else addToWishlist({ ...wishlistEntry, type: 'photo', photoUrl: url })
  }

  return (
    <div className={styles.outfitPhotoWrap}>
      <img
        src={url}
        alt={alt}
        className={styles.outfitPhoto}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
      {wishlistEntry && (
        <HeartButton wishlisted={wishlisted} onToggle={toggleWishlist} />
      )}
    </div>
  )
}

function LooksTab({ aestheticId }) {
  const [activeSeason, setActiveSeason] = useState(null)
  const [requiredPieces, setRequiredPieces] = useState([])

  const allPieces = useMemo(() => getLookPieces(aestheticId), [aestheticId])
  const filtered  = useMemo(
    () => getLooks(aestheticId, { season: activeSeason, requiredPieces }),
    [aestheticId, activeSeason, requiredPieces]
  )

  function togglePiece(id) {
    setRequiredPieces((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const hasLooks = getLooks(aestheticId).length > 0

  if (!hasLooks) {
    return (
      <div className={styles.emptyLooks}>
        <p className={styles.emptyText}>
          Curated looks for this aesthetic are coming soon. Try browsing the Items tab.
        </p>
        <a
          href={`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(
            (STYLES[aestheticId]?.name ?? '') + ' men outfit'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pinterestLink}
        >
          📌 Browse on Pinterest →
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Season filter */}
      <div className={styles.filterRow}>
        <button
          className={`${styles.filterPill} ${!activeSeason ? styles.filterActive : ''}`}
          onClick={() => setActiveSeason(null)}
        >
          All seasons
        </button>
        {SEASONS.map((s) => (
          <button
            key={s}
            className={`${styles.filterPill} ${activeSeason === s ? styles.filterActive : ''}`}
            onClick={() => setActiveSeason(activeSeason === s ? null : s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Piece filter */}
      {allPieces.length > 0 && (
        <div className={styles.pieceFilter}>
          <p className={styles.pieceFilterLabel}>Include piece</p>
          <div className={styles.filterRow}>
            {allPieces.map((id) => {
              const item = ITEM_LOOKUP[id]
              if (!item) return null
              return (
                <button
                  key={id}
                  className={`${styles.filterPill} ${requiredPieces.includes(id) ? styles.filterActive : ''}`}
                  onClick={() => togglePiece(id)}
                >
                  {item.emoji} {item.name}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Look cards */}
      {filtered.length === 0 ? (
        <p className={styles.emptyText}>No looks match the current filters.</p>
      ) : (
        <div className={styles.looksList}>
          {filtered.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Guide sub-tab ────────────────────────────────────────────────────────────

function GuideItem({ type, catLabel, isOpen, onToggle }) {
  const [photos, setPhotos]       = useState([])
  const [photosLoading, setPhotosLoading] = useState(false)
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (isOpen && !fetchedRef.current) {
      fetchedRef.current = true
      setPhotosLoading(true)
      fetchPhotos(`${type.name} ${catLabel} men fashion`, 6).then((urls) => {
        setPhotos(urls ?? [])
        setPhotosLoading(false)
      })
    }
  }, [isOpen, type.name, catLabel])

  return (
    <div className={styles.guideItem} onClick={onToggle} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onToggle()}>
      <div className={styles.guideItemTop}>
        <span className={styles.guideItemName}>{type.name}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {isOpen && (
        <div className={styles.guideItemBody}>
          <p className={styles.guideItemDesc}>{type.description}</p>
          {type.iconic && (
            <p className={styles.guideItemIconic}>
              <span className={styles.guideIconicLabel}>Iconic examples: </span>
              {type.iconic}
            </p>
          )}
          {photosLoading ? (
            <div className={styles.outfitGridLoading}>Loading photos…</div>
          ) : photos.length > 0 && (
            <div className={styles.outfitGrid}>
              {photos.map((url, i) => (
                <OutfitPhoto
                  key={i}
                  url={url}
                  alt={`${type.name} ${catLabel} ${i + 1}`}
                  wishlistEntry={{ id: `photo:${catLabel}:${type.name}:${i}`, label: type.name, catLabel }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function GuideTab({ aestheticId }) {
  const [expanded, setExpanded] = useState(null)
  const categories = useMemo(() => getGuideForAesthetic(aestheticId), [aestheticId])

  if (categories.length === 0) {
    return <p className={styles.emptyText}>No guide content for this aesthetic yet.</p>
  }

  return (
    <div className={styles.guideList}>
      {categories.map((cat) => (
        <section key={cat.id} className={styles.guideSection}>
          <div className={styles.guideSectionHeader}>
            <span className={styles.guideSectionEmoji}>{cat.emoji}</span>
            <div>
              <p className={styles.guideSectionTitle}>{cat.label}</p>
              <p className={styles.guideSectionIntro}>{cat.intro}</p>
            </div>
          </div>

          {cat.types.map((type) => {
            const typeId = `${cat.id}-${type.name}`
            return (
              <GuideItem
                key={typeId}
                type={type}
                catLabel={cat.label}
                isOpen={expanded === typeId}
                onToggle={() => setExpanded(expanded === typeId ? null : typeId)}
              />
            )
          })}
        </section>
      ))}
    </div>
  )
}

// ── Main AestheticScreen ─────────────────────────────────────────────────────

const TABS = [
  { id: 'items', label: 'Items' },
  { id: 'looks', label: 'Looks' },
  { id: 'guide', label: 'Guide' },
]

export default function AestheticScreen({ aestheticId, setActiveTab }) {
  const { closeAestheticTab, saveAesthetic, unsaveAesthetic, isSaved } = useExplore()
  const [subTab, setSubTab] = useState('items')

  const style    = STYLES[aestheticId]
  const saved    = isSaved(aestheticId)

  if (!style) return null

  function handleBack() {
    closeAestheticTab()
    setActiveTab('explore')
  }

  function handleSaveToggle() {
    if (saved) {
      unsaveAesthetic(aestheticId)
    } else {
      saveAesthetic(aestheticId)
    }
  }

  return (
    <div className={styles.screen}>
      {/* ── Hero header ── */}
      <div className={styles.hero} style={{ background: style.gradient }}>
        <div className={styles.heroOverlay} />

        <button className={styles.backBtn} onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ''}`}
          onClick={handleSaveToggle}
          title={saved ? 'Unpin this tab' : 'Pin this tab'}
        >
          {saved ? '📌 Saved' : '+ Save tab'}
        </button>

        <div className={styles.heroContent}>
          <span className={styles.heroIcon}>{style.icon}</span>
          <h1 className={styles.heroName}>{style.name}</h1>
          <p className={styles.heroTagline}>{style.tagline}</p>
          {style.description && (
            <p className={styles.heroDesc}>{style.description}</p>
          )}
        </div>

        {/* Pinterest link */}
        <a
          href={style.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pinterestBtn}
        >
          📌 Pinterest
        </a>
      </div>

      {/* ── Sub-tab bar ── */}
      <div className={styles.subTabBar}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.subTab} ${subTab === tab.id ? styles.subTabActive : ''}`}
            onClick={() => setSubTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className={styles.subTabIndicator}
          style={{ left: `${TABS.findIndex((t) => t.id === subTab) * (100 / TABS.length)}%` }}
        />
      </div>

      {/* ── Tab content ── */}
      <div className={styles.tabContent}>
        {subTab === 'items' && <ItemsTab aestheticId={aestheticId} />}
        {subTab === 'looks' && <LooksTab aestheticId={aestheticId} />}
        {subTab === 'guide' && <GuideTab aestheticId={aestheticId} />}
      </div>
    </div>
  )
}
