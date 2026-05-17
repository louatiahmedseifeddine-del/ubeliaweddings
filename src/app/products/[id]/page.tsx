'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const categoryLabel: Record<string, string> = {
  'guide-book':         'Wedding Guide',
  'digital-invitation': 'Invitation Suite',
  'custom-invitation':  'Custom Design',
};

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'This guide is absolutely worth every penny. The budget sheets alone saved us thousands — we stayed on track the entire planning process. I can\'t imagine planning our wedding without it.',
  },
  {
    name: 'Emily & James',
    location: 'Austin, TX',
    rating: 5,
    text: 'As a DIY bride, I was completely overwhelmed until I found this guide. It laid everything out so clearly. The vendor negotiation section especially helped us cut costs without compromising on quality.',
  },
  {
    name: 'Natalie R.',
    location: 'Chicago, IL',
    rating: 5,
    text: 'I downloaded it at 11pm the night before our vendor meetings. By morning I felt totally prepared. The checklists are so thorough — nothing fell through the cracks on our big day.',
  },
  {
    name: 'Priya & Dev',
    location: 'New York, NY',
    rating: 5,
    text: 'We planned a destination wedding and this guide covered everything we needed. The timelines and ceremony flow templates were a lifesaver. Highly recommend to any couple starting their planning journey.',
  },
];

