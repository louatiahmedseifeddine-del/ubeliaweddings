import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '@/lib/products';
import { getReviewsByProduct } from '@/lib/reviews';
import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';

const product = getProduct('ebook');

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
};

const faqs = [
  {
    question: 'Is this a physical book?',
    answer:
      'No — it\'s a high-resolution PDF delivered instantly to your email. You can read it on any device — phone, tablet, laptop — or print it at home or at a print shop.',
  },
  {
    question: 'Does it work for destination weddings?',
    answer:
      'Yes. There is a full section dedicated to destination wedding logistics — venue searches abroad, vendor communication across time zones, guest travel coordination, and accommodation blocks.',
  },
  {
    question: "We're planning in 6 months. Is it too late?",
    answer:
      'Not at all. The guide includes a condensed 6-month sprint version specifically designed for couples with tighter timelines. It cuts straight to what matters and tells you exactly what to prioritise each week.',
  },
  {
    question: "What if I've already started planning?",
    answer:
      'The guide is not linear. Every section stands alone, so you can jump straight to wherever you are right now — vendors, vows, budget, invitations — without reading from page one.',
  },
  {
    question: 'Can my partner use it too?',
    answer:
      'Absolutely. The guide includes dedicated partner delegation pages designed to bring your partner into the planning in a structured way. It works on shared devices and you can print individual sections.',
  },
];

const forWho = [
  { text: 'Couples who feel overwhelmed and don\'t know where to start' },
  { text: 'Couples with 6–18 months to plan' },
  { text: 'Couples where one partner is doing most of the planning' },
  { text: 'Couples who want to stay on budget without sacrificing elegance' },
  { text: 'Couples who hate blank pages and want clear next steps' },
];

const stats = [
  { number: '96+', label: 'Pages', sub: 'Every task pre-filled and in order' },
  { number: '12', label: 'Month timeline', sub: 'From booking to honeymoon' },
  { number: '11,209', label: 'Couples', sub: 'Who planned with Ubelia' },
];

