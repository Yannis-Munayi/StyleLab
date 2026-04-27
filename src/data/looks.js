// Curated outfit combinations per aesthetic.
// pieces: item IDs from categories.js
// pexelsQuery: men's outfit photo query
// womenPexelsQuery: women's equivalent outfit photo query

export const LOOKS = {
  streetwear: [
    {
      id: 'sw-1', name: 'Classic Street',
      vibe: 'Oversized layers, bold and urban',
      seasons: ['spring', 'fall'],
      pieces: ['bomber', 'baggy-jeans', 'high-tops', 'graphic-tee'],
      pexelsQuery: 'mens streetwear bomber jacket baggy jeans outfit',
      womenPexelsQuery: 'womens streetwear bomber jacket oversized outfit fashion',
    },
    {
      id: 'sw-2', name: 'Heatwave Edit',
      vibe: 'Summer streets, minimal but loud',
      seasons: ['summer'],
      pieces: ['graphic-tee', 'cargo', 'chunky-sneakers', 'baseball-cap'],
      pexelsQuery: 'mens streetwear summer outfit cargo pants sneakers',
      womenPexelsQuery: 'womens streetwear summer mini skirt crop top sneakers outfit',
    },
    {
      id: 'sw-3', name: 'Cold Weather Flex',
      vibe: 'Puffer up, stay fresh',
      seasons: ['fall', 'winter'],
      pieces: ['puffer', 'hoodie', 'joggers', 'high-tops', 'beanie'],
      pexelsQuery: 'mens streetwear winter puffer jacket hoodie outfit',
      womenPexelsQuery: 'womens streetwear winter puffer jacket oversized hoodie outfit',
    },
    {
      id: 'sw-4', name: 'Clean Casual',
      vibe: 'Understated logos, quality basics',
      seasons: ['spring', 'fall'],
      pieces: ['plain-tee', 'slim-jeans', 'clean-sneakers', 'crossbody'],
      pexelsQuery: 'mens clean casual streetwear outfit minimal',
      womenPexelsQuery: 'womens clean casual streetwear minimal outfit fashion',
    },
  ],

  oldmoney: [
    {
      id: 'om-1', name: 'Weekend in the Hamptons',
      vibe: 'Effortless old-world polish',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'chinos', 'loafers', 'watch'],
      pexelsQuery: 'mens old money aesthetic linen shirt chinos loafers',
      womenPexelsQuery: 'womens old money aesthetic silk blouse linen trousers loafers elegant',
    },
    {
      id: 'om-2', name: 'The Country Club',
      vibe: 'Heritage patterns, clean silhouettes',
      seasons: ['fall', 'winter'],
      pieces: ['peacoat', 'cable-knit', 'pleated', 'chelsea-boots', 'scarf'],
      pexelsQuery: 'mens old money quiet luxury peacoat outfit',
      womenPexelsQuery: 'womens quiet luxury old money camel coat cashmere midi skirt elegant',
    },
    {
      id: 'om-3', name: 'Understated Office',
      vibe: 'Quiet authority, zero logos',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'turtleneck', 'pleated', 'dress-shoes', 'watch'],
      pexelsQuery: 'mens quiet luxury office minimalist turtleneck blazer',
      womenPexelsQuery: 'womens quiet luxury office silk blouse tailored trousers pearl elegant',
    },
    {
      id: 'om-4', name: 'The Estate Walk',
      vibe: 'Autumn layers done right',
      seasons: ['fall'],
      pieces: ['overcoat', 'crewneck', 'raw-denim', 'loafers'],
      pexelsQuery: 'mens old money overcoat autumn outfit',
      womenPexelsQuery: 'womens old money autumn wrap dress cashmere coat loafers elegant',
    },
  ],

  preppy: [
    {
      id: 'pp-1', name: 'Campus Classic',
      vibe: 'Ivy League without the tuition',
      seasons: ['fall', 'spring'],
      pieces: ['blazer', 'oxford', 'chinos', 'loafers', 'leather-belt'],
      pexelsQuery: 'mens preppy ivy league blazer chinos loafers outfit',
      womenPexelsQuery: 'womens preppy ivy league blazer pleated skirt loafers outfit',
    },
    {
      id: 'pp-2', name: 'Summer Regatta',
      vibe: 'Yacht-ready, breezy and bright',
      seasons: ['summer'],
      pieces: ['polo', 'shorts', 'clean-sneakers', 'watch', 'sunglasses'],
      pexelsQuery: 'mens preppy summer polo shorts clean sneakers',
      womenPexelsQuery: 'womens preppy summer tennis skirt polo clean sneakers outfit',
    },
    {
      id: 'pp-3', name: 'Autumn Prep',
      vibe: 'Layered knits, heritage tartans',
      seasons: ['fall', 'winter'],
      pieces: ['quilted', 'knit-vest', 'oxford', 'chinos', 'work-boots'],
      pexelsQuery: 'mens preppy fall quilted jacket sweater vest outfit',
      womenPexelsQuery: 'womens preppy fall plaid skirt cable knit sweater loafers outfit',
    },
  ],

  minimalist: [
    {
      id: 'min-1', name: 'Monochrome Black',
      vibe: 'All-black, nothing extra',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'turtleneck', 'slim-jeans', 'chelsea-boots'],
      pexelsQuery: 'mens minimalist all black outfit monochrome turtleneck',
      womenPexelsQuery: 'womens minimalist all black outfit monochrome turtleneck midi skirt',
    },
    {
      id: 'min-2', name: 'Tonal Beige',
      vibe: 'Neutral tones stacked deliberately',
      seasons: ['spring', 'fall'],
      pieces: ['trench', 'crewneck', 'chinos', 'clean-sneakers', 'watch'],
      pexelsQuery: 'mens minimalist neutral beige tonal outfit trench coat',
      womenPexelsQuery: 'womens minimalist neutral beige tonal outfit trench coat midi dress',
    },
    {
      id: 'min-3', name: 'Summer Clean',
      vibe: 'White tee, straight pants — done',
      seasons: ['summer'],
      pieces: ['plain-tee', 'linen-trousers', 'sandals', 'sunglasses'],
      pexelsQuery: 'mens minimalist summer white tee linen trousers outfit',
      womenPexelsQuery: 'womens minimalist summer linen slip dress sandals clean outfit',
    },
  ],

  darkacademia: [
    {
      id: 'da-1', name: 'Candlelit Scholar',
      vibe: 'Tweed and turtlenecks in autumn light',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'turtleneck', 'pleated', 'dress-shoes', 'scarf'],
      pexelsQuery: 'mens dark academia blazer turtleneck outfit aesthetic',
      womenPexelsQuery: 'womens dark academia blazer midi skirt turtleneck outfit aesthetic',
    },
    {
      id: 'da-2', name: 'The Brooding Poet',
      vibe: 'Layers that reference the library',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'knit-vest', 'oxford', 'raw-denim', 'chelsea-boots'],
      pexelsQuery: 'mens dark academia overcoat vintage outfit moody',
      womenPexelsQuery: 'womens dark academia overcoat plaid skirt vintage outfit moody',
    },
    {
      id: 'da-3', name: 'Autumn Afternoon',
      vibe: 'Warm browns and burgundy',
      seasons: ['fall'],
      pieces: ['peacoat', 'cable-knit', 'slim-jeans', 'work-boots', 'scarf'],
      pexelsQuery: 'mens dark academia peacoat cable knit autumn aesthetic',
      womenPexelsQuery: 'womens dark academia peacoat cable knit wool skirt autumn aesthetic',
    },
  ],

  grunge: [
    {
      id: 'gr-1', name: 'Pacific Northwest',
      vibe: 'Flannel, rips, and confidence',
      seasons: ['fall', 'spring'],
      pieces: ['flannel', 'graphic-tee', 'baggy-jeans', 'combat-boots', 'beanie'],
      pexelsQuery: 'mens grunge flannel ripped jeans combat boots outfit',
      womenPexelsQuery: 'womens grunge flannel plaid mini skirt combat boots outfit',
    },
    {
      id: 'gr-2', name: 'Band Tee Blueprint',
      vibe: 'Layered distress, zero effort (by design)',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'combat-boots'],
      pexelsQuery: 'mens grunge leather jacket band tee jeans outfit',
      womenPexelsQuery: 'womens grunge leather jacket band tee slip dress combat boots outfit',
    },
    {
      id: 'gr-3', name: 'Winter Grunge',
      vibe: 'Heavy layers, dark palette',
      seasons: ['winter', 'fall'],
      pieces: ['denim-jacket', 'hoodie', 'baggy-jeans', 'work-boots'],
      pexelsQuery: 'mens grunge winter denim jacket hoodie dark outfit',
      womenPexelsQuery: 'womens grunge winter denim jacket hoodie babydoll dress boots outfit',
    },
  ],

  vintage: [
    {
      id: 'vt-1', name: 'Thrift Score',
      vibe: 'Pulled from every decade at once',
      seasons: ['fall', 'spring'],
      pieces: ['varsity', 'graphic-tee', 'wide-leg', 'chunky-sneakers', 'bucket-hat'],
      pexelsQuery: 'mens vintage thrift retro outfit aesthetic',
      womenPexelsQuery: 'womens vintage thrift retro outfit aesthetic tea dress floral',
    },
    {
      id: 'vt-2', name: '70s Saturday',
      vibe: 'Wide legs, earth tones, suede vibes',
      seasons: ['spring', 'fall'],
      pieces: ['shearling', 'flannel', 'wide-leg', 'cowboy-boots'],
      pexelsQuery: 'mens vintage 70s retro wide leg outfit aesthetic',
      womenPexelsQuery: 'womens vintage 70s retro flared dress wide leg outfit aesthetic',
    },
    {
      id: 'vt-3', name: '90s Revival',
      vibe: 'Washed colour, oversized everything',
      seasons: ['spring', 'summer', 'fall'],
      pieces: ['denim-jacket', 'graphic-tee', 'baggy-jeans', 'chunky-sneakers'],
      pexelsQuery: 'mens 90s vintage denim jacket baggy jeans aesthetic',
      womenPexelsQuery: 'womens 90s vintage denim jacket mini skirt platform sneakers aesthetic',
    },
  ],

  techwear: [
    {
      id: 'tw-1', name: 'Urban Operator',
      vibe: 'All black, maximum utility',
      seasons: ['fall', 'winter'],
      pieces: ['windbreaker', 'cargo', 'trail-runners', 'crossbody', 'beanie'],
      pexelsQuery: 'mens techwear all black utility outfit aesthetic',
      womenPexelsQuery: 'womens techwear all black utility dress cargo aesthetic',
    },
    {
      id: 'tw-2', name: 'City Ninja',
      vibe: 'Technical fabrics meet fashion',
      seasons: ['spring', 'fall'],
      pieces: ['anorak', 'cargo', 'high-tops', 'crossbody'],
      pexelsQuery: 'mens techwear ninja city outfit cargo pants jacket',
      womenPexelsQuery: 'womens techwear city outfit technical skirt jacket fashion',
    },
  ],

  gorpcore: [
    {
      id: 'gc-1', name: 'Trail to Café',
      vibe: 'Performance gear, daily wear',
      seasons: ['spring', 'fall'],
      pieces: ['fleece', 'cargo', 'trail-runners', 'baseball-cap'],
      pexelsQuery: 'mens gorpcore trail fleece cargo pants outdoor outfit',
      womenPexelsQuery: 'womens gorpcore trail fleece hiking skirt outdoor outfit',
    },
    {
      id: 'gc-2', name: 'Mountain Ready',
      vibe: 'Layered for anything',
      seasons: ['fall', 'winter'],
      pieces: ['anorak', 'zip-sweater', 'shorts', 'trail-runners'],
      pexelsQuery: 'mens gorpcore outdoor adventure fleece outfit',
      womenPexelsQuery: 'womens gorpcore outdoor adventure fleece technical skirt outfit',
    },
  ],

  hiphop: [
    {
      id: 'hh-1', name: 'Gold Era',
      vibe: 'Chains, crisp tees, fresh kicks',
      seasons: ['spring', 'summer'],
      pieces: ['graphic-tee', 'baggy-jeans', 'high-tops', 'baseball-cap', 'chain-necklace'],
      pexelsQuery: 'mens hip hop outfit gold chain baggy jeans sneakers',
      womenPexelsQuery: 'womens hip hop outfit chain baggy jeans crop top sneakers fashion',
    },
    {
      id: 'hh-2', name: 'Trap Modern',
      vibe: 'Designer references, relaxed silhouettes',
      seasons: ['fall', 'winter'],
      pieces: ['puffer', 'hoodie', 'cargo', 'chunky-sneakers', 'chain-necklace'],
      pexelsQuery: 'mens hip hop modern puffer jacket outfit trap aesthetic',
      womenPexelsQuery: 'womens hip hop modern puffer jacket mini skirt outfit fashion',
    },
    {
      id: 'hh-3', name: 'Stadium Ready',
      vibe: 'Track meets street',
      seasons: ['spring', 'fall'],
      pieces: ['track-jacket', 'joggers', 'high-tops', 'baseball-cap'],
      pexelsQuery: 'mens hip hop tracksuit track jacket sneakers outfit',
      womenPexelsQuery: 'womens hip hop tracksuit track jacket sneakers outfit fashion',
    },
  ],

  punk: [
    {
      id: 'pu-1', name: 'Leather & Studs',
      vibe: 'The original punk blueprint',
      seasons: ['fall', 'spring'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'combat-boots', 'chain-necklace'],
      pexelsQuery: 'mens punk leather jacket studs combat boots outfit',
      womenPexelsQuery: 'womens punk leather jacket mini skirt combat boots studs outfit',
    },
    {
      id: 'pu-2', name: 'Plaid Riot',
      vibe: 'Flannel as protest gear',
      seasons: ['fall', 'winter'],
      pieces: ['flannel', 'leather-jacket', 'baggy-jeans', 'combat-boots'],
      pexelsQuery: 'mens punk plaid flannel jacket ripped jeans outfit',
      womenPexelsQuery: 'womens punk plaid tartan skirt leather jacket combat boots outfit',
    },
  ],

  workwear: [
    {
      id: 'ww-1', name: 'American Heritage',
      vibe: 'Durable classics done with intention',
      seasons: ['fall', 'spring'],
      pieces: ['denim-jacket', 'flannel', 'raw-denim', 'work-boots', 'leather-belt'],
      pexelsQuery: 'mens workwear heritage denim jacket raw denim boots outfit',
      womenPexelsQuery: 'womens workwear heritage denim jacket military shirt dress boots outfit',
    },
    {
      id: 'ww-2', name: 'Utility Blues',
      vibe: 'Hard-wearing, soft layering',
      seasons: ['fall', 'winter'],
      pieces: ['field-jacket', 'henley', 'cargo', 'work-boots', 'beanie'],
      pexelsQuery: 'mens workwear utility field jacket cargo pants outfit',
      womenPexelsQuery: 'womens workwear utility field jacket cargo skirt boots outfit',
    },
    {
      id: 'ww-3', name: 'Off the Clock',
      vibe: 'Work codes worn casually',
      seasons: ['spring', 'fall'],
      pieces: ['shearling', 'plain-tee', 'raw-denim', 'work-boots'],
      pexelsQuery: 'mens workwear shearling jacket jeans boots casual outfit',
      womenPexelsQuery: 'womens workwear shearling jacket jeans boots casual outfit fashion',
    },
  ],

  softboy: [
    {
      id: 'sb-1', name: 'Pastel Layers',
      vibe: 'Soft tones, gentle oversizing',
      seasons: ['spring', 'fall'],
      pieces: ['cardigan', 'plain-tee', 'wide-leg', 'clean-sneakers'],
      pexelsQuery: 'mens softboy pastel cardigan wide leg pants aesthetic',
      womenPexelsQuery: 'womens soft girl pastel cardigan midi dress clean sneakers aesthetic',
    },
    {
      id: 'sb-2', name: 'Knitwear Season',
      vibe: 'Cozy textures, muted palette',
      seasons: ['fall', 'winter'],
      pieces: ['mohair-sweater', 'knit-vest', 'slim-jeans', 'loafers'],
      pexelsQuery: 'mens soft aesthetic mohair sweater knit vest outfit',
      womenPexelsQuery: 'womens soft aesthetic mohair sweater pastel skirt loafers outfit',
    },
  ],

  military: [
    {
      id: 'mi-1', name: 'Surplus Edit',
      vibe: 'Khaki and olive, lived-in utility',
      seasons: ['fall', 'spring'],
      pieces: ['field-jacket', 'plain-tee', 'cargo', 'work-boots', 'beanie'],
      pexelsQuery: 'mens military surplus field jacket cargo pants aesthetic',
      womenPexelsQuery: 'womens military surplus field jacket cargo mini skirt boots aesthetic',
    },
    {
      id: 'mi-2', name: 'Desert Tone',
      vibe: 'Warm neutrals, tactical silhouettes',
      seasons: ['spring', 'summer'],
      pieces: ['anorak', 'plain-tee', 'shorts', 'trail-runners'],
      pexelsQuery: 'mens military desert tan utility outfit aesthetic',
      womenPexelsQuery: 'womens military desert tan shirt dress utility belt aesthetic',
    },
  ],

  indie: [
    {
      id: 'in-1', name: 'Record Store Regular',
      vibe: 'Vintage-influenced, deeply personal',
      seasons: ['fall', 'spring'],
      pieces: ['denim-jacket', 'graphic-tee', 'slim-jeans', 'work-boots', 'tote-bag'],
      pexelsQuery: 'mens indie alternative denim jacket slim jeans aesthetic',
      womenPexelsQuery: 'womens indie alternative floral midi dress denim jacket boots aesthetic',
    },
    {
      id: 'in-2', name: 'Bedroom Pop',
      vibe: 'Cozy and a little left of centre',
      seasons: ['fall', 'winter'],
      pieces: ['cardigan', 'henley', 'wide-leg', 'chunky-sneakers'],
      pexelsQuery: 'mens indie bedroom pop cardigan wide leg outfit aesthetic',
      womenPexelsQuery: 'womens indie bedroom pop cardigan floral dress chunky sneakers aesthetic',
    },
  ],


  cottagecore: [
    {
      id: 'cc-1', name: 'Country Morning',
      vibe: 'Linen, earth tones, sun-drenched',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'linen-trousers', 'sandals', 'tote-bag'],
      pexelsQuery: 'mens cottagecore linen shirt linen trousers pastoral aesthetic',
      womenPexelsQuery: 'womens cottagecore floral prairie dress sandals pastoral aesthetic',
    },
    {
      id: 'cc-2', name: 'Autumn Cottage',
      vibe: 'Soft knits, warm textures',
      seasons: ['fall'],
      pieces: ['cardigan', 'cable-knit', 'slim-jeans', 'work-boots', 'scarf'],
      pexelsQuery: 'mens cottagecore autumn cardigan knit sweater outfit',
      womenPexelsQuery: 'womens cottagecore autumn milkmaid dress cardigan boots aesthetic',
    },
  ],

  y2k: [
    {
      id: 'y2-1', name: 'Turn of the Millennium',
      vibe: 'Low-rise, shiny, and proud',
      seasons: ['spring', 'summer'],
      pieces: ['crop-top', 'baggy-jeans', 'chunky-sneakers', 'sunglasses'],
      pexelsQuery: 'mens y2k fashion 2000s aesthetic outfit crop top jeans',
      womenPexelsQuery: 'womens y2k fashion 2000s aesthetic mini skirt butterfly top platform shoes',
    },
    {
      id: 'y2-2', name: 'Track Star',
      vibe: 'Velour or nylon, colourblock everything',
      seasons: ['spring', 'fall'],
      pieces: ['track-jacket', 'joggers', 'platform-shoes', 'chain-necklace'],
      pexelsQuery: 'mens y2k 2000s tracksuit colourblock outfit aesthetic',
      womenPexelsQuery: 'womens y2k 2000s velour tracksuit low rise aesthetic outfit',
    },
  ],

  boho: [
    {
      id: 'bh-1', name: 'Festival Wanderer',
      vibe: 'Layered, earthy, free-spirited',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'wide-leg', 'sandals', 'crossbody'],
      pexelsQuery: 'mens boho bohemian festival outfit linen earthy aesthetic',
      womenPexelsQuery: 'womens boho bohemian festival maxi dress sandals earthy aesthetic',
    },
    {
      id: 'bh-2', name: 'Desert Edit',
      vibe: 'Textures and tones of the earth',
      seasons: ['spring', 'fall'],
      pieces: ['cardigan', 'flannel', 'wide-leg', 'work-boots'],
      pexelsQuery: 'mens boho desert aesthetic layered outfit',
      womenPexelsQuery: 'womens boho desert aesthetic embroidered dress layered outfit',
    },
  ],

  romantic: [
    {
      id: 'rm-1', name: 'Garden Party',
      vibe: 'Florals, softness, petal energy',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'chinos', 'loafers', 'watch'],
      pexelsQuery: 'mens romantic aesthetic floral shirt linen outfit',
      womenPexelsQuery: 'womens romantic aesthetic floral midi dress lace details outfit',
    },
    {
      id: 'rm-2', name: 'Candlelit Evening',
      vibe: 'Velvet and silk, intimate occasion',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'turtleneck', 'slim-jeans', 'chelsea-boots'],
      pexelsQuery: 'mens romantic evening velvet blazer dark aesthetic',
      womenPexelsQuery: 'womens romantic evening satin slip dress lace outfit',
    },
  ],

  goth: [
    {
      id: 'gt-1', name: 'Eternal Night',
      vibe: 'All black, all dread, all intention',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'combat-boots'],
      pexelsQuery: 'mens goth all black gothic outfit aesthetic',
      womenPexelsQuery: 'womens goth all black gothic maxi dress corset combat boots aesthetic',
    },
    {
      id: 'gt-2', name: 'Victorian Darkness',
      vibe: 'Lace and velvet, 19th century darkness',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'turtleneck', 'slim-jeans', 'chelsea-boots'],
      pexelsQuery: 'mens gothic victorian dark aesthetic velvet outfit',
      womenPexelsQuery: 'womens gothic victorian velvet midi dress lace corset aesthetic',
    },
  ],

  athleisure: [
    {
      id: 'al-1', name: 'Studio to Street',
      vibe: 'Performance meets polish',
      seasons: ['spring', 'summer', 'fall'],
      pieces: ['track-jacket', 'joggers', 'trail-runners', 'baseball-cap'],
      pexelsQuery: 'mens athleisure studio street outfit track jacket joggers',
      womenPexelsQuery: 'womens athleisure studio street outfit leggings sports bra jacket',
    },
    {
      id: 'al-2', name: 'Elevated Comfort',
      vibe: 'Luxury fabrics, zero restriction',
      seasons: ['fall', 'winter'],
      pieces: ['hoodie', 'joggers', 'clean-sneakers'],
      pexelsQuery: 'mens athleisure luxury hoodie joggers outfit',
      womenPexelsQuery: 'womens athleisure luxury workout dress sneakers outfit fashion',
    },
  ],

  kpop: [
    {
      id: 'kp-1', name: 'Idol Stage',
      vibe: 'Performance-ready, eye-catching',
      seasons: ['spring', 'summer'],
      pieces: ['graphic-tee', 'baggy-jeans', 'high-tops', 'baseball-cap'],
      pexelsQuery: 'mens kpop idol stage outfit streetwear fashion',
      womenPexelsQuery: 'womens kpop idol stage outfit mini skirt cute fashion',
    },
    {
      id: 'kp-2', name: 'Airport Fashion',
      vibe: 'Effortlessly chic, fan-ready',
      seasons: ['spring', 'fall'],
      pieces: ['bomber', 'slim-jeans', 'clean-sneakers', 'sunglasses'],
      pexelsQuery: 'mens kpop airport fashion outfit stylish',
      womenPexelsQuery: 'womens kpop airport fashion outfit cute stylish',
    },
  ],

  cleangirl: [
    {
      id: 'cg-1', name: 'Morning Routine',
      vibe: 'Effortless, healthy, polished',
      seasons: ['spring', 'summer'],
      pieces: ['plain-tee', 'linen-trousers', 'sandals'],
      pexelsQuery: 'mens clean aesthetic linen outfit minimal casual',
      womenPexelsQuery: 'womens clean girl aesthetic linen dress sandals minimal makeup',
    },
    {
      id: 'cg-2', name: 'Neutral Edit',
      vibe: 'Tonal neutrals, nothing loud',
      seasons: ['spring', 'fall'],
      pieces: ['crewneck', 'chinos', 'clean-sneakers'],
      pexelsQuery: 'mens clean minimal neutral tonal outfit aesthetic',
      womenPexelsQuery: 'womens clean girl neutral tonal midi skirt blazer outfit aesthetic',
    },
  ],

  scandi: [
    {
      id: 'sd-1', name: 'Stockholm Sunday',
      vibe: 'Muted, functional, beautifully boring',
      seasons: ['spring', 'fall'],
      pieces: ['trench', 'crewneck', 'chinos', 'clean-sneakers'],
      pexelsQuery: 'mens scandinavian minimal fashion outfit neutral aesthetic',
      womenPexelsQuery: 'womens scandinavian minimal fashion midi dress neutral aesthetic',
    },
    {
      id: 'sd-2', name: 'Nordic Winter',
      vibe: 'Layered warmth, never fussy',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'turtleneck', 'slim-jeans', 'chelsea-boots'],
      pexelsQuery: 'mens nordic scandi winter layered minimal outfit',
      womenPexelsQuery: 'womens nordic scandi winter knit dress boots layered outfit',
    },
  ],

  maximalist: [
    {
      id: 'mx-1', name: 'Pattern Clash',
      vibe: 'Every print at once, on purpose',
      seasons: ['spring', 'summer'],
      pieces: ['graphic-tee', 'wide-leg', 'chunky-sneakers', 'chain-necklace', 'bucket-hat'],
      pexelsQuery: 'mens maximalist bold pattern clash colorful outfit fashion',
      womenPexelsQuery: 'womens maximalist bold pattern clash colorful dress accessories fashion',
    },
    {
      id: 'mx-2', name: 'Layer Up',
      vibe: 'More pieces, more drama',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'bomber', 'hoodie', 'baggy-jeans', 'chunky-sneakers'],
      pexelsQuery: 'mens maximalist layered outerwear bold outfit fashion',
      womenPexelsQuery: 'womens maximalist layered statement coat bold accessories fashion',
    },
    {
      id: 'mx-3', name: 'Colour Block',
      vibe: 'Each piece fights for dominance',
      seasons: ['spring', 'fall'],
      pieces: ['track-jacket', 'cargo', 'platform-shoes', 'chain-necklace'],
      pexelsQuery: 'mens maximalist color block bold streetwear outfit',
      womenPexelsQuery: 'womens maximalist color block bold midi dress heels outfit',
    },
  ],

  skater: [
    {
      id: 'sk-1', name: 'Park Rat',
      vibe: 'Loose fit, ready to bail',
      seasons: ['spring', 'summer', 'fall'],
      pieces: ['graphic-tee', 'baggy-jeans', 'high-tops', 'baseball-cap'],
      pexelsQuery: 'mens skater outfit baggy jeans graphic tee skate shoes',
      womenPexelsQuery: 'womens skater outfit baggy jeans crop tee skate shoes aesthetic',
    },
    {
      id: 'sk-2', name: 'Flannel Skate',
      vibe: 'West Coast meets concrete',
      seasons: ['fall', 'spring'],
      pieces: ['flannel', 'graphic-tee', 'cargo', 'chunky-sneakers', 'beanie'],
      pexelsQuery: 'mens skater flannel shirt cargo pants sneakers skate outfit',
      womenPexelsQuery: 'womens skater flannel shirt mini skirt platform sneakers outfit',
    },
    {
      id: 'sk-3', name: 'Winter Session',
      vibe: 'Hooded up, never slowing down',
      seasons: ['fall', 'winter'],
      pieces: ['hoodie', 'baggy-jeans', 'high-tops', 'beanie'],
      pexelsQuery: 'mens skater winter hoodie baggy jeans sneakers beanie',
      womenPexelsQuery: 'womens skater winter hoodie baggy jeans sneakers beanie aesthetic',
    },
  ],

  arthoe: [
    {
      id: 'ah-1', name: 'Gallery Opening',
      vibe: 'Overalls and warm tones',
      seasons: ['spring', 'fall'],
      pieces: ['linen-shirt', 'wide-leg', 'sandals', 'tote-bag', 'bucket-hat'],
      pexelsQuery: 'mens art hoe artsy overalls warm tones aesthetic outfit',
      womenPexelsQuery: 'womens art hoe overalls warm tones sunflower aesthetic outfit',
    },
    {
      id: 'ah-2', name: 'Studio Session',
      vibe: 'Creative layers, paint-splattered energy',
      seasons: ['fall', 'winter'],
      pieces: ['cardigan', 'plain-tee', 'wide-leg', 'chunky-sneakers'],
      pexelsQuery: 'mens artsy creative layer warm aesthetic outfit colourful',
      womenPexelsQuery: 'womens artsy creative layer warm midi skirt aesthetic outfit',
    },
  ],

  lightacademia: [
    {
      id: 'la-1', name: 'Sunny Library',
      vibe: 'Cream and beige, sun-drenched scholar',
      seasons: ['spring', 'fall'],
      pieces: ['blazer', 'linen-shirt', 'chinos', 'loafers', 'watch'],
      pexelsQuery: 'mens light academia cream beige blazer linen shirt aesthetic',
      womenPexelsQuery: 'womens light academia cream beige blazer midi skirt linen aesthetic',
    },
    {
      id: 'la-2', name: 'Autumn Pages',
      vibe: 'Knits in warm, readable tones',
      seasons: ['fall', 'winter'],
      pieces: ['cable-knit', 'oxford', 'pleated', 'dress-shoes'],
      pexelsQuery: 'mens light academia knit sweater chinos dress shoes autumn aesthetic',
      womenPexelsQuery: 'womens light academia knit sweater plaid skirt loafers autumn aesthetic',
    },
    {
      id: 'la-3', name: 'Summer Term',
      vibe: 'Breezy, airy, academically soft',
      seasons: ['summer'],
      pieces: ['linen-shirt', 'linen-trousers', 'sandals'],
      pexelsQuery: 'mens light academia summer linen shirt trousers aesthetic',
      womenPexelsQuery: 'womens light academia summer linen sundress sandals aesthetic',
    },
  ],

  normcore: [
    {
      id: 'nc-1', name: 'Basic Blueprint',
      vibe: 'As ordinary as possible, deliberately',
      seasons: ['spring', 'fall'],
      pieces: ['plain-tee', 'slim-jeans', 'clean-sneakers'],
      pexelsQuery: 'mens normcore basic ordinary outfit minimal jeans white tee sneakers',
      womenPexelsQuery: 'womens normcore basic ordinary outfit jeans white tee white sneakers',
    },
    {
      id: 'nc-2', name: 'Dad Energy',
      vibe: 'Comfortable, functional, zero flex',
      seasons: ['summer'],
      pieces: ['polo', 'shorts', 'clean-sneakers', 'sunglasses'],
      pexelsQuery: 'mens normcore simple casual polo shorts sneakers dad outfit',
      womenPexelsQuery: 'womens normcore simple casual tucked tee mom jeans sneakers outfit',
    },
    {
      id: 'nc-3', name: 'Winter Basics',
      vibe: 'Plain and warm, no more',
      seasons: ['fall', 'winter'],
      pieces: ['crewneck', 'slim-jeans', 'clean-sneakers', 'beanie'],
      pexelsQuery: 'mens normcore winter basic crewneck jeans sneakers beanie outfit',
      womenPexelsQuery: 'womens normcore winter basic crewneck straight jeans sneakers outfit',
    },
  ],

  businesscasual: [
    {
      id: 'bz-1', name: 'Modern Professional',
      vibe: 'Sharp without a tie',
      seasons: ['fall', 'winter', 'spring'],
      pieces: ['blazer', 'oxford', 'pleated', 'chelsea-boots', 'watch'],
      pexelsQuery: 'mens business casual modern blazer oxford shirt outfit',
      womenPexelsQuery: 'womens business casual blazer midi skirt heels professional outfit',
    },
    {
      id: 'bz-2', name: 'Elevated Friday',
      vibe: 'Relaxed but still polished',
      seasons: ['fall', 'spring'],
      pieces: ['trench', 'polo', 'chinos', 'loafers'],
      pexelsQuery: 'mens business casual smart casual chinos loafers outfit',
      womenPexelsQuery: 'womens business casual smart wrap dress loafers trench coat outfit',
    },
    {
      id: 'bz-3', name: 'Creative Office',
      vibe: 'Tailored but human',
      seasons: ['spring', 'fall'],
      pieces: ['knit-vest', 'oxford', 'slim-jeans', 'loafers', 'watch'],
      pexelsQuery: 'mens business casual creative office knit vest smart outfit',
      womenPexelsQuery: 'womens business casual creative office knit cardigan tailored trousers outfit',
    },
  ],

  eurochic: [
    {
      id: 'ec-1', name: 'Milanese Monday',
      vibe: 'Tailored basics, never overdone',
      seasons: ['spring', 'fall'],
      pieces: ['blazer', 'linen-shirt', 'chinos', 'loafers'],
      pexelsQuery: 'mens euro chic european style blazer linen shirt tailored outfit',
      womenPexelsQuery: 'womens euro chic european style tailored trousers silk blouse loafers outfit',
    },
    {
      id: 'ec-2', name: 'Parisian Winter',
      vibe: 'Long coat, scarf, done',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'turtleneck', 'slim-jeans', 'chelsea-boots', 'scarf'],
      pexelsQuery: 'mens euro chic parisian winter long coat turtleneck aesthetic',
      womenPexelsQuery: 'womens euro chic parisian winter long coat midi skirt boots aesthetic',
    },
    {
      id: 'ec-3', name: 'Riviera Summer',
      vibe: 'Breezy Mediterranean polish',
      seasons: ['summer'],
      pieces: ['linen-shirt', 'linen-trousers', 'sandals', 'watch', 'sunglasses'],
      pexelsQuery: 'mens euro chic riviera summer linen mediterranean outfit',
      womenPexelsQuery: 'womens euro chic riviera summer linen dress sandals mediterranean outfit',
    },
  ],

  rockstar: [
    {
      id: 'rs-1', name: 'Stage Presence',
      vibe: 'Leather pants and absolute confidence',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'chelsea-boots', 'chain-necklace'],
      pexelsQuery: 'mens rockstar glam rock leather jacket outfit aesthetic',
      womenPexelsQuery: 'womens rockstar glam rock leather jacket mini skirt boots aesthetic',
    },
    {
      id: 'rs-2', name: 'Metallic Moment',
      vibe: 'Shine, studs, and silk',
      seasons: ['spring', 'summer'],
      pieces: ['bomber', 'slim-jeans', 'chelsea-boots', 'chain-necklace', 'sunglasses'],
      pexelsQuery: 'mens rockstar metallic satin bomber jacket aesthetic outfit',
      womenPexelsQuery: 'womens rockstar metallic satin mini dress boots aesthetic outfit',
    },
  ],

  emo: [
    {
      id: 'em-1', name: 'Band Tee Stack',
      vibe: 'Layered wristbands and raw feeling',
      seasons: ['fall', 'spring'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'high-tops'],
      pexelsQuery: 'mens emo band tee skinny jeans leather jacket converse outfit',
      womenPexelsQuery: 'womens emo band tee skinny jeans fishnet leather jacket converse outfit',
    },
    {
      id: 'em-2', name: 'Zip-Up Dark',
      vibe: 'Monochrome and moody',
      seasons: ['fall', 'winter'],
      pieces: ['hoodie', 'graphic-tee', 'slim-jeans', 'combat-boots'],
      pexelsQuery: 'mens emo aesthetic all black hoodie skinny jeans combat boots',
      womenPexelsQuery: 'womens emo aesthetic all black hoodie mini skirt combat boots fishnet',
    },
  ],

  scene: [
    {
      id: 'sc-1', name: 'Neon Statement',
      vibe: 'Every colour, all at once',
      seasons: ['spring', 'summer'],
      pieces: ['graphic-tee', 'slim-jeans', 'platform-shoes', 'chain-necklace'],
      pexelsQuery: 'mens scene fashion neon bright alternative outfit aesthetic',
      womenPexelsQuery: 'womens scene fashion neon bright tutus fishnet alternative outfit aesthetic',
    },
    {
      id: 'sc-2', name: 'Photo Shoot Ready',
      vibe: 'Extra. Always.',
      seasons: ['fall', 'spring'],
      pieces: ['bomber', 'graphic-tee', 'slim-jeans', 'chunky-sneakers'],
      pexelsQuery: 'mens scene alternative bold layered colorful outfit aesthetic',
      womenPexelsQuery: 'womens scene alternative bold layered colorful outfit teased hair aesthetic',
    },
  ],

  eboy: [
    {
      id: 'eb-1', name: 'Stripe Layer',
      vibe: 'Graphic tee over long sleeve, always',
      seasons: ['fall', 'spring'],
      pieces: ['graphic-tee', 'slim-jeans', 'high-tops', 'chain-necklace'],
      pexelsQuery: 'mens eboy aesthetic striped long sleeve graphic tee black jeans chain',
      womenPexelsQuery: 'womens egirl aesthetic striped long sleeve plaid skirt combat boots chain',
    },
    {
      id: 'eb-2', name: 'Dark Web',
      vibe: 'All black, internet-bred edge',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'graphic-tee', 'slim-jeans', 'combat-boots', 'chain-necklace'],
      pexelsQuery: 'mens eboy dark aesthetic all black alternative outfit',
      womenPexelsQuery: 'womens egirl dark aesthetic all black alternative plaid skirt outfit',
    },
  ],

  harajuku: [
    {
      id: 'hj-1', name: 'Takeshita Street',
      vibe: 'Maximum layers, maximum expression',
      seasons: ['spring', 'fall'],
      pieces: ['bomber', 'graphic-tee', 'baggy-jeans', 'platform-shoes', 'chain-necklace'],
      pexelsQuery: 'mens harajuku japanese street fashion layered eclectic outfit',
      womenPexelsQuery: 'womens harajuku japanese street fashion kawaii layered eclectic outfit',
    },
    {
      id: 'hj-2', name: 'Decora Moment',
      vibe: 'Accessories as the outfit',
      seasons: ['spring', 'summer'],
      pieces: ['graphic-tee', 'wide-leg', 'chunky-sneakers', 'bucket-hat'],
      pexelsQuery: 'mens harajuku j fashion bold colorful accessories outfit tokyo',
      womenPexelsQuery: 'womens harajuku j fashion decora kawaii colorful accessories outfit tokyo',
    },
  ],

  cyberpunk: [
    {
      id: 'cp-1', name: 'Night City Dweller',
      vibe: 'Neon trim, reflective, dystopian',
      seasons: ['fall', 'winter'],
      pieces: ['windbreaker', 'cargo', 'trail-runners', 'crossbody'],
      pexelsQuery: 'mens cyberpunk neon fashion techwear dark futuristic outfit',
      womenPexelsQuery: 'womens cyberpunk neon fashion futuristic bodysuit reflective outfit',
    },
    {
      id: 'cp-2', name: 'Chrome Operator',
      vibe: 'Metallic and tactical',
      seasons: ['spring', 'fall'],
      pieces: ['anorak', 'graphic-tee', 'cargo', 'high-tops'],
      pexelsQuery: 'mens cyberpunk silver metallic tactical outfit futuristic aesthetic',
      womenPexelsQuery: 'womens cyberpunk silver metallic tactical outfit futuristic crop top aesthetic',
    },
  ],

  steampunk: [
    {
      id: 'sp-1', name: 'Victorian Engineer',
      vibe: 'Brass, leather, 1800s industrial',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'oxford', 'pleated', 'dress-shoes', 'watch'],
      pexelsQuery: 'mens steampunk victorian industrial outfit brass leather aesthetic',
      womenPexelsQuery: 'womens steampunk victorian industrial corset bustle skirt lace aesthetic',
    },
    {
      id: 'sp-2', name: 'Clockwork Explorer',
      vibe: 'Layered leather and tailoring',
      seasons: ['fall', 'spring'],
      pieces: ['field-jacket', 'oxford', 'raw-denim', 'work-boots', 'scarf'],
      pexelsQuery: 'mens steampunk explorer layered leather coat outfit',
      womenPexelsQuery: 'womens steampunk explorer layered leather coat goggles outfit',
    },
  ],

  fairycore: [
    {
      id: 'fc-1', name: 'Enchanted Forest',
      vibe: 'Sheer, pastel, and otherworldly',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'wide-leg', 'sandals', 'crossbody'],
      pexelsQuery: 'mens fairycore soft pastel whimsical outfit aesthetic nature',
      womenPexelsQuery: 'womens fairycore fairy sheer pastel floral dress cottagecore aesthetic',
    },
    {
      id: 'fc-2', name: 'Mushroom Walk',
      vibe: 'Earthy, textured, enchanted',
      seasons: ['fall'],
      pieces: ['cardigan', 'plain-tee', 'wide-leg', 'work-boots', 'tote-bag'],
      pexelsQuery: 'mens fairycore mushroom forest soft earth tone aesthetic outfit',
      womenPexelsQuery: 'womens fairycore mushroom forest prairie dress earth tone aesthetic outfit',
    },
  ],

  royalcore: [
    {
      id: 'rc-1', name: 'Royal Audience',
      vibe: 'Velvet, gold, and absolute authority',
      seasons: ['fall', 'winter'],
      pieces: ['blazer', 'turtleneck', 'pleated', 'chelsea-boots', 'watch'],
      pexelsQuery: 'mens royalcore royal velvet blazer gold accessories regal outfit',
      womenPexelsQuery: 'womens royalcore royal velvet gown lace gold accessories regal outfit',
    },
    {
      id: 'rc-2', name: 'Regency Morning',
      vibe: 'Ornate tailoring, historical elegance',
      seasons: ['spring', 'fall'],
      pieces: ['overcoat', 'oxford', 'pleated', 'dress-shoes', 'scarf'],
      pexelsQuery: 'mens royalcore regency historical tailored ornate outfit aesthetic',
      womenPexelsQuery: 'womens royalcore regency historical empire waist gown ornate aesthetic',
    },
  ],

  linencore: [
    {
      id: 'ln-1', name: 'Natural State',
      vibe: 'Breathable neutrals, sun and sea air',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'linen-trousers', 'sandals'],
      pexelsQuery: 'mens linencore linen shirt linen trousers natural outfit aesthetic',
      womenPexelsQuery: 'womens linencore linen dress sandals natural neutral outfit aesthetic',
    },
    {
      id: 'ln-2', name: 'Autumn Linen',
      vibe: 'Earthy tones, relaxed cut',
      seasons: ['fall'],
      pieces: ['linen-shirt', 'wide-leg', 'loafers', 'tote-bag'],
      pexelsQuery: 'mens linencore autumn earth tone linen layered outfit',
      womenPexelsQuery: 'womens linencore autumn earth tone linen wide leg outfit',
    },
  ],

  silksatin: [
    {
      id: 'ss-1', name: 'Satin Evening',
      vibe: 'Glossy, fluid, intentional luxury',
      seasons: ['spring', 'summer'],
      pieces: ['bomber', 'slim-jeans', 'loafers', 'chain-necklace', 'sunglasses'],
      pexelsQuery: 'mens silk satin shirt glossy luxe outfit aesthetic fashion',
      womenPexelsQuery: 'womens silk satin slip dress glossy luxe outfit aesthetic fashion',
    },
    {
      id: 'ss-2', name: 'Sheen Stack',
      vibe: 'Layers of liquid fabric',
      seasons: ['fall', 'winter'],
      pieces: ['overcoat', 'turtleneck', 'pleated', 'chelsea-boots'],
      pexelsQuery: 'mens silk satin glossy luxe layered outfit fashion',
      womenPexelsQuery: 'womens silk satin luxe layered midi skirt outfit fashion',
    },
  ],

  denimcore: [
    {
      id: 'dc-1', name: 'Double Denim',
      vibe: 'Head to toe denim, different washes',
      seasons: ['spring', 'fall'],
      pieces: ['denim-jacket', 'raw-denim', 'work-boots', 'plain-tee'],
      pexelsQuery: 'mens denimcore double denim jacket jeans outfit fashion',
      womenPexelsQuery: 'womens denimcore double denim jacket jeans outfit fashion',
    },
    {
      id: 'dc-2', name: 'Raw Stack',
      vibe: 'Dark denim, structured silhouette',
      seasons: ['fall', 'winter'],
      pieces: ['denim-jacket', 'raw-denim', 'chelsea-boots', 'crewneck'],
      pexelsQuery: 'mens denimcore dark raw denim layered outfit aesthetic',
      womenPexelsQuery: 'womens denimcore dark raw denim layered dress boots outfit aesthetic',
    },
  ],

  leatheraesthetic: [
    {
      id: 'le-1', name: 'Biker Blueprint',
      vibe: 'Leather jacket, leather boots, full stop',
      seasons: ['fall', 'spring'],
      pieces: ['leather-jacket', 'plain-tee', 'raw-denim', 'combat-boots'],
      pexelsQuery: 'mens leather aesthetic biker leather jacket jeans boots outfit',
      womenPexelsQuery: 'womens leather aesthetic biker leather jacket mini skirt boots outfit',
    },
    {
      id: 'le-2', name: 'Moto Season',
      vibe: 'All leather, all edge',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'slim-jeans', 'chelsea-boots', 'chain-necklace'],
      pexelsQuery: 'mens leather moto aesthetic all leather dark outfit',
      womenPexelsQuery: 'womens leather moto aesthetic all leather dark pants boots outfit',
    },
  ],

  knitwearaesthetic: [
    {
      id: 'kw-1', name: 'Sweater Weather',
      vibe: 'Chunky knit over slim pants',
      seasons: ['fall', 'winter'],
      pieces: ['cable-knit', 'slim-jeans', 'loafers', 'scarf'],
      pexelsQuery: 'mens knitwear aesthetic chunky knit sweater outfit cozy',
      womenPexelsQuery: 'womens knitwear aesthetic chunky knit sweater dress boots cozy outfit',
    },
    {
      id: 'kw-2', name: 'Layered Knit',
      vibe: 'Vest over shirt, maximum texture',
      seasons: ['fall', 'spring'],
      pieces: ['knit-vest', 'oxford', 'chinos', 'loafers'],
      pexelsQuery: 'mens knitwear knit vest shirt layered preppy aesthetic outfit',
      womenPexelsQuery: 'womens knitwear knit vest shirt layered midi skirt loafers outfit',
    },
    {
      id: 'kw-3', name: 'Mohair Moment',
      vibe: 'Textured, soft, premium feeling',
      seasons: ['fall', 'winter'],
      pieces: ['mohair-sweater', 'wide-leg', 'chelsea-boots'],
      pexelsQuery: 'mens knitwear mohair fuzzy sweater wide leg trousers outfit aesthetic',
      womenPexelsQuery: 'womens knitwear mohair fuzzy sweater midi skirt boots outfit aesthetic',
    },
  ],

  western: [
    {
      id: 'wt-1', name: 'Frontier Ready',
      vibe: 'Denim, boots, and the open road',
      seasons: ['spring', 'fall'],
      pieces: ['denim-jacket', 'flannel', 'raw-denim', 'cowboy-boots', 'leather-belt'],
      pexelsQuery: 'mens western cowboy outfit denim jacket flannel cowboy boots aesthetic',
      womenPexelsQuery: 'womens western cowboy outfit denim jacket fringe dress cowboy boots aesthetic',
    },
    {
      id: 'wt-2', name: 'Desert Rider',
      vibe: 'Warm earth tones, frontier layers',
      seasons: ['summer', 'fall'],
      pieces: ['shearling', 'plain-tee', 'raw-denim', 'cowboy-boots'],
      pexelsQuery: 'mens western desert cowboy shearling jacket raw denim cowboy boots',
      womenPexelsQuery: 'womens western desert cowgirl fringe skirt shearling jacket boots',
    },
  ],

  athletic: [
    {
      id: 'at-1', name: 'Performance Mode',
      vibe: 'Built to move, looks the part',
      seasons: ['spring', 'summer'],
      pieces: ['track-jacket', 'shorts', 'trail-runners', 'baseball-cap'],
      pexelsQuery: 'mens athletic performance training outfit track jacket sports',
      womenPexelsQuery: 'womens athletic performance training outfit sports bra leggings sneakers',
    },
    {
      id: 'at-2', name: 'Post-Workout',
      vibe: 'Recovery gear done right',
      seasons: ['spring', 'fall'],
      pieces: ['hoodie', 'joggers', 'trail-runners'],
      pexelsQuery: 'mens athletic post workout hoodie joggers clean sneakers outfit',
      womenPexelsQuery: 'womens athletic post workout hoodie leggings clean sneakers outfit',
    },
  ],

  outdoor: [
    {
      id: 'od-1', name: 'Trail Day',
      vibe: 'Technical and ready for anything',
      seasons: ['spring', 'fall'],
      pieces: ['anorak', 'fleece', 'cargo', 'trail-runners', 'baseball-cap'],
      pexelsQuery: 'mens outdoor hiking trail outfit technical anorak fleece boots',
      womenPexelsQuery: 'womens outdoor hiking trail outfit technical shell fleece hiking boots',
    },
    {
      id: 'od-2', name: 'Mountain Layer',
      vibe: 'All-season, all-terrain layers',
      seasons: ['fall', 'winter'],
      pieces: ['anorak', 'zip-sweater', 'cargo', 'work-boots', 'beanie'],
      pexelsQuery: 'mens outdoor hiking mountain layered technical winter outfit',
      womenPexelsQuery: 'womens outdoor hiking mountain layered technical winter outfit fleece',
    },
  ],

  baddie: [
    {
      id: 'bd-1', name: 'Fitted All Day',
      vibe: 'Silhouette first, always',
      seasons: ['spring', 'summer'],
      pieces: ['plain-tee', 'slim-jeans', 'chunky-sneakers', 'chain-necklace'],
      pexelsQuery: 'mens baddie aesthetic fitted confident outfit monochrome fashion',
      womenPexelsQuery: 'womens baddie aesthetic fitted confident bodycon dress heels fashion',
    },
    {
      id: 'bd-2', name: 'All Black Flex',
      vibe: 'Monochrome and dominant',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'plain-tee', 'slim-jeans', 'combat-boots'],
      pexelsQuery: 'mens baddie all black monochrome fitted outfit confident fashion',
      womenPexelsQuery: 'womens baddie all black monochrome fitted bodysuit leather pants heels',
    },
  ],

  edgy: [
    {
      id: 'eg-1', name: 'Sharp Dark',
      vibe: 'All black, sharp silhouettes',
      seasons: ['fall', 'winter'],
      pieces: ['leather-jacket', 'plain-tee', 'slim-jeans', 'chelsea-boots'],
      pexelsQuery: 'mens edgy dark aesthetic all black sharp outfit fashion',
      womenPexelsQuery: 'womens edgy dark aesthetic all black sharp dress boots fashion',
    },
    {
      id: 'eg-2', name: 'Industrial Edge',
      vibe: 'Heavy fabrics, intentional attitude',
      seasons: ['spring', 'fall'],
      pieces: ['overcoat', 'graphic-tee', 'cargo', 'combat-boots'],
      pexelsQuery: 'mens edgy industrial dark aesthetic cargo coat combat boots',
      womenPexelsQuery: 'womens edgy industrial dark aesthetic asymmetric dress combat boots',
    },
  ],

  coastalgrandma: [
    {
      id: 'cg3-1', name: 'Morning By the Sea',
      vibe: 'Breezy linen, unhurried living',
      seasons: ['spring', 'summer'],
      pieces: ['linen-shirt', 'linen-trousers', 'sandals', 'watch'],
      pexelsQuery: 'mens coastal grandpa aesthetic linen shirt khaki trousers boat shoes beach',
      womenPexelsQuery: 'womens coastal grandma aesthetic linen dress woven bag sandals beach',
    },
    {
      id: 'cg3-2', name: 'Harbor Afternoon',
      vibe: 'Knit, khaki, and sea salt',
      seasons: ['fall', 'spring'],
      pieces: ['cable-knit', 'chinos', 'loafers', 'watch', 'crossbody'],
      pexelsQuery: 'mens coastal grandpa knit sweater chinos loafers relaxed seaside',
      womenPexelsQuery: 'womens coastal grandma linen wide leg trousers knit sweater sandals seaside',
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
