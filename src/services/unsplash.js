// In-memory cache so we don't re-fetch the same query during a session
const cache = new Map()

/**
 * Fetch up to `count` portrait photo URLs from Unsplash for a given query.
 * Returns an array of image URLs, or [] if the key is missing / request fails.
 */
export async function fetchPhotos(query, count = 3) {
  const key = import.meta.env.VITE_UNSPLASH_KEY
  if (!key) return []

  const cacheKey = `${query}:${count}`
  if (cache.has(cacheKey)) return cache.get(cacheKey)

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=portrait`,
      { headers: { Authorization: `Client-ID ${key}` } }
    )
    if (!res.ok) return []
    const data = await res.json()
    const urls = (data.results ?? []).map((p) => p.urls.regular)
    cache.set(cacheKey, urls)
    return urls
  } catch {
    return []
  }
}
