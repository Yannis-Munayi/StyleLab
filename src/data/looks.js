// Curated outfit combinations per aesthetic.
// pieces: item IDs from categories.js
// pexelsQuery: used to pull an outfit photo

export const LOOKS = {
  streetwear: [
    {
      id: 'sw-1', name: 'Classic Street',
      vibe: 'Oversized layers, bold and urban',
      seasons: ['spring', 'fall'],
      pieces: ['bomber', 'baggy-jeans', 'high-tops', 'graphic-tee'],
      pexelsQuery: 'mens streetwear bomber jacket baggy jeans outfit',
    },
    {
      id: 'sw-2', name: 'Heatwave Edit',
      vibe: 'Summer streets, minimal but loud',
      seasons: ['summer'],
      pieces: ['graphic-tee', 'cargo', 'chunky-sneakers', 'baseball-cap'],
      pexelsQuery: 'mens streetwear summer outfit cargo pants sneakers',
    },
    {
      id: 'sw-3', name: 'Cold Weather Flex',
      vibe: 'Puffer up, stay fresh',
      seasons: ['fall', 'winter'],
      pieces: ['puffer', 'hoodie', 'joggers', 'high-tops', 'beanie'],
      pexelsQuery: 'mens streetwear winter puffer jacket hoodie outfit',
    },
    {
      id: 'sw-4', name: 'Clean Casual',
      vibe: 'Understated logos, quality basics',
      seasons: ['spring', 'fall'],
      pieces: ['plain-tee', 'slim-jeans', 'clean-sneakers', 'crossbody'],
      pexelsQuery: 'mens clean casual streetwear outfit minimal',
    },
  ],

  oldmoney: [
    {
      id: 'om-1', name: 'Weekend in the Hamptons',
      vibe: 'Effortless old-world polish',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'chinos', 'loafers', 'watch'],
      pexelsQuery: 'mens old money aesthetic linen shirt chinos loafers',
    },
    {
      id: 'om-2', name: 'The Country Club',
      vibe: 'Heritage patterns, clean silhouettes',
      seasons: ['fall', 'winter'],
      pieces: ['peacoat', 'cable-knit', 'pleated', 'chelsea-boots', 'scarf'],
      pexelsQuery: 'mens old money quiet luxury peacoat outfit',
    },
    {
      id: 'om-3', name: 'Understated Office',
      vibe: 'Quiet authority, zero logos',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'turtleneck', 'pleated', 'dress-shoes', 'watch'],
      pexelsQuery: 'mens quiet luxury office minimalist turtleneck blazer',
    },
    {
      id: 'om-4', name: 'The Estate Walk',
      vibe: 'Autumn layers done right',
      seasons: ['fall'],
      pieces: ['overcoat', 'crewneck', 'raw-denim', 'loafers'],
      pexelsQuery: 'mens old money overcoat autumn outfit',
    },
  ],

  preppy: [
    {
      id: 'pp-1', name: 'Campus Classic',
      vibe: 'Ivy League without the tuition',
      seasons: ['fall', 'spring'],
      pieces: ['blazer', 'oxford', 'chinos', 'loafers', 'leather-belt'],
      pexelsQuery: 'mens preppy ivy league blazer chinos loafers outfit',
    },
    {
      id: 'pp-2', name: 'Summer Regatta',
      vibe: 'Yacht-ready, breezy and bright',
      seasons: ['summer'],
      pieces: ['polo', 'shorts', 'clean-sneakers', 'watch', 'sunglasses'],
      pexelsQuery: 'mens preppy summer polo shorts clean sneakers',
    },
    {
      id: 'pp-3', name: 'Autumn Prep',
      vibe: 'Layered knits, heritage tartans',
      seasons: ['fall', 'winter'],
      pieces: ['quilted', 'knit-vest', 'oxford', 'chinos', 'work-boots'],
      pexelsQuery: 'mens preppy fall quilted jacket sweater vest outfit',
    },
  ],

  minimalist: [
    {
      id: 'min-1', name: 'Monochrome Black',
      vibe: 'All-black, nothing extra',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'turtleneck', 'slim-jeans', 'chelsea-boots'],
      pexelsQuery: 'mens minimalist all black outfit monochrome turtleneck',
    },
    {
      id: 'min-2', name: 'Tonal Beige',
      vibe: 'Neutral tones stacked deliberately',
      seasons: ['spring', 'fall'],
      pieces: ['trench', 'crewneck', 'chinos', 'clean-sneakers', 'watch'],
      pexelsQuery: 'mens minimalist neutral beige tonal outfit trench coat',
    },
    {
      id: 'min-3', name: 'Summer Clean',
      vibe: 'White tee, straight pants — done',
      seasons: ['summer'],
      pieces: ['plain-tee', 'linen-trousers', 'sandals', 'sunglasses'],
      pexelsQuery: 'mens minimalist summer white tee linen trousers outfit',
    },
  ],

  darkacademia: [
    {
      id: 'da-1', name: 'Candlelit Scholar',
      vibe: 'Tweed and turtlenecks in autumn light',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'turtleneck', 'pleated', 'dress-shoes', 'scarf'],
      pexelsQuery: 'mens dark academia blazer turtleneck outfit aesthetic',
    },
    {
      id: 'da-2', name: 'The Brooding Poet',
      vibe: 'Layers that reference the library',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'knit-vest', 'oxford', 'raw-denim', 'chelsea-boots'],
      pexelsQuery: 'mens dark academia overcoat vintage outfit moody',
    },
    {
      id: 'da-3', name: 'Autumn Afternoon',
      vibe: 'Warm browns and burgundy',
      seasons: ['fall'],
      pieces: ['peacoat', 'cable-knit', 'slim-jeans', 'work-boots', 'scarf'],
      pexelsQuery: 'mens dark academia peacoat cable knit autumn aesthetic',
    },
  ],

  grunge: [
    {
      id: 'gr-1', name: 'Pacific Northwest',
      vibe: 'Flannel, rips, and confidence',
      seasons: ['fall', 'spring'],
      pieces: ['flannel', 'graphic-tee', 'baggy-jeans', 'combat-boots', 'beanie'],
      pexelsQuery: 'mens grunge flannel ripped jeans combat boots outfit',
    },
    {
      id: 'gr-2', name: 'Band Tee Blueprint',
      vibe: 'Layered distress, zero effort (by design)',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'combat-boots'],
      pexelsQuery: 'mens grunge leather jacket band tee jeans outfit',
    },
    {
      id: 'gr-3', name: 'Winter Grunge',
      vibe: 'Heavy layers, dark palette',
      seasons: ['winter', 'fall'],
      pieces: ['denim-jacket', 'hoodie', 'baggy-jeans', 'work-boots'],
      pexelsQuery: 'mens grunge winter denim jacket hoodie dark outfit',
    },
  ],

  vintage: [
    {
      id: 'vt-1', name: 'Thrift Score',
      vibe: 'Pulled from every decade at once',
      seasons: ['fall', 'spring'],
      pieces: ['varsity', 'graphic-tee', 'wide-leg', 'chunky-sneakers', 'bucket-hat'],
      pexelsQuery: 'mens vintage thrift retro outfit aesthetic',
    },
    {
      id: 'vt-2', name: '70s Saturday',
      vibe: 'Wide legs, earth tones, suede vibes',
      seasons: ['spring', 'fall'],
      pieces: ['shearling', 'flannel', 'wide-leg', 'cowboy-boots'],
      pexelsQuery: 'mens vintage 70s retro wide leg outfit aesthetic',
    },
    {
      id: 'vt-3', name: '90s Revival',
      vibe: 'Washed colour, oversized everything',
      seasons: ['spring', 'summer', 'fall'],
      pieces: ['denim-jacket', 'graphic-tee', 'baggy-jeans', 'chunky-sneakers'],
      pexelsQuery: 'mens 90s vintage denim jacket baggy jeans aesthetic',
    },
  ],

  techwear: [
    {
      id: 'tw-1', name: 'Urban Operator',
      vibe: 'All black, maximum utility',
      seasons: ['fall', 'winter'],
      pieces: ['windbreaker', 'cargo', 'trail-runners', 'crossbody', 'beanie'],
      pexelsQuery: 'mens techwear all black utility outfit aesthetic',
    },
    {
      id: 'tw-2', name: 'City Ninja',
      vibe: 'Technical fabrics meet fashion',
      seasons: ['spring', 'fall'],
      pieces: ['anorak', 'cargo', 'high-tops', 'crossbody'],
      pexelsQuery: 'mens techwear ninja city outfit cargo pants jacket',
    },
  ],

  gorpcore: [
    {
      id: 'gc-1', name: 'Trail to Café',
      vibe: 'Performance gear, daily wear',
      seasons: ['spring', 'fall'],
      pieces: ['fleece', 'cargo', 'trail-runners', 'baseball-cap'],
      pexelsQuery: 'mens gorpcore trail fleece cargo pants outdoor outfit',
    },
    {
      id: 'gc-2', name: 'Mountain Ready',
      vibe: 'Layered for anything',
      seasons: ['fall', 'winter'],
      pieces: ['anorak', 'zip-sweater', 'shorts', 'trail-runners'],
      pexelsQuery: 'mens gorpcore outdoor adventure fleece outfit',
    },
  ],

  hiphop: [
    {
      id: 'hh-1', name: 'Gold Era',
      vibe: 'Chains, crisp tees, fresh kicks',
      seasons: ['spring', 'summer'],
      pieces: ['graphic-tee', 'baggy-jeans', 'high-tops', 'baseball-cap', 'chain-necklace'],
      pexelsQuery: 'mens hip hop outfit gold chain baggy jeans sneakers',
    },
    {
      id: 'hh-2', name: 'Trap Modern',
      vibe: 'Designer references, relaxed silhouettes',
      seasons: ['fall', 'winter'],
      pieces: ['puffer', 'hoodie', 'cargo', 'chunky-sneakers', 'chain-necklace'],
      pexelsQuery: 'mens hip hop modern puffer jacket outfit trap aesthetic',
    },
    {
      id: 'hh-3', name: 'Stadium Ready',
      vibe: 'Track meets street',
      seasons: ['spring', 'fall'],
      pieces: ['track-jacket', 'joggers', 'high-tops', 'baseball-cap'],
      pexelsQuery: 'mens hip hop tracksuit track jacket sneakers outfit',
    },
  ],

  punk: [
    {
      id: 'pu-1', name: 'Leather & Studs',
      vibe: 'The original punk blueprint',
      seasons: ['fall', 'spring'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'combat-boots', 'chain-necklace'],
      pexelsQuery: 'mens punk leather jacket studs combat boots outfit',
    },
    {
      id: 'pu-2', name: 'Plaid Riot',
      vibe: 'Flannel as protest gear',
      seasons: ['fall', 'winter'],
      pieces: ['flannel', 'leather-jacket', 'baggy-jeans', 'combat-boots'],
      pexelsQuery: 'mens punk plaid flannel jacket ripped jeans outfit',
    },
  ],

  workwear: [
    {
      id: 'ww-1', name: 'American Heritage',
      vibe: 'Durable classics done with intention',
      seasons: ['fall', 'spring'],
      pieces: ['denim-jacket', 'flannel', 'raw-denim', 'work-boots', 'leather-belt'],
      pexelsQuery: 'mens workwear heritage denim jacket raw denim boots outfit',
    },
    {
      id: 'ww-2', name: 'Utility Blues',
      vibe: 'Hard-wearing, soft layering',
      seasons: ['fall', 'winter'],
      pieces: ['field-jacket', 'henley', 'cargo', 'work-boots', 'beanie'],
      pexelsQuery: 'mens workwear utility field jacket cargo pants outfit',
    },
    {
      id: 'ww-3', name: 'Off the Clock',
      vibe: 'Work codes worn casually',
      seasons: ['spring', 'fall'],
      pieces: ['shearling', 'plain-tee', 'raw-denim', 'work-boots'],
      pexelsQuery: 'mens workwear shearling jacket jeans boots casual outfit',
    },
  ],

  softboy: [
    {
      id: 'sb-1', name: 'Pastel Layers',
      vibe: 'Soft tones, gentle oversizing',
      seasons: ['spring', 'fall'],
      pieces: ['cardigan', 'plain-tee', 'wide-leg', 'clean-sneakers'],
      pexelsQuery: 'mens softboy pastel cardigan wide leg pants aesthetic',
    },
    {
      id: 'sb-2', name: 'Knitwear Season',
      vibe: 'Cozy textures, muted palette',
      seasons: ['fall', 'winter'],
      pieces: ['mohair-sweater', 'knit-vest', 'slim-jeans', 'loafers'],
      pexelsQuery: 'mens soft aesthetic mohair sweater knit vest outfit',
    },
  ],

  military: [
    {
      id: 'mi-1', name: 'Surplus Edit',
      vibe: 'Khaki and olive, lived-in utility',
      seasons: ['fall', 'spring'],
      pieces: ['field-jacket', 'plain-tee', 'cargo', 'work-boots', 'beanie'],
      pexelsQuery: 'mens military surplus field jacket cargo pants aesthetic',
    },
    {
      id: 'mi-2', name: 'Desert Tone',
      vibe: 'Warm neutrals, tactical silhouettes',
      seasons: ['spring', 'summer'],
      pieces: ['anorak', 'plain-tee', 'shorts', 'trail-runners'],
      pexelsQuery: 'mens military desert tan utility outfit aesthetic',
    },
  ],

  indie: [
    {
      id: 'in-1', name: 'Record Store Regular',
      vibe: 'Vintage-influenced, deeply personal',
      seasons: ['fall', 'spring'],
      pieces: ['denim-jacket', 'graphic-tee', 'slim-jeans', 'work-boots', 'tote-bag'],
      pexelsQuery: 'mens indie alternative denim jacket slim jeans aesthetic',
    },
    {
      id: 'in-2', name: 'Bedroom Pop',
      vibe: 'Cozy and a little left of centre',
      seasons: ['fall', 'winter'],
      pieces: ['cardigan', 'henley', 'wide-leg', 'chunky-sneakers'],
      pexelsQuery: 'mens indie bedroom pop cardigan wide leg outfit aesthetic',
    },
  ],

  business: [
    {
      id: 'bc-1', name: 'Modern Professional',
      vibe: 'Sharp without a tie',
      seasons: ['fall', 'winter', 'spring'],
      pieces: ['blazer', 'oxford', 'pleated', 'chelsea-boots', 'watch'],
      pexelsQuery: 'mens business casual modern blazer oxford shirt outfit',
    },
    {
      id: 'bc-2', name: 'Elevated Casual',
      vibe: 'Relaxed Friday energy, still polished',
      seasons: ['fall', 'spring'],
      pieces: ['trench', 'polo', 'chinos', 'loafers'],
      pexelsQuery: 'mens business casual smart casual chinos loafers outfit',
    },
  ],

  cottagecore: [
    {
      id: 'cc-1', name: 'Country Morning',
      vibe: 'Linen, earth tones, sun-drenched',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'linen-trousers', 'sandals', 'tote-bag'],
      pexelsQuery: 'mens cottagecore linen shirt linen trousers pastoral aesthetic',
    },
    {
      id: 'cc-2', name: 'Autumn Cottage',
      vibe: 'Soft knits, warm textures',
      seasons: ['fall'],
      pieces: ['cardigan', 'cable-knit', 'slim-jeans', 'work-boots', 'scarf'],
      pexelsQuery: 'mens cottagecore autumn cardigan knit sweater outfit',
    },
  ],

  y2k: [
    {
      id: 'y2-1', name: 'Turn of the Millennium',
      vibe: 'Low-rise, shiny, and proud',
      seasons: ['spring', 'summer'],
      pieces: ['crop-top', 'baggy-jeans', 'chunky-sneakers', 'sunglasses'],
      pexelsQuery: 'mens y2k fashion 2000s aesthetic outfit crop top jeans',
    },
    {
      id: 'y2-2', name: 'Track Star',
      vibe: 'Velour or nylon, colourblock everything',
      seasons: ['spring', 'fall'],
      pieces: ['track-jacket', 'joggers', 'platform-shoes', 'chain-necklace'],
      pexelsQuery: 'mens y2k 2000s tracksuit colourblock outfit aesthetic',
    },
  ],
}

// Get looks for an aesthetic, filtered by season and/or required pieces
export function getLooks(aestheticId, { season = null, requiredPieces = [] } = {}) {
  const all = LOOKS[aestheticId] ?? []
  return all.filter((look) => {
    if (season && !look.seasons.includes(season)) return false
    if (requiredPieces.length > 0 && !requiredPieces.every((p) => look.pieces.includes(p))) return false
    return true
  })
}

// All unique pieces that appear in any look for an aesthetic
export function getLookPieces(aestheticId) {
  const all = LOOKS[aestheticId] ?? []
  const seen = new Set()
  for (const look of all) for (const p of look.pieces) seen.add(p)
  return [...seen]
}
