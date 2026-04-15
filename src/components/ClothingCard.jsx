import { useState, useEffect } from 'react'
import { REASON_TAGS_BY_CATEGORY, REASON_TAGS } from '../data/categories'
import { useApp } from '../context/AppContext'
import { fetchPhotos } from '../services/pexels'
import styles from './ClothingCard.module.css'

function PhotoCarousel({ photos, fallbackGradient, loading }) {
  const [index, setIndex] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Reset when photos array changes
  useEffect(() => {
    setIndex(0)
    setImgLoaded(false)
  }, [photos])

  function prev(e) {
    e.stopPropagation()
    setImgLoaded(false)
    setIndex((i) => (i - 1 + photos.length) % photos.length)
  }

  function next(e) {
    e.stopPropagation()
    setImgLoaded(false)
    setIndex((i) => (i + 1) % photos.length)
  }

  // Show gradient while loading or if no photos available
  if (loading || photos.length === 0) {
    return (
      <div
        className={`${styles.carousel} ${loading ? styles.pulsing : ''}`}
        style={{ background: fallbackGradient }}
      />
    )
  }

  return (
    <div className={styles.carousel}>
      {/* Skeleton behind the image while it loads */}
      {!imgLoaded && (
        <div className={styles.imgSkeleton} style={{ background: fallbackGradient }} />
      )}

      <img
        key={photos[index]}
        src={photos[index]}
        alt=""
        className={styles.photo}
        style={{ opacity: imgLoaded ? 1 : 0 }}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(true)}
        draggable={false}
      />

      {/* Gradient so text stays readable */}
      <div className={styles.photoOverlay} />

      {photos.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div className={styles.dots}>
        {photos.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={(e) => { e.stopPropagation(); setImgLoaded(false); setIndex(i) }}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ClothingCard({ item, existingResponse }) {
  const { dispatch } = useApp()
  const [flipped, setFlipped] = useState(false)
  // Pre-populate reasons if the user previously liked this item
  const [selectedReasons, setSelectedReasons] = useState(
    existingResponse?.liked ? existingResponse.reasons : []
  )
  const [photos, setPhotos] = useState([])
  const [loadingPhotos, setLoadingPhotos] = useState(true)

  const reasonTags = REASON_TAGS_BY_CATEGORY[item.categoryId] ?? REASON_TAGS

  useEffect(() => {
    let cancelled = false
    setLoadingPhotos(true)
    setPhotos([])

    const query = `${item.name} men fashion outfit`
    fetchPhotos(query, 3).then((urls) => {
      if (cancelled) return
      setPhotos(urls)
      setLoadingPhotos(false)
    })

    return () => { cancelled = true }
  }, [item.id])

  function handleCardClick() {
    if (!flipped) setFlipped(true)
  }

  function toggleReason(reason) {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    )
  }

  function handleConfirm() {
    dispatch({ type: 'LIKE_ITEM_WITH_REASONS', item, reasons: selectedReasons })
    setFlipped(false)
    setSelectedReasons([])
  }

  function handleSkip() {
    dispatch({ type: 'SKIP_ITEM' })
    setFlipped(false)
    setSelectedReasons([])
  }

  return (
    <div className={styles.scene}>
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>

        {/* ── FRONT ── */}
        <div
          className={styles.front}
          onClick={handleCardClick}
          role="button"
          aria-label={`Explore ${item.name}`}
        >
          <PhotoCarousel
            photos={photos}
            fallbackGradient={item.gradient}
            loading={loadingPhotos}
          />

          <div className={styles.frontInfo}>
            <div className={styles.seasonTags}>
              {item.seasons.map((s) => (
                <span key={s} className={styles.seasonTag}>{s}</span>
              ))}
            </div>
            <h2 className={styles.itemName}>{item.name}</h2>
            <p className={styles.itemDesc}>{item.description}</p>
            <div className={styles.tapHint}>
              <span>Tap to explore</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className={styles.back}>
          <div className={styles.backHeader}>
            <button
              className={styles.backFlipBtn}
              onClick={() => setFlipped(false)}
              aria-label="View photos"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span className={styles.backEmoji}>{item.emoji}</span>
            <div>
              <h3 className={styles.backTitle}>{item.name}</h3>
              <p className={styles.backSubtitle}>What draws you to this?</p>
            </div>
          </div>

          <div className={styles.reasonsGrid}>
            {reasonTags.map((reason) => (
              <button
                key={reason}
                className={`${styles.reasonTag} ${selectedReasons.includes(reason) ? styles.selected : ''}`}
                onClick={() => toggleReason(reason)}
              >
                {reason}
              </button>
            ))}
          </div>

          <div className={styles.backActions}>
            <button className={styles.skipBtn} onClick={handleSkip}>
              Not for me
            </button>
            <button
              className={styles.confirmBtn}
              onClick={handleConfirm}
              disabled={selectedReasons.length === 0}
            >
              {selectedReasons.length === 0 ? 'Pick at least one' : `Love it  (${selectedReasons.length})`}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
