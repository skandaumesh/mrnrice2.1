/**
 * Single source of truth for the MRN Gold range and company details.
 *
 * Content is limited to what MRN Agro Industries supplied. Deliberately NOT
 * stated anywhere here: ageing periods behind the "Double Old" / "Old" labels,
 * variety-specific cooking claims, health benefits, business hours, or named
 * customer quotations. See the publisher notes in PROMPT.md before adding any.
 */

export const products = [
  {
    slug: "mrn-gold-blue",
    no: "01",
    name: "MRN Gold Blue",
    variety: "Double Old Sona Masuri Raw Rice",
    category: "raw",
    categoryLabel: "Raw Rice",
    image: "/products/mrn-gold-blue.png",
    accent: "#2F5D8A",
    tagline: "Double Old Sona Masuri, raw",
    short: "Aged raw Sona Masuri for everyday household and kitchen use.",
    description:
      "Our Double Old Sona Masuri Raw Rice brings together a familiar rice variety and MRN Gold's focus on dependable quality. Carefully selected and processed, it is an option for households and food businesses looking for aged raw rice for their regular cooking needs.",
    features: ["Double Old rice selection", "Raw rice", "Quality-checked processing"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "Sona Masuri"],
      ["Rice type", "Raw rice"],
      ["Selection", "Double Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Hotels", "Retailers"]
  },
  {
    slug: "mrn-gold-grey",
    no: "02",
    name: "MRN Gold Grey",
    variety: "Double Old RNR Raw Rice",
    category: "raw",
    categoryLabel: "Raw Rice",
    image: "/products/mrn-gold-grey.png",
    accent: "#6B6F63",
    tagline: "Double Old RNR, raw",
    short: "Aged raw RNR rice in household packs and larger business packs.",
    description:
      "For customers who prefer RNR rice, MRN Gold Grey offers a Double Old raw rice option backed by our commitment to consistency. Available in convenient household packs and larger packs for business requirements, it gives buyers a choice that fits their preferred variety and purchase quantity.",
    features: ["Double Old rice selection", "RNR variety", "Packs for home and business use"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "RNR"],
      ["Rice type", "Raw rice"],
      ["Selection", "Double Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Retailers", "Wholesalers"]
  },
  {
    slug: "mrn-gold-black-bullet",
    no: "03",
    name: "MRN Gold Black Bullet",
    variety: "Double Old Lachkari Kolam Raw Rice",
    category: "raw",
    categoryLabel: "Raw Rice",
    image: "/products/mrn-gold-black-bullet.png",
    accent: "#2B2A26",
    tagline: "Double Old Lachkari Kolam, raw",
    short: "Aged raw Lachkari Kolam for customers who seek this variety.",
    description:
      "MRN Gold Black Bullet brings Double Old Lachkari Kolam Raw Rice to customers who specifically seek this variety. Carefully processed and packed, it extends our raw rice range while maintaining the same attention to quality that guides every MRN Gold product.",
    features: ["Double Old rice selection", "Lachkari Kolam variety", "Hygienic packaging"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "Lachkari Kolam"],
      ["Rice type", "Raw rice"],
      ["Selection", "Double Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Hotels", "Distributors"]
  },
  {
    slug: "mrn-gold-green",
    no: "04",
    name: "MRN Gold Green",
    variety: "Old Sona Masuri Steam Rice",
    category: "steam",
    categoryLabel: "Steam Rice",
    image: "/products/mrn-gold-green.png",
    accent: "#2E6B44",
    tagline: "Old Sona Masuri, steam",
    short: "Aged steam Sona Masuri for customers who prefer steam over raw rice.",
    description:
      "MRN Gold Green is our Old Sona Masuri Steam Rice offering for customers who prefer steam rice over raw rice. With pack sizes for households and businesses, it combines a familiar variety with the convenience of choosing the quantity that suits your needs.",
    features: ["Old rice selection", "Steam rice", "Household and commercial pack options"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "Sona Masuri"],
      ["Rice type", "Steam rice"],
      ["Selection", "Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Hotels", "Wholesalers"]
  }
];

/** Retail pack sizes offered across every variety, in kilograms. */
export const packSizes = [5, 10, 26];

/**
 * Home page "At a glance" ribbon. Same five approved facts, presented as
 * value/label pairs. Entries with `count` animate up via <Counter>; the rest
 * render `value` as-is.
 */
export const glance = [
  { count: 2003, plain: true, label: "Established in Raichur" },
  { count: 250, suffix: "+", label: "Customers across five states" },
  { count: 4, label: "MRN Gold rice varieties" },
  { value: "Bulk", label: "Packaging available for trade" }
];

/**
 * Why choose us. `text` is a one-line compression of each approved point so
 * the grid stays scannable — nobody reads eight paragraphs of prose. Every
 * line is a subset of the supplied wording, which is kept verbatim in
 * CONTENT.md if the longer form is ever wanted back.
 */
export const reasons = [
  { no: "01", title: "Experience Since 2003", text: "Over two decades in rice manufacturing." },
  { no: "02", title: "Quality and Consistency", text: "Dependable quality, the whole year round." },
  { no: "03", title: "Modern Satake Machinery", text: "From Japan — 9 tonnes of paddy an hour." },
  { no: "04", title: "Tested and Certified", text: "Scanner checks, lab testing, FSSAI and AGMARK." },
  { no: "05", title: "Four Aged Varieties", text: "Three Double Old raw, one Old steam." },
  { no: "06", title: "Fair, Market-Led Pricing", text: "Premium rice without a premium markup." },
  { no: "07", title: "A Growing Network", text: "250+ customers across five states." },
  { no: "08", title: "Packed for Every Need", text: "5, 10 and 26 kg packs, plus bulk." }
];

