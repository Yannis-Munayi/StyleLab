// ── Label Weights ─────────────────────────────────────────────────────────────
// Each label maps to which aesthetics it signals and how strongly (1-3).
// Used in recalculateScores: when a user likes an item, all its labels fire.

export const LABEL_WEIGHTS = {
  // Elegance / refinement
  elegant:      { oldmoney: 2, minimalist: 1, eurochic: 2, romantic: 1, businesscasual: 1, silksatin: 1, royalcore: 1 },
  elevated:     { oldmoney: 2, eurochic: 2, preppy: 1, minimalist: 1, businesscasual: 1 },
  refined:      { oldmoney: 3, minimalist: 2, scandi: 1, eurochic: 2 },
  polished:     { oldmoney: 2, businesscasual: 2, eurochic: 1, preppy: 1, cleangirl: 1 },
  luxe:         { oldmoney: 2, silksatin: 2, maximalist: 1, eurochic: 1, royalcore: 2 },
  opulent:      { royalcore: 3, maximalist: 2, silksatin: 1 },
  timeless:     { oldmoney: 2, minimalist: 1, preppy: 1, eurochic: 1, vintage: 1 },

  // Clean / minimal
  minimal:      { minimalist: 3, scandi: 2, cleangirl: 2, normcore: 1 },
  clean:        { minimalist: 2, cleangirl: 3, scandi: 1, normcore: 1, preppy: 1 },
  understated:  { minimalist: 2, oldmoney: 2, scandi: 1, cleangirl: 1 },
  effortless:   { cleangirl: 2, scandi: 2, normcore: 1, eurochic: 1, linencore: 1 },

  // Casual / relaxed
  casual:       { normcore: 2, indie: 1, softboy: 1, cottagecore: 1, streetwear: 1, skater: 1 },
  relaxed:      { normcore: 2, gorpcore: 1, boho: 1, cottagecore: 1, softboy: 1, linencore: 2 },
  easygoing:    { normcore: 2, linencore: 2, coastalgrandma: 2, boho: 1 },

  // Structured / tailored
  structured:   { businesscasual: 2, oldmoney: 1, minimalist: 1, eurochic: 1 },
  tailored:     { oldmoney: 2, businesscasual: 2, eurochic: 2, minimalist: 1, preppy: 1 },
  sharp:        { businesscasual: 2, eurochic: 1, oldmoney: 1, minimalist: 1 },

  // Bold / expressive
  bold:         { maximalist: 2, streetwear: 1, hiphop: 1, baddie: 1, edgy: 1, punk: 1 },
  statement:    { maximalist: 3, baddie: 2, royalcore: 1, harajuku: 1 },
  expressive:   { maximalist: 2, arthoe: 2, harajuku: 2, scene: 1 },
  dramatic:     { goth: 2, royalcore: 2, maximalist: 2 },

  // Oversized / fit
  oversized:    { streetwear: 2, hiphop: 2, softboy: 1, y2k: 1, grunge: 1 },
  baggy:        { streetwear: 2, hiphop: 3, skater: 2 },
  flowy:        { boho: 2, romantic: 2, fairycore: 2, cottagecore: 1 },
  fitted:       { minimalist: 1, businesscasual: 1, edgy: 1, cleangirl: 1 },

  // Edge / rebellion
  edgy:         { edgy: 3, punk: 2, goth: 1, grunge: 1, leatheraesthetic: 1 },
  rebellious:   { punk: 3, grunge: 2, edgy: 2 },
  raw:          { grunge: 3, punk: 2, workwear: 1 },
  distressed:   { grunge: 3, punk: 2, edgy: 1 },
  rock:         { rockstar: 3, punk: 2, grunge: 1 },

  // Dark / gothic / moody
  dark:         { goth: 3, darkacademia: 2, grunge: 1, emo: 2, edgy: 1 },
  moody:        { darkacademia: 3, goth: 2, grunge: 1, emo: 1 },
  gothic:       { goth: 3, darkacademia: 1, emo: 2, punk: 1 },

  // Classic / heritage
  classic:      { oldmoney: 2, preppy: 2, vintage: 1, businesscasual: 1 },
  heritage:     { oldmoney: 2, preppy: 2, workwear: 2, military: 1, western: 1 },
  collegiate:   { preppy: 3, darkacademia: 2, lightacademia: 2 },
  preppy:       { preppy: 3, oldmoney: 1, lightacademia: 1 },
  academic:     { darkacademia: 3, lightacademia: 3, preppy: 1 },
  scholarly:    { darkacademia: 3, lightacademia: 2 },

  // Street / urban
  streetwear:   { streetwear: 3, hiphop: 2, skater: 1 },
  urban:        { streetwear: 2, hiphop: 2, techwear: 1, skater: 1 },
  graphic:      { streetwear: 2, hiphop: 1, punk: 1, skater: 1, arthoe: 1 },
  hype:         { streetwear: 2, hiphop: 2, skater: 1 },

  // Athletic / performance
  athletic:     { athleisure: 3, gorpcore: 2, hiphop: 1 },
  sporty:       { athleisure: 3, gorpcore: 1, kpop: 1, skater: 1 },
  performance:  { athleisure: 2, gorpcore: 3, outdoor: 2, techwear: 1 },
  active:       { athleisure: 3, gorpcore: 2, outdoor: 2 },

  // Cozy / textured / warm
  cozy:         { softboy: 2, indie: 1, cottagecore: 2, knitwearaesthetic: 2 },
  textured:     { knitwearaesthetic: 3, cottagecore: 1, boho: 1 },
  layered:      { darkacademia: 1, grunge: 1, gorpcore: 1, outdoor: 1, vintage: 1, knitwearaesthetic: 1 },
  warm:         { knitwearaesthetic: 2, softboy: 1, cottagecore: 1 },

  // Soft / romantic / delicate
  romantic:     { romantic: 3, fairycore: 2, cottagecore: 1 },
  feminine:     { romantic: 2, fairycore: 2, baddie: 1, silksatin: 1 },
  delicate:     { romantic: 2, fairycore: 3, lightacademia: 1 },
  soft:         { softboy: 3, romantic: 2, fairycore: 1 },
  whimsical:    { fairycore: 3, harajuku: 2, maximalist: 1 },

  // Earthy / natural
  earthy:       { cottagecore: 2, boho: 2, outdoor: 1, gorpcore: 1, linencore: 2 },
  natural:      { cottagecore: 2, boho: 1, gorpcore: 1, linencore: 3, coastalgrandma: 2 },
  bohemian:     { boho: 3, vintage: 1, cottagecore: 1 },

  // Functional / utility
  functional:   { gorpcore: 2, outdoor: 2, military: 1, techwear: 2, workwear: 2 },
  utility:      { military: 3, workwear: 3, gorpcore: 2, techwear: 2 },
  technical:    { techwear: 3, gorpcore: 2, outdoor: 2 },
  practical:    { gorpcore: 2, workwear: 2, outdoor: 2, normcore: 1 },

  // Artistic / creative / eclectic
  artistic:     { arthoe: 3, boho: 1, maximalist: 1 },
  creative:     { arthoe: 2, harajuku: 2, maximalist: 1 },
  eclectic:     { maximalist: 2, harajuku: 2, boho: 1, scene: 1 },

  // Cute / playful
  cute:         { kpop: 2, harajuku: 2, y2k: 1, fairycore: 1 },
  playful:      { harajuku: 2, kpop: 1, maximalist: 1, scene: 1, y2k: 1 },

  // Vintage / retro
  vintage:      { vintage: 3, indie: 1, grunge: 1 },
  retro:        { vintage: 3, y2k: 2, indie: 1 },
  nostalgic:    { vintage: 2, y2k: 1, indie: 1 },
  thrifted:     { vintage: 3, indie: 2, arthoe: 1, grunge: 1 },

  // Futuristic
  futuristic:   { techwear: 3, cyberpunk: 3, y2k: 1 },
  cyber:        { cyberpunk: 3, techwear: 2 },

  // Silky / luxe fabric
  silky:        { silksatin: 3, romantic: 1, eurochic: 1 },
  satiny:       { silksatin: 3, romantic: 1, baddie: 1 },

  // Rugged
  rugged:       { workwear: 3, gorpcore: 2, western: 2, military: 2 },
  durable:      { workwear: 3, gorpcore: 2, outdoor: 2, military: 1 },

  // Western
  western:      { western: 3 },

  // Premium fabric signals
  premium:      { oldmoney: 2, minimalist: 1, eurochic: 1, silksatin: 1 },
}

