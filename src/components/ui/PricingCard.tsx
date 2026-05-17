import Link from 'next/link';
import Image from 'next/image';
import { UbeliaProduct } from '@/lib/products';

const productPhotos: Record<string, string> = {
  ebook:       '/products/ebook/1.png',
  spreadsheet: '/products/budget/1.jpg',
  invitation:  '/products/invitation/alicia-marcus-1.png',
  bundle:      '/products/invitation/emma-lucas-1.png',
};
const photoCrop: Record<string, string> = {
  ebook:       'center top',
  spreadsheet: 'center center',
  invitation:  'center 20%',
  bundle:      'center 25%',
};

interface PricingCardProps {
  product: UbeliaProduct;
  variant?: 'dark' | 'light' | 'bundle';
}

const featuresByProduct: Record<string, string[]> = {
  ebook: [
    'Pre-filled 12-month timeline',
    '6-month sprint version',
    'Vendor email scripts',
    'Vow & speech frameworks',
  ],
  spreadsheet: [
    'Estimate / actual / variance',
    'Payment tracker & due dates',
    'Vendor dashboard',
    'Mobile-optimized',
  ],
  invitation: [
    'Fully customizable design',
    'RSVP card included',
    'Share by email or WhatsApp',
    'Canva-compatible template',
  ],
  bundle: [
    'The Ubelia Guide (96+ pages) — valued at $82',
    'Budget Spreadsheet Template — valued at $32',
    'Digital Wedding Invitation — valued at $37',
    'Email support — Hello@ubelia.eu',
  ],
};

export default function PricingCard({ product, variant = 'light' }: PricingCardProps) {
  const features = featuresByProduct[product.id] || product.features.slice(0, 4);

  if (variant === 'bundle') {
    return (
      <div
        className="relative"
        style={{
          background: '#FFFFFF',
          border: '2px solid #B59354',
          borderRadius: '16px',
          padding: 'clamp(24px, 5vw, 48px)',
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {/* Animated badge */}
        <div className="text-center mb-6">
          <span
            className="animate-badgePulse inline-block"
            style={{
              background: '#B59354',
              color: '#252018',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              padding: '7px 20px',
              borderRadius: '3px',
            }}
          >
            ✦ BEST VALUE · SAVE $27 ✦
          </span>
        </div>

        <h3
          className="text-center mb-2"
          style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 300, color: '#252018' }}
        >
          {product.name}
        </h3>
        <p
          className="text-center mb-6"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060' }}
        >
          {product.tagline}
        </p>

        <div className="my-6" style={{ height: '1px', background: 'rgba(181,147,84,0.3)' }} />

        <ul className="mb-6 space-y-2 check-list">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <div
          className="my-4 py-4 text-center"
          style={{ borderTop: '1px solid rgba(181,147,84,0.2)', borderBottom: '1px solid rgba(181,147,84,0.2)' }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#687060', marginBottom: '4px' }}>
            Total value:{' '}
            <span style={{ textDecoration: 'line-through' }}>$151</span>
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#687060' }}>
            You pay:{' '}
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '48px', color: '#252018', fontWeight: 300 }}>
              ${product.price}
            </span>
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', marginTop: '4px' }}>
            Save $27 today
          </p>
        </div>

        <Link
          href="https://buy.stripe.com/00w7sLgmZcdl8dG5g2dnW0V"
          className="btn btn-gold w-full justify-center mt-6 block text-center"
          style={{ fontSize: '14px', padding: '18px 32px' }}
        >
          Get The Complete Pack →
        </Link>

        <p
          className="text-center mt-4"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#687060', letterSpacing: '0.05em' }}
        >
          🔒 Secure checkout · 📩 Instant email delivery · 💬 Email support
        </p>
      </div>
    );
  }

  const isLight = variant === 'light';

  return (
    <div
      style={{
        background: isLight ? '#FFFFFF' : '#2E2A22',
        border: isLight ? '1px solid rgba(181,147,84,0.2)' : '1px solid rgba(251,250,246,0.1)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Photo */}
      <div className="relative" style={{ aspectRatio: '1 / 1' }}>
        <Image
          src={productPhotos[product.id] || productPhotos.ebook}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: isLight
            ? 'linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 60%)'
            : 'linear-gradient(to top, rgba(37,32,24,0.8) 0%, transparent 60%)'
          }}
        />
        <p
          className="absolute bottom-3 left-4"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '32px',
            fontWeight: 300,
            color: isLight ? '#252018' : '#FBFAF6',
            lineHeight: 1,
          }}
        >
          ${product.price}
        </p>
      </div>

      <div style={{ padding: '24px' }}>
      <p className={isLight ? 'eyebrow mb-2' : 'eyebrow-ivory mb-2'}>DIGITAL DOWNLOAD</p>
      <h3
        className="mb-3"
        style={{ fontFamily: 'var(--font-cormorant)', fontSize: '26px', fontWeight: 300, color: isLight ? '#252018' : '#FBFAF6', lineHeight: 1.2 }}
      >
        {product.name}
      </h3>
      <p
        className="mb-5"
        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: isLight ? '#687060' : '#B0BAA8', lineHeight: 1.7 }}
      >
        {product.tagline}
      </p>

      <div className="mb-5" style={{ height: '1px', background: 'rgba(181,147,84,0.2)' }} />

      <ul className={`mb-6 space-y-1 ${isLight ? 'check-list' : 'check-list-ivory'}`}>
        {features.map((f, i) => <li key={i} style={{ fontSize: '12px' }}>{f}</li>)}
      </ul>

      <Link
        href={`/checkout?product=${product.id}`}
        className={`btn ${isLight ? 'btn-outline' : 'btn-outline-ivory'} w-full justify-center block text-center`}
        style={{ fontSize: '9px', letterSpacing: '0.25em' }}
      >
        Add to cart →
      </Link>
      </div>
    </div>
  );
}
