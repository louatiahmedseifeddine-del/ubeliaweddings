import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '@/lib/products';
import { getReviewsByProduct } from '@/lib/reviews';
import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';

const product = getProduct('spreadsheet');

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
};

const faqs = [
  {
    question: 'Do I need Excel or can I use Google Sheets?',
    answer:
      'Both work perfectly. Google Sheets is free and works on any device — no software to install. The template is fully compatible with both platforms: open, duplicate, and start tracking immediately.',
  },
  {
    question: 'Can two people edit at the same time?',
    answer:
      'Yes — Google Sheets supports real-time collaboration. Share the link with your partner and you can both update the spreadsheet simultaneously from any device, anywhere in the world.',
  },
  {
    question: 'Is it complex to set up?',
    answer:
      "There's no setup required. Open the template, fill in your total budget, and start entering estimates. Every column is pre-labeled with clear instructions in the header row. Most couples are up and running in under 10 minutes.",
  },
  {
    question: 'What if I go over budget in one category?',
    answer:
      "The variance column turns red automatically when you exceed your estimate. You'll see exactly how much you're over — and in which category — giving you time to rebalance before it's too late.",
  },
  {
    question: 'Can I track deposits and final payments separately?',
    answer:
      'Yes. There is a dedicated payment tracker tab where you can log deposits, outstanding balances, and due dates for every vendor. No more missed payments or surprise invoices.',
  },
];

const forWho = [
  { text: 'Couples who have lost track of where the money is going' },
  { text: 'Couples who want to compare quotes before signing anything' },
  { text: 'Couples managing deposits, instalments, and final payments' },
  { text: 'Couples planning on mobile — no laptop required' },
  { text: 'Couples who want their partner to finally see the full financial picture' },
];

const stats = [
  { number: '12', label: 'Budget categories', sub: 'Venue, catering, florals & more' },
  { number: '3', label: 'Tracking columns', sub: 'Estimate · Actual · Variance' },
  { number: '100%', label: 'Mobile optimised', sub: 'Works in Google Sheets app' },
];

const howItWorks = [
  {
    step: '01',
    title: 'Open & duplicate',
    description:
      'Open the template in Google Sheets (free), make a copy, rename it. Done. No account needed beyond a standard Google login.',
  },
  {
    step: '02',
    title: 'Enter your budget',
    description:
      'Add your total wedding budget at the top, then fill in your estimates for each category. The summary tab updates instantly.',
  },
  {
    step: '03',
    title: 'Track everything',
    description:
      'Update actuals as you pay deposits and final invoices. Watch the variance column catch overruns before they happen — automatically, in real time.',
  },
];

const galleryImages = [
  { src: '/products/budget/2.jpg', alt: 'Budget spreadsheet overview' },
  { src: '/products/budget/3.jpg', alt: 'Estimate vs actual tracking' },
  { src: '/products/budget/4.jpg', alt: 'Variance column detail' },
  { src: '/products/budget/5.jpg', alt: 'Payment tracker tab' },
  { src: '/products/budget/6.jpg', alt: 'Vendor dashboard' },
  { src: '/products/budget/7.jpg', alt: 'Mobile view on Google Sheets' },
  { src: '/products/budget/8.jpg', alt: 'Guest list tracker' },
  { src: '/products/budget/9.jpg', alt: 'Day-of handoff sheet' },
];