// ── Aesthetic → its most characteristic labels ────────────────────────────────
const AESTHETIC_LABEL_HINTS = {
  oldmoney:         ['elegant', 'refined', 'classic', 'elevated', 'timeless', 'luxe', 'polished', 'heritage'],
  minimalist:       ['minimal', 'clean', 'understated', 'structured', 'effortless', 'sharp'],
  maximalist:       ['bold', 'statement', 'eclectic', 'dramatic', 'expressive', 'playful'],
  streetwear:       ['streetwear', 'urban', 'graphic', 'oversized', 'bold', 'hype'],
  athleisure:       ['athletic', 'sporty', 'active', 'functional', 'performance', 'casual'],
  preppy:           ['preppy', 'collegiate', 'classic', 'clean', 'polished', 'heritage'],
  darkacademia:     ['academic', 'moody', 'dark', 'scholarly', 'layered', 'heritage'],
  lightacademia:    ['academic', 'delicate', 'soft', 'romantic', 'earthy', 'collegiate'],
  vintage:          ['vintage', 'retro', 'nostalgic', 'classic', 'heritage', 'thrifted'],
  grunge:           ['grunge', 'raw', 'distressed', 'rebellious', 'dark', 'layered'],
  punk:             ['rebellious', 'edgy', 'rock', 'bold', 'raw', 'distressed'],
  goth:             ['gothic', 'dark', 'dramatic', 'moody', 'edgy', 'structured'],
  emo:              ['dark', 'dramatic', 'edgy', 'rock', 'soft', 'moody'],
  scene:            ['bold', 'playful', 'eclectic', 'graphic', 'dramatic', 'expressive'],
  cottagecore:      ['romantic', 'earthy', 'delicate', 'flowy', 'natural', 'cozy'],
  fairycore:        ['whimsical', 'delicate', 'flowy', 'romantic', 'soft', 'dreamy'],
  boho:             ['bohemian', 'earthy', 'flowy', 'relaxed', 'natural', 'eclectic'],
  techwear:         ['technical', 'futuristic', 'functional', 'utility', 'urban', 'structured'],
  gorpcore:         ['functional', 'active', 'technical', 'performance', 'earthy', 'practical'],
  workwear:         ['heritage', 'utility', 'rugged', 'functional', 'durable', 'classic'],
  military:         ['utility', 'heritage', 'functional', 'structured', 'rugged'],
  western:          ['western', 'heritage', 'rugged', 'bold', 'classic'],
  outdoor:          ['functional', 'active', 'technical', 'earthy', 'performance', 'practical'],
  hiphop:           ['urban', 'bold', 'streetwear', 'oversized', 'graphic', 'hype'],
  skater:           ['casual', 'sporty', 'urban', 'relaxed', 'graphic', 'streetwear'],
  indie:            ['vintage', 'artistic', 'relaxed', 'creative', 'casual', 'thrifted'],
  softboy:          ['soft', 'cozy', 'relaxed', 'romantic', 'layered', 'warm'],
  arthoe:           ['artistic', 'creative', 'vintage', 'eclectic', 'earthy', 'expressive'],
  kpop:             ['cute', 'bold', 'preppy', 'sporty', 'playful', 'polished'],
  harajuku:         ['eclectic', 'bold', 'cute', 'playful', 'whimsical', 'expressive'],
  royalcore:        ['opulent', 'dramatic', 'elegant', 'statement', 'luxe', 'structured'],
  silksatin:        ['silky', 'satiny', 'luxe', 'elegant', 'feminine', 'delicate'],
  romantic:         ['romantic', 'feminine', 'delicate', 'flowy', 'soft', 'whimsical'],
  edgy:             ['edgy', 'bold', 'rebellious', 'dark', 'statement', 'distressed'],
  baddie:           ['bold', 'feminine', 'statement', 'edgy', 'playful', 'urban'],
  cyberpunk:        ['futuristic', 'cyber', 'edgy', 'bold', 'technical', 'urban'],
  steampunk:        ['heritage', 'dramatic', 'eclectic', 'bold', 'vintage', 'opulent'],
  eurochic:         ['elegant', 'effortless', 'refined', 'minimal', 'classic', 'tailored'],
  businesscasual:   ['polished', 'tailored', 'structured', 'classic', 'clean', 'sharp'],
  normcore:         ['casual', 'relaxed', 'clean', 'effortless', 'minimal', 'practical'],
  cleangirl:        ['clean', 'effortless', 'minimal', 'natural', 'soft', 'polished'],
  scandi:           ['minimal', 'clean', 'effortless', 'structured', 'understated', 'timeless'],
  y2k:              ['retro', 'bold', 'playful', 'cute', 'nostalgic', 'expressive'],
  rockstar:         ['rock', 'bold', 'edgy', 'rebellious', 'dramatic', 'statement'],
  leatheraesthetic: ['edgy', 'luxe', 'bold', 'structured', 'rebellious', 'dark'],
  denimcore:        ['casual', 'classic', 'relaxed', 'heritage', 'urban', 'rugged'],
  knitwearaesthetic:['cozy', 'textured', 'warm', 'soft', 'layered', 'casual'],
  linencore:        ['natural', 'relaxed', 'earthy', 'effortless', 'clean', 'easygoing'],
  coastalgrandma:   ['relaxed', 'earthy', 'classic', 'natural', 'effortless', 'easygoing'],
}