const faqs = [
  {
    q: 'What format is the guide delivered in?',
    a: 'The wedding guide is delivered as a beautifully designed PDF (96+ pages). The 33 budget sheets and planning tools are provided in Excel and Google Sheets format, compatible with all devices.',
  },
  {
    q: 'How do I access my files after purchase?',
    a: 'Immediately after purchase, you\'ll receive a confirmation email containing a "Start Here" PDF with secure download links to all your files. Downloads are available instantly — no waiting.',
  },
  {
    q: 'Can I print the guide?',
    a: 'Yes — the PDF is fully print-ready. You can print it at home or at any print shop for a beautifully bound physical copy. Many couples love having a printed version to write notes in.',
  },
  {
    q: 'Is this compatible with Google Sheets?',
    a: 'Yes. The 33 budget sheets are provided in Excel format and are fully compatible with Google Sheets. Simply upload to your Google Drive and open with Google Sheets — no paid software required.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Due to the instant digital nature of the product, all sales are final once the files have been downloaded. If you have trouble accessing your files, please contact us at Hello@ubelia.eu and we will resolve it immediately.',
  },
  {
    q: 'I need help accessing my files. What should I do?',
    a: 'Simply reach out to us at Hello@ubelia.eu. We respond within 24 hours and will make sure you have full access to everything you purchased. Your satisfaction is our priority.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? 'var(--gold)' : 'var(--champagne)', fontSize: '14px' }}>★</span>
      ))}
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--gold-light)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontWeight: 300, color: 'var(--mocha)', lineHeight: 1.3 }}>{q}</span>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'var(--gold)', flexShrink: 0, transition: 'transform 0.28s ease', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 200, fontSize: '13px', lineHeight: 1.9, color: 'var(--mocha)', paddingBottom: '20px' }}>{a}</p>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const { addItem } = useCart();
  const router = useRouter();
  const [customization, setCustomization] = useState('');
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return notFound();

  const images = product.images?.length ? product.images : [product.image];
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const savingsPct = product.originalPrice ? Math.round(savings / product.originalPrice * 100) : 0;

  function handleAdd() {
    addItem(product!, customization || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  function handleBuyNow() {
    addItem(product!, customization || undefined);
    router.push('/cart');
  }

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh' }} className="mobile-page-bottom">

      {/* ── Sticky mobile CTA bar ── */}
      <div className="mobile-cta-bar">
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '15px', color: 'var(--ivory)', lineHeight: 1 }}>{product.name}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--gold)', fontWeight: 400 }}>${product.price}</p>
            {product.originalPrice && (
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--sage)', fontWeight: 200, textDecoration: 'line-through' }}>${product.originalPrice}</p>
            )}
          </div>
        </div>
        <button onClick={handleBuyNow} className="btn btn-gold" style={{ flexShrink: 0, fontSize: '9px', padding: '14px 20px', minHeight: '48px' }}>
          Buy Now
        </button>
      </div>

      <div className="max-w-8xl mx-auto" style={{ padding: 'clamp(48px, 6vw, 72px) clamp(32px, 6vw, 64px)' }}>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)' }}>
          <Link href="/shop" style={{ color: 'var(--sage)', transition: 'color 0.28s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sage)')}
          >Collections</Link>
          <span style={{ color: 'var(--champagne)' }}>·</span>
          <span style={{ color: 'var(--mocha)' }}>{product.name}</span>
        </nav>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'clamp(40px, 6vw, 72px)', marginBottom: '80px' }}>

          {/* ── Image Gallery ── */}
          <div>
            {/* Main image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '1/1', marginBottom: '12px', backgroundColor: 'var(--cream)' }}>
              <Image src={images[activeImage]} alt={product.name} fill className="object-contain" priority />
              {product.badge && (
                <div className="absolute top-4 right-4" style={{ background: 'var(--charcoal)', padding: '6px 14px' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '7.5px', fontWeight: 400, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
            {/* Thumbnails — horizontally scrollable on mobile */}
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    style={{
                      position: 'relative', flexShrink: 0,
                      width: '72px', height: '72px',
                      overflow: 'hidden', border: 'none',
                      cursor: 'pointer', padding: 0, backgroundColor: 'var(--cream)',
                      outline: i === activeImage ? '2px solid var(--gold)' : '2px solid transparent',
                      transition: 'outline 0.2s ease',
                    }}
                  >
                    <Image src={img} alt={`View ${i + 1}`} fill className="object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Product Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Category + rating */}
            <div style={{ marginBottom: '12px' }}>
              <p className="section-label mb-2">{categoryLabel[product.category]}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <StarRating count={5} />
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: 'var(--sage-deep)' }}>4.9 (2,300+ reviews)</span>
              </div>
            </div>

            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--mocha)', lineHeight: 1.1, marginBottom: '16px' }}>
              {product.name}
            </h1>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '10px 16px', backgroundColor: 'var(--cream)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '16px' }}>✓</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: 'var(--mocha)' }}>
                Trusted by <strong style={{ fontWeight: 500 }}>12,000+ couples</strong> worldwide
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 200, fontSize: '13px', lineHeight: 1.9, color: 'var(--mocha)', marginBottom: '24px' }}>
              {product.description}
            </p>

            {/* Key benefits */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '28px' }}>
              {[
                { icon: '⚡', label: 'Instant Download' },
                { icon: '♾️', label: 'Lifetime Access' },
                { icon: '🖨️', label: 'Print or Digital' },
              ].map((b) => (
                <div key={b.label} style={{ backgroundColor: 'var(--cream)', padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', marginBottom: '4px' }}>{b.icon}</div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-deep)' }}>{b.label}</p>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div style={{ borderTop: '1px solid var(--gold-light)', paddingTop: '24px', marginBottom: '16px' }}>
              {/* Urgency */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '8px 14px', backgroundColor: 'rgba(196,134,106,0.1)', border: '1px solid rgba(196,134,106,0.25)' }}>
                <span style={{ fontSize: '12px' }}>🔥</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 300, color: 'var(--blush-deep)', letterSpacing: '0.05em' }}>
                  237 people viewed this in the last 24 hours
                </span>
              </div>

              {/* Price anchor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '42px', fontWeight: 300, color: 'var(--mocha)', lineHeight: 1 }}>
                    ${product.price.toFixed(0)}
                  </span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: 'var(--champagne)' }}>USD</span>
                </div>
                {product.originalPrice && (
                  <>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: 'var(--sage)', textDecoration: 'line-through' }}>
                      ${product.originalPrice}
                    </span>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ivory)', backgroundColor: 'var(--blush-deep)', padding: '4px 10px' }}>
                      Save {savingsPct}%
                    </span>
                  </>
                )}
              </div>

              {product.category === 'custom-invitation' && (
                <div style={{ marginBottom: '20px' }}>
                  <label className="input-label">Share your vision (optional)</label>
                  <textarea value={customization} onChange={(e) => setCustomization(e.target.value)} rows={3} placeholder="Colors, theme, names, wedding date..." className="input-underline" style={{ resize: 'none' }} />
                </div>
              )}

              {/* Primary CTA — Buy Now */}
              <button onClick={handleBuyNow} className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '10px', padding: '18px', marginBottom: '10px' }}>
                Buy Now — Instant Download
              </button>
              {/* Secondary CTA — Add to Cart */}
              <button onClick={handleAdd} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '10px', padding: '16px', marginBottom: '10px', backgroundColor: added ? 'var(--sage-deep)' : 'var(--charcoal)', boxShadow: added ? 'none' : 'inset 0 -2px 0 var(--gold)', borderColor: added ? 'var(--sage-deep)' : 'var(--charcoal)' }}>
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>

              {/* Guarantee */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', backgroundColor: 'var(--cream)', marginBottom: '4px' }}>
                <span style={{ fontSize: '18px' }}>🛡️</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 500, color: 'var(--mocha)' }}>Satisfaction Guaranteed</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 200, color: 'var(--sage-deep)' }}>Any issue? We'll fix it or refund you — no questions asked.</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '28px' }}>
              {[
                { icon: '🔒', label: 'Secure Checkout', sub: 'SSL encrypted payment' },
                { icon: '📥', label: 'Instant Access',  sub: 'Download in seconds'   },
                { icon: '⭐', label: '4.9/5 Rating',    sub: '2,300+ verified reviews'},
                { icon: '💬', label: '24h Support',     sub: 'Hello@ubelia.eu'       },
              ].map((b) => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px', backgroundColor: 'var(--cream)' }}>
                  <span style={{ fontSize: '16px', flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 500, color: 'var(--mocha)' }}>{b.label}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 200, color: 'var(--sage-deep)' }}>{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--sage-deep)', marginBottom: '16px' }}>
                What's Included
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {product.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 200, color: 'var(--mocha)' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>—</span>{f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── TRUSTED BY BANNER ── */}
      <div style={{ backgroundColor: 'var(--charcoal)', padding: '32px' }}>
        <div className="max-w-8xl mx-auto" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px', alignItems: 'center' }}>
          {[
            { value: '12,000+', label: 'Couples Served'    },
            { value: '4.9/5',   label: 'Average Rating'    },
            { value: '96+',     label: 'Pages of Content'  },
            { value: '33',      label: 'Free Budget Sheets' },
            { value: '100%',    label: 'Digital — Instant'  },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '8px', fontWeight: 300, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--champagne)', marginTop: '6px' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(64px, 8vw, 96px) clamp(32px, 6vw, 64px)' }}>
        <div className="max-w-8xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label mb-3" style={{ textAlign: 'center' }}>Real Couples, Real Results</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--mocha)' }}>
              What Our Couples Say
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              <StarRating count={5} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: 'var(--sage-deep)' }}>4.9 out of 5 — 2,300+ verified reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '2px' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ backgroundColor: 'var(--ivory)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <StarRating count={t.rating} />
                <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '17px', lineHeight: 1.6, color: 'var(--mocha)', flex: 1 }}>
                  "{t.text}"
                </p>
                <div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: 'var(--mocha)' }}>{t.name}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 200, color: 'var(--sage-deep)' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: 'var(--ivory)', padding: 'clamp(64px, 8vw, 96px) clamp(32px, 6vw, 64px)' }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label mb-3" style={{ textAlign: 'center' }}>Got Questions?</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--mocha)' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ borderTop: '1px solid var(--gold-light)' }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 200, fontSize: '13px', color: 'var(--sage-deep)', marginBottom: '16px' }}>
              Still have questions? We're happy to help.
            </p>
            <Link href="/contact" className="btn btn-outline">Contact Us →</Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: 'var(--charcoal)', padding: 'clamp(56px, 8vw, 80px) 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 dot-pattern pointer-events-none" style={{ opacity: 0.14 }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '22px', color: 'var(--blush-deep)', marginBottom: '16px' }}>
            Your perfect day starts with a plan.
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--ivory)', marginBottom: '8px', lineHeight: 1.1 }}>
            Get Instant Access
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 300, color: 'var(--gold)' }}>${product.price}</span>
            {product.originalPrice && (
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 300, color: 'var(--sage)', textDecoration: 'line-through' }}>${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ivory)', backgroundColor: 'var(--blush-deep)', padding: '4px 10px' }}>
                Save {savingsPct}%
              </span>
            )}
          </div>
          <button onClick={handleBuyNow} className="btn btn-gold" style={{ fontSize: '10px', padding: '18px 48px', marginBottom: '12px' }}>
            Buy Now — Instant Download
          </button>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 200, color: 'var(--sage)', marginTop: '8px', letterSpacing: '0.1em' }}>
            🔒 Secure checkout · ⚡ Instant access · 🛡️ Satisfaction guaranteed
          </p>
        </div>
      </section>
    </div>
  );
}
