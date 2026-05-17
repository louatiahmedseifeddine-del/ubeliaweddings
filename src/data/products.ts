import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'ultimate-wedding-guide',
    name: 'The Ultimate Wedding Guide',
    description: 'A 180+ page digital wedding planner with 33 free budget sheets — plan your dream wedding with clarity and zero stress.',
    longDescription:
      'Plan your dream wedding with clarity, confidence, and zero stress. This beautifully designed 180+ page wedding guide includes 33 free budget sheets, planning templates, timelines, checklists, and expert tools to help you stay organized from "Yes!" to "I Do". Perfect for newly engaged couples, DIY brides, or anyone wanting a calm, structured planning experience. Once purchased, you\'ll receive a Start Here PDF with secure download links to the full guide and all 33 budget sheets — accessible on laptop, tablet, mobile, or printed. This is a digital product. No physical item will be shipped. For personal use only. Due to the file format, all sales are final.',
    price: 39,
    originalPrice: 97,
    reviewCount: 2347,
    category: 'guide-book',
    image: '/images/guide-1.png',
    images: [
      '/images/guide-1.png',
      '/images/guide-2.png',
      '/images/guide-3.png',
      '/images/guide-4.png',
      '/images/guide-5.png',
      '/images/guide-6.png',
    ],
    badge: 'Bestseller',
    features: [
      'Complete Wedding Guide — 96+ pages PDF',
      '33 free budget sheets & planning tools (Excel / Google Sheets)',
      'Step-by-step coverage of every major wedding decision',
      'Budgeting foundations, guest list strategy & vendor negotiation',
      'Invitations, RSVP system & seating chart planner',
      'Bride & groom styling guides',
      'Full wedding day timeline & ceremony flow',
      'Vows & speeches templates',
      '2026 trends & inspirations',
      'Master budget tracker, venue comparison & catering tools',
      'Essential checklists — day-of, emergency kit, vendor contacts',
      'Works for micro, destination, modern & traditional weddings',
      'Instant digital download — use on any device or print',
    ],
    stripePriceId: '',
  },
  {
    id: 'floral-wedding-invitation',
    name: 'Floral Elegance Invitation Suite',
    description: 'A stunning watercolor floral invitation set — print at home or share digitally.',
    longDescription:
      'Our most popular invitation design features hand-painted watercolor florals in soft blush and ivory tones. Includes invitation card, RSVP card, details card, and envelope liner — all as high-resolution, print-ready PDF files (300 DPI). Edit your details in the included Canva template.',
    price: 19,
    originalPrice: 49,
    reviewCount: 843,
    category: 'digital-invitation',
    image: 'https://picsum.photos/seed/ubelia-floral/800/600',
    badge: 'Popular',
    features: [
      'High-resolution print-ready PDFs (300 DPI)',
      'Editable Canva template included',
      'Invitation, RSVP, details card & envelope liner',
      'Print at home or at a print shop',
      'Share digitally via email or social media',
      'Instant download after purchase',
    ],
    stripePriceId: '',
  },
  {
    id: 'minimalist-wedding-invitation',
    name: 'Modern Minimalist Invitation Suite',
    description: 'Clean lines, elegant typography — a timeless aesthetic for the modern couple.',
    longDescription:
      'Sleek and sophisticated, this invitation suite features clean lines, elegant typography, and a neutral palette that complements any wedding style. Perfect for the modern couple who values simplicity and class. Fully editable Canva template included.',
    price: 17,
    originalPrice: 39,
    reviewCount: 512,
    category: 'digital-invitation',
    image: 'https://picsum.photos/seed/ubelia-minimal/800/600',
    features: [
      'High-resolution print-ready PDFs (300 DPI)',
      'Editable Canva template included',
      'Invitation, RSVP & details card',
      'Print at home or at a print shop',
      'Share digitally via email or social media',
      'Instant download after purchase',
    ],
    stripePriceId: '',
  },
  {
    id: 'custom-invitation-suite',
    name: 'Custom Designed Invitation Suite',
    description: 'A fully personalized invitation suite designed just for you by our in-house designers.',
    longDescription:
      'Work one-on-one with our design team to create a completely bespoke invitation suite that reflects your unique love story. We handle everything from concept to final files — with unlimited revisions until you love it.',
    price: 149,
    originalPrice: 249,
    reviewCount: 156,
    category: 'custom-invitation',
    image: 'https://picsum.photos/seed/ubelia-custom/800/600',
    badge: 'Exclusive',
    features: [
      'One-on-one designer consultation',
      'Fully custom design from scratch',
      'Unlimited revisions',
      'Invitation, RSVP, details card & envelope',
      'Print-ready files delivered via email',
      '7–10 business day turnaround',
    ],
    stripePriceId: '',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}