// ── Name-based label rules ────────────────────────────────────────────────────
// Each entry: [regex, { label: boost, ... }]
const NAME_RULES = [
  [/cashmere|merino/, { luxe: 5, premium: 5, soft: 4, refined: 4, elegant: 3 }],
  [/silk|satin/, { silky: 5, satiny: 4, luxe: 4, elegant: 4, feminine: 3, romantic: 3 }],
  [/velvet/, { luxe: 4, dramatic: 4, opulent: 3, elegant: 3, dark: 2 }],
  [/leather jacket|biker jacket/, { edgy: 5, rebellious: 4, rock: 4, bold: 3 }],
  [/\bleather\b(?!.*(jacket|coat))/, { luxe: 3, edgy: 3, structured: 3, bold: 2 }],
  [/linen/, { relaxed: 5, natural: 4, earthy: 4, effortless: 3, easygoing: 4 }],
  [/denim|jean/, { casual: 4, classic: 3, relaxed: 3, rugged: 2 }],
  [/raw denim|selvedge/, { heritage: 4, classic: 4, rugged: 3, durable: 3 }],
  [/flannel|plaid|tartan/, { heritage: 4, casual: 3, raw: 3, relaxed: 3 }],
  [/chunky knit|cable.knit/, { cozy: 5, heritage: 4, textured: 5, classic: 3 }],
  [/knit|sweater|knitwear/, { cozy: 4, textured: 4, warm: 4, layered: 3 }],
  [/cardigan/, { cozy: 5, soft: 4, casual: 4, layered: 4 }],
  [/turtleneck|mock.neck/, { structured: 4, moody: 3, dark: 3, elegant: 3 }],
  [/hoodie/, { casual: 5, oversized: 4, cozy: 4, relaxed: 4, streetwear: 2 }],
  [/sweatshirt|crewneck/, { casual: 4, cozy: 3, oversized: 3, relaxed: 3 }],
  [/graphic tee|band tee/, { graphic: 5, casual: 4, bold: 3, streetwear: 3 }],
  [/plain tee|white tee|basic tee|classic.*tee/, { casual: 5, clean: 5, minimal: 5, effortless: 4 }],
  [/polo/, { preppy: 4, collegiate: 3, classic: 3, casual: 3 }],
  [/oxford|ocbd/, { preppy: 4, collegiate: 4, heritage: 3, classic: 3 }],
  [/dress shirt|button.down/, { classic: 4, polished: 4, tailored: 3, elegant: 3 }],
  [/blazer/, { tailored: 5, structured: 5, elegant: 4, polished: 4, classic: 3 }],
  [/chino|trouser/, { tailored: 4, classic: 4, clean: 4, polished: 3 }],
  [/jogger|sweatpant/, { athletic: 4, casual: 5, cozy: 4, relaxed: 5 }],
  [/cargo/, { utility: 5, functional: 5, casual: 4, urban: 3 }],
  [/mini skirt|mini.skirt/, { bold: 4, feminine: 4, edgy: 3, playful: 3 }],
  [/midi skirt|midi.skirt/, { feminine: 4, elegant: 4, classic: 3, romantic: 3 }],
  [/maxi skirt|maxi.skirt|maxi dress|maxi.dress/, { flowy: 5, romantic: 4, feminine: 4, bohemian: 2 }],
  [/slip dress/, { silky: 5, romantic: 5, feminine: 5, elegant: 4, delicate: 3 }],
  [/wrap dress/, { feminine: 5, elegant: 4, romantic: 3, effortless: 3 }],
  [/prairie dress|floral dress/, { romantic: 5, feminine: 4, flowy: 4, earthy: 3 }],
  [/bodycon/, { bold: 4, feminine: 4, edgy: 3, statement: 3 }],
  [/corset/, { edgy: 4, bold: 4, dramatic: 4, feminine: 3, structured: 3 }],
  [/oversized|baggy/, { oversized: 5, casual: 4, relaxed: 5 }],
  [/wide.leg/, { relaxed: 4, flowy: 3, casual: 3 }],
  [/slim.fit|slim.cut|tapered/, { tailored: 4, structured: 4, clean: 3, fitted: 3 }],
  [/trench coat|trench/, { classic: 5, elegant: 4, structured: 4, timeless: 4, refined: 3 }],
  [/peacoat|overcoat/, { classic: 5, heritage: 4, structured: 4, elegant: 3 }],
  [/puffer|down jacket/, { casual: 4, functional: 4, cozy: 4, practical: 3 }],
  [/bomber/, { casual: 4, sporty: 3, urban: 3, streetwear: 3, classic: 2 }],
  [/field jacket|military jacket/, { utility: 5, heritage: 4, functional: 4, structured: 3 }],
  [/windbreaker|anorak/, { technical: 4, athletic: 3, functional: 4, casual: 3 }],
  [/fleece/, { cozy: 5, functional: 4, active: 4, earthy: 2 }],
  [/varsity|collegiate jacket/, { preppy: 5, collegiate: 5, heritage: 3, classic: 3 }],
  [/pearl/, { elegant: 5, refined: 5, classic: 5, delicate: 4, polished: 4 }],
  [/gold chain|chain necklace/, { bold: 4, urban: 3, hype: 4, statement: 4 }],
  [/signet ring|signet/, { elegant: 4, refined: 4, classic: 4, heritage: 3 }],
  [/watch/, { elegant: 4, classic: 4, refined: 3, timeless: 3 }],
  [/loafer/, { elegant: 5, classic: 5, refined: 4, polished: 3, preppy: 2 }],
  [/oxford shoe|dress shoe|cap.toe/, { elegant: 5, classic: 5, polished: 5, tailored: 4 }],
  [/chelsea boot/, { classic: 4, edgy: 3, polished: 3, versatile: 2 }],
  [/combat boot|doc marten/, { edgy: 5, rebellious: 4, punk: 3, bold: 3 }],
  [/work boot|logger boot/, { heritage: 4, utility: 4, functional: 4, rugged: 4, durable: 3 }],
  [/white sneaker|clean sneaker|leather sneaker/, { clean: 5, casual: 5, minimal: 4, effortless: 4 }],
  [/chunky sneaker|platform sneaker/, { bold: 4, retro: 3, streetwear: 3, statement: 4 }],
  [/high.top/, { streetwear: 4, athletic: 3, bold: 3, urban: 3 }],
  [/trail runner|hiking boot|hiking shoe/, { technical: 4, athletic: 4, functional: 5, active: 4 }],
  [/sandal|espadrille/, { relaxed: 5, casual: 5, earthy: 3, effortless: 4 }],
  [/heel|stiletto|pump/, { elegant: 5, feminine: 5, bold: 4, elevated: 4, dramatic: 3 }],
  [/floral/, { romantic: 4, feminine: 3, soft: 3, delicate: 3 }],
  [/lace/, { delicate: 4, romantic: 4, feminine: 3, soft: 3 }],
  [/sheer|mesh/, { edgy: 3, bold: 3, feminine: 3, dramatic: 2 }],
  [/cowboy hat|western hat/, { western: 5, bold: 3, heritage: 3 }],
  [/vintage|retro/, { vintage: 4, retro: 4, nostalgic: 3, thrifted: 3 }],
]

