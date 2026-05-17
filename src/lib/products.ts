export type ProductId = 'ebook' | 'spreadsheet' | 'invitation' | 'bundle';

export interface UbeliaProduct {
  id: ProductId;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  badge: string;
  saveBadge: string;
  deliveryFormat: string;
  features: string[];
  detailedFeatures: { title: string; description: string }[];
  category: string;
  mockupGradient: string;
  mockupIcon: 'book' | 'spreadsheet' | 'envelope' | 'bundle';
  metaTitle: string;
  metaDescription: string;
}

export const products: UbeliaProduct[] = [
  {
    id: 'ebook',
    slug: '/products/ebook',
    name: 'The Ubelia Guide',
    tagline: 'The complete wedding planning system',
    description: 'Guide PDF 96+ pages. Pre-filled 12-month timeline, 6-month sprint version, vendor email scripts, vow frameworks, "what to skip" guide.',
    longDescription: 'Stop opening 17 browser tabs every morning. The Ubelia Guide is a 96+ page system that turns chaos into clarity — one week at a time. Every page was written around the pain points real couples face: decision fatigue, budget creep, vendors who won\'t share pricing, and the exhausting feeling of planning alone.',
    price: 49,
    originalPrice: 82,
    badge: '-40%',
    saveBadge: 'Save $33',
    deliveryFormat: 'PDF haute résolution — email instantané',
    features: [
      'Pre-filled 12-month planning timeline (every task, in order)',
      'Condensed 6-month sprint version — for couples planning fast',
      'Vendor email scripts — get pricing without wasting time on tours',
      'Vows & speeches frameworks — never face a blank page again',
      '"What to skip" guide — delete what doesn\'t fit your wedding',
      'Partner delegation pages — make it truly "our wedding"',
      'Print-ready: A4, A5, US Letter + anti-distortion print guide',
      'Instant digital download — PDF, use on any device',
    ],
    detailedFeatures: [
      { title: '12-Month Timeline', description: 'Every task pre-filled and in order. Never wonder "what should I do this month?"' },
      { title: '6-Month Sprint', description: 'A condensed version for couples with a tighter timeline. Prioritized, focused, zero panic.' },
      { title: 'Vendor Scripts', description: '7 ready-to-send email templates. Get real pricing from vendors without wasting time on tours.' },
      { title: 'Vow Frameworks', description: 'Structured prompts and frameworks so you\'re never staring at a blank page.' },
      { title: '"What to Skip" Guide', description: 'A curated list of what most weddings include but most couples don\'t need.' },
      { title: 'Partner Pages', description: 'Delegation tools so your partner can genuinely participate in planning.' },
    ],
    category: 'guide',
    mockupGradient: 'from-blush to-cream',
    mockupIcon: 'book',
    metaTitle: 'The Ubelia Guide — 96+ Page Wedding Planning System | Ubelia',
    metaDescription: 'Stop the overwhelm. 96+ page PDF guide with pre-filled timelines, vendor email scripts, budget tools, and vow frameworks. Instant download.',
  },
  {
    id: 'invitation',
    slug: '/products/invitation',
    name: 'Digital Wedding Invitation',
    tagline: 'Elegant. Instant. Completely yours.',
    description: '1 invitation digitale personnalisable, haut de gamme, envoi par email/WhatsApp/réseaux sociaux.',
    longDescription: 'A wedding invitation should be the first impression of your day. The Ubelia Digital Invitation is a high-resolution, fully customizable invitation template — names, date, venue, colors — everything editable. Share it by email, WhatsApp, or social media in minutes.',
    price: 22,
    originalPrice: 37,
    badge: '-40%',
    saveBadge: 'Save $15',
    deliveryFormat: 'Fichier digital — email instantané',
    features: [
      'Fully customizable: names, date, venue, colors',
      'High-resolution file (print-ready 300 DPI)',
      'Share by email, WhatsApp, or social media',
      'Includes digital RSVP card',
      'Step-by-step customization guide included',
      'Compatible with Canva (free)',
      'Works beautifully on mobile and desktop',
      'Instant digital download',
    ],
    detailedFeatures: [
      { title: 'Fully Customizable', description: 'Edit every detail: names, date, venue address, colors, and fonts.' },
      { title: 'Print or Share Digitally', description: 'High-resolution 300 DPI file — print at home, at a shop, or share as a PDF.' },
      { title: 'RSVP Card Included', description: 'A matching digital RSVP card so guests can confirm quickly.' },
      { title: 'Canva Integration', description: 'Edit directly in Canva — no design skills needed, completely free tool.' },
      { title: 'Share Anywhere', description: 'Optimized for email, WhatsApp, Instagram, and any messaging platform.' },
      { title: 'Instant Access', description: 'Download in seconds after purchase. No waiting, no back-and-forth with a designer.' },
    ],
    category: 'invitation',
    mockupGradient: 'from-mocha to-charcoal',
    mockupIcon: 'envelope',
    metaTitle: 'Digital Wedding Invitation Template — Elegant & Customizable | Ubelia',
    metaDescription: 'A premium customizable digital wedding invitation. Send by email or WhatsApp in minutes. Includes RSVP card. Instant download.',
  },
  {
    id: 'spreadsheet',
    slug: '/products/spreadsheet',
    name: 'Budget Spreadsheet Template',
    tagline: 'Track every dollar. Catch overruns early.',
    description: 'Template tableur estimate/actual/variance, payment tracker, vendor dashboard centralisé, optimisé mobile.',
    longDescription: 'Budget creep is the #1 wedding regret. The Ubelia Budget Spreadsheet Template gives you a real-time view of where your money is going — before it\'s too late. With estimate vs actual vs variance columns for every category, you\'ll spot overruns weeks before they become disasters.',
    price: 19,
    originalPrice: 32,
    badge: '-40%',
    saveBadge: 'Save $13',
    deliveryFormat: 'Google Sheets + Excel — email instantané',
    features: [
      'Estimate / actual / variance tracker for every budget category',
      'Payment tracker: deposits, balances, due dates',
      'One-page vendor dashboard for day-of handoff',
      'Guest list & headcount tracker',
      'Mobile-optimized — quick updates from your couch',
      'Works in Google Sheets (free) and Excel',
      'Color-coded alerts for budget overruns',
      'Instant digital download',
    ],
    detailedFeatures: [
      { title: 'Estimate vs Actual vs Variance', description: 'See exactly where your budget stands at any moment, category by category.' },
      { title: 'Payment Tracker', description: 'Deposits, balances, due dates — never miss a payment deadline again.' },
      { title: 'Vendor Dashboard', description: 'All your vendor contacts, contracts, and notes in one place.' },
      { title: 'Mobile-First Design', description: 'Built for quick updates on Google Sheets mobile. No laptop required.' },
      { title: 'Overrun Alerts', description: 'Color-coded cells flag categories that are going over budget automatically.' },
      { title: 'Day-Of Handoff Sheet', description: 'A clean one-pager to share with your venue, caterer, or day-of coordinator.' },
    ],
    category: 'spreadsheet',
    mockupGradient: 'from-sage to-cream',
    mockupIcon: 'spreadsheet',
    metaTitle: 'Wedding Budget Spreadsheet Template — Track Every Dollar | Ubelia',
    metaDescription: 'Estimate vs actual vs variance tracker. Payment tracker, vendor dashboard, mobile-optimized. Catch budget overruns before it\'s too late.',
  },
  {
    id: 'bundle',
    slug: '/products/bundle',
    name: 'The Complete Wedding Pack',
    tagline: 'Everything you need. One price. Instant access.',
    description: 'E-book + Spreadsheet Template + Digital Invitation. The complete Ubelia system.',
    longDescription: 'The Complete Wedding Pack is the full Ubelia system in one purchase. You get The Ubelia Guide (96+ pages), the Budget Spreadsheet Template, and the Digital Invitation — everything you need to plan your wedding with confidence, track your budget without stress, and invite your guests with elegance.',
    price: 63,
    originalPrice: 90,
    badge: 'SAVE $27',
    saveBadge: 'Best Value — Save $27',
    deliveryFormat: 'PDF + Google Sheets + Fichier digital — email instantané',
    features: [
      'The Ubelia Guide (96+ pages) — valued at $82',
      'Budget Spreadsheet Template — valued at $32',
      'Digital Wedding Invitation — valued at $37',
      'Total value: $151 — You pay: $63',
      'All files delivered instantly by email',
      'Works for any wedding size, style, or timeline',
      'Used by 11,000+ couples worldwide',
    ],
    detailedFeatures: [
      { title: 'The Ubelia Guide', description: '96+ page PDF with timelines, vendor scripts, vow frameworks, and more.' },
      { title: 'Budget Spreadsheet', description: 'Estimate/actual/variance tracker with payment schedule and vendor dashboard.' },
      { title: 'Digital Invitation', description: 'Fully customizable, high-resolution invitation + RSVP card.' },
      { title: 'Instant Delivery', description: 'All three files delivered to your inbox within seconds of purchase.' },
      { title: 'Email Support', description: 'Questions? Our team replies within 24 hours at Hello@ubelia.eu.' },
      { title: 'Best Value', description: 'Save $27 vs. buying individually. The smartest way to start planning.' },
    ],
    category: 'bundle',
    mockupGradient: 'from-charcoal to-dark',
    mockupIcon: 'bundle',
    metaTitle: 'The Complete Wedding Pack — Guide + Budget + Invitation | Ubelia',
    metaDescription: 'The full Ubelia system: 96+ page guide, budget spreadsheet, and digital invitation. Save $27 vs. buying separately. Instant download.',
  },
];

export function getProduct(id: ProductId): UbeliaProduct {
  return products.find((p) => p.id === id)!;
}

export function getProductBySlug(slug: string): UbeliaProduct | undefined {
  return products.find((p) => p.slug === slug);
}
