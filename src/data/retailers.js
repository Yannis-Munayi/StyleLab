// ── Retailer pool ────────────────────────────────────────────────────────────
// categories: 'all' | string[]  (category IDs from categories.js)
// priceTier:  'budget' | 'mid' | 'premium' | 'luxury'  (one or more)

const RETAILER_POOL = [
  // ── General / multi-category ──────────────────────────────────────────────
  {
    id: 'asos', name: 'ASOS', emoji: '🛍️',
    tagline: 'Massive selection, free returns, fast delivery',
    priceTier: ['budget', 'mid'],
    categories: 'all',
    url: (q) => `https://www.asos.com/men/search/?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'nordstrom', name: 'Nordstrom', emoji: '🏬',
    tagline: 'Top brand selection with free shipping & returns',
    priceTier: ['mid', 'premium'],
    categories: 'all',
    url: (q) => `https://www.nordstrom.com/sr?keyword=${encodeURIComponent(q)}&filterByGender=Men`,
  },
  {
    id: 'ssense', name: 'SSENSE', emoji: '⬜',
    tagline: 'Designer & contemporary labels, curated edit',
    priceTier: ['premium', 'luxury'],
    categories: 'all',
    url: (q) => `https://www.ssense.com/en-us/men/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'mrporter', name: 'Mr Porter', emoji: '👔',
    tagline: 'The destination for luxury menswear',
    priceTier: ['premium', 'luxury'],
    categories: 'all',
    url: (q) => `https://www.mrporter.com/en-us/mens/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'farfetch', name: 'Farfetch', emoji: '🌍',
    tagline: 'Global luxury boutiques and designer labels',
    priceTier: ['premium', 'luxury'],
    categories: 'all',
    url: (q) => `https://www.farfetch.com/shopping/men/search/items.aspx?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'grailed', name: 'Grailed', emoji: '♻️',
    tagline: 'Secondhand designer & hype pieces for less',
    priceTier: ['budget', 'mid', 'premium'],
    categories: 'all',
    url: (q) => `https://www.grailed.com/shop/search?query=${encodeURIComponent(q)}`,
  },

  // ── Budget / everyday ─────────────────────────────────────────────────────
  {
    id: 'hm', name: 'H&M', emoji: '🏷️',
    tagline: 'Affordable everyday essentials & trend pieces',
    priceTier: ['budget'],
    categories: ['tops', 'bottoms', 'knitwear', 'accessories', 'outerwear'],
    url: (q) => `https://www2.hm.com/en_us/men/search-results.html?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'zara', name: 'Zara', emoji: '🖤',
    tagline: 'Trend-forward pieces at accessible prices',
    priceTier: ['budget', 'mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'formalwear', 'knitwear', 'accessories'],
    url: (q) => `https://www.zara.com/us/en/search?searchTerm=${encodeURIComponent(q)}`,
  },
  {
    id: 'uniqlo', name: 'Uniqlo', emoji: '🇯🇵',
    tagline: 'High-quality basics, excellent Japanese materials',
    priceTier: ['budget', 'mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'knitwear', 'accessories'],
    url: (q) => `https://www.uniqlo.com/us/en/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'urbanoutfitters', name: 'Urban Outfitters', emoji: '🏙️',
    tagline: 'Indie, streetwear & vintage-inspired picks',
    priceTier: ['budget', 'mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'accessories', 'footwear'],
    url: (q) => `https://www.urbanoutfitters.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'pacsun', name: 'PacSun', emoji: '🌊',
    tagline: 'Surf, skate & streetwear essentials',
    priceTier: ['budget', 'mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'accessories'],
    url: (q) => `https://www.pacsun.com/search?q=${encodeURIComponent(q)}`,
  },

  // ── Mid-range ─────────────────────────────────────────────────────────────
  {
    id: 'jcrew', name: "J.Crew", emoji: '🟦',
    tagline: 'Preppy classics & quality tailoring',
    priceTier: ['mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'knitwear', 'formalwear', 'accessories'],
    url: (q) => `https://www.jcrew.com/search?Nrpp=48&query=${encodeURIComponent(q)}`,
  },
  {
    id: 'bananarepublic', name: 'Banana Republic', emoji: '🌿',
    tagline: 'Polished business casual & smart separates',
    priceTier: ['mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'formalwear', 'knitwear'],
    url: (q) => `https://bananarepublic.gap.com/browse/search.do?searchText=${encodeURIComponent(q)}`,
  },
  {
    id: 'abercrombie', name: 'Abercrombie & Fitch', emoji: '🌲',
    tagline: 'Modern American classics with great fits',
    priceTier: ['mid'],
    categories: ['tops', 'bottoms', 'outerwear', 'knitwear'],
    url: (q) => `https://www.abercrombie.com/shop/us/mens-search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'revolve', name: 'Revolve', emoji: '🌀',
    tagline: 'Trend-focused mid-to-premium labels',
    priceTier: ['mid', 'premium'],
    categories: ['tops', 'bottoms', 'outerwear', 'accessories'],
    url: (q) => `https://www.revolve.com/mens/br/ebc8df/?navsrc=left&q=${encodeURIComponent(q)}`,
  },
  {
    id: 'endclothing', name: 'END Clothing', emoji: '🎯',
    tagline: 'Exclusive drops, premium streetwear & sportswear',
    priceTier: ['mid', 'premium'],
    categories: ['tops', 'bottoms', 'outerwear', 'footwear', 'accessories'],
    url: (q) => `https://www.endclothing.com/us/catalogsearch/result/?q=${encodeURIComponent(q)}`,
  },

  // ── Activewear-specific ───────────────────────────────────────────────────
  {
    id: 'nike', name: 'Nike', emoji: '✔️',
    tagline: 'Performance & iconic streetwear style',
    priceTier: ['mid', 'premium'],
    categories: ['activewear', 'footwear'],
    url: (q) => `https://www.nike.com/w?q=${encodeURIComponent(q)}&vst=${encodeURIComponent(q)}`,
  },
  {
    id: 'adidas', name: 'Adidas', emoji: '3️⃣',
    tagline: 'Sport performance & iconic three-stripe style',
    priceTier: ['mid'],
    categories: ['activewear', 'footwear', 'tops', 'bottoms'],
    url: (q) => `https://www.adidas.com/us/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'lululemon', name: 'Lululemon', emoji: '🧘',
    tagline: 'Premium athletic wear with technical fabrics',
    priceTier: ['premium'],
    categories: ['activewear'],
    url: (q) => `https://www.lululemon.com/en-us/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'gymshark', name: 'Gymshark', emoji: '🦈',
    tagline: 'Gym-focused performance & lifestyle gear',
    priceTier: ['mid'],
    categories: ['activewear'],
    url: (q) => `https://www.gymshark.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'underarmour', name: 'Under Armour', emoji: '🔒',
    tagline: 'High-performance training gear',
    priceTier: ['mid'],
    categories: ['activewear'],
    url: (q) => `https://www.underarmour.com/en-us/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'newbalance', name: 'New Balance', emoji: '🔵',
    tagline: 'Athletic performance & retro street style',
    priceTier: ['mid'],
    categories: ['activewear', 'footwear'],
    url: (q) => `https://www.newbalance.com/search?q=${encodeURIComponent(q)}`,
  },

  // ── Formalwear-specific ───────────────────────────────────────────────────
  {
    id: 'suitsupply', name: 'Suitsupply', emoji: '🤵',
    tagline: 'Best-value suits & tailored separates',
    priceTier: ['mid', 'premium'],
    categories: ['formalwear'],
    url: (q) => `https://www.suitsupply.com/en-us/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'charlestyrwhitt', name: 'Charles Tyrwhitt', emoji: '🏛️',
    tagline: 'Premium shirts, suits & formal essentials',
    priceTier: ['mid'],
    categories: ['formalwear', 'tops'],
    url: (q) => `https://www.charlestyrwhitt.com/us/search?q=${encodeURIComponent(q)}`,
  },

  // ── Footwear-specific ─────────────────────────────────────────────────────
  {
    id: 'footlocker', name: 'Foot Locker', emoji: '👟',
    tagline: 'Sneakers & athletic footwear',
    priceTier: ['mid'],
    categories: ['footwear'],
    url: (q) => `https://www.footlocker.com/search?query=${encodeURIComponent(q)}`,
  },
  {
    id: 'jdsports', name: 'JD Sports', emoji: '🏃',
    tagline: 'Trainer culture & athleisure footwear',
    priceTier: ['budget', 'mid'],
    categories: ['footwear', 'activewear'],
    url: (q) => `https://www.jdsports.com/search?q=${encodeURIComponent(q)}`,
  },
]

// ── Filter options ────────────────────────────────────────────────────────────

export const PRICE_RANGES = ['Under $50', '$50 – $150', '$150 – $300', '$300+']
export const MATERIALS    = ['Cotton', 'Wool', 'Linen', 'Silk', 'Denim', 'Leather', 'Cashmere', 'Nylon', 'Polyester blend']
export const COLOURS      = ['White', 'Black', 'Grey', 'Navy', 'Brown', 'Beige', 'Olive', 'Green', 'Blue', 'Burgundy', 'Red']
export const SIZES        = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

// Fit options vary by category
export const FIT_OPTIONS = {
  outerwear:   ['Slim', 'Regular', 'Oversized'],
  tops:        ['Slim', 'Regular', 'Oversized'],
  bottoms:     ['Skinny', 'Slim', 'Regular', 'Relaxed', 'Wide-leg'],
  knitwear:    ['Slim', 'Regular', 'Oversized'],
  activewear:  ['Compression', 'Regular', 'Relaxed'],
  formalwear:  ['Slim cut', 'Classic cut', 'Modern fit'],
  footwear:    null,
  accessories: null,
}

// ── Price tier mapping ────────────────────────────────────────────────────────
const PRICE_TIER_MAP = {
  'Under $50':   'budget',
  '$50 – $150':  'mid',
  '$150 – $300': 'premium',
  '$300+':       'luxury',
}

// ── Build search query from item + filters ────────────────────────────────────
function buildQuery(item, filters) {
  const parts = [item.name]
  if (filters.colour   && filters.colour   !== 'Any') parts.push(filters.colour)
  if (filters.material && filters.material !== 'Any') parts.push(filters.material)
  if (filters.fit      && filters.fit      !== 'Any') parts.push(filters.fit)
  parts.push('men')
  return parts.join(' ')
}

// ── Main export: get top 10 retailers for an item + filters ───────────────────
export function getRetailersForItem(item, filters) {
  const query     = buildQuery(item, filters)
  const priceTier = filters.priceRange ? PRICE_TIER_MAP[filters.priceRange] : null

  // Pool: retailers that cover this category (or 'all')
  let pool = RETAILER_POOL.filter(
    (r) => r.categories === 'all' || r.categories.includes(item.categoryId)
  )

  // Narrow by price tier if selected and enough results remain
  if (priceTier) {
    const byPrice = pool.filter((r) => r.priceTier.includes(priceTier))
    if (byPrice.length >= 5) pool = byPrice
  }

  // Prioritise category-specific retailers, then general ones
  const specific = pool.filter((r) => r.categories !== 'all')
  const general  = pool.filter((r) => r.categories === 'all')
  const ordered  = [...specific, ...general]

  // Deduplicate and cap at 10.
  // Only keep serializable fields — strip `url` (function) and internal
  // filtering metadata so entries can be saved to Firestore without error.
  const seen   = new Set()
  const result = []
  for (const r of ordered) {
    if (!seen.has(r.id) && result.length < 10) {
      seen.add(r.id)
      result.push({
        id:        r.id,
        name:      r.name,
        emoji:     r.emoji,
        tagline:   r.tagline,
        searchUrl: r.url(query),
      })
    }
  }
  return result
}
