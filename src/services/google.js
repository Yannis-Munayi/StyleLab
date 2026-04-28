const cache = new Map()
let disabled = false  // circuit breaker: flips true on first auth/quota failure

/**
 * Fetch `count` image URLs from Google Custom Search for a given query.
 * Returns an array of image URL strings, or [] on failure / missing keys.
 *
 * Required env vars:
 *   VITE_GOOGLE_API_KEY  — Google Cloud API key with Custom Search API enabled
 *   VITE_GOOGLE_CX       — Programmable Search Engine ID (cx)
 *
 * Image search must be enabled on your Custom Search Engine at:
 *   https://programmablesearchengine.google.com → Edit → Image search: ON
 */
export async function fetchPhotos(query, count = 3) {
  const key = import.meta.env.VITE_GOOGLE_API_KEY
  const cx  = import.meta.env.VITE_GOOGLE_CX
  if (!key || !cx || disabled) return []

  const cacheKey = `${query}:${count}`
  if (cache.has(cacheKey)) return cache.get(cacheKey)

  try {
    const params = new URLSearchParams({
      key,
      cx,
      q: query,
      searchType: 'image',
      num: String(count),
      imgSize: 'large',
      imgType: 'photo',
      safe: 'active',
    })
    const res = await fetch(`https://www.googleapis.com/customsearch/v1?${params}`)
    if (res.status === 403 || res.status === 401 || res.status === 429) {
      // Auth failure or quota exceeded — stop trying for this session
      disabled = true
      return []
    }
    if (!res.ok) return []
    const data = await res.json()
    const urls = (data.items ?? []).map((item) => item.link)
    cache.set(cacheKey, urls)
    return urls
  } catch {
    return []
  }
}
