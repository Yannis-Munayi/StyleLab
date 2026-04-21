const cache = new Map()

export async function fetchPhotos(query, count = 1) {
  const key = import.meta.env.VITE_PEXELS_KEY
  if (!key) return []

  const cacheKey = `${query}:${count}`
  if (cache.has(cacheKey)) return cache.get(cacheKey)

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count}&orientation=portrait`,
      { headers: { Authorization: key } }
    )
    if (!res.ok) return []
    const data = await res.json()
    const urls = (data.photos ?? []).map((p) => p.src.large)
    cache.set(cacheKey, urls)
    return urls
  } catch {
    return []
  }
}

// Tries each query in order, returns the first that has results.
export async function fetchPhotosWithFallback(queries, count = 1) {
  for (const query of queries) {
    const urls = await fetchPhotos(query, count)
    if (urls.length > 0) return urls
  }
  return []
}