/**
 * Quality process, read as a timeline. `metric` is the hard fact for each
 * stage and sits alongside the title; `text` is one line, deliberately, so
 * the whole sequence can be skimmed. Keep both to what the company has
 * confirmed — the capacity figure in particular is paddy input, not output.
 */
export const processSteps = [
  {
    title: "Paddy Selection",
    metric: "Careful selection",
    text: "Chosen with care before it ever reaches the line."
  },
  {
    title: "Satake Processing",
    metric: "9 tonnes of paddy per hour",
    text: "Modern Satake machinery from Japan, at our Raichur facility."
  },
  {
    title: "Scanner Checks",
    metric: "Scanner-based inspection",
    text: "Every batch passes scanner-based checks before it moves on."
  },
  {
    title: "Laboratory Testing",
    metric: "Rice laboratory testing",
    text: "Laboratory testing verifies what the line and scanners report."
  },
  {
    title: "Hygienic Packaging",
    metric: "5, 10 and 26 kg packs",
    text: "Packed hygienically under our own MRN Gold brand."
  },
  {
    title: "Supply and Delivery",
    metric: "250+ customers, five states",
    text: "Out to households, hotels, retailers, wholesalers and distributors."
  }
];

/**
 * Themes drawn from feedback customers shared with our team. These are summaries,
 * not verified direct testimonials — no customer names or quotations are used.
 */
export const appreciation = [
  { title: "Taste and aroma", text: "Customers tell us the taste and aroma of MRN Gold rice stand out at their table." },
  { title: "Softness and grain quality", text: "Softness after cooking and the quality of the grain come up repeatedly in what customers share." },
  { title: "Consistent cooking results", text: "Rice that behaves the same way each time it is cooked is one of the things customers value most." },
  { title: "Practical packaging", text: "Pack sizes that suit a household kitchen as readily as a hotel store room." },
  { title: "Value for money", text: "Premium quality at prices aligned with the market, rather than a premium charged for its own sake." },
  { title: "Dependable delivery and supply", text: "Business customers point to supply they can plan around, order after order." }
];

/** Our values and commitments, as stated by the company. */
export const values = [
  { title: "Quality", text: "Give careful attention to paddy selection, processing, testing and packaging." },
  { title: "Consistency", text: "Work to maintain dependable rice quality throughout the year." },
  { title: "Honesty", text: "Build relationships through clear communication and fair dealing." },
  { title: "Fair pricing", text: "Make premium-quality rice accessible at competitive market rates." },
  { title: "Food safety", text: "Keep responsible handling and hygiene central to our operations." },
  { title: "Customer trust", text: "Support households and business customers with reliable service and supply." }
];

/** Who we serve — used by the enquiry forms and the products page. */
export const customerTypes = [
  "Household",
  "Hotel / Restaurant",
  "Retailer",
  "Wholesaler",
  "Distributor",
  "Other"
];

export const company = {
  name: "MRN Agro Industries",
  brand: "MRN Gold",
  founder: "Mr. Pawan Kumar",
  established: 2003,
  customers: "250+",

  address: {
    line1: "Survey No. 739, Opposite Venkatadri Weighbridge",
    line2: "Gadwal Road, Raichur",
    line3: "Karnataka – 584102, India"
  },
  city: "Raichur",
  state: "Karnataka",
  mapsUrl: "https://maps.app.goo.gl/UCGCtGDP1Jaq2jgm8?g_st=iw",
  /**
   * Keyless Google Maps embed. The query text and `ftid` are Google's own
   * canonical values for this listing, taken from resolving the share link
   * above, so the pin lands on the business itself rather than on an
   * approximate geocode of the postal address.
   */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("MRN Agro Industries, S.Y No, 739, Gadwal Rd, Raichur, Karnataka 584102") +
    "&ftid=0x3bc9d91b3fcb9fc9:0xbf689a4f175f1d72" +
    "&output=embed",

  email: "admin@mrnagro.com",
  phones: [
    { team: "Sales Team", number: "+91 72598 47655" },
    { team: "Accounts Team", number: "+91 63632 90896" }
  ],

  /** HDFC SmartHub Vyapar merchant QR. The VPA is shown as text too, so it
   *  can be copied on a desktop where the code cannot be scanned. */
  payment: {
    provider: "HDFC Bank SmartHub Vyapar",
    upi: "Vyapar.177870091559@hdfcbank",
    tid: "82298978",
    qr: "/payment-qr.jpg"
  },

  capacity: "9 tonnes of paddy per hour",
  machinery: "Satake machinery from Japan",
  credentials: ["FSSAI", "AGMARK"],
  statesServed: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra"],

  mission:
    "To produce premium-quality rice with consistent standards throughout the year, supported by careful processing, reliable supply, and fair pricing.",
  vision:
    "To become a trusted household rice brand across India, growing through quality, honesty, and lasting customer relationships."
};

/** `tel:` href for a displayed number. */
export const telHref = (number) => `tel:${number.replace(/[^\d+]/g, "")}`;
