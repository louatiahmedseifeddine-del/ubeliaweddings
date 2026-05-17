import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const STRIPE_URL = 'https://buy.stripe.com/00w7sLgmZcdl8dG5g2dnW0V';

const included = [
  {
    icon: '📖',
    title: 'The Complete Wedding Guide',
    desc: '96+ page PDF — pre-filled timelines, vendor scripts, vow frameworks, checklists & "what to skip" guide',
  },
  {
    icon: '📊',
    title: 'Budget Calculator',
    desc: 'Estimate / actual / variance tracker, payment schedule, vendor dashboard — works in Google Sheets & Excel',
  },
  {
    icon: '💌',
    title: 'Digital Invitation Template',
    desc: 'Fully customizable, RSVP card included — share by email or WhatsApp in minutes',
  },
];

const features = [
  'Pre-filled 12-month planning timeline (every task, in order)',
  'Condensed 6-month sprint version — for couples planning fast',
  'Budget tracker: estimate / actual / variance — catch overruns early',
  'Vendor email scripts — get pricing without wasting time on tours',
  'Payment tracker: deposits, balances, due dates',
  'Partner delegation pages — make it truly "our wedding"',
  'Vows & speeches frameworks — never face a blank page again',
  '"What to skip" guide — delete what doesn\'t fit your wedding',
  'Digital invitation template — elegant, customizable, RSVP included',
  'Day-of run sheet — hand off to your venue or coordinator',
];

export default function ProductSection() {
  return (
    <section id="product" className="section-pad-lg" style={{ background: '#FBFAF6' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">

        <AnimateOnScroll animation="fadeUp" className="text-center mb-10">
          <p className="eyebrow">EVERYTHING YOU NEED</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 300, fontStyle: 'italic', color: '#252018', lineHeight: 1.1 }}>
            Three products.<br />One price.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 300, color: '#687060', marginTop: '12px', maxWidth: '420px', margin: '12px auto 0' }}>
            Plan, budget, and invite — all in one instant download.
          </p>
        </AnimateOnScroll>

        {/* ── Main product card — CTA visible first on mobile ── */}
        <AnimateOnScroll animation="fadeUp" delay={80}>
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto 40px',
              background: '#FFFFFF',
              border: '2px solid rgba(181,147,84,0.35)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {/* Product image — full-width on mobile, left column on desktop */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              }}
            >
              <div className="relative" style={{ minHeight: '280px' }}>
                <Image
                  src="/products/ebook/1.png"
                  alt="The Complete Wedding Guide by Ubelia"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Fade right on desktop, fade bottom on mobile */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, transparent 55%, #FFFFFF 100%)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute top-3 left-3"
                  style={{
                    background: '#B59354',
                    color: '#252018',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: '3px',
                  }}
                >
                  ✦ BEST VALUE
                </div>
              </div>

              {/* Details panel */}
              <div style={{ padding: 'clamp(24px, 5vw, 44px)' }}>
                <div style={{ marginBottom: '14px' }}>
                  <span
                    className="animate-badgePulse inline-block"
                    style={{
                      background: '#B59354',
                      color: '#252018',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      padding: '5px 14px',
                      borderRadius: '3px',
                    }}
                  >
                    ✦ COMPLETE PACK · SAVE $51
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 300, color: '#252018', lineHeight: 1.2, marginBottom: '8px' }}>
                  The Complete Wedding Guide
                </h3>

                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: '#687060', lineHeight: 1.75, marginBottom: '16px' }}>
                  Guide PDF + Budget Calculator + Digital Invitation — everything delivered instantly to your inbox.
                </p>

                <div style={{ height: '1px', background: 'rgba(181,147,84,0.2)', marginBottom: '14px' }} />

                {/* Feature list */}
                <ul className="check-list mb-4 space-y-1.5">
                  {features.map((f, i) => (
                    <li key={i} style={{ fontSize: '12px' }}>{f}</li>
                  ))}
                </ul>

                <div style={{ height: '1px', background: 'rgba(181,147,84,0.2)', marginBottom: '16px' }} />

                {/* Pricing */}
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#687060', marginBottom: '2px' }}>
                    Total value: <span style={{ textDecoration: 'line-through' }}>$90</span>
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(48px, 8vw, 64px)', fontWeight: 300, color: '#252018', lineHeight: 1 }}>
                      $39
                    </span>
                    <span
                      style={{
                        background: 'rgba(181,147,84,0.15)',
                        border: '1px solid rgba(181,147,84,0.3)',
                        color: '#B59354',
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '9px',
                        fontWeight: 400,
                        letterSpacing: '0.25em',
                        padding: '5px 12px',
                        borderRadius: '3px',
                        textTransform: 'uppercase',
                      }}
                    >
                      Save $51
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354' }}>
                    Guide + Budget Calculator + Invitation
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={STRIPE_URL}
                  className="btn btn-gold w-full justify-center block text-center"
                  style={{ fontSize: '13px', padding: '18px 24px', letterSpacing: '0.15em' }}
                >
                  Get Instant Access — $39 →
                </Link>

                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#687060', letterSpacing: '0.05em', textAlign: 'center', marginTop: '12px' }}>
                  🔒 Secure checkout · 📩 Instant delivery · 💬 Email support
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── 3 included items — shown below as proof ── */}
        <AnimateOnScroll animation="fadeUp" delay={150}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {included.map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(181,147,84,0.2)',
                  borderRadius: '12px',
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '17px', fontWeight: 400, color: '#252018', marginBottom: '6px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: '#687060', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
