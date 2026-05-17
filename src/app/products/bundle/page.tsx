import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '@/lib/products';
import { reviews } from '@/lib/reviews';
import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';

const product = getProduct('bundle');

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
};

const faqs = [
  {
    question: 'Can I buy each product separately instead?',
    answer:
      "Yes — each product is available individually. But the Complete Pack gives you all three for $63 instead of $151 separately. Most couples who start with one product end up buying the others anyway — the pack is the smarter choice.",
  },
  {
    question: 'How is everything delivered?',
    answer:
      "Instantly. One purchase, one email — all three files delivered to your inbox within seconds. PDF guide, spreadsheet link, and invitation template. No waiting, no accounts to create.",
  },
  {
    question: 'What if I already have a spreadsheet I use?',
    answer:
      "The Ubelia Budget Spreadsheet is built specifically for weddings with vendor-specific columns, payment tracking, and variance alerts. Most couples who try it don't go back.",
  },
  {
    question: 'Does it work for small weddings?',
    answer:
      "Absolutely. The system scales from 20-person elopements to 300-person celebrations. The ebook has a dedicated section for intimate weddings, and the spreadsheet adapts to any vendor count.",
  },
  {
    question: 'What if I have an issue with my files?',
    answer:
      "Email Hello@ubelia.eu and we'll sort it out quickly — usually within 24 hours. We want every couple to have a smooth experience.",
  },
];

const included = [
  {
    id: 'ebook',
    name: 'The Complete Wedding Guide',
    value: '$82',
    badge: 'PDF DOWNLOAD',
    badgeColor: '#EDD5C5',
    desc: '96+ page guided planning system. Pre-filled timelines, vendor email scripts, decision frameworks, and a condensed 6-month sprint version.',
    photo: '/products/ebook/1.png',
    features: [
      '96+ pages of guided planning',
      'Pre-filled 12-month timeline',
      'Vendor email scripts & negotiation tips',
      'Budget decision frameworks',
      '6-month sprint version included',
      'Partner delegation pages',
    ],
  },
  {
    id: 'invitation',
    name: 'Digital Wedding Invitation',
    value: '$37',
    badge: 'CANVA TEMPLATE',
    badgeColor: '#EAD9B2',
    desc: 'Fully customisable in Canva (free). Includes main invitation, RSVP card, and details card. Share digitally or print at home.',
    photo: '/products/invitation/alicia-marcus-1.png',
    features: [
      'Main invitation card',
      'RSVP card included',
      'Details / directions card',
      'Fully editable in free Canva',
      '10 elegant couple designs',
      'Share by link or print at home',
    ],
  },
  {
    id: 'spreadsheet',
    name: 'Wedding Budget Spreadsheet',
    value: '$32',
    badge: 'GOOGLE SHEETS',
    badgeColor: '#B0BAA8',
    desc: 'Estimate vs actual vs variance tracking across every category. Payment tracker, vendor dashboard, and mobile-optimised for updates on the go.',
    photo: '/products/budget/1.jpg',
    features: [
      'Estimate vs actual vs variance columns',
      'Per-vendor payment tracker',
      'Vendor dashboard overview',
      'Mobile-optimised layout',
      'Shareable with your partner',
      'Instant duplicate & start',
    ],
  },
];

const stats = [
  { value: '11,209+', label: 'Couples' },
  { value: '3', label: 'Products in one' },
  { value: '$27', label: 'Saved vs separate' },
  { value: '< 60s', label: 'Delivery time' },
];

const steps = [
  {
    number: '01',
    title: 'Purchase once',
    desc: 'One secure checkout. All three products are bundled — no upsells, no subscriptions.',
  },
  {
    number: '02',
    title: 'Instant delivery',
    desc: 'Your email arrives within 60 seconds. PDF guide, spreadsheet link, and Canva invitation template.',
  },
  {
    number: '03',
    title: 'Plan with confidence',
    desc: 'Open the guide on any device, duplicate the spreadsheet, and customise your invitation. Everything works together.',
  },
];

const topReviews = reviews.slice(0, 6);