export default function SpreadsheetPage() {
  const reviews = getReviewsByProduct('spreadsheet');

  return (
    <>
      {/* ── Sticky mobile CTA ───────────────────────────────── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: '#252018',
          borderTop: '1px solid rgba(181,147,84,0.2)',
          padding: '12px 16px',
        }}
      >
        <Link
          href="/checkout?product=spreadsheet"
          className="btn btn-gold w-full justify-center block text-center"
          style={{ fontSize: '13px', padding: '16px' }}
        >
          Get Instant Access — $19 →
        </Link>
      </div>

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          background: '#FBFAF6',
          padding: 'clamp(10px, 1.5vw, 14px) 0 0',
        }}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <ol
            className="flex items-center gap-1"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '10px',
              color: '#B0BAA8',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link href="/" style={{ color: '#B0BAA8', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li style={{ color: '#B0BAA8', opacity: 0.5 }}>&rsaquo;</li>
            <li>
              <Link href="/products" style={{ color: '#B0BAA8', textDecoration: 'none' }}>
                Products
              </Link>
            </li>
            <li style={{ color: '#B0BAA8', opacity: 0.5 }}>&rsaquo;</li>
            <li style={{ color: '#687060' }}>Budget Spreadsheet</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(32px, 5vw, 64px) 0 clamp(40px, 6vw, 72px)' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — hero image */}
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/budget/1.jpg"
                alt="Wedding budget spreadsheet template open on a laptop"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute top-5 right-5"
                style={{
                  background: '#687060',
                  color: '#FBFAF6',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '9px',
                  fontWeight: 400,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  padding: '7px 14px',
                  borderRadius: '3px',
                }}
              >
                GOOGLE SHEETS + EXCEL
              </div>
            </div>

            {/* Right — product info */}
            <div>
              <p className="eyebrow">DIGITAL DOWNLOAD · INSTANT DELIVERY</p>
              <h1
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(34px, 4.5vw, 54px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1.05,
                }}
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-5">
                <StarRating size={14} />
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#B0BAA8' }}>
                  4.8 · 11,209 reviews
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#687060',
                  lineHeight: 1.85,
                  marginBottom: '18px',
                }}
              >
                Budget creep is the #1 wedding regret. The Ubelia Budget Spreadsheet gives you a
                real-time view of where every dollar is going — with estimate vs actual vs variance
                columns that turn red the moment you overspend.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#687060',
                  lineHeight: 1.85,
                  marginBottom: '24px',
                }}
              >
                Spot overruns weeks before they become disasters. Track deposits, final payments, and
                due dates for every vendor — all in one place, fully mobile-friendly, and instantly
                accessible from your phone.
              </p>
              <ul className="mb-8 space-y-2 check-list">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mb-2">
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
                  }}
                >
                  {product.badge}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(44px, 6vw, 56px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1,
                }}
                className="mb-6"
              >
                ${product.price}
              </p>
              <Link
                href={`/checkout?product=${product.id}`}
                className="btn btn-gold w-full justify-center block text-center mb-4"
                style={{ fontSize: '15px', padding: '18px 32px' }}
              >
                Get Instant Access — ${product.price} →
              </Link>
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

      {/* ── Gallery strip ───────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center mb-2">IN ACTION</p>
          <h2
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 300,
              color: '#252018',
            }}
          >
            The spreadsheet in action
          </h2>
          <div
            className="flex overflow-x-auto gap-3 pb-3 snap-x"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(181,147,84,0.3) transparent' }}
          >
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="flex-shrink-0 snap-center relative rounded overflow-hidden"
                style={{
                  width: 'clamp(220px, 35vw, 300px)',
                  aspectRatio: '1 / 1',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <section style={{ background: '#252018', padding: 'clamp(32px, 5vw, 56px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(36px, 5vw, 52px)',
                    fontWeight: 300,
                    color: '#B59354',
                    lineHeight: 1,
                  }}
                >
                  {s.number}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '10px',
                    fontWeight: 400,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#FBFAF6',
                    marginTop: '6px',
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(176,186,168,0.7)',
                    marginTop: '4px',
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">HOW IT WORKS</p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 300,
              color: '#252018',
            }}
          >
            Set up in under 10 minutes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((item) => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(52px, 7vw, 72px)',
                    fontWeight: 300,
                    color: '#B59354',
                    lineHeight: 1,
                    marginBottom: 'clamp(10px, 1.5vw, 16px)',
                  }}
                >
                  {item.step}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    fontWeight: 400,
                    color: '#252018',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#687060',
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ─────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/budget/3.jpg"
                alt="Couple reviewing their wedding budget together"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">THIS IS FOR YOU IF…</p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 300,
                  color: '#252018',
                }}
              >
                Take back control of your budget
              </h2>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item.text} className="flex gap-3 items-start">
                    <span
                      style={{
                        color: '#B59354',
                        fontSize: '14px',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '13px',
                        fontWeight: 300,
                        color: '#687060',
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

      {/* ── Features grid ───────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">WHAT&apos;S INSIDE</p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 300,
              color: '#252018',
            }}
          >
            Every tab, explained
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {product.detailedFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#F4F0E8',
                  borderRadius: '8px',
                  padding: 'clamp(20px, 3vw, 28px)',
                  border: '1px solid rgba(181,147,84,0.15)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#252018',
                    marginBottom: '8px',
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '12px',
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

      {/* ── Full-bleed photo break ──────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '1 / 1', maxHeight: '600px' }}
      >
        <Image
          src="/products/budget/9.jpg"
          alt="Couple celebrating after keeping their wedding on budget"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(37,32,24,0.52)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(18px, 3vw, 32px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#FBFAF6',
              textAlign: 'center',
              maxWidth: '680px',
              lineHeight: 1.5,
              textShadow: '0 2px 14px rgba(0,0,0,0.3)',
              marginBottom: 'clamp(10px, 1.5vw, 16px)',
            }}
          >
            &ldquo;We spotted a $400 variance on catering the week before the wedding. The
            spreadsheet literally saved our day.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(10px, 1.2vw, 12px)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B59354',
            }}
          >
            — Nina &amp; Paul, Lyon
          </p>
        </div>
      </div>

      {/* ── Reviews ─────────────────────────────────────────── */}
      {reviews.length > 0 && (
        <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
          <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
            <p className="eyebrow text-center">VERIFIED REVIEWS</p>
            <h2
              className="text-center mb-10"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 300,
                color: '#252018',
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

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
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
            Questions about this product
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── Bundle upsell ───────────────────────────────────── */}
      <section
        className="pb-24 md:pb-0"
        style={{ background: '#252018', padding: 'clamp(48px, 7vw, 80px) 0' }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow-gold">GET MORE FOR LESS</p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#FBFAF6',
            }}
          >
            Save $27 with the Complete Pack
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              fontWeight: 300,
              color: '#B0BAA8',
              lineHeight: 1.75,
            }}
          >
            Get the Guide + Budget Spreadsheet + Digital Invitation — all for $63. The complete
            Ubelia system in one purchase. Everything you need to plan your wedding with confidence.
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(38px, 5vw, 52px)',
                fontWeight: 300,
                color: '#FBFAF6',
                lineHeight: 1,
              }}
            >
              $63
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: '#B0BAA8',
                textDecoration: 'line-through',
              }}
            >
              $90
            </span>
            <span
              style={{
                background: '#B59354',
                color: '#252018',
                fontSize: '9px',
                padding: '3px 9px',
                borderRadius: '3px',
                fontFamily: 'var(--font-dm-sans)',
                letterSpacing: '0.15em',
              }}
            >
              SAVE $27
            </span>
          </div>
          <Link
            href="/products/bundle"
            className="btn btn-gold"
            style={{ fontSize: '14px', padding: '18px 40px' }}
          >
            See The Complete Pack →
          </Link>
        </div>
      </section>
    </>
  );
}
