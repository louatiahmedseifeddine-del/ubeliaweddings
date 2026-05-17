import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const features = [
  'Pre-filled 12-month planning timeline (every task, in order)',
  'Condensed 6-month sprint version — for couples planning fast',
  'Budget tracker: estimate / actual / variance — catch overruns early',
  'Vendor email scripts — get pricing without wasting time on tours',
  'Payment tracker: deposits, balances, due dates, reminders workflow',
  'One-page vendor dashboard for day-of handoff',
  'Partner delegation pages — make it truly "our wedding"',
  'Vows & speeches frameworks — never face a blank page again',
  '"What to skip" guide — delete what doesn\'t fit your wedding',
  'Print-ready: A4, A5, US Letter + anti-distortion print guide',
  'Mobile-friendly spreadsheets — track from your couch',
  'Digital invitation template — customizable, RSVP card included',
  'Budget calculator — estimate / actual / variance, payment tracker',
];

export default function WhatIsInsideSection() {
  const half = Math.ceil(features.length / 2);

  return (
    <section id="whats-inside" className="section-pad" style={{ background: '#FAF3EE' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-14">
          <p className="eyebrow">WHAT YOU&apos;RE GETTING</p>
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 300, color: '#252018' }}>
            96+ pages built around your real needs
          </h2>
          <div style={{ position: 'relative', width: '100%', maxWidth: '640px', margin: '0 auto 24px', borderRadius: '12px', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/listing-4.png"
              alt="Inside the Ubelia Wedding Guide"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Not templates. Not blank pages. A system that tells you what to do next.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeLeft" delay={100}>
            <ul className="space-y-3 check-list">
              {features.slice(0, half).map((f) => <li key={f}>{f}</li>)}
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeRight" delay={200}>
            <ul className="space-y-3 check-list">
              {features.slice(half).map((f) => <li key={f}>{f}</li>)}
            </ul>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fadeUp" delay={300} className="text-center mt-12">
          <a
            href="#bundle"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Get the complete pack →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