export default function BundlePage() {
  return (
    <>
      {/* ── Sticky Mobile CTA ───────────────────────────────── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: '#1A1710',
          borderTop: '1px solid rgba(181,147,84,0.25)',
          padding: '12px 20px',
          paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        }}
      >
        <Link
          href={`/checkout?product=${product.id}`}
          className="btn btn-gold w-full block text-center"
          style={{ fontSize: '13px', padding: '14px 20px' }}
        >
          Get The Complete Pack — ${product.price} →
        </Link>
      </div>

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div style={{ background: '#F4F0E8', borderBottom: '1px solid rgba(181,147,84,0.15)', padding: '12px 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', letterSpacing: '0.15em', color: '#687060' }}>
            <Link href="/" style={{ color: '#687060' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#B59354' }}>›</span>
            <Link href="/products" style={{ color: '#687060' }}>Products</Link>
            <span style={{ margin: '0 8px', color: '#B59354' }}>›</span>
            <span style={{ color: '#252018' }}>Complete Pack</span>
          </p>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: '#1A1710', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Photo */}
            <div
              className="relative rounded-lg overflow-hidden order-1 lg:order-none"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/invitation/emma-lucas-1.png"
                alt="Happy couple celebrating their wedding"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                priority
              />
              <div
                className="absolute top-5 left-5 animate-badgePulse"
                style={{
                  background: '#B59354',
                  color: '#252018',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '9px',
                  fontWeight: 400,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  borderRadius: '3px',
                }}
              >
                ✦ BEST VALUE · SAVE $27 ✦
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="eyebrow-gold">THE COMPLETE SYSTEM</p>
              <h1
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(34px, 4.5vw, 58px)',
                  fontWeight: 300,
                  color: '#FBFAF6',
                  lineHeight: 1.05,
                }}
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-5">
                <StarRating size={14} color="#B59354" />
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(176,186,168,0.8)' }}>
                  4.8 · 11,209 reviews
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(251,250,246,0.75)',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                }}
              >
                Every tool you need to plan your wedding — in one purchase. The Complete Wedding Guide,
                Budget Spreadsheet, and Digital Invitation Suite, delivered to your inbox instantly.
              </p>

              {/* What's included summary */}
              <ul className="mb-8 space-y-3 check-list-ivory">
                {included.map((item) => (
                  <li key={item.id}>
                    <strong style={{ color: '#EAD9B2' }}>{item.name}</strong>
                    <span style={{ color: 'rgba(176,186,168,0.6)', marginLeft: '6px', fontSize: '11px' }}>
                      — valued at {item.value}
                    </span>
                  </li>
                ))}
                <li>Email support — Hello@ubelia.eu</li>
              </ul>

              {/* Pricing */}
              <div
                className="mb-6 py-5"
                style={{
                  borderTop: '1px solid rgba(181,147,84,0.25)',
                  borderBottom: '1px solid rgba(181,147,84,0.25)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '12px',
                    color: 'rgba(176,186,168,0.6)',
                    marginBottom: '4px',
                  }}
                >
                  Total value:{' '}
                  <span style={{ textDecoration: 'line-through' }}>$151</span>
                </p>
                <div className="flex items-baseline gap-4">
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '60px',
                      fontWeight: 300,
                      color: '#FBFAF6',
                      lineHeight: 1,
                    }}
                  >
                    ${product.price}
                  </span>
                  <span
                    style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#B59354' }}
                  >
                    You save $27
                  </span>
                </div>
              </div>

              <Link
                href={`/checkout?product=${product.id}`}
                className="btn btn-gold w-full justify-center block text-center mb-4"
                style={{ fontSize: '15px', padding: '20px 32px' }}
              >
                Get The Complete Pack — ${product.price} →
              </Link>
              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '11px',
                  color: 'rgba(176,186,168,0.5)',
                  letterSpacing: '0.05em',
                }}
              >
                🔒 Secure checkout · 📩 Instant delivery · 💬 Email support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section style={{ background: '#252018', padding: 'clamp(28px, 4vw, 40px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    fontWeight: 300,
                    color: '#B59354',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(176,186,168,0.6)',
                    marginTop: '6px',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included in detail ─────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">WHAT&apos;S INSIDE</p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: 300,
              color: '#252018',
            }}
          >
            Three products. One price.
          </h2>
          <div className="space-y-6">
            {included.map((item, i) => (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0 rounded-lg overflow-hidden"
                style={{ border: '1px solid rgba(181,147,84,0.2)' }}
              >
                <div className="relative" style={{ aspectRatio: '1 / 1', width: '100%' }}>
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 340px"
                  />
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      background: item.badgeColor,
                      color: '#252018',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '9px',
                      fontWeight: 400,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: '3px',
                    }}
                  >
                    {item.badge}
                  </div>
                </div>
                <div style={{ background: '#F4F0E8', padding: 'clamp(24px, 4vw, 40px)' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '9px',
                      color: '#B59354',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    Product {i + 1} of 3 · Valued at {item.value}
                  </p>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(22px, 3vw, 32px)',
                      fontWeight: 300,
                      color: '#252018',
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '13px',
                      fontWeight: 300,
                      color: '#687060',
                      lineHeight: 1.8,
                      marginBottom: '20px',
                    }}
                  >
                    {item.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '12px',
                          color: '#252018',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: '#B59354', flexShrink: 0, marginTop: '2px' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${item.id}`}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '11px',
                      color: '#B59354',
                      letterSpacing: '0.15em',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    Learn more about this product →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">THE PROCESS</p>
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#252018',
            }}
          >
            From purchase to planning in under 3 minutes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '64px',
                    fontWeight: 300,
                    color: '#B59354',
                    opacity: 0.35,
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {step.number}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '26px',
                    fontWeight: 300,
                    color: '#252018',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#687060',
                    lineHeight: 1.75,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo banner ─────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1', maxHeight: '560px' }}>
        <Image
          src="/products/invitation/camille-marc-3.png"
          alt="Wedding celebration couple"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(37,32,24,0.52)' }} />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(22px, 4vw, 42px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#FBFAF6',
                lineHeight: 1.2,
                textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                maxWidth: '640px',
              }}
            >
              &ldquo;Worth every penny. We saved more than $500 on vendors just using the email scripts.&rdquo;
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '10px',
                color: 'rgba(181,147,84,0.9)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginTop: '14px',
              }}
            >
              LÉONIE & THOMAS · BORDEAUX
            </p>
          </div>
        </div>
      </div>

      {/* ── Reviews ───────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">VERIFIED REVIEWS</p>
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#252018',
            }}
          >
            11,209 couples can&apos;t be wrong
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topReviews.map((r) => (
              <TestimonialCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
            }}
          >
            Questions about the Complete Pack
          </h2>
          <FAQAccordion items={faqs} />
          <p
            className="text-center mt-10"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px',
              color: '#687060',
              lineHeight: 1.7,
            }}
          >
            Still have questions?{' '}
            <a
              href="mailto:Hello@ubelia.eu"
              style={{ color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Email Hello@ubelia.eu
            </a>{' '}
            — we reply within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#252018', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow-gold">ONE DECISION</p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#FBFAF6',
              lineHeight: 1.1,
            }}
          >
            Everything you need,
            <br />
            in one purchase.
          </h2>
          <p
            className="mb-2"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              fontWeight: 300,
              color: '#B0BAA8',
              lineHeight: 1.75,
            }}
          >
            Total value $151 · You pay
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(48px, 7vw, 72px)',
              fontWeight: 300,
              color: '#FBFAF6',
              lineHeight: 1,
            }}
            className="mb-8"
          >
            ${product.price}
          </p>
          <Link
            href={`/checkout?product=${product.id}`}
            className="btn btn-gold"
            style={{ fontSize: '15px', padding: '20px 48px' }}
          >
            Get The Complete Pack →
          </Link>
          <p
            className="mt-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              color: 'rgba(176,186,168,0.4)',
              letterSpacing: '0.06em',
            }}
          >
            Instant delivery · Secure checkout · Email support
          </p>
        </div>
      </section>

      {/* Clearance for sticky mobile CTA */}
      <div className="md:hidden" style={{ height: '80px' }} />
    </>
  );
}
