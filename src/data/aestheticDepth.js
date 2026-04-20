// Deep-dive content per aesthetic — history, garments, icons, modern reps, cultural context.
// Consumed by StoryTab in AestheticScreen.

export const AESTHETIC_DEPTH = {

  // ── Old Money / Quiet Luxury ─────────────────────────────────────────────
  oldmoney: {
    era: '1900s – present',
    origin: 'New England, USA / European aristocracy',
    history: 'Rooted in the dress codes of America\'s East Coast elite and European aristocracy, Old Money style was codified by Ivy League prep schools, yacht clubs, and country estates through the mid-20th century. It signals inherited wealth through restraint — premium fabrics and classic cuts, never logos. The aesthetic was rediscovered online in the 2020s as "quiet luxury," gaining a new generation of followers.',
    keyGarments: [
      { name: 'Cashmere Turtleneck', desc: 'The centrepiece of quiet luxury — no branding, all quality' },
      { name: 'Tailored Overcoat', desc: 'Wool or cashmere, cut long, always structured' },
      { name: 'Oxford Shirt', desc: 'Crisp, often tucked, OCBD collar' },
      { name: 'Pleated Chinos', desc: 'High-waist, straight cut, heritage silhouette' },
      { name: 'Penny Loafer', desc: 'The defining shoe — leather, slip-on, timeless' },
    ],
    icons: [
      { name: 'Cary Grant', role: 'Actor', era: '1950s–60s' },
      { name: 'John F. Kennedy', role: 'US President', era: '1960s' },
      { name: 'Carolyn Bessette-Kennedy', role: 'Style icon', era: '1990s' },
    ],
    modernReps: [
      { name: 'Jacob Elordi', type: 'Actor' },
      { name: 'Sofia Richie Grainge', type: 'Socialite' },
      { name: 'Steven Stokey-Daley', type: 'Designer' },
    ],
    culturalContext: 'Old Money aesthetic is a language of class — restraint communicates confidence. It draws from Anglo-American aristocratic traditions where conspicuous consumption was considered vulgar. Its 2020s resurgence reflects a broader cultural fatigue with hype culture and a desire for investment-driven, timeless dressing.',
  },

  // ── Preppy / Ivy / Collegiate ────────────────────────────────────────────
  preppy: {
    era: '1950s – present',
    origin: 'New England, USA',
    history: 'Preppy style emerged from the dress codes of American private schools and Ivy League universities in the 1950s. It was documented and popularised by The Official Preppy Handbook (1980) and brands like Ralph Lauren and Brooks Brothers. Today it has been reclaimed by a younger generation through "Old Money Preppy" and "Dark Academia" crossovers.',
    keyGarments: [
      { name: 'OCBD Shirt', desc: 'Oxford cloth button-down — the backbone of the aesthetic' },
      { name: 'Blazer with Crest', desc: 'School or club crest, patch pockets' },
      { name: 'Chinos', desc: 'Khaki or navy, straight cut' },
      { name: 'Knit Polo', desc: 'Cable-knit or piqué, often in pastel' },
      { name: 'Penny Loafer or Boat Shoe', desc: 'Both equally valid, both essential' },
    ],
    icons: [
      { name: 'Ralph Lauren', role: 'Designer', era: '1970s – present' },
      { name: 'Princess Diana', role: 'Style icon', era: '1980s–90s' },
      { name: 'Paul Newman', role: 'Actor', era: '1960s–70s' },
    ],
    modernReps: [
      { name: 'Alix Earle', type: 'Creator' },
      { name: 'Matilda Djerf', type: 'Creator' },
      { name: 'J.Crew', type: 'Brand' },
    ],
    culturalContext: 'Preppy style is inseparable from American class dynamics — it signals education, leisure, and belonging. Originally exclusive, it has been democratised through mass retail while retaining its aspirational quality. Its cyclical revivals reflect nostalgia for a certain kind of structured, optimistic American identity.',
  },

  // ── Minimalist ───────────────────────────────────────────────────────────
  minimalist: {
    era: '1990s – present',
    origin: 'Europe (Scandinavia & Belgium) / New York',
    history: 'Minimalism in fashion emerged as a counterreaction to 1980s power dressing excess, pioneered by designers like Jil Sander, Helmut Lang, and Calvin Klein in the 1990s. It stripped fashion back to pure form, fabric, and silhouette. The rise of normcore in the 2010s and clean aesthetics on social media brought it to mass adoption.',
    keyGarments: [
      { name: 'White Tee', desc: 'Perfect fit, premium cotton — the cornerstone' },
      { name: 'Straight-Leg Trousers', desc: 'Black or grey, flat front' },
      { name: 'Long Overcoat', desc: 'Monochrome, architectural cut' },
      { name: 'Simple Knit', desc: 'Crew or V-neck, muted tone' },
      { name: 'Clean Leather Sneaker', desc: 'No branding, white or bone' },
    ],
    icons: [
      { name: 'Jil Sander', role: 'Designer', era: '1990s' },
      { name: 'Helmut Lang', role: 'Designer', era: '1990s' },
      { name: 'Calvin Klein', role: 'Designer', era: '1990s–2000s' },
    ],
    modernReps: [
      { name: 'Zendaya', type: 'Actor & stylist' },
      { name: 'Bottega Veneta', type: 'Brand' },
      { name: 'The Row', type: 'Brand' },
    ],
    culturalContext: 'Minimalism is both an aesthetic and a philosophy — the rejection of excess as a form of taste-making. It carries quiet confidence: if the clothes don\'t shout, the person does. Rooted in Bauhaus principles ("less is more"), it became the dominant aesthetic of the luxury market in the 2010s and 2020s.',
  },

  // ── Maximalist ───────────────────────────────────────────────────────────
  maximalist: {
    era: '1960s – present (cyclical)',
    origin: 'Italy / New York / London',
    history: 'Maximalism as a fashion movement has cycled in and out since the 1960s mod era and 1970s disco. Designers like Versace, Moschino, and later Alessandro Michele\'s Gucci defined its modern form — clashing prints, layering, embellishment. Social media revived it as a joyful antidote to minimalism in the 2020s.',
    keyGarments: [
      { name: 'Patterned Blazer', desc: 'Brocade, jacquard, or bold print' },
      { name: 'Wide-Leg Printed Trousers', desc: 'Floor-length, maximum impact' },
      { name: 'Embellished Top', desc: 'Beaded, embroidered, or sequined' },
      { name: 'Velvet Pieces', desc: 'Rich texture, deep colour' },
      { name: 'Layered Statement Accessories', desc: 'Stacked, mixed, and clashing' },
    ],
    icons: [
      { name: 'Elton John', role: 'Musician', era: '1970s – present' },
      { name: 'Gianni Versace', role: 'Designer', era: '1980s–90s' },
      { name: 'Iris Apfel', role: 'Style icon', era: '1960s – present' },
    ],
    modernReps: [
      { name: 'Harry Styles', type: 'Musician' },
      { name: 'Billy Porter', type: 'Actor & performer' },
      { name: 'Alessandro Michele', type: 'Designer (ex-Gucci)' },
    ],
    culturalContext: 'Maximalism celebrates self-expression as resistance — dressing as a political act, a refusal of conformity. It has historically aligned with queer culture, disco, and carnival traditions. Its 2020s revival was partly a response to pandemic-era monotony, with dressing as joy-seeking behaviour.',
  },

  // ── Streetwear ───────────────────────────────────────────────────────────
  streetwear: {
    era: '1980s – present',
    origin: 'Los Angeles & New York, USA',
    history: 'Streetwear emerged from the intersection of skateboarding, hip-hop, and surf culture in 1980s California and New York. Shawn Stüssy\'s handwritten logo and early Supreme drops established the blueprint: limited runs, cultural authenticity, and hype. The 2010s saw luxury fashion absorb the aesthetic through collaborations (Louis Vuitton × Supreme), making it the dominant global fashion force.',
    keyGarments: [
      { name: 'Graphic Tee', desc: 'Oversized, dropped shoulder — the entry point' },
      { name: 'Hoodie', desc: 'Heavyweight, boxy — the uniform' },
      { name: 'Cargo Trousers', desc: 'Functional fit, many pockets' },
      { name: 'Chunky Sneakers', desc: 'Jordan, Nike, New Balance — the cornerstone' },
      { name: 'Bomber Jacket', desc: 'Satin or nylon, often collab-branded' },
    ],
    icons: [
      { name: 'Shawn Stüssy', role: 'Designer / Stüssy founder', era: '1980s–90s' },
      { name: 'Pharrell Williams', role: 'Musician & designer', era: '2000s – present' },
      { name: 'Virgil Abloh', role: 'Designer (Off-White / LV)', era: '2010s' },
    ],
    modernReps: [
      { name: 'ASAP Rocky', type: 'Musician & stylist' },
      { name: 'Travis Scott', type: 'Musician' },
      { name: 'Kai Cenat', type: 'Creator' },
    ],
    culturalContext: 'Streetwear is one of the most significant cultural exports of the 20th century — a language born in marginalised communities that conquered high fashion. Its economy runs on scarcity, community, and identity. The tension between authenticity and commercialisation defines every era of its evolution.',
  },

  // ── Athleisure ───────────────────────────────────────────────────────────
  athleisure: {
    era: '2010s – present',
    origin: 'USA (Silicon Valley / LA fitness culture)',
    history: 'Athleisure crystallised in the 2010s as gym wear escaped the gym. Lululemon\'s yoga pants and Nike\'s technical fabrics became everyday dress codes. The pandemic accelerated the shift dramatically — workwear collapsed into sportswear, and the category grew into a multi-billion dollar market.',
    keyGarments: [
      { name: 'Fitted Leggings', desc: 'High-waist, seamless — the category-defining piece' },
      { name: 'Sports Bra or Crop Top', desc: 'Functional and fashionable' },
      { name: 'Zip-Up Hoodie', desc: 'Lightweight layer, always present' },
      { name: 'Performance Joggers', desc: 'Tapered, technical fabric' },
      { name: 'Chunky Training Sneakers', desc: 'HOKA, New Balance, Nike' },
    ],
    icons: [
      { name: 'Lululemon', role: 'Brand (defined the category)', era: '2000s – present' },
      { name: 'Kanye West', role: 'Musician / Yeezy designer', era: '2010s' },
      { name: 'Serena Williams', role: 'Athlete', era: '2000s – present' },
    ],
    modernReps: [
      { name: 'Hailey Bieber', type: 'Model' },
      { name: 'Kim Kardashian (SKIMS)', type: 'Entrepreneur' },
      { name: 'Alix Earle', type: 'Creator' },
    ],
    culturalContext: 'Athleisure reflects a cultural shift toward wellness as identity and comfort as status. It blurred the boundaries between public and private dressing, legitimised comfort as style, and made sportswear the dominant casual uniform of the 21st century.',
  },

  // ── Y2K / 2000s ───────────────────────────────────────────────────────────
  y2k: {
    era: '1999–2006 / 2018 – present (revival)',
    origin: 'USA (pop culture & MTV generation)',
    history: 'Y2K fashion was the aesthetic of millennium anxiety and pop-culture optimism — Juicy Couture tracksuits, Von Dutch trucker hats, and low-rise everything. It was driven by the explosion of celebrity culture, MTV, and early internet. Its revival began around 2018–2020, driven by Gen Z nostalgia and TikTok.',
    keyGarments: [
      { name: 'Low-Rise Flare Jeans', desc: 'The defining silhouette of the era' },
      { name: 'Velour Tracksuit', desc: 'Juicy Couture — the most iconic Y2K piece' },
      { name: 'Baby Tee', desc: 'Fitted, graphic or logo-printed' },
      { name: 'Denim Miniskirt', desc: 'Often embellished or rhinestone-trimmed' },
      { name: 'Platform Shoes', desc: 'Chunky heel, maximum elevation' },
    ],
    icons: [
      { name: 'Paris Hilton', role: 'Socialite & media figure', era: '2000s' },
      { name: 'Britney Spears', role: 'Pop musician', era: '2000s' },
      { name: 'Destiny\'s Child', role: 'Music group', era: '2000s' },
    ],
    modernReps: [
      { name: 'Olivia Rodrigo', type: 'Musician' },
      { name: 'Bella Hadid', type: 'Model' },
      { name: 'Addison Rae', type: 'Creator' },
    ],
    culturalContext: 'Y2K fashion captures the aesthetic of a pre-9/11 world — carefree, maximalist, and media-saturated. Its revival is part nostalgia, part Gen Z reclamation of a visual language they experienced as children. It also reflects comfort with irony: wearing what was once unfashionable as a form of playful identity.',
  },

  // ── Vintage / Retro ───────────────────────────────────────────────────────
  vintage: {
    era: '1920s–1990s sources / timeless',
    origin: 'Global (era-specific: USA, UK, France)',
    history: 'Vintage dressing draws from across the 20th century — 1950s circle skirts, 1970s flares, 1990s grunge. The modern thrift movement was accelerated by sustainability concerns and platforms like Depop and Vinted. What began as budget dressing became a cultural statement against fast fashion.',
    keyGarments: [
      { name: 'High-Waist Mom Jeans', desc: 'Straight or tapered, 1980s–90s silhouette' },
      { name: 'Floral Midi Dress', desc: '1970s silhouette — the summer staple' },
      { name: 'Wide-Collar Shirt', desc: 'Retro print, bold lapels' },
      { name: 'Corduroy Jacket or Trousers', desc: 'Heritage texture' },
      { name: 'Platform or Chunky Shoes', desc: 'Retro elevation' },
    ],
    icons: [
      { name: 'Twiggy', role: 'Model', era: '1960s' },
      { name: 'Stevie Nicks', role: 'Musician', era: '1970s' },
      { name: 'Winona Ryder', role: 'Actor', era: '1990s' },
    ],
    modernReps: [
      { name: 'Doja Cat', type: 'Musician' },
      { name: 'FKA Twigs', type: 'Musician' },
      { name: 'Depop community', type: 'Creator / seller network' },
    ],
    culturalContext: 'Vintage dressing is simultaneously ecological, anti-capitalist, and aspirational — it recirculates existing garments rather than generating new demand. It also allows wearers to opt into specific historical aesthetics and identities. Its mass adoption has created a paradox: vintage is now a mainstream market.',
  },

  // ── Techwear ─────────────────────────────────────────────────────────────
  techwear: {
    era: '2010s – present',
    origin: 'Japan / online communities (Reddit, Tumblr)',
    history: 'Techwear evolved from outdoor performance gear — Gore-Tex, articulated panels, tactical vests — merged with Japanese streetwear aesthetics. Brands like Acronym and Stone Island Technical drove its premium edge. It became a distinct online aesthetic community in the 2010s, celebrated for its function-first ethos and dark visual language.',
    keyGarments: [
      { name: 'Technical Shell Jacket', desc: 'Gore-Tex or similar waterproof shell' },
      { name: 'Cargo Trousers', desc: 'Articulated fit, waterproof shell, many pockets' },
      { name: 'Tactical Vest', desc: 'Multi-pocket utility mid-layer' },
      { name: 'Trail Runners', desc: 'Salomon, Nike ACG' },
      { name: 'Modular Harness or Bag', desc: 'Strapped, functional carry system' },
    ],
    icons: [
      { name: 'Errolson Hugh (Acronym)', role: 'Designer', era: '2000s – present' },
      { name: 'Massimo Osti (Stone Island)', role: 'Designer', era: '1980s–90s' },
      { name: 'Nike ACG', role: 'Brand', era: '1990s – present' },
    ],
    modernReps: [
      { name: 'Acronym community', type: 'Brand & community' },
      { name: 'Nike ACG', type: 'Brand' },
      { name: '@techwearclub', type: 'Creator community' },
    ],
    culturalContext: 'Techwear is utopian functionalism — dressing for a future city where weather, movement, and utility define clothing choices. Its dark palette and modular construction reference cyberpunk and military aesthetics. It occupies a rare position: expensive, technical, and deeply subcultural.',
  },

  // ── Gorpcore / Outdoorsy ──────────────────────────────────────────────────
  gorpcore: {
    era: '2017 – present',
    origin: 'USA (outdoor / hiking culture)',
    history: 'Gorpcore — named after trail mix ("Good Old Raisins and Peanuts") — took outdoor gear out of the wilderness and onto city streets. It was a reaction to the slickness of normcore and minimalism, celebrating utilitarian, outdoorsy clothes by brands like Patagonia, Arc\'teryx, and Salomon. The pandemic turbo-charged it as outdoor activity surged.',
    keyGarments: [
      { name: 'Fleece Jacket', desc: 'Patagonia, Arc\'teryx, The North Face' },
      { name: 'Shell or Rain Jacket', desc: 'Technical, often colourful' },
      { name: 'Hiking Trousers', desc: 'Convertible or slim' },
      { name: 'Trail Runners', desc: 'Hoka, Salomon, Merrell' },
      { name: 'Puffer Vest', desc: 'Layered over fleece for maximum gorp energy' },
    ],
    icons: [
      { name: 'Yvon Chouinard (Patagonia)', role: 'Brand founder', era: '1970s – present' },
      { name: 'Arc\'teryx', role: 'Brand', era: '1990s – present' },
      { name: 'Juergen Teller', role: 'Photographer (documented the aesthetic)', era: '2010s' },
    ],
    modernReps: [
      { name: 'A$AP Ferg', type: 'Musician' },
      { name: 'Emily Ratajkowski', type: 'Model' },
      { name: 'Gorpcore Reddit community', type: 'Online community' },
    ],
    culturalContext: 'Gorpcore reclaims function from fashion — it celebrates gear that actually works in the wild while wearing it in urban environments. It\'s also aligned with growing interest in sustainability and outdoor leisure as identity. The irony of wearing $800 Arc\'teryx shells to get coffee is part of its charm.',
  },

  // ── Normcore ─────────────────────────────────────────────────────────────
  normcore: {
    era: '2014 – present',
    origin: 'New York, USA (art/culture scene)',
    history: 'Normcore was coined in 2013 by trend forecaster K-Hole as a social stance — a desire to dress like everyone else rather than stand out. Plain jeans, white tees, fleece jackets. Steve Jobs was retroactively identified as its patron saint. It was both ironic and sincere, and influenced the broader "anti-fashion" aesthetic that dominated the mid-2010s.',
    keyGarments: [
      { name: 'Plain White or Grey Tee', desc: 'No branding, slightly loose' },
      { name: 'Straight Jeans', desc: 'Mid-rise, mid-wash, no distress' },
      { name: 'Simple Hoodie', desc: 'Solid, no logo' },
      { name: 'Fleece Zip-Up', desc: 'Patagonia, L.L.Bean' },
      { name: 'White New Balance', desc: 'The normcore sneaker icon' },
    ],
    icons: [
      { name: 'Steve Jobs', role: 'Technologist', era: '1990s–2000s' },
      { name: 'Jerry Seinfeld', role: 'Comedian', era: '1990s' },
      { name: 'K-Hole', role: 'Trend forecasting group (coined the term)', era: '2013' },
    ],
    modernReps: [
      { name: 'Daniel Craig (off-duty)', type: 'Actor' },
      { name: 'Juergen Teller', type: 'Photographer' },
      { name: 'Adam Sandler', type: 'Actor (unintentionally iconic)' },
    ],
    culturalContext: 'Normcore is fashion\'s most philosophical gesture — the deliberate refusal to use clothing as self-expression. It was partly ironic, partly sincere, and entirely of its moment. Its legacy is the "anti-fashion" wing of fashion: elevated basics, clean references, and a suspicion of trend-following.',
  },

  // ── Dark Academia ─────────────────────────────────────────────────────────
  darkacademia: {
    era: '2019 – present (online) / sources: 1800s–1940s',
    origin: 'Online (Tumblr / TikTok) / literary tradition',
    history: 'Dark Academia emerged as a Tumblr and TikTok aesthetic in 2019–2020, romanticising European university culture, gothic literature, and the interwar intellectual. It draws visual references from Oxford and Cambridge, from Donna Tartt\'s The Secret History, and from the wardrobe of artists and writers of the 1920s–40s. Lockdown gave it explosive reach.',
    keyGarments: [
      { name: 'Tweed Blazer', desc: 'Herringbone or plaid — the centrepiece' },
      { name: 'Oxford Shirt', desc: 'Crisp, tucked, often paired with a tie' },
      { name: 'Tailored Wool Trousers', desc: 'High-waist, heritage fabric' },
      { name: 'Long Dark Overcoat', desc: 'Charcoal or black, imposing silhouette' },
      { name: 'Oxford Shoes or Brogues', desc: 'Leather, classic lacing' },
    ],
    icons: [
      { name: 'Donna Tartt', role: 'Author (The Secret History)', era: '1992' },
      { name: 'John Keats', role: 'Poet', era: '1810s' },
      { name: 'Alain Delon', role: 'Actor', era: '1960s' },
    ],
    modernReps: [
      { name: 'Timothée Chalamet', type: 'Actor' },
      { name: 'Florence Pugh', type: 'Actor' },
      { name: '@dark.academia community', type: 'TikTok creator community' },
    ],
    culturalContext: 'Dark Academia is a response to the perceived shallowness of digital culture — a longing for depth, knowledge, and aesthetic seriousness. It romanticises death, knowledge, and beauty simultaneously. Its literary and cinematic references give wearers a sense of belonging to a longer cultural tradition.',
  },

  // ── Light Academia ────────────────────────────────────────────────────────
  lightacademia: {
    era: '2020 – present (online) / sources: 1900s–1940s',
    origin: 'Online (Tumblr / Pinterest) / European countryside',
    history: 'Light Academia developed as a softer counterpart to Dark Academia, swapping gothic drama for pastoral warmth — cream linen, sun-drenched courtyards, and the romance of classical education without the darkness. It gained traction in 2020 during lockdown as an aspirational escapist visual.',
    keyGarments: [
      { name: 'Cream or Ivory Blouse', desc: 'Delicate, often ruffled or pleated' },
      { name: 'Linen Trousers', desc: 'Warm-toned, relaxed' },
      { name: 'Relaxed Knit Sweater', desc: 'Oatmeal or cream' },
      { name: 'High-Waist A-Line Skirt', desc: 'Beige or tan' },
      { name: 'Mary Janes or Loafers', desc: 'Delicate, heritage shoe' },
    ],
    icons: [
      { name: 'Virginia Woolf', role: 'Author', era: '1920s–30s' },
      { name: 'E.M. Forster', role: 'Author (A Room with a View)', era: '1900s–1920s' },
      { name: 'Grace Kelly', role: 'Actor & Princess', era: '1950s' },
    ],
    modernReps: [
      { name: 'Taylor Swift (cardigan era)', type: 'Musician' },
      { name: 'Ellie Bamber', type: 'Actor' },
      { name: 'Pinterest light academia community', type: 'Creator community' },
    ],
    culturalContext: 'Light Academia occupies the pastoral, optimistic pole of the academia aesthetics — it romanticises learning as pleasurable, art as nourishing, and simplicity as elegance. Its colour palette (cream, camel, ivory) signals warmth and approachability rather than intensity. It became an aspirational lockdown fantasy.',
  },

  // ── Business Casual ───────────────────────────────────────────────────────
  businesscasual: {
    era: '1990s – present',
    origin: 'USA (corporate / Silicon Valley)',
    history: 'Business casual emerged in 1990s America as tech companies relaxed corporate dress codes. "Dress-down Fridays" spread throughout offices, gradually expanding until the traditional suit became optional. The pandemic completed the transformation — workwear became entirely fluid, with athleisure and smart-casual blending freely.',
    keyGarments: [
      { name: 'Blazer', desc: 'Unstructured, single-breasted — the anchor' },
      { name: 'Oxford or Poplin Shirt', desc: 'Pressed, versatile base' },
      { name: 'Dark Slim Jeans', desc: 'The casualisation of office wear' },
      { name: 'Tailored Chinos', desc: 'The neutral middle ground' },
      { name: 'Leather Loafers', desc: 'Polished enough for meetings, comfortable for commutes' },
    ],
    icons: [
      { name: 'Steve Jobs', role: 'Technologist (black turtleneck era)', era: '1990s–2000s' },
      { name: 'Barack Obama', role: 'Politician', era: '2000s – present' },
      { name: 'Mark Zuckerberg', role: 'Tech CEO', era: '2010s' },
    ],
    modernReps: [
      { name: 'Ryan Reynolds', type: 'Actor & entrepreneur' },
      { name: 'David Beckham', type: 'Athlete & designer' },
      { name: 'Ted Lasso (character)', type: 'Cultural reference' },
    ],
    culturalContext: 'Business casual is the aesthetic of professional ambiguity — signalling competence without formality, approachability without sloppiness. It reflects shifting power dynamics in workplaces (who gets to define dress codes?) and the ongoing tension between authenticity and professionalism in work culture.',
  },

  // ── Euro Chic ─────────────────────────────────────────────────────────────
  eurochic: {
    era: '1960s – present',
    origin: 'France, Italy, Spain',
    history: 'Euro Chic draws from the effortless elegance of French and Italian dressing — the French "je ne sais quoi," Italian sprezzatura. It was codified in the 1960s by designers like Coco Chanel and Yves Saint Laurent and by icons like Brigitte Bardot and Audrey Hepburn. It prioritises quality, fit, and nonchalance over trend-chasing.',
    keyGarments: [
      { name: 'Breton Top', desc: 'Navy stripe on white — the most iconic French garment' },
      { name: 'Well-Fitted Blazer', desc: 'Italian cut, relaxed but structured' },
      { name: 'Simple Linen Shirt', desc: 'Effortless, slightly undone' },
      { name: 'Slim-Fit Dark Jeans', desc: 'No embellishment' },
      { name: 'Ballet Flats or Loafers', desc: 'The defining Euro footwear' },
    ],
    icons: [
      { name: 'Brigitte Bardot', role: 'Actor & style icon', era: '1960s' },
      { name: 'Sophia Loren', role: 'Actor', era: '1960s–70s' },
      { name: 'Coco Chanel', role: 'Designer', era: '1920s–60s' },
    ],
    modernReps: [
      { name: 'Dua Lipa', type: 'Musician' },
      { name: 'Léa Seydoux', type: 'Actor' },
      { name: 'Jeanne Damas', type: 'Model & designer' },
    ],
    culturalContext: 'Euro Chic is the global export of a certain European confidence — the idea that style comes from within, not from shopping. It is aspirational but democratically accessible: a Breton shirt and simple jeans is the formula. It carries romantic associations with European leisure, art, and cuisine.',
  },

  // ── Scandi ────────────────────────────────────────────────────────────────
  scandi: {
    era: '2010s – present',
    origin: 'Scandinavia (Denmark, Sweden, Norway)',
    history: 'Scandinavian minimalism emerged as a distinct global aesthetic in the 2010s, riding the wave of international interest in Nordic design and lifestyle (hygge, lagom). Brands like Acne Studios and Our Legacy defined its language: clean lines, quality fabrics, restrained palette. It overlaps with minimalism but carries a specifically Nordic warmth.',
    keyGarments: [
      { name: 'Wide-Leg Neutral Trousers', desc: 'The Scandi foundation — quality fabric, relaxed fit' },
      { name: 'Oversized Blazer', desc: 'Relaxed, structured' },
      { name: 'Polo Neck', desc: 'Fitted — a Scandi staple' },
      { name: 'Simple Structured Coat', desc: 'Minimal, architectural' },
      { name: 'Leather Ankle Boots', desc: 'Block heel — the defining Scandi shoe' },
    ],
    icons: [
      { name: 'Acne Studios (Jonny Johansson)', role: 'Designer', era: '1996 – present' },
      { name: 'Greta Garbo', role: 'Actor', era: '1920s–40s' },
      { name: 'Ingrid Bergman', role: 'Actor', era: '1940s–70s' },
    ],
    modernReps: [
      { name: 'Matilda Djerf', type: 'Creator' },
      { name: 'Acne Studios', type: 'Brand' },
      { name: 'Totême', type: 'Brand' },
    ],
    culturalContext: 'Scandi aesthetics carry the values of Nordic social democracy — equality, quality over quantity, sustainability, and functional beauty. The concept of lagom ("just the right amount") is its philosophical underpinning. It has become aspirational globally, representing a certain kind of unhurried, considered life.',
  },

  // ── Royalcore ─────────────────────────────────────────────────────────────
  royalcore: {
    era: '2020 – present (revival) / sources: 1700s–1900s',
    origin: 'Online / British & European monarchy tradition',
    history: 'Royalcore emerged as a TikTok and Pinterest aesthetic in 2020–2021, romanticising the dress of European royalty — corsets, brocade, puff sleeves, and regal jewellery. It draws from Regency, Victorian, and Edwardian fashion, fed by the popularity of shows like Bridgerton and The Crown.',
    keyGarments: [
      { name: 'Corset or Structured Bodice', desc: 'The defining garment of the era' },
      { name: 'Puff or Balloon Sleeve Blouse', desc: 'Dramatic, voluminous' },
      { name: 'Brocade or Velvet Blazer', desc: 'Rich fabric, regal silhouette' },
      { name: 'Opera-Length Gloves', desc: 'Formal, theatrical' },
      { name: 'Pearl or Jewelled Accessories', desc: 'Crown-adjacent adornment' },
    ],
    icons: [
      { name: 'Princess Diana', role: 'Princess of Wales', era: '1980s–90s' },
      { name: 'Queen Elizabeth II', role: 'Monarch', era: '1950s–2022' },
      { name: 'Marie Antoinette', role: 'Queen of France', era: '1770s–80s' },
    ],
    modernReps: [
      { name: 'Nicola Coughlan (Bridgerton)', type: 'Actor' },
      { name: 'Kate Middleton', type: 'Princess of Wales' },
      { name: 'Simone Ashley', type: 'Actor' },
    ],
    culturalContext: 'Royalcore taps into a deep fascination with power, ritual, and inherited elegance. It carries the romance of historical spectacle and the fantasy of aristocratic life. Its resurgence reflects nostalgia for ceremony and formality in an increasingly casual world.',
  },

  // ── Grunge ────────────────────────────────────────────────────────────────
  grunge: {
    era: '1988–1996 / 2010s – present (revival)',
    origin: 'Seattle, Washington, USA',
    history: 'Grunge was born in Seattle\'s music scene — Nirvana, Pearl Jam, Soundgarden. Its look was anti-fashion by design: thrift-store flannels, ripped jeans, worn boots. It was simultaneously anti-establishment and commercially absorbed: Marc Jacobs famously brought grunge to Perry Ellis in 1992, which got him fired. Its visual legacy endures through every decade.',
    keyGarments: [
      { name: 'Flannel Shirt', desc: 'Worn open over a band tee — the grunge formula' },
      { name: 'Ripped Skinny or Straight Jeans', desc: 'Distressed, often bleached' },
      { name: 'Band Tee', desc: 'Nirvana, Pixies, Soundgarden' },
      { name: 'Dr. Martens Boots', desc: 'The defining grunge boot' },
      { name: 'Oversized Cardigan', desc: 'Worn-in, often Kurt Cobain-coded' },
    ],
    icons: [
      { name: 'Kurt Cobain', role: 'Musician (Nirvana)', era: '1989–1994' },
      { name: 'Courtney Love', role: 'Musician', era: '1990s' },
      { name: 'Eddie Vedder', role: 'Musician (Pearl Jam)', era: '1990s' },
    ],
    modernReps: [
      { name: 'Olivia Rodrigo', type: 'Musician' },
      { name: 'Machine Gun Kelly', type: 'Musician' },
      { name: 'Gracie Abrams', type: 'Musician' },
    ],
    culturalContext: 'Grunge was working-class Pacific Northwest aesthetics weaponised as anti-commercial statement — ironic given how quickly it was commodified. It expressed generational disillusionment and alienation. Its legacy is the legitimisation of "ugly" and deliberate anti-fashion within mainstream culture.',
  },

  // ── Punk ─────────────────────────────────────────────────────────────────
  punk: {
    era: '1976–1979 / cyclical',
    origin: 'London, UK / New York, USA',
    history: 'Punk erupted in 1976 simultaneously in London (the Clash, the Sex Pistols) and New York (the Ramones, Television). Vivienne Westwood and Malcolm McLaren designed its look: safety pins, ripped clothes, bondage trousers. It was a visceral reaction to economic despair and mainstream culture, and has been revived and commercialised in every subsequent decade.',
    keyGarments: [
      { name: 'Leather Jacket', desc: 'Studded, painted, or patched — the punk icon' },
      { name: 'Ripped Jeans or Bondage Trousers', desc: 'Distressed or strap-detailed' },
      { name: 'Band Tee', desc: 'Sex Pistols, The Clash, The Ramones' },
      { name: 'Dr. Martens Boots', desc: 'Steel-toe, 8- or 10-hole' },
      { name: 'Safety Pins & Patches', desc: 'DIY embellishment — essential to the philosophy' },
    ],
    icons: [
      { name: 'Sid Vicious', role: 'Musician (Sex Pistols)', era: '1976–79' },
      { name: 'Vivienne Westwood', role: 'Designer', era: '1970s – 2020s' },
      { name: 'Siouxsie Sioux', role: 'Musician', era: '1970s–80s' },
    ],
    modernReps: [
      { name: 'Billie Eilish', type: 'Musician' },
      { name: 'Machine Gun Kelly', type: 'Musician' },
      { name: 'Vivienne Westwood (legacy)', type: 'Brand' },
    ],
    culturalContext: 'Punk is the most politically explicit fashion movement in Western history — every garment was a statement against the establishment. DIY culture, anti-consumerism, and anarchist politics were built into its construction. Its perpetual commodification (Ramones tees at H&M) is both its greatest contradiction and its proof of cultural power.',
  },

  // ── Goth ─────────────────────────────────────────────────────────────────
  goth: {
    era: '1979 – present',
    origin: 'UK (post-punk scene)',
    history: 'Gothic subculture grew from post-punk in the late 1970s — Bauhaus, Siouxsie and the Banshees, The Cure — and developed its own aesthetic identity through black clothing, Victorian and romantic references, and dark makeup. It has evolved through many sub-genres (Victorian goth, cybergoth, pastel goth) while retaining its dark core.',
    keyGarments: [
      { name: 'Black Velvet Dress or Blazer', desc: 'Rich texture, dark silhouette' },
      { name: 'Lace or Mesh Top', desc: 'Sheer, gothic texture' },
      { name: 'Platform Boots', desc: 'New Rock, Demonia' },
      { name: 'Long Black Coat or Duster', desc: 'Dramatic, floor-length or midi' },
      { name: 'Corset', desc: 'Structured, lace-up' },
    ],
    icons: [
      { name: 'Robert Smith', role: 'Musician (The Cure)', era: '1980s – present' },
      { name: 'Siouxsie Sioux', role: 'Musician', era: '1970s–80s' },
      { name: 'Morticia Addams', role: 'Fictional character', era: '1960s / TV' },
    ],
    modernReps: [
      { name: 'Wednesday Addams (Netflix)', type: 'Character' },
      { name: 'Doja Cat (goth phase)', type: 'Musician' },
      { name: '@gothfashion community', type: 'Creator community' },
    ],
    culturalContext: 'Gothic fashion is a sustained engagement with mortality, beauty, and the transgressive — it aestheticises what mainstream culture fears or hides. It is also one of the most community-defining aesthetics: goth subculture has its own nightclubs, music, literature, and art. Its survival across 40+ years is testament to its depth.',
  },

  // ── Emo ───────────────────────────────────────────────────────────────────
  emo: {
    era: '2000–2007 / 2020s revival',
    origin: 'USA (post-hardcore / pop punk scene)',
    history: 'Emo style evolved from the emotional hardcore music scene of the 1990s and exploded into mainstream consciousness via MySpace and MTV in the early 2000s. Bands like My Chemical Romance, Fall Out Boy, and Paramore defined its visual language. It experienced a genuine nostalgia revival in the early 2020s.',
    keyGarments: [
      { name: 'Black Skinny Jeans', desc: 'Very slim — the emo signature' },
      { name: 'Band Tee', desc: 'My Chemical Romance, Paramore, Fall Out Boy' },
      { name: 'Black Zip-Up Hoodie', desc: 'Slim fit' },
      { name: 'Vans or Converse', desc: 'Beat up, worn-in' },
      { name: 'Studded Belt', desc: 'Worn through loops as both function and statement' },
    ],
    icons: [
      { name: 'Gerard Way', role: 'Musician (My Chemical Romance)', era: '2000s' },
      { name: 'Pete Wentz', role: 'Musician (Fall Out Boy)', era: '2000s' },
      { name: 'Hayley Williams', role: 'Musician (Paramore)', era: '2000s' },
    ],
    modernReps: [
      { name: 'Willow Smith', type: 'Musician' },
      { name: 'Olivia Rodrigo', type: 'Musician' },
      { name: 'emo revival TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Emo fashion was one of the first aesthetics to be built on emotional vulnerability as identity — wearing your feelings on your sleeve, literally. Its stigmatisation in the 2000s gave way to reclamation in the 2020s as a symbol of emotional authenticity and community belonging.',
  },

  // ── Scene ─────────────────────────────────────────────────────────────────
  scene: {
    era: '2005–2012 / niche revival',
    origin: 'USA (MySpace era)',
    history: 'Scene emerged from emo in the mid-2000s on MySpace — brighter, more maximalist, more social. It was the first truly internet-native fashion subculture: scene kids photographed themselves, built followings, and competed for status. Its visual language (neon, teased hair, fishnets) was maximalism applied to alternative culture.',
    keyGarments: [
      { name: 'Bright Skinny Jeans', desc: 'Neon or electric colour' },
      { name: 'Tutu or Layered Skirt', desc: 'Voluminous, colourful' },
      { name: 'Ripped Fishnets', desc: 'Under shorts or skirt' },
      { name: 'Arm Warmers', desc: 'Striped, elbow-length' },
      { name: 'Platform Shoes', desc: 'Electric colour, chunky sole' },
    ],
    icons: [
      { name: 'Jeffree Star', role: 'Makeup artist & creator', era: '2000s' },
      { name: 'Kiki Kannibal', role: 'MySpace scene icon', era: '2000s' },
      { name: 'Millionaires (band)', role: 'Musicians', era: '2000s' },
    ],
    modernReps: [
      { name: 'alt TikTok community', type: 'Creator community' },
      { name: 'niche revival on Pinterest', type: 'Platform aesthetic' },
    ],
    culturalContext: 'Scene was the first aesthetic born entirely from social media performance — it had no pre-internet existence. It prefigured influencer culture by a decade: scene kids were obsessed with followers, photography, and online identity. Its legacy is the entire logic of aesthetic-as-online-persona.',
  },

  // ── E-Boy ─────────────────────────────────────────────────────────────────
  eboy: {
    era: '2019 – present',
    origin: 'Online (TikTok)',
    history: 'E-Boy emerged on TikTok around 2019 as a distinctly Gen Z alternative aesthetic — chain necklaces, striped underlayers, black jeans, and ironic cool. It borrowed from 90s grunge and emo while adding digital-native elements: the TikTok pointing-at-camera pose and the "e" prefix signifying electronic or ironic detachment.',
    keyGarments: [
      { name: 'Striped Long-Sleeve Under T-Shirt', desc: 'The defining e-boy layering formula' },
      { name: 'Black Slim Jeans', desc: 'The foundation' },
      { name: 'Chain Necklace', desc: 'Silver, often multiple layered' },
      { name: 'Oversized Graphic Tee', desc: 'Band or ironic print' },
      { name: 'Chunky Shoes or Skate Shoes', desc: 'Vans, Converse, or platform' },
    ],
    icons: [
      { name: 'Chase Hudson (Lil Huddy)', role: 'Creator', era: '2019 – present' },
      { name: 'Finneas', role: 'Musician & producer', era: '2019 – present' },
      { name: 'Corpse Husband', role: 'Creator', era: '2020 – present' },
    ],
    modernReps: [
      { name: 'Austin Butler', type: 'Actor' },
      { name: 'Jaden Smith', type: 'Musician & creator' },
      { name: 'emo revival TikTok', type: 'Creator community' },
    ],
    culturalContext: 'E-boy is the first aesthetic to emerge natively from TikTok — its spread was algorithmic, not organic. It represents the digitisation of alternative culture: emo and grunge aesthetics translated for a generation that discovered them through short-form video rather than music or subculture spaces.',
  },

  // ── Indie ─────────────────────────────────────────────────────────────────
  indie: {
    era: '2005 – present',
    origin: 'UK & USA (indie music scene)',
    history: 'Indie style grew from the indie rock scene of the 2000s — Arctic Monkeys, The Strokes, The xx — and carried forward their thrift-store-meets-vintage aesthetic. It evolved through various phases: Tumblr indie of the 2010s, the Pitchfork-coded musician look, and the "indie sleaze" revival of 2023. It prizes authenticity over trends.',
    keyGarments: [
      { name: 'Vintage or Thrift-Store Band Tee', desc: 'Authentic, worn-in' },
      { name: 'Wide-Leg or Straight Jeans', desc: 'Often second-hand' },
      { name: 'Oversized Cardigan', desc: 'Chunky, worn casually' },
      { name: 'Corduroy Jacket or Shirt', desc: 'Texture-forward thrift find' },
      { name: 'Retro Sneakers or Boots', desc: 'New Balance, Dr. Martens, Converse' },
    ],
    icons: [
      { name: 'Alex Turner', role: 'Musician (Arctic Monkeys)', era: '2005 – present' },
      { name: 'Alexa Chung', role: 'Model & presenter', era: '2000s – present' },
      { name: 'Patti Smith', role: 'Musician & poet', era: '1970s – present' },
    ],
    modernReps: [
      { name: 'Phoebe Bridgers', type: 'Musician' },
      { name: 'boygenius (band)', type: 'Musicians' },
      { name: 'Clairo', type: 'Musician' },
    ],
    culturalContext: 'Indie aesthetic is rooted in the value of authenticity and discovery — finding a band, a thrift shop, a garment before anyone else. It carries an implicit anti-commercialism that has always been in tension with the commercialisation of indie as a genre and market. "Indie sleaze" revival showed how nostalgia recycles the authentic into the ironic.',
  },

  // ── Skater ────────────────────────────────────────────────────────────────
  skater: {
    era: '1980s – present',
    origin: 'California, USA (skateboarding culture)',
    history: 'Skate style emerged from California\'s skateboarding community in the 1980s — Vans, baggy jeans, and graphic tees. Brands like Supreme (originally a skate shop), Thrasher, and Santa Cruz defined the aesthetic. It became one of streetwear\'s founding cultures and remains influential across fashion.',
    keyGarments: [
      { name: 'Baggy Jeans', desc: 'Wide, often distressed' },
      { name: 'Graphic Tee', desc: 'Skate brand, band, or DIY' },
      { name: 'Vans or Converse', desc: 'The skate shoe icons' },
      { name: 'Hoodie or Zip-Up', desc: 'Heavyweight, worn-in' },
      { name: 'Cargo Shorts', desc: 'Summer skate staple' },
    ],
    icons: [
      { name: 'Tony Hawk', role: 'Professional skateboarder', era: '1980s – present' },
      { name: 'Harold Hunter', role: 'Skateboarder & Kids actor', era: '1990s' },
      { name: 'Supreme (early era)', role: 'Brand (founded as a skate shop)', era: '1990s' },
    ],
    modernReps: [
      { name: 'Tyler the Creator', type: 'Musician' },
      { name: 'Lil Nas X', type: 'Musician' },
      { name: 'Illegal Civilization', type: 'Skate collective' },
    ],
    culturalContext: 'Skate culture is one of the most generative subcultures in fashion history — it produced streetwear, shaped sneaker culture, and influenced luxury fashion. It is rooted in a DIY ethos, public space reclamation, and the translation of athleticism into style. Its authenticity is constantly tested by commercialisation.',
  },

  // ── Soft Boy ──────────────────────────────────────────────────────────────
  softboy: {
    era: '2016 – present',
    origin: 'Online (Tumblr / Twitter)',
    history: 'Soft Boy emerged as a counterpoint to traditional masculinity online — sensitive, aesthetically aware, and emotionally expressive. It draws from indie music culture, Tumblr aesthetics, and the idea that caring about your appearance and your feelings is compatible with being a man. It overlaps with e-boy and indie aesthetics.',
    keyGarments: [
      { name: 'Pastel or Muted Oversized Sweater', desc: 'Soft colour, cosy silhouette' },
      { name: 'Straight or Relaxed Jeans', desc: 'Often vintage wash' },
      { name: 'Simple White Tee', desc: 'Clean, unpretentious' },
      { name: 'Retro or Simple Sneakers', desc: 'New Balance, Vans' },
      { name: 'Bucket Hat or Beanie', desc: 'Casual headwear' },
    ],
    icons: [
      { name: 'Harry Styles', role: 'Musician', era: '2017 – present' },
      { name: 'Rex Orange County', role: 'Musician', era: '2010s – present' },
      { name: 'Troye Sivan', role: 'Musician', era: '2010s – present' },
    ],
    modernReps: [
      { name: 'Conan Gray', type: 'Musician' },
      { name: 'Omar Apollo', type: 'Musician' },
      { name: 'Steve Lacy', type: 'Musician' },
    ],
    culturalContext: 'Soft Boy represents an evolution in the relationship between masculinity and aesthetics — it normalises men caring about clothes, feelings, and beauty without needing to perform toughness. It is both a genuine identity and a contested one: critics argue "soft boy" can be a persona that masks emotional avoidance.',
  },

  // ── Hip-Hop / Urban ───────────────────────────────────────────────────────
  hiphop: {
    era: '1973 – present',
    origin: 'South Bronx, New York, USA',
    history: 'Hip-hop fashion emerged from the South Bronx in the early 1970s alongside the music and culture. From Adidas tracksuits and Run DMC, through Dapper Dan\'s custom pieces and Biggie\'s Coogi sweaters, to the Sean John era and the luxury co-signs of the 2010s — hip-hop has driven more mainstream fashion shifts than any other subculture.',
    keyGarments: [
      { name: 'Oversized Hoodie', desc: 'The uniform — heavyweight, dropped shoulder' },
      { name: 'Baggy Jeans', desc: 'Wide-leg or relaxed — a recurring silhouette' },
      { name: 'Chunky Sneakers', desc: 'Air Jordans, Nike, Adidas' },
      { name: 'Puffer Jacket', desc: 'Goose down or Moncler — the status piece' },
      { name: 'Gold Chain Necklace', desc: 'Cuban link — cultural signifier' },
    ],
    icons: [
      { name: 'Dapper Dan', role: 'Designer (Harlem couturier)', era: '1980s' },
      { name: 'Run DMC', role: 'Music group', era: '1980s' },
      { name: 'Tupac Shakur', role: 'Musician', era: '1990s' },
    ],
    modernReps: [
      { name: 'ASAP Rocky', type: 'Musician & stylist' },
      { name: 'Pharrell Williams', type: 'Musician & designer' },
      { name: 'Kanye West', type: 'Musician & designer' },
    ],
    culturalContext: 'Hip-hop fashion is the most globally influential subculture in fashion history. It took what was available — surplus military wear, athletic gear — and transformed it into cultural capital. Its relationship with luxury fashion moved from rejection to mutual co-option. Hip-hop validated Black aesthetics on a global stage.',
  },

  // ── Rockstar / Glam Rock ──────────────────────────────────────────────────
  rockstar: {
    era: '1950s – present',
    origin: 'USA / UK (rock & roll and glam rock)',
    history: 'Rockstar style has no single origin — it evolved from Elvis Presley\'s rebellion to the Beatles\' mod suits, Jimi Hendrix\'s psychedelia, David Bowie\'s glam theatrics, and Keith Richards\' dissolute elegance. Each decade produced its own rock archetype. The aesthetic is defined by excess, sex, and anti-convention.',
    keyGarments: [
      { name: 'Leather Jacket', desc: 'The rockstar uniform across every era' },
      { name: 'Slim or Flared Jeans', desc: 'Tight or dramatic — both valid' },
      { name: 'Band Tee', desc: 'Vintage or classic' },
      { name: 'Platform Boots or Chelsea Boots', desc: 'Elevated heel' },
      { name: 'Statement Accessory', desc: 'Scarf, rings, pendant — maximum adornment' },
    ],
    icons: [
      { name: 'David Bowie', role: 'Musician', era: '1970s – 2010s' },
      { name: 'Keith Richards', role: 'Musician (Rolling Stones)', era: '1960s – present' },
      { name: 'Jimi Hendrix', role: 'Musician', era: '1960s' },
    ],
    modernReps: [
      { name: 'Harry Styles', type: 'Musician' },
      { name: 'Maneskin', type: 'Band' },
      { name: 'Lenny Kravitz', type: 'Musician' },
    ],
    culturalContext: 'Rockstar aesthetic is the performance of transgression — using clothing to signal that you live beyond ordinary rules. It draws on a long lineage of outsider artists and has been repeatedly absorbed by mainstream fashion. Its power lies in its mythology: the life behind the look.',
  },

  // ── Art Hoe / Artsy ───────────────────────────────────────────────────────
  arthoe: {
    era: '2016 – present',
    origin: 'Online (Tumblr / Instagram)',
    history: 'Art Hoe emerged on social media in 2016 as a self-consciously artsy aesthetic — overalls, turtlenecks, paint-stained clothes, museum selfies. It celebrated creative identity and intellectual curiosity, and was notably more inclusive of Black and queer creators than many preceding aesthetics. It drew from 90s indie and fine art culture.',
    keyGarments: [
      { name: 'Overalls (dungarees)', desc: 'The art hoe signature — worn casually' },
      { name: 'Striped or Colourful Turtleneck', desc: 'Art student staple' },
      { name: 'Mom Jeans', desc: 'High-waist, often vintage' },
      { name: 'Corduroy or Denim Jacket', desc: 'Worn with pins and patches' },
      { name: 'Chunky or Retro Sneakers', desc: 'New Balance, Nike, Converse' },
    ],
    icons: [
      { name: 'Frida Kahlo', role: 'Artist', era: '1930s–40s' },
      { name: 'Jean-Michel Basquiat', role: 'Artist', era: '1980s' },
      { name: 'Solange Knowles', role: 'Musician & visual artist', era: '2010s' },
    ],
    modernReps: [
      { name: 'Amandla Stenberg', type: 'Actor & creator' },
      { name: 'Tyler the Creator', type: 'Musician' },
      { name: 'Tavi Gevinson', type: 'Creator & writer' },
    ],
    culturalContext: 'Art Hoe was significant for centring Black and queer creative identity in a predominantly white aesthetic landscape. It used clothing to signal intellectual and artistic engagement, and represented a rejection of fashion gatekeeping. Its legacy is the normalisation of "artist" as a visual identity for everyday people.',
  },

  // ── K-Pop / Korean Street ─────────────────────────────────────────────────
  kpop: {
    era: '1990s (Korea) / global 2010s – present',
    origin: 'South Korea',
    history: 'K-Pop fashion evolved alongside the music industry\'s idol system — curated, polished, and deliberately aspirational. From the early groups of the 1990s to the global dominance of BTS and BLACKPINK, K-Pop developed a distinct visual language that blends Western streetwear, Japanese kawaii, and Korean designer aesthetics with extreme precision.',
    keyGarments: [
      { name: 'Oversized or Structured Blazer', desc: 'Often in unexpected colour' },
      { name: 'Baggy Trousers with Belt', desc: 'Streetwear-meets-tailoring' },
      { name: 'Graphic or Logo Tee', desc: 'Often designer or collab-branded' },
      { name: 'Platform or Chunky Shoe', desc: 'Height-enhancing, statement sole' },
      { name: 'Layered Streetwear Set', desc: 'Co-ordinated from top to toe' },
    ],
    icons: [
      { name: 'G-Dragon', role: 'Musician (BIGBANG)', era: '2006 – present' },
      { name: 'BTS', role: 'Music group', era: '2013 – present' },
      { name: 'BLACKPINK', role: 'Music group', era: '2016 – present' },
    ],
    modernReps: [
      { name: 'Jennie (BLACKPINK)', type: 'Musician & Chanel ambassador' },
      { name: 'Stray Kids', type: 'Music group' },
      { name: 'NewJeans', type: 'Music group' },
    ],
    culturalContext: 'K-Pop fashion is a precision-engineered aesthetic system — every look is intentional, every colour symbolically loaded. It has exported a Korean sensibility of extreme detail and group coordination to global audiences, disrupting Western fashion\'s dominance and placing Korean designers and aesthetics at the centre of global trends.',
  },

  // ── Harajuku / J-Fashion ──────────────────────────────────────────────────
  harajuku: {
    era: '1980s – present',
    origin: 'Harajuku district, Tokyo, Japan',
    history: 'Harajuku style emerged in the eponymous Tokyo neighbourhood in the 1980s as young Japanese people rejected both Western fashion and traditional aesthetics, creating an extreme, maximalist, self-expressive culture. Documented by photographer Shoichi Aoki in FRUiTS magazine (1997–2017), it gave the world Lolita, Decora, Visual Kei, and more. Gwen Stefani\'s 2004 Harajuku Girls brought it Western mainstream attention.',
    keyGarments: [
      { name: 'Decora Layers', desc: 'Maximum colour and accessory stacking' },
      { name: 'Lolita Dress', desc: 'Petticoat-filled, Victorian-inspired' },
      { name: 'Platform Shoes', desc: 'Extreme height, often Demonia or Buffalo' },
      { name: 'Kawaii Accessories', desc: 'Dozens of pins, clips, plush toys' },
      { name: 'Mixed-Pattern Layers', desc: 'Intentional clashing textures and prints' },
    ],
    icons: [
      { name: 'Shoichi Aoki', role: 'Photographer (FRUiTS magazine)', era: '1990s–2010s' },
      { name: 'Kyary Pamyu Pamyu', role: 'Musician', era: '2010s' },
      { name: 'Gwen Stefani', role: 'Musician (western exposure)', era: '2000s' },
    ],
    modernReps: [
      { name: 'Kyary Pamyu Pamyu', type: 'Musician' },
      { name: 'WEGO & 6%DOKIDOKI', type: 'Japanese brands' },
      { name: '@harajukufashion community', type: 'Creator community' },
    ],
    culturalContext: 'Harajuku is the world\'s most documented laboratory of aesthetic self-expression — a neighbourhood where fashion became daily performance art. It rejected both Western imitation and Japanese convention, creating something entirely original. Its influence on global streetwear, kawaii culture, and the internet\'s aesthetic vocabulary is immeasurable.',
  },

  // ── Cyberpunk ─────────────────────────────────────────────────────────────
  cyberpunk: {
    era: '1984 – present',
    origin: 'Science fiction literature / film',
    history: 'Cyberpunk as an aesthetic was born in science fiction — William Gibson\'s Neuromancer (1984), Ridley Scott\'s Blade Runner (1982), and later Ghost in the Shell (1995). Its fashion expressions draw from this canon: dark, technical, neon-accented, dystopian. Its physical form is related to techwear but more extreme and theatrical.',
    keyGarments: [
      { name: 'Holographic or Reflective Jacket', desc: 'Light-catching, iridescent' },
      { name: 'Black Cargo Trousers', desc: 'Strapped, layered' },
      { name: 'LED or Illuminated Accessory', desc: 'Glowing elements' },
      { name: 'Platform Boots', desc: 'Chunky, dystopian elevation' },
      { name: 'Cyber Goggles', desc: 'Tinted, wrap-around or shield' },
    ],
    icons: [
      { name: 'Blade Runner (Ridley Scott)', role: 'Film', era: '1982' },
      { name: 'William Gibson', role: 'Author (Neuromancer)', era: '1984' },
      { name: 'Ghost in the Shell (Masamune Shirow)', role: 'Manga / anime', era: '1989' },
    ],
    modernReps: [
      { name: 'Grimes', type: 'Musician & artist' },
      { name: 'Hana', type: 'Musician' },
      { name: '@cyberpunk TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Cyberpunk fashion is the visual language of dystopian capitalism — high technology, low life. It imagines a future where humans merge with machines and corporations rule. Its aesthetics have become increasingly real: wearable tech, LED clothing, and augmented reality make it more prophetic than fictional.',
  },

  // ── Steampunk ─────────────────────────────────────────────────────────────
  steampunk: {
    era: '1980s (literary) / 2000s (aesthetic community)',
    origin: 'UK (Victorian era inspiration) / global online community',
    history: 'Steampunk emerged as a literary genre in the 1980s (K.W. Jeter coined the term in 1987) and developed into a fashion and maker community in the 2000s. It reimagines the Victorian industrial era with fantasy technology — clockwork, steam, dirigibles — creating an alternative history aesthetic. It peaked culturally around 2008–2012 and maintains a dedicated community.',
    keyGarments: [
      { name: 'Tailored Waistcoat', desc: 'Often brocade or leather' },
      { name: 'High-Neck Victorian Blouse', desc: 'Ruffled, layered' },
      { name: 'Goggles', desc: 'Brass or copper-rimmed — the defining accessory' },
      { name: 'Pocketwatch', desc: 'On a chain, Victorian timepiece' },
      { name: 'Victorian Boots', desc: 'Lace-up, heritage heel' },
    ],
    icons: [
      { name: 'H.G. Wells', role: 'Author', era: '1890s' },
      { name: 'Jules Verne', role: 'Author', era: '1870s' },
      { name: 'The League of Extraordinary Gentlemen', role: 'Film / comic reference', era: '2000s' },
    ],
    modernReps: [
      { name: 'Abney Park (band)', type: 'Musician' },
      { name: 'Vernian Process', type: 'Musician' },
      { name: 'Steampunk World\'s Fair', type: 'Event community' },
    ],
    culturalContext: 'Steampunk is nostalgic futurism — the desire to return to a more tactile, craft-driven era while imagining its technology pushed to fantastical limits. It is also a maker community: many steampunk adherents build their own accessories and props. It carries an implicit critique of digital homogeneity and disposable culture.',
  },

  // ── Fairycore ─────────────────────────────────────────────────────────────
  fairycore: {
    era: '2020 – present',
    origin: 'Online (TikTok / Pinterest)',
    history: 'Fairycore emerged as an online aesthetic during the pandemic in 2020 — a fantasy escape into ethereal, nature-inspired dressing. It draws from Victorian flower fairy illustrations, A Midsummer Night\'s Dream aesthetics, and the natural world. It overlaps with cottagecore and light academia but prioritises magic and whimsy over domesticity.',
    keyGarments: [
      { name: 'Flowy Sheer Dress', desc: 'Ethereal, pastel or white' },
      { name: 'Floral Embroidered Blouse', desc: 'Delicate, botanical detail' },
      { name: 'Tulle or Tiered Skirt', desc: 'Voluminous, light-catching' },
      { name: 'Butterfly or Floral Hair Accessories', desc: 'Nature motifs in hair' },
      { name: 'Ballet Flats or Strappy Sandals', desc: 'Delicate, feminine footwear' },
    ],
    icons: [
      { name: 'Björk', role: 'Musician', era: '1990s–2000s' },
      { name: 'Ophelia (Pre-Raphaelite painting)', role: 'Artistic reference', era: '1850s' },
      { name: 'A Midsummer Night\'s Dream', role: 'Shakespearean source text', era: '1600s' },
    ],
    modernReps: [
      { name: 'Lana Del Rey', type: 'Musician' },
      { name: 'Doja Cat (ethereal phase)', type: 'Musician' },
      { name: '@fairycore TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Fairycore is a pandemic-born fantasy — the desire for magic and wonder in a world that felt chaotic. It aligns with broader cottagecore trends toward slower, more natural aesthetics. It\'s also notable for its gender-inclusive interpretation: fairy aesthetics transcend binary dressing.',
  },

  // ── Bohemian / Boho ───────────────────────────────────────────────────────
  boho: {
    era: '1960s – present',
    origin: 'Bohemian tradition / 1960s counterculture',
    history: 'Bohemian style traces its roots to 19th-century European artists and writers who rejected bourgeois convention. Its modern fashion form crystallised in the 1960s–70s counterculture (Woodstock, the hippie movement) and was revived as "boho-chic" in the early 2000s by Sienna Miller and Kate Moss. It remains a perennial in festival and summer fashion.',
    keyGarments: [
      { name: 'Flowy Maxi Dress', desc: 'Floral, paisley, or tie-dye' },
      { name: 'Peasant Blouse', desc: 'Loose, ruffled, folkloric' },
      { name: 'Fringe Jacket or Vest', desc: 'Suede or leather with fringe' },
      { name: 'Wide-Brim Hat', desc: 'Felt or straw' },
      { name: 'Embroidered or Woven Bag', desc: 'Natural materials, artisan detail' },
    ],
    icons: [
      { name: 'Janis Joplin', role: 'Musician', era: '1960s–70s' },
      { name: 'Sienna Miller', role: 'Actor & style icon', era: '2000s' },
      { name: 'Kate Moss', role: 'Model', era: '2000s' },
    ],
    modernReps: [
      { name: 'Vanessa Hudgens', type: 'Actor' },
      { name: 'Florence Welch', type: 'Musician' },
      { name: 'Coachella festival community', type: 'Cultural event' },
    ],
    culturalContext: 'Boho draws from the bohemian artistic tradition: the rejection of material comfort and convention in favour of creative freedom. In its 2000s commercial form it became associated with festival culture, wanderlust, and a romanticised global eclecticism that sometimes drew criticism for cultural appropriation. Its appeal lies in its freedom from rigid rules.',
  },

  // ── Cottagecore ───────────────────────────────────────────────────────────
  cottagecore: {
    era: '2018 – present',
    origin: 'Online (Tumblr / TikTok)',
    history: 'Cottagecore emerged online around 2018 and exploded during the 2020 pandemic lockdowns. It romanticises rural life — baking bread, tending gardens, wearing linen in sunlit meadows. It draws from 19th-century pastoral paintings, English countryside traditions, and the Arts and Crafts movement. Taylor Swift\'s folklore album became its unofficial soundtrack.',
    keyGarments: [
      { name: 'Prairie or Smocked Dress', desc: 'Floral, high-neck, modest length' },
      { name: 'Linen or Cotton Apron', desc: 'Worn over dress as layering piece' },
      { name: 'Puff-Sleeve Blouse', desc: 'Romantic, cottage-inspired' },
      { name: 'Cardigan', desc: 'Loose, handmade-feeling' },
      { name: 'Leather or Mary Jane Shoes', desc: 'Simple, grounded footwear' },
    ],
    icons: [
      { name: 'Laura Ingalls Wilder', role: 'Author', era: '1870s–1900s' },
      { name: 'Beatrix Potter', role: 'Author & illustrator', era: '1900s' },
      { name: 'Taylor Swift (folklore era)', role: 'Musician', era: '2020' },
    ],
    modernReps: [
      { name: 'Taylor Swift', type: 'Musician' },
      { name: 'Phoebe Bridgers', type: 'Musician' },
      { name: '@cottagecore TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Cottagecore is a reaction to urban anxiety, digital overwhelm, and the precarity of late capitalism — it offers an imagined refuge in a simpler, handcrafted existence. Its appeal is emotional rather than literal: the desire for slowness, beauty, and connection with nature.',
  },

  // ── Baddie ────────────────────────────────────────────────────────────────
  baddie: {
    era: '2015 – present',
    origin: 'Online (Instagram / Black American culture)',
    history: 'Baddie aesthetic emerged from Black American Instagram culture in the mid-2010s — a look centred on confidence, body-conscious styling, and aspirational femininity. It draws from video vixen aesthetics of the 2000s and was spread globally by creators and the Kardashian-Jenner family. It celebrates curves, glam, and self-assurance.',
    keyGarments: [
      { name: 'Fitted Bodysuit or Crop Top', desc: 'Snatched, form-fitting' },
      { name: 'High-Waist Jeans or Leggings', desc: 'Enhancing, sculpting' },
      { name: 'Biker Shorts', desc: 'Sculpted athleisure staple' },
      { name: 'Strappy Heels or Chunky Sneakers', desc: 'Depending on the occasion' },
      { name: 'Mini Dress or Skirt', desc: 'Bodycon, confident' },
    ],
    icons: [
      { name: 'Rihanna', role: 'Musician & entrepreneur', era: '2010s – present' },
      { name: 'Cardi B', role: 'Musician', era: '2017 – present' },
      { name: 'Beyoncé', role: 'Musician', era: '2000s – present' },
    ],
    modernReps: [
      { name: 'Megan Thee Stallion', type: 'Musician' },
      { name: 'Kylie Jenner', type: 'Entrepreneur & creator' },
      { name: 'Ari Lennox', type: 'Musician' },
    ],
    culturalContext: 'Baddie aesthetic is rooted in Black femme culture and the celebration of body confidence as power. It was commercialised heavily by non-Black creators and brands, prompting important conversations about cultural credit and appropriation. Its core message — confidence is the best outfit — resonated globally and reshaped Instagram culture.',
  },

  // ── Romantic ──────────────────────────────────────────────────────────────
  romantic: {
    era: '1800s sources / ongoing',
    origin: 'Romantic literary tradition / France',
    history: 'Romantic fashion draws from the literary and artistic Romantic movement of the 19th century — Keats, Byron, Delacroix — and its associated aesthetic of beauty, emotion, and nature. In modern fashion it appears through ruffles, florals, puff sleeves, and soft draping. It experienced a major revival in the early 2020s through brands like Reformation and Zimmermann.',
    keyGarments: [
      { name: 'Ruffled or Puff-Sleeve Dress', desc: 'The most explicitly romantic silhouette' },
      { name: 'Floral Midi Dress', desc: 'Delicate print, flowing fabric' },
      { name: 'Sheer or Organza Top', desc: 'Ethereal fabric' },
      { name: 'Lace or Embroidered Blouse', desc: 'Delicate surface detail' },
      { name: 'Strappy Heels or Ballet Flats', desc: 'Feminine, delicate footwear' },
    ],
    icons: [
      { name: 'Pre-Raphaelite painters', role: 'Artistic movement', era: '1848–1900s' },
      { name: 'Sofia Coppola', role: 'Director & style icon', era: '2000s' },
      { name: 'Chloé (house)', role: 'Design house', era: '1970s – present' },
    ],
    modernReps: [
      { name: 'Lily James', type: 'Actor' },
      { name: 'Reformation', type: 'Brand' },
      { name: 'Simone Rocha', type: 'Designer' },
    ],
    culturalContext: 'Romantic fashion is one of the oldest recurring aesthetics in Western dress — the eternal desire for beauty, tenderness, and idealism expressed through clothing. Its revivals tend to coincide with periods of social strain: the return to softness as a response to hardness.',
  },

  // ── Edgy ─────────────────────────────────────────────────────────────────
  edgy: {
    era: '1990s – present',
    origin: 'Global (punk / goth / industrial crossover)',
    history: 'Edgy style emerged from the overlap of punk, goth, and alternative subcultures in the 1990s and has evolved into a broader category of dark, provocative, and boundary-pushing fashion. It has been repeatedly absorbed and reinterpreted by high fashion (Alexander McQueen, Rick Owens) and remains a constant counterpoint to mainstream prettiness.',
    keyGarments: [
      { name: 'Black Leather Jacket', desc: 'The universal edgy statement piece' },
      { name: 'Ripped or Distressed Denim', desc: 'Deliberately worn, anti-polish' },
      { name: 'Mesh or Sheer Layer', desc: 'Revealing, textural' },
      { name: 'Platform or Lug-Sole Boots', desc: 'Heavy, grounded' },
      { name: 'Chain Accessory', desc: 'Belt, necklace, or bag detail' },
    ],
    icons: [
      { name: 'Alexander McQueen', role: 'Designer', era: '1990s–2000s' },
      { name: 'Rick Owens', role: 'Designer', era: '2000s – present' },
      { name: 'Grace Jones', role: 'Musician & model', era: '1970s – present' },
    ],
    modernReps: [
      { name: 'Dua Lipa', type: 'Musician' },
      { name: 'Charli XCX', type: 'Musician' },
      { name: 'Rick Owens community', type: 'Fashion community' },
    ],
    culturalContext: 'Edgy fashion is the visual articulation of resistance — against prettiness, against convention, against comfort. It has a deep relationship with queerness, outsider identity, and art-world provocation. Its most elevated expression (McQueen, Owens) turns shock into beauty; its street expression turns it into community belonging.',
  },

  // ── Workwear / Americana ──────────────────────────────────────────────────
  workwear: {
    era: '1870s – present',
    origin: 'USA (industrial / agricultural labour)',
    history: 'American workwear — denim, canvas, chambray — was designed for durability in factories, mines, and fields. Levi Strauss invented riveted denim in 1873; Carhartt designed duck canvas overalls in 1889. In the 20th century it was adopted by artists, rebels, and eventually fashion, which turned functional garments into cultural icons.',
    keyGarments: [
      { name: 'Denim Jeans', desc: 'Levi\'s 501 or similar — the original workwear garment' },
      { name: 'Canvas or Duck Jacket', desc: 'Carhartt, Dickies — unbreakable' },
      { name: 'Chambray Work Shirt', desc: 'Utility shirting' },
      { name: 'Overalls or Bib Dungarees', desc: 'The utilitarian silhouette' },
      { name: 'Work Boots', desc: 'Red Wing, Timberland — built to last' },
    ],
    icons: [
      { name: 'Levi Strauss', role: 'Entrepreneur (invented riveted denim)', era: '1873' },
      { name: 'Carhartt', role: 'Brand', era: '1889 – present' },
      { name: 'James Dean', role: 'Actor', era: '1950s' },
    ],
    modernReps: [
      { name: 'Carhartt WIP', type: 'Brand' },
      { name: 'Dickies × Wrangler collaborations', type: 'Brand' },
      { name: 'Heritage denim community', type: 'Enthusiast community' },
    ],
    culturalContext: 'Workwear\'s cultural journey from the factory floor to fashion runways is one of fashion\'s most significant stories. It carries the dignity of labour — garments designed to survive real work — which gives them authenticity that fashion copies endlessly. The Carhartt beanie became a streetwear icon; the Red Wing boot became a luxury object.',
  },

  // ── Military / Tactical ───────────────────────────────────────────────────
  military: {
    era: 'Ancient / modern iterations 1940s – present',
    origin: 'Global military traditions',
    history: 'Military surplus clothing entered civilian fashion after WWII when surplus gear became widely available. In the 1960s it was adopted by the counterculture as anti-war irony; in the 1990s it was embraced by streetwear. Today it continues through utilitarian silhouettes, olive and khaki palettes, and cargo pocket detailing.',
    keyGarments: [
      { name: 'Cargo Trousers', desc: 'Multi-pocket — the defining military-civilian crossover' },
      { name: 'Field Jacket (M-65)', desc: 'The most influential military garment in civilian fashion' },
      { name: 'Combat Boots', desc: 'Lace-up, heavy sole' },
      { name: 'Military Parka', desc: 'Fishtail or M-65 derivative' },
      { name: 'Utility Vest', desc: 'Multi-pocket, tactical carry' },
    ],
    icons: [
      { name: 'Che Guevara', role: 'Revolutionary (beret icon)', era: '1950s–60s' },
      { name: 'MASH (TV series)', role: 'Cultural reference', era: '1970s' },
      { name: 'Alpha Industries', role: 'Brand (M-65 jacket)', era: '1950s – present' },
    ],
    modernReps: [
      { name: 'Maharishi', type: 'Brand' },
      { name: 'Alpha Industries', type: 'Brand' },
      { name: 'Gosha Rubchinskiy', type: 'Designer' },
    ],
    culturalContext: 'Military aesthetics carry complex politics — they simultaneously romanticise and critique war and state power. The field jacket worn as anti-war protest in 1970 and as fashion in 2010 carries different meanings in different hands. Military clothing in fashion is always a negotiation between function, history, and the politics of appropriation.',
  },

  // ── Western / Cowboy ──────────────────────────────────────────────────────
  western: {
    era: '1800s – present',
    origin: 'American West / cowboy culture',
    history: 'Western fashion grew from the practical dress of American cowboys, ranchers, and frontiersmen in the 19th century. It was romanticised by Hollywood Westerns in the 20th century and periodically adopted by fashion. Its most recent wave — "Cowboy Core" — peaked in 2023–24, driven by Beyoncé\'s Cowboy Carter and a broader reclamation of Black cowboy heritage.',
    keyGarments: [
      { name: 'Cowboy Boots', desc: 'The defining western garment' },
      { name: 'Denim Jeans', desc: 'Wrangler-cut, straight leg' },
      { name: 'Chambray or Pearl-Snap Shirt', desc: 'Western-yoke detailing' },
      { name: 'Wide-Brim Hat', desc: 'Stetson or felt cowboy hat' },
      { name: 'Leather Belt with Buckle', desc: 'Often ornate, often oversized' },
    ],
    icons: [
      { name: 'John Wayne', role: 'Actor', era: '1940s–70s' },
      { name: 'Dolly Parton', role: 'Musician', era: '1970s – present' },
      { name: 'Beyoncé (Cowboy Carter)', role: 'Musician', era: '2024' },
    ],
    modernReps: [
      { name: 'Lil Nas X', type: 'Musician' },
      { name: 'Orville Peck', type: 'Musician' },
      { name: 'Post Malone', type: 'Musician' },
    ],
    culturalContext: 'Western aesthetics carry deep tensions — between frontier mythology and colonial violence, between white cowboy iconography and the largely invisible Black and Indigenous cowboy traditions. The Cowboy Carter moment was partly about reclaiming those erased histories. Western fashion is also the most enduringly American aesthetic export.',
  },

  // ── Athletic / Performance ────────────────────────────────────────────────
  athletic: {
    era: '1970s – present',
    origin: 'USA / Europe (sports culture)',
    history: 'Athletic fashion evolved from performance sportswear designed for specific sports — running, swimming, tennis. Brands like Adidas, Nike, and Puma built the category in the 1970s–80s. The 2010s "athleisure" movement blurred athletic wear into everyday fashion, and now performance and street are largely inseparable.',
    keyGarments: [
      { name: 'Compression Shorts or Leggings', desc: 'Performance-engineered fit' },
      { name: 'Technical Running Tee', desc: 'Moisture-wicking, barely there' },
      { name: 'Track Jacket', desc: 'Adidas, Nike — the athletic icon' },
      { name: 'Training Shoes', desc: 'Cross-trainers, runners' },
      { name: 'Performance Base Layer', desc: 'Temperature-regulating foundation' },
    ],
    icons: [
      { name: 'Adidas (Adolf Dassler)', role: 'Brand founder', era: '1949 – present' },
      { name: 'Nike (Phil Knight)', role: 'Brand founder', era: '1964 – present' },
      { name: 'Michael Jordan', role: 'Athlete (Air Jordan legacy)', era: '1985 – present' },
    ],
    modernReps: [
      { name: 'Nike', type: 'Brand' },
      { name: 'Adidas', type: 'Brand' },
      { name: 'Gymshark', type: 'Brand' },
    ],
    culturalContext: 'Athletic wear carries the values of self-discipline, peak performance, and physical potential. Its mainstream adoption reflects the centrality of fitness and wellness to modern identity. The sneaker in particular has become one of the 21st century\'s most culturally loaded objects — a crossroads of sport, fashion, race, and commerce.',
  },

  // ── Outdoor / Hiking ──────────────────────────────────────────────────────
  outdoor: {
    era: '1950s – present',
    origin: 'USA / UK (mountaineering and camping culture)',
    history: 'Outdoor fashion traces to the golden age of mountaineering and expedition culture — REI was founded in 1938, Patagonia in 1973. It moved from specialist gear to mainstream fashion through gorpcore, the workleisure movement, and the pandemic outdoor boom. Its aesthetic language is shared with gorpcore but more focused on traditional outdoor brands and heritage design.',
    keyGarments: [
      { name: 'Technical Shell Jacket', desc: 'Gore-Tex, waterproof, technical' },
      { name: 'Fleece', desc: 'Patagonia Synchilla — the outdoor icon' },
      { name: 'Hiking Boots', desc: 'Waterproof, lug-sole' },
      { name: 'Merino Base Layer', desc: 'Temperature-regulating foundation' },
      { name: 'Trekking Backpack', desc: 'Functional carry — Osprey, Deuter' },
    ],
    icons: [
      { name: 'Yvon Chouinard (Patagonia)', role: 'Climber & brand founder', era: '1970s – present' },
      { name: 'Reinhold Messner', role: 'Mountaineer', era: '1970s–80s' },
      { name: 'REI', role: 'Brand (co-op)', era: '1938 – present' },
    ],
    modernReps: [
      { name: 'Patagonia', type: 'Brand' },
      { name: 'Arc\'teryx', type: 'Brand' },
      { name: 'Outdoor Voices', type: 'Brand' },
    ],
    culturalContext: 'Outdoor fashion carries values of environmental stewardship, physical challenge, and communion with nature — but its premium pricing makes it an affluent pursuit. Patagonia\'s environmental activism has made it a politically loaded brand. The outdoor aesthetic in fashion represents a particular kind of aspirational, eco-conscious identity.',
  },

  // ── Silk & Satin ──────────────────────────────────────────────────────────
  silksatin: {
    era: '1930s glamour / 1990s revival / 2020s present',
    origin: 'Hollywood glamour / European fashion houses',
    history: 'Silk and satin dressing traces to 1930s Hollywood — Jean Harlow, Marlene Dietrich — and the couture houses of Paris. Its modern revival came through 1990s slip dress culture (Kate Moss, Courtney Love) and again in the 2020s as quiet luxury pushed quality fabrics to the fore. Satin as eveningwear transitioned into daywear.',
    keyGarments: [
      { name: 'Silk or Satin Slip Dress', desc: 'The defining piece — fluid, sensual' },
      { name: 'Silk Button-Down Shirt', desc: 'Worn casually or as a layer' },
      { name: 'Satin Bias-Cut Skirt', desc: 'Fluid, liquid drape' },
      { name: 'Satin Blazer', desc: 'Elevated eveningwear into daywear' },
      { name: 'Satin Slip Skirt', desc: 'Midi length, worn with chunky knit or tee' },
    ],
    icons: [
      { name: 'Jean Harlow', role: 'Actor', era: '1930s' },
      { name: 'Kate Moss', role: 'Model', era: '1990s' },
      { name: 'Carolyn Bessette-Kennedy', role: 'Style icon', era: '1990s' },
    ],
    modernReps: [
      { name: 'Hailey Bieber', type: 'Model' },
      { name: 'Zendaya', type: 'Actor' },
      { name: 'Net-a-Porter community', type: 'Fashion platform' },
    ],
    culturalContext: 'Silk and satin dressing carries cultural associations of luxury, femininity, and ease. Its transition from evening to daywear reflects the democratisation of luxury fabrics and the "effortless" dressing ideal. The slip dress became a carrier of the quiet luxury message: nothing simpler, nothing more expensive-feeling.',
  },

  // ── Denimcore ─────────────────────────────────────────────────────────────
  denimcore: {
    era: '1873 – present',
    origin: 'USA (gold rush / working class)',
    history: 'Denim has the longest fashion history of any fabric in this list — invented for miners by Levi Strauss in 1873. It became rebellion in the 1950s (James Dean), counterculture in the 1960s, and eventually luxury in the 2000s. Denimcore as a distinct aesthetic emerged online in the 2010s, celebrating maximalist denim styling — double, triple denim, patched, and customised.',
    keyGarments: [
      { name: 'Straight or Baggy Jeans', desc: 'The denim foundation' },
      { name: 'Denim Jacket', desc: 'Classic or oversized' },
      { name: 'Denim Shirt', desc: 'Worn open or tucked' },
      { name: 'Denim Shorts', desc: 'Cut-off or structured' },
      { name: 'Patched or Customised Denim', desc: 'DIY — the highest denimcore expression' },
    ],
    icons: [
      { name: 'James Dean', role: 'Actor', era: '1950s' },
      { name: 'Brooke Shields (Calvin Klein)', role: 'Model', era: '1980s' },
      { name: 'Britney & Justin (double denim)', role: 'Celebrities', era: '2001' },
    ],
    modernReps: [
      { name: 'Glenn Martens (Diesel)', type: 'Designer' },
      { name: 'Y/Project', type: 'Brand' },
      { name: 'Marques\'Almeida', type: 'Brand' },
    ],
    culturalContext: 'Denim is democracy — the fabric worn across all classes, subcultures, and geographies for 150 years. Denimcore celebrates this universality while pushing it to an extreme. Double denim went from fashion crime to fashion statement through irony and affection. Its cultural power lies in its genuinely classless origin.',
  },

  // ── Leather Aesthetic ─────────────────────────────────────────────────────
  leatheraesthetic: {
    era: '1950s – present',
    origin: 'USA (biker / queer bar culture)',
    history: 'Leather fashion emerged from post-WWII motorcycle culture in the USA — Brando in The Wild One (1953) — and simultaneously from queer bar culture, where leather became a signifier of identity and community. Through punk (1976), heavy metal, and eventually mainstream fashion, leather transitioned from subcultural marker to wardrobe staple.',
    keyGarments: [
      { name: 'Leather Jacket', desc: 'The foundational leather piece — biker or moto cut' },
      { name: 'Leather Trousers', desc: 'Slim or wide, matte or patent' },
      { name: 'Leather Skirt', desc: 'Mini, midi, or maxi' },
      { name: 'Leather Boots', desc: 'Ankle or knee-high' },
      { name: 'Leather Blazer', desc: 'Structured, fashion-forward' },
    ],
    icons: [
      { name: 'Marlon Brando', role: 'Actor (The Wild One)', era: '1953' },
      { name: 'Joan Jett', role: 'Musician', era: '1970s – present' },
      { name: 'Gianni Versace', role: 'Designer', era: '1980s–90s' },
    ],
    modernReps: [
      { name: 'Dua Lipa', type: 'Musician' },
      { name: 'The Row', type: 'Brand' },
      { name: 'Totême', type: 'Brand' },
    ],
    culturalContext: 'Leather carries layered cultural meaning: rebellion, desire, identity, and power. Its queer leather community origins (Folsom Street, leather bars) gave it associations with sexuality and liberation that persist in its fashion use. Every time leather appears on a runway, it carries those histories with it — whether designers acknowledge it or not.',
  },

  // ── Knitwear Aesthetic ────────────────────────────────────────────────────
  knitwearaesthetic: {
    era: '1970s craft revival / 2010s – present',
    origin: 'UK & Scandinavia / global craft tradition',
    history: 'Knitwear as a dedicated aesthetic grew from the 1970s craft revival and the heritage sweater traditions of the UK (Aran islands, Fair Isle, Shetland). It was elevated by designers like Missoni, Sonia Rykiel, and later Acne Studios and JW Anderson. The internet turned specific knit archetypes — the chunky fisherman sweater, the intarsia vest — into viral aesthetic categories.',
    keyGarments: [
      { name: 'Chunky Fisherman Sweater', desc: 'Cable-knit, cream or oatmeal — the icon' },
      { name: 'Fair Isle or Intarsia Sweater', desc: 'Traditional pattern, heritage feel' },
      { name: 'Oversized Knit Cardigan', desc: 'Worn as a coat replacement' },
      { name: 'Knit Vest Over Shirt', desc: 'The layering formula' },
      { name: 'Balaclava or Knit Hat', desc: 'Head-to-toe knitwear commitment' },
    ],
    icons: [
      { name: 'Missoni', role: 'Design house', era: '1953 – present' },
      { name: 'Sonia Rykiel', role: 'Designer (Queen of Knits)', era: '1968–2016' },
      { name: 'JW Anderson', role: 'Designer', era: '2008 – present' },
    ],
    modernReps: [
      { name: 'JW Anderson', type: 'Designer' },
      { name: 'Acne Studios', type: 'Brand' },
      { name: '@knitwear TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Knitwear carries associations of warmth, craft, and care — someone made this. Heritage patterns (Fair Isle, Aran, Nordic) carry specific regional identities and the knowledge of generations of makers. The rise of hand-knitting communities online has made knitwear the aesthetic most explicitly connected to the maker movement and slow fashion.',
  },

  // ── Linencore ─────────────────────────────────────────────────────────────
  linencore: {
    era: '2020 – present (as distinct aesthetic) / fabric: ancient',
    origin: 'Mediterranean / ancient textile tradition',
    history: 'Linen is one of the world\'s oldest fabrics — Egyptian mummies were wrapped in it, Roman senators wore it. Linencore emerged as a distinct online aesthetic in 2020–2022 as minimalism, coastal grandma, and slow fashion intersected. It celebrates linen\'s natural wrinkle, breathability, and earthy palette as features rather than flaws.',
    keyGarments: [
      { name: 'Wide-Leg Linen Trousers', desc: 'The defining linencore piece' },
      { name: 'Linen Shirt (oversized)', desc: 'Worn open or half-tucked' },
      { name: 'Linen Blazer', desc: 'Unstructured, natural shape' },
      { name: 'Linen Midi Dress', desc: 'Simple cut, breathable' },
      { name: 'Linen Co-ord Set', desc: 'Matching top and bottom in natural tone' },
    ],
    icons: [
      { name: 'Ancient Mediterranean cultures', role: 'Historical origin', era: '3000 BCE – present' },
      { name: 'Giorgio Armani', role: 'Designer (elevated linen suits)', era: '1980s – present' },
      { name: 'Coastal Grandma trend', role: 'Aesthetic crossover', era: '2022' },
    ],
    modernReps: [
      { name: 'Reformation', type: 'Brand' },
      { name: 'MUJI', type: 'Brand' },
      { name: '@linencore community', type: 'Creator community' },
    ],
    culturalContext: 'Linencore is sustainability as aesthetic — linen is biodegradable, breathable, and improves with wear and washing. Choosing linen is a value statement about slow fashion, natural materials, and comfort over perfection. Its visible wrinkle is deliberately embraced: the antithesis of synthetic smoothness.',
  },

  // ── Clean Girl / Clean Boy ────────────────────────────────────────────────
  cleangirl: {
    era: '2022 – present',
    origin: 'Online (TikTok / Instagram)',
    history: 'Clean Girl aesthetic emerged on TikTok in 2021–2022, originally describing a polished, effortless look: slicked-back bun, gold jewellery, glazed skin, neutral clothes. It evolved to encompass a broader lifestyle aesthetic — clean, minimal, organised. Clean Boy developed as its male equivalent: well-fitted basics, no logos, quality over quantity.',
    keyGarments: [
      { name: 'Crisp White Tee', desc: 'Premium cotton, perfect fit' },
      { name: 'Straight or Slim Chinos', desc: 'Neutral — the foundation' },
      { name: 'Simple Crewneck Knit', desc: 'Grey, cream, or navy' },
      { name: 'Slim Dark Jeans', desc: 'No distress, no hardware' },
      { name: 'White Leather Sneakers', desc: 'The defining clean shoe' },
    ],
    icons: [
      { name: 'Hailey Bieber', role: 'Model', era: '2020s' },
      { name: 'Sofia Richie Grainge', role: 'Socialite', era: '2020s' },
      { name: 'Matilda Djerf', role: 'Creator', era: '2020s' },
    ],
    modernReps: [
      { name: 'Hailey Bieber', type: 'Model' },
      { name: 'Matt Rife', type: 'Creator' },
      { name: '@cleanboy TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Clean Girl/Boy is wellness culture translated into clothing — the aesthetics of self-care, organisation, and health. It carries associations with a particular kind of aspirational, financially comfortable life. Critics note that its "effortless" polish requires significant effort and resources, and that "clean" carries implicit connotations about skin tone and class.',
  },

  // ── Coastal Grandma / Coastal Grandpa ────────────────────────────────────
  coastalgrandma: {
    era: '2022 – present (named) / sources: timeless',
    origin: 'Online (TikTok) / New England coastal culture',
    history: 'Coastal Grandma was named by TikTok creator Lex Nicoleta in 2022 and instantly resonated as a descriptor for a look many people had been gravitating toward: linen, stripes, straw hats, woven bags, simple sandals — the wardrobe of someone who has a cottage by the sea and doesn\'t need to try. It draws from Nancy Meyers film aesthetics and New England summer culture.',
    keyGarments: [
      { name: 'Linen Trousers', desc: 'Wide-leg or relaxed — the cornerstone' },
      { name: 'Breton Striped Top', desc: 'Navy stripe on white — nautical DNA' },
      { name: 'Linen Shirt', desc: 'Short-sleeve, effortless' },
      { name: 'Relaxed Cardigan', desc: 'Lightweight, coastal ease' },
      { name: 'Espadrilles or Canvas Loafers', desc: 'The defining coastal shoe' },
    ],
    icons: [
      { name: 'Diane Keaton', role: 'Actor (Nancy Meyers films)', era: '2000s' },
      { name: 'Nancy Meyers', role: 'Director (The Holiday, It\'s Complicated)', era: '2000s' },
      { name: 'Ina Garten', role: 'Chef & author (Barefoot Contessa)', era: '2000s – present' },
    ],
    modernReps: [
      { name: 'Ina Garten', type: 'Chef & author' },
      { name: 'Lex Nicoleta', type: 'Creator (coined the term)' },
      { name: '@coastalgrandma TikTok community', type: 'Creator community' },
    ],
    culturalContext: 'Coastal Grandma taps into the fantasy of a specific kind of comfortable, cultured, unpressured life — the person who has arrived at themselves, who dresses for pleasure rather than performance. Its rapid adoption suggests a widespread desire to escape aspirational hustle aesthetics for something more settled and sensory.',
  },

}
