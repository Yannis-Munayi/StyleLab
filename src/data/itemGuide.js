// Clothing item type breakdowns — sub-categories and variants of each piece.
// relevantTo: aesthetic IDs where this type is especially important.

export const ITEM_GUIDE = [
  {
    id: 'jeans',
    label: 'Jeans',
    emoji: '👖',
    intro: 'Denim is the most versatile bottom in menswear. The cut and wash change everything.',
    types: [
      {
        name: 'Slim Fit',
        description: 'Tapered from hip to ankle. Sits close to the leg without restriction. The workhorse of modern wardrobes.',
        iconic: 'Levi\'s 511, A.P.C. Petit New Standard',
        relevantTo: ['minimalist', 'preppy', 'indie', 'eboy', 'darkacademia'],
      },
      {
        name: 'Skinny',
        description: 'Extremely close to the leg, often with stretch. Originated in punk and emo; now a perennial.',
        iconic: 'Nudie Tight Terry, ACNE Studios Max',
        relevantTo: ['punk', 'emo', 'eboy', 'rockstar', 'scene'],
      },
      {
        name: 'Baggy / Loose',
        description: 'Relaxed through hip and thigh. The silhouette of choice for skate, hip-hop, and streetwear. The 90s never left.',
        iconic: 'Carhartt WIP Newel, Dickies 874 (jeans cut)',
        relevantTo: ['streetwear', 'hiphop', 'skater', 'vintage', 'grunge', 'denimcore'],
      },
      {
        name: 'Straight / Regular',
        description: 'Consistent width from hip to ankle. Neither slim nor baggy — the most universally flattering cut.',
        iconic: 'Levi\'s 501, Wrangler Regular Fit',
        relevantTo: ['workwear', 'vintage', 'normcore', 'gorpcore'],
      },
      {
        name: 'Wide Leg',
        description: 'Dramatic sweep from the hip downward. High-fashion and retro at once. Best paired with a cropped or fitted top.',
        iconic: 'Our Legacy Extended Cut, Weekday Astro',
        relevantTo: ['vintage', 'y2k', 'harajuku', 'streetwear'],
      },
      {
        name: 'Distressed / Ripped',
        description: 'Deliberate wear — slashes, frays, and fading. The hallmark of grunge and punk. Intensity ranges from subtle to extreme.',
        iconic: 'Saint Laurent Distressed, Amiri MX1',
        relevantTo: ['grunge', 'punk', 'edgy', 'streetwear'],
      },
      {
        name: 'Raw / Selvedge',
        description: 'Unwashed denim that fades with wear into a personal map of your movements. Woven on narrow looms for tighter weave.',
        iconic: 'Pure Blue Japan, Naked & Famous',
        relevantTo: ['workwear', 'oldmoney', 'minimalist', 'denimcore'],
      },
      {
        name: 'Flared / Bootcut',
        description: 'Slight to dramatic flare below the knee. Has serious 70s energy. Currently having a renaissance.',
        iconic: 'Nudie Rad Rufus, vintage Wranglers',
        relevantTo: ['vintage', 'boho', 'western'],
      },
    ],
  },

  {
    id: 'outerwear',
    label: 'Outerwear',
    emoji: '🧥',
    intro: 'Your coat is the first and last thing people see. The silhouette defines the outfit.',
    types: [
      {
        name: 'MA-1 / Flight Bomber',
        description: 'Classic ribbed-cuff nylon bomber derived from US military flight jackets. Clean, compact, and endlessly versatile.',
        iconic: 'Alpha Industries MA-1, Supreme Nylon Bomber',
        relevantTo: ['streetwear', 'vintage', 'military', 'hiphop'],
      },
      {
        name: 'Collegiate / Varsity',
        description: 'Wool body, leather sleeves, chenille patches. The high school-to-college pipeline done in style.',
        iconic: 'Golden Bear, Schott varsity',
        relevantTo: ['vintage', 'preppy', 'streetwear', 'indie'],
      },
      {
        name: 'Souvenir / Sukajan',
        description: 'Silk or satin bomber with embroidered Japanese-inspired motifs. Rich, maximalist heritage.',
        iconic: 'Wacko Maria Sukajan, BEAMS Plus',
        relevantTo: ['harajuku', 'vintage', 'streetwear', 'maximalist'],
      },
      {
        name: 'Biker / Moto Leather',
        description: 'Asymmetric zip, hardware-heavy, meant to protect at 60mph. The universally rebellious garment.',
        iconic: 'Schott Perfecto, Saint Laurent Moto',
        relevantTo: ['punk', 'grunge', 'rockstar', 'leatheraesthetic', 'edgy'],
      },
      {
        name: 'Double Breasted Trench',
        description: 'The classic Burberry-derived silhouette. Belted, knee-length, and unmistakably refined.',
        iconic: 'Burberry Heritage, Mackintosh',
        relevantTo: ['oldmoney', 'minimalist', 'darkacademia', 'eurochic'],
      },
      {
        name: 'Longline Overcoat',
        description: 'Drops past the knee, often in wool or cashmere. The power silhouette of cold months.',
        iconic: 'Loro Piana, Acne Studios Single-breasted',
        relevantTo: ['oldmoney', 'minimalist', 'scandi', 'eurochic'],
      },
      {
        name: 'Field / M65 Jacket',
        description: 'Surplus-derived olive or khaki coat with patch pockets and a cinchable waist. American workwear icon.',
        iconic: 'Alpha Industries M65, Filson Tin Cloth',
        relevantTo: ['military', 'workwear', 'gorpcore', 'vintage'],
      },
      {
        name: 'Shell / Technical Jacket',
        description: 'Waterproof or windproof outer layer. GORE-TEX, DWR-treated, designed for movement.',
        iconic: 'Arc\'teryx Alpha, Patagonia Torrentshell',
        relevantTo: ['techwear', 'gorpcore', 'outdoor', 'athleisure'],
      },
    ],
  },

  {
    id: 'sneakers',
    label: 'Sneakers',
    emoji: '👟',
    intro: 'Sneakers define the vibe of the whole fit. The silhouette speaks before you do.',
    types: [
      {
        name: 'Low-Top Minimalist',
        description: 'Clean, flat profile. Think Common Projects Achilles or New Balance 550. No distractions from the rest of the outfit.',
        iconic: 'Common Projects Achilles, Axel Arigato Clean 90',
        relevantTo: ['minimalist', 'oldmoney', 'cleangirl', 'scandi'],
      },
      {
        name: 'Court Sneaker',
        description: 'Originally built for tennis or basketball. Low profile, clean lines, often leather or canvas. Stan Smiths, Air Force 1s.',
        iconic: 'Nike Air Force 1, adidas Stan Smith',
        relevantTo: ['preppy', 'streetwear', 'vintage', 'normcore'],
      },
      {
        name: 'Chunky / Dad Sneaker',
        description: 'Exaggerated midsole, retro runner silhouette. The dominant aesthetic sneaker of 2017–present.',
        iconic: 'New Balance 990, Salomon XT-6, adidas Ozweego',
        relevantTo: ['streetwear', 'vintage', 'y2k', 'gorpcore', 'normcore'],
      },
      {
        name: 'High-Top',
        description: 'Ankle-covering canvas or leather. Basketball origins, but long adopted by skaters, punks, and streetwear kids.',
        iconic: 'Converse Chuck Taylor, Nike Dunk High',
        relevantTo: ['streetwear', 'skater', 'hiphop', 'vintage', 'eboy'],
      },
      {
        name: 'Skate Shoe',
        description: 'Flat, grippy, vulcanised sole. Low-profile canvas or suede, often reinforced at stress points.',
        iconic: 'Vans Old Skool, Nike SB Dunk Low',
        relevantTo: ['skater', 'streetwear', 'grunge', 'indie'],
      },
      {
        name: 'Trail Runner',
        description: 'Technical outsole, colourblock upper, born to handle terrain. Now dominating streets in gorpcore and techwear.',
        iconic: 'Salomon XT-6, HOKA Speedgoat, Asics Gel-Kayano',
        relevantTo: ['gorpcore', 'techwear', 'outdoor', 'athletic'],
      },
    ],
  },

  {
    id: 'boots',
    label: 'Boots',
    emoji: '🥾',
    intro: 'Boots command attention. Each silhouette carries its own cultural weight.',
    types: [
      {
        name: 'Chelsea Boot',
        description: 'Elastic side panel, slip-on entry, sleek pointed or rounded toe. Victorian origins, rock \'n\' roll reinvention.',
        iconic: 'R.M. Williams Craftsman, Dr. Martens 2976',
        relevantTo: ['oldmoney', 'darkacademia', 'indie', 'rockstar', 'minimalist'],
      },
      {
        name: 'Combat / Military Boot',
        description: 'Lace-up, thick sole, ankle to mid-calf height. Punk and goth\'s footwear of choice.',
        iconic: 'Dr. Martens 1460, Rick Owens Bozo',
        relevantTo: ['punk', 'goth', 'grunge', 'edgy', 'military'],
      },
      {
        name: 'Work / Lug Sole Boot',
        description: 'Heritage leather upper, aggressive Vibram or lug outsole. Originally for the job site — now for the fit.',
        iconic: 'Red Wing Iron Ranger, Timberland 6-inch',
        relevantTo: ['workwear', 'gorpcore', 'vintage', 'indie'],
      },
      {
        name: 'Chukka / Desert Boot',
        description: 'Suede or leather, open lacing, ankle height. Light and clean. The gentleman\'s casual boot.',
        iconic: 'Clarks Desert Boot, Yuketen Maine Guide',
        relevantTo: ['preppy', 'oldmoney', 'minimalist', 'lightacademia'],
      },
      {
        name: 'Cowboy / Western Boot',
        description: 'Pointed toe, stacked heel, decorative stitching. Country DNA, now crossed into fashion.',
        iconic: 'Lucchese Classic, Ariat Heritage',
        relevantTo: ['western', 'vintage', 'boho', 'indie'],
      },
    ],
  },

  {
    id: 'loafers',
    label: 'Loafers',
    emoji: '🪙',
    intro: 'The slip-on shoe that bridges smart and casual. Each variant has its own story.',
    types: [
      {
        name: 'Penny Loafer',
        description: 'A leather strap across the vamp with a small slit — originally to hold a penny. The original collegiate shoe.',
        iconic: 'G.H. Bass Weejun, Sebago Classic',
        relevantTo: ['preppy', 'oldmoney', 'lightacademia', 'vintage'],
      },
      {
        name: 'Tassel Loafer',
        description: 'Leather tassels dangling from the vamp. More formal, more personality. The power-lunch shoe.',
        iconic: 'Alden 660, Gucci Horsebit',
        relevantTo: ['oldmoney', 'preppy', 'businesscasual'],
      },
      {
        name: 'Horsebit Loafer',
        description: 'Metal bar-and-ring hardware across the toe. Gucci\'s signature since 1953. Quiet wealth, loud detail.',
        iconic: 'Gucci 1953 Horsebit, Prada Chocolate',
        relevantTo: ['oldmoney', 'eurochic', 'maximalist'],
      },
      {
        name: 'Lug Sole Loafer',
        description: 'Classic loafer silhouette with a chunky platform or lug outsole. High fashion meets street comfort.',
        iconic: 'Proenza Schouler, Tod\'s Gommino Platform',
        relevantTo: ['minimalist', 'cleangirl', 'scandi', 'streetwear'],
      },
      {
        name: 'Driving Moccasin',
        description: 'Extremely flexible sole with nubs for grip on pedals. The most relaxed member of the loafer family.',
        iconic: 'Tod\'s Gommino, Car Shoe',
        relevantTo: ['oldmoney', 'eurochic', 'minimalist'],
      },
    ],
  },

  {
    id: 'hoodies',
    label: 'Hoodies & Sweatshirts',
    emoji: '🫶',
    intro: 'From athletic uniform to high fashion staple — the hoodie\'s versatility is unmatched.',
    types: [
      {
        name: 'Heavyweight Pullover',
        description: 'Thick, structured fleece. The kind that gets better with age. 400–500gsm fabric that holds its shape.',
        iconic: 'Champion Reverse Weave, Carhartt WIP Chase',
        relevantTo: ['streetwear', 'workwear', 'normcore', 'grunge'],
      },
      {
        name: 'Zip-Up Hoodie',
        description: 'Full-zip closure for easy layering and adjustable warmth. Skate and surf culture adopted it first.',
        iconic: 'Nike Tech Fleece, Stüssy Stock Logo Zip',
        relevantTo: ['streetwear', 'skater', 'gorpcore', 'athleisure'],
      },
      {
        name: 'Oversized / Boxy',
        description: 'Dropped shoulders, extra volume. The intentional anti-fit silhouette. Streetwear\'s most democratic shape.',
        iconic: 'Fear of God Essentials, Balenciaga 3XL',
        relevantTo: ['streetwear', 'hiphop', 'eboy', 'grunge'],
      },
      {
        name: 'Cropped Hoodie',
        description: 'Shortened hem exposing the waist. Y2K adjacent, popular in athleisure and gen-Z streetwear.',
        iconic: 'Nike Sportswear Crop, adidas Originals Short',
        relevantTo: ['y2k', 'athleisure', 'baddie', 'kpop'],
      },
      {
        name: 'Graphic Crewneck',
        description: 'The sweatshirt cousin — no hood, often with bold artwork or university logos.',
        iconic: 'Russell Athletic, Vintage collegiate crewnecks',
        relevantTo: ['vintage', 'preppy', 'streetwear', 'indie'],
      },
    ],
  },

  {
    id: 'shirts',
    label: 'Shirts',
    emoji: '👔',
    intro: 'Beyond the basic button-up — the shirt category spans centuries and subcultures.',
    types: [
      {
        name: 'Oxford / OCBD',
        description: 'Oxford cloth button-down. Basketweave texture, soft collar that works with or without a tie. Ivy League\'s most durable contribution.',
        iconic: 'Brooks Brothers OCBD, Ralph Lauren Oxford',
        relevantTo: ['preppy', 'oldmoney', 'businesscasual', 'darkacademia'],
      },
      {
        name: 'Camp / Linen Collar',
        description: 'Open notch collar, boxy or relaxed cut. Perfect for warm weather — the shirt that breathes.',
        iconic: 'Our Legacy Open Collar, Corridor Camp Shirt',
        relevantTo: ['minimalist', 'boho', 'linencore', 'oldmoney', 'cottagecore'],
      },
      {
        name: 'Flannel / Plaid',
        description: 'Brushed cotton, warm handle, plaid or windowpane check. The definitive workwear and grunge shirt.',
        iconic: 'Pendleton Board Shirt, Filson Mackinaw',
        relevantTo: ['workwear', 'grunge', 'indie', 'gorpcore', 'western'],
      },
      {
        name: 'Western / Snap-Button',
        description: 'Pearl-snap closures, pointed chest yokes, sometimes embroidered. Country-to-cool in one move.',
        iconic: 'Wrangler Cowboy Cut, Nudie Jeans Western',
        relevantTo: ['western', 'vintage', 'workwear', 'indie'],
      },
      {
        name: 'Denim Shirt',
        description: 'Chambray or denim fabric, worn as a top layer or open over a tee. The casual cousin of the jacket.',
        iconic: 'Levi\'s Western Denim, Carhartt Denim',
        relevantTo: ['workwear', 'denimcore', 'vintage', 'indie'],
      },
      {
        name: 'Silk / Satin',
        description: 'Lustrous drape, fluid fall. The evening-into-day shirt that brings luxury to casual settings.',
        iconic: 'Dries Van Noten, Zara Satin (entry-level)',
        relevantTo: ['silksatin', 'oldmoney', 'kpop', 'rockstar', 'romantic'],
      },
    ],
  },

  {
    id: 'suits',
    label: 'Suits',
    emoji: '🤵',
    intro: 'A suit is a statement. The cut transforms how it reads — traditional, modern, or sharp.',
    types: [
      {
        name: 'Slim / Tailored Cut',
        description: 'Suppressed waist, narrow lapels, trousers with minimal break. The modern default in fashion-forward tailoring.',
        iconic: 'Suitsupply Lazio, Reiss Slim',
        relevantTo: ['businesscasual', 'eurochic', 'kpop', 'darkacademia'],
      },
      {
        name: 'Classic / Regular Cut',
        description: 'Moderate shoulder suppression, full chest, pleated trousers. The heritage silhouette — never wrong, never trendy.',
        iconic: 'Brooks Brothers, Canali Classic',
        relevantTo: ['oldmoney', 'preppy', 'businesscasual'],
      },
      {
        name: 'Modern / Unconstructed',
        description: 'Soft shoulder, deconstructed canvas. More like a jacket than a suit. The Italian "sprezzatura" approach.',
        iconic: 'Boglioli K-Jacket, Drake\'s Unstructured',
        relevantTo: ['oldmoney', 'eurochic', 'minimalist'],
      },
      {
        name: 'Double Breasted',
        description: '6x2 or 4x2 button closure, wide lapels, commanding presence. The power suit makes a return every decade.',
        iconic: 'Brioni, Tom Ford Double Breasted',
        relevantTo: ['oldmoney', 'royalcore', 'maximalist', 'eurochic'],
      },
      {
        name: 'Oversized / Relaxed',
        description: 'Dropped shoulders, wide trousers, anti-tailoring energy. Borrowed from Japanese menswear and now global.',
        iconic: 'Comme des Garçons Homme, Gucci Oversize',
        relevantTo: ['minimalist', 'harajuku', 'streetwear', 'eurochic'],
      },
    ],
  },

  {
    id: 'trousers',
    label: 'Trousers',
    emoji: '🩱',
    intro: 'Beyond jeans — the world of non-denim bottoms that define smart and smart-casual.',
    types: [
      {
        name: 'Pleated / Relaxed',
        description: 'Forward or reverse pleat at the waist, relaxed through the thigh, tapered hem. Italian heritage, maximum comfort.',
        iconic: 'Incotex, Drake\'s Pleated Flannel',
        relevantTo: ['oldmoney', 'minimalist', 'darkacademia', 'eurochic'],
      },
      {
        name: 'Slim Chino',
        description: 'Cotton or cotton-blend in various weights. Slim through the leg, minimal details. The versatile daily driver.',
        iconic: 'Alex Mill, Corridor Everyday',
        relevantTo: ['preppy', 'minimalist', 'businesscasual', 'oldmoney'],
      },
      {
        name: 'Cargo',
        description: 'Functional side pockets at the thigh, relaxed silhouette. Military utility crossed into fashion.',
        iconic: 'Carhartt WIP Regular Cargo, C.P. Company',
        relevantTo: ['streetwear', 'techwear', 'gorpcore', 'military'],
      },
      {
        name: 'Wide Leg / Pleated Dress',
        description: 'Dramatic drape with substantial width from waist to hem. The formal counterpart to wide-leg jeans.',
        iconic: 'Dries Van Noten, Jil Sander',
        relevantTo: ['minimalist', 'harajuku', 'vintage', 'scandi'],
      },
      {
        name: 'Linen / Summer',
        description: 'Natural fibre, relaxed silhouette, breathes in heat. The essential warm-weather bottom.',
        iconic: 'Sunspel Linen, Uniqlo Premium Linen',
        relevantTo: ['linencore', 'oldmoney', 'boho', 'minimalist', 'coastalgrandma'],
      },
    ],
  },
]

// Get relevant guide categories for a given aesthetic
export function getGuideForAesthetic(aestheticId) {
  return ITEM_GUIDE.map((category) => ({
    ...category,
    types: category.types.filter(
      (t) => !t.relevantTo || t.relevantTo.includes(aestheticId)
    ),
  })).filter((cat) => cat.types.length > 0)
}
