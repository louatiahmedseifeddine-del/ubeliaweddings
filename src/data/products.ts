import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'wedding-guide-book',
    name: 'The Complete Wedding Planning Guide',
    description: 'A comprehensive 120-page digital guide covering every aspect of planning your dream wedding.',
    longDescription:
      'From setting your budget to choosing your venue, managing vendors, creating timelines, and everything in between — this beautifully designed PDF guide walks you through every step of planning your perfect wedding. Packed with checklists, tips, and expert advice.',
    price: 29.99,
    category: 'guide-book',
    image: 'https://picsum.photos/seed/wedding-guide/800/600',
    badge: 'Bestseller',
    features: [
      '120-page beautifully designed PDF',
      'Complete wedding planning checklist',
      'Budget tracker templates',
      'Vendor comparison worksheets',
      'Day-of timeline templates',
      'Seating arrangement guide',
      'Instant digital download',
    ],
    stripePriceId: '', // fill in after creating in Stripe dashboard
  },
  {
    id: 'floral-digital-invitation',
    name: 'Floral Elegance Digital Invitation',
    description: 'A stunning watercolor floral invitation set — print at home or share digitally.',
    longDescription:
      'Our most popular invitation design features hand-painted watercolor florals in soft blush and ivory tones. Includes invitation card, RSVP card, details card, and envelope liner — all as high-resolution, print-ready PDF files (300 DPI). Edit your details in our included Canva template.',
    price: 19.99,
    category: 'digital-invitation',
    image: 'https://picsum.photos/seed/floral-invite/800/600',
    badge: 'Popular',
    features: [
      'High-resolution print-ready PDFs (300 DPI)',
      'Editable Canva template included',
      'Invitation, RSVP, details card & envelope liner',
      'Print at home or at a print shop',
      'Share digitally via email or social',
      'Instant download after purchase',
    ],
    stripePriceId: '',
  },
  {
    id: 'minimalist-digital-invitation',
    name: 'Modern Minimalist Digital Invitation',
    description: 'Clean, modern typography-focused invitation set with a timeless aesthetic.',
    longDescription:
      'Sleek and sophisticated, this invitation suite features clean lines, elegant typography, and a neutral palette that complements any wedding style. Perfect for the modern couple who values simplicity and class. Fully editable Canva template included.',
    price: 17.99,
    category: 'digital-invitation',
    image: 'https://picsum.photos/seed/minimalist-invite/800/600',
    features: [
      'High-resolution print-ready PDFs (300 DPI)',
      'Editable Canva template included',
      'Invitation, RSVP & details card',
      'Print at home or at a print shop',
      'Share digitally via email or social',
      'Instant download after purchase',
    ],
    stripePriceId: '',
  },
  {
    id: 'custom-invitation-suite',
    name: 'Custom Designed Invitation Suite',
    description: 'A fully personalized invitation suite designed just for you by our in-house designers.',
    longDescription:
      'Work one-on-one with our design team to create a completely bespoke invitation suite that reflects your unique love story. We handle everything from concept to final files. Includes unlimited revisions until you love it, and delivery of print-ready files for all pieces.',
    price: 149.99,
    category: 'custom-invitation',
    image: 'https://picsum.photos/seed/custom-invite/800/600',
    badge: 'Premium',
    features: [
      'One-on-one designer consultation',
      'Fully custom design from scratch',
      'Unlimited revisions',
      'Invitation, RSVP, details card & envelope',
      'Print-ready files delivered via email',
      '7-10 business day turnaround',
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