// ── getItemLabels ─────────────────────────────────────────────────────────────
// Returns 10-13 labels ranked by relevance for any item.
export function getItemLabels(item) {
  const scores = new Map()

  function bump(label, amount) {
    scores.set(label, (scores.get(label) || 0) + amount)
  }

  // 1. Name-based rules
  const n = (item.name || '').toLowerCase()
  for (const [regex, boosts] of NAME_RULES) {
    if (regex.test(n)) {
      for (const [label, score] of Object.entries(boosts)) bump(label, score)
    }
  }

  // 2. Aesthetic hints from styleWeights
  for (const [aesthetic, weight] of Object.entries(item.styleWeights || {})) {
    const hints = AESTHETIC_LABEL_HINTS[aesthetic] || []
    hints.forEach((label, i) => bump(label, weight * Math.max(4 - i, 1)))
  }

  // 3. Category fallback signals (item._category from quiz items)
  const cat = item._category || item.categoryId || ''
  if (cat === 'footwear')    { bump('casual', 1); bump('functional', 1) }
  if (cat === 'outerwear')   { bump('layered', 1); bump('structured', 1) }
  if (cat === 'knitwear')    { bump('cozy', 2); bump('textured', 2) }
  if (cat === 'accessories') { bump('statement', 1) }
  if (cat === 'activewear')  { bump('athletic', 2); bump('sporty', 2) }

  // Sort by score, return top 12 label strings only
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([label]) => label)
}