export default function EbookPage() {
  const reviews = getReviewsByProduct('ebook');

  return (
    <>
      {/* ── Sticky mobile CTA ──────────────────────────────────── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: '#252018',
          borderTop: '1px solid rgba(181,147,84,0.2)',
          padding: '12px 16px',
        }}
      >
        <Link
          href="/checkout?product=ebook"
          className="btn btn-gold w-full justify-center block text-center"
          style={{ fontSize: '13px', padding: '16px' }}
        >
          Get Instant Access — $49 →
        </Link>
      </div>

      {/* ── Breadcrumb ─────────────────────────────────────────── */}
      <div
        style={{
          background: '#FBFAF6',
          padding: '12px 0',
          borderBottom: '1px solid rgba(176,186,168,0.2)',
        }}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '10px',
              color: '#B0BAA8',
              letterSpacing: '0.04em',
            }}
          >
            <Link href="/" style={{ color: '#B0BAA8', textDecoration: 'none' }}>
              Home
            </Link>
            {' '}›{' '}
            <Link href="/products" style={{ color: '#B0BAA8', textDecoration: 'none' }}>
              Products
            </Link>
            {' '}›{' '}
            <span style={{ color: '#687060' }}>The Ubelia Guide</span>
          </p>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(40px, 6vw, 72px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: product image */}
            <div
              className="relative rounded-lg overflow-hidden order-1 lg:order-none"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/ebook/1.png"
                alt="The Ubelia Guide — 96 page wedding planning system"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
              {/* PDF badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#252018',
                  color: '#B59354',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '9px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '7px 12px',
                  borderRadius: '3px',
                  border: '1px solid rgba(181,147,84,0.4)',
                }}
              >
                PDF DOWNLOAD
              </div>
            </div>

            {/* Right: info */}
            <div>
              <p
                className="eyebrow"
                style={{ marginBottom: 'clamp(10px, 1.5vw, 16px)' }}
              >
                DIGITAL DOWNLOAD · INSTANT DELIVERY
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(34px, 4.5vw, 54px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1.05,
                  marginBottom: 'clamp(14px, 2vw, 20px)',
                }}
              >
                {product.name}
              </h1>

              {/* Stars */}
              <div className="flex items-center gap-3" style={{ marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>
                <StarRating size={14} />
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '12px',
                    color: '#B0BAA8',
                  }}
                >
                  4.8 · 11,209 reviews
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  fontWeight: 300,
                  color: '#687060',
                  lineHeight: 1.85,
                  marginBottom: 'clamp(12px, 2vw, 18px)',
                }}
              >
                Stop opening 17 browser tabs every morning. The Ubelia Guide is a 96+ page system that turns chaos into clarity — one week at a time. Every task in order, every decision pre-made, every vendor email written for you.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  fontWeight: 300,
                  color: '#687060',
                  lineHeight: 1.85,
                  marginBottom: 'clamp(20px, 3vw, 32px)',
                }}
              >
                Every page was written around the pain points real couples face: decision fatigue, budget creep, vendors who won&apos;t share pricing, and the exhausting feeling of planning alone. Open it once and feel the relief immediately.
              </p>

              {/* Feature checklist */}
              <ul className="mb-8 space-y-2 check-list">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center gap-3" style={{ marginBottom: '6px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#B0BAA8',
                    textDecoration: 'line-through',
                  }}
                >
                  ${product.originalPrice}
                </span>
                <span
                  style={{
                    background: '#EAD9B2',
                    color: '#4A3828',
                    fontSize: '9px',
                    padding: '3px 8px',
                    borderRadius: '3px',
                    fontFamily: 'var(--font-dm-sans)',
                    letterSpacing: '0.15em',
                    fontWeight: 500,
                  }}
                >
                  {product.badge}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(48px, 6vw, 64px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1,
                  marginBottom: 'clamp(20px, 3vw, 28px)',
                }}
              >
                ${product.price}
              </p>

              {/* CTA */}
              <Link
                href={`/checkout?product=${product.id}`}
                className="btn btn-gold w-full justify-center block text-center"
                style={{ fontSize: '15px', padding: '18px 32px', marginBottom: '14px' }}
              >
                Get Instant Access — ${product.price} →
              </Link>

              {/* Trust line */}
              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '11px',
                  color: '#B0BAA8',
                  letterSpacing: '0.05em',
                }}
              >
                🔒 Secure checkout · 📩 Instant email delivery · 💬 Email support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image gallery strip ─────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="eyebrow text-center"
            style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}
          >
            PREVIEW
          </p>
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              marginBottom: 'clamp(24px, 3.5vw, 40px)',
            }}
          >
            Inside the guide
          </h2>

          {/* Horizontal scroll strip */}
          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '12px',
              paddingBottom: '12px',
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {['4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'].map((img) => (
              <div
                key={img}
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  width: 'clamp(220px, 35vw, 300px)',
                  aspectRatio: '1 / 1',
                }}
              >
                <Image
                  src={`/products/ebook/${img}`}
                  alt={`Inside the Ubelia Guide — page preview`}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────── */}
      <section style={{ background: '#252018', padding: 'clamp(40px, 5.5vw, 64px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(42px, 5.5vw, 64px)',
                    fontWeight: 300,
                    color: '#B59354',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {s.number}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(11px, 1.2vw, 13px)',
                    fontWeight: 500,
                    color: '#FBFAF6',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(11px, 1.2vw, 12px)',
                    fontWeight: 300,
                    color: 'rgba(176,186,168,0.7)',
                    lineHeight: 1.6,
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ────────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div
              className="relative rounded-lg overflow-hidden order-2 lg:order-1"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/ebook/11.png"
                alt="Couple using the Ubelia wedding planning guide"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p
                className="eyebrow"
                style={{ marginBottom: 'clamp(10px, 1.5vw, 16px)' }}
              >
                THIS IS FOR YOU IF…
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1.1,
                  marginBottom: 'clamp(20px, 3vw, 32px)',
                }}
              >
                Finally feel in control of your wedding
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {forWho.map((item) => (
                  <li
                    key={item.text}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        color: '#B59354',
                        fontSize: 'clamp(13px, 1.4vw, 15px)',
                        flexShrink: 0,
                        marginTop: '2px',
                        fontWeight: 600,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'clamp(13px, 1.4vw, 14px)',
                        fontWeight: 300,
                        color: '#4A3828',
                        lineHeight: 1.75,
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's inside features grid ────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="eyebrow text-center"
            style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}
          >
            WHAT&apos;S INSIDE
          </p>
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 300,
              color: '#252018',
              marginBottom: 'clamp(32px, 5vw, 56px)',
            }}
          >
            Every section, explained
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {product.detailedFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  padding: 'clamp(20px, 3vw, 28px)',
                  border: '1px solid rgba(181,147,84,0.15)',
                  boxShadow: '0 2px 12px rgba(37,32,24,0.04)',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '2px',
                    background: '#B59354',
                    marginBottom: '14px',
                    borderRadius: '1px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(18px, 2.2vw, 22px)',
                    fontWeight: 400,
                    color: '#252018',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(12px, 1.2vw, 13px)',
                    fontWeight: 300,
                    color: '#687060',
                    lineHeight: 1.75,
                  }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed photo quote ──────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '1 / 1', maxHeight: '600px' }}
      >
        <Image
          src="/products/ebook/whats.png"
          alt="Wedding planning — couple testimonial"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(37,32,24,0.55)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: '0 clamp(24px, 6vw, 80px)' }}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(18px, 3vw, 34px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#FBFAF6',
              textAlign: 'center',
              lineHeight: 1.4,
              textShadow: '0 2px 16px rgba(0,0,0,0.4)',
              marginBottom: '12px',
            }}
          >
            &ldquo;We went from 47 browser tabs to one clear plan — in a weekend.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(10px, 1.1vw, 12px)',
              fontWeight: 400,
              color: 'rgba(251,250,246,0.7)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            — Lucie &amp; James, Paris
          </p>
        </div>
      </div>

      {/* ── Reviews ────────────────────────────────────────────── */}
      {reviews.length > 0 && (
        <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
          <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
            <p
              className="eyebrow text-center"
              style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}
            >
              VERIFIED REVIEWS
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 300,
                color: '#252018',
                marginBottom: 'clamp(32px, 4.5vw, 48px)',
              }}
            >
              What couples say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <TestimonialCard key={r.id} review={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="eyebrow text-center"
            style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}
          >
            QUESTIONS
          </p>
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              marginBottom: 'clamp(28px, 4vw, 48px)',
            }}
          >
            Everything you need to know
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── Bundle upsell ──────────────────────────────────────── */}
      <section
        style={{
          background: '#252018',
          padding: 'clamp(48px, 7vw, 80px) 0',
        }}
        className="pb-24 md:pb-0"
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p
            className="eyebrow-gold"
            style={{ marginBottom: 'clamp(10px, 1.5vw, 16px)' }}
          >
            GET MORE FOR LESS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#FBFAF6',
              lineHeight: 1.1,
              marginBottom: 'clamp(12px, 2vw, 20px)',
            }}
          >
            Save $27 with the Complete Pack
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              fontWeight: 300,
              color: '#B0BAA8',
              lineHeight: 1.75,
              marginBottom: 'clamp(20px, 3vw, 32px)',
            }}
          >
            Get the Guide + Budget Spreadsheet + Digital Invitation — all for $63. The complete system in one purchase. Total value $151, yours for less than half.
          </p>
          <Link
            href="/products/bundle"
            className="btn btn-gold"
            style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', padding: '18px 40px' }}
          >
            See The Complete Pack →
          </Link>
        </div>
      </section>
    </>
  );
}
