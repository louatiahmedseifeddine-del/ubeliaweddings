import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Ubelia — Wedding Planning, Elevated',
  description: 'Ubelia was built to turn wedding planning chaos into clarity. Learn about our mission and what makes our system different.',
};

const values = [
  {
    title: 'Clarity',
    description: 'Every page of the Ubelia system was built to answer one question: what do I do next? No blank pages, no overwhelm.',
  },
  {
    title: 'Elegance',
    description: 'Planning tools should be beautiful. We designed every element with the same care you\'d give your wedding.',
  },
  {
    title: 'Partnership',
    description: 'Your wedding belongs to two people. The Ubelia System is built so both partners can participate, contribute, and feel proud.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(56px, 8vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow">OUR MISSION</p>
              <h1
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#252018',
                  lineHeight: 1.1,
                }}
              >
                Planning should feel like joy, not a second job.
              </h1>
              <p className="mb-5" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', lineHeight: 1.8 }}>
                Ubelia was created after seeing the same pattern repeat in couple after couple: the engagement is joyful, and then the planning starts. Seventeen browser tabs. Vendor quotes that never materialize. Budget spreadsheets abandoned after two weeks. A partner who has stopped helping. The joy quietly disappearing.
              </p>
              <p className="mb-5" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', lineHeight: 1.8 }}>
                We built the Ubelia System to fix that. Not with more templates, more checklists, or more &quot;inspiration boards&quot; — but with a real, guided, pre-filled planning system that tells you what to do next so you can get back to enjoying being engaged.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', lineHeight: 1.8 }}>
                The result is used by 11,209+ couples worldwide. It works for 6-month timelines and 18-month ones, for 30-person weddings and 300-person productions, for couples who love spreadsheets and couples who hate them.
              </p>
            </div>

            {/* Couple photo */}
            <div className="relative" style={{ borderRadius: '4px', overflow: 'hidden', aspectRatio: '1 / 1' }}>
              <Image
                src="/products/invitation/liam-zoya-1.png"
                alt="Couple celebrating their wedding day"
                fill
                className="object-cover"
                style={{ borderRadius: '4px' }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ background: 'linear-gradient(to top, rgba(37,32,24,0.7) 0%, transparent 100%)', padding: '32px 24px 24px' }}
              >
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontStyle: 'italic', color: '#FBFAF6', opacity: 0.9 }}>
                  &ldquo;We finally felt in control of our wedding.&rdquo;
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: 'rgba(181,147,84,0.8)', letterSpacing: '0.15em', marginTop: '6px' }}>
                  EMMA & THOMAS · PARIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(56px, 8vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">WHAT WE STAND FOR</p>
          <h2
            className="text-center mb-14"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 300, color: '#252018' }}
          >
            Three principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mb-4 mx-auto" style={{ width: '1px', height: '40px', background: '#B59354', opacity: 0.4 }} />
                <h3 className="mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 300, color: '#252018' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#252018', padding: 'clamp(56px, 8vw, 80px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow-gold">READY TO START?</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, fontStyle: 'italic', color: '#FBFAF6' }}>
            Discover the System
          </h2>
          <p className="mb-6" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.7 }}>
            Everything you need to plan your wedding with confidence. One price, instant access.
          </p>
          <Link href="/products/bundle" className="btn btn-gold" style={{ fontSize: '15px', padding: '18px 40px' }}>
            Discover the System →
          </Link>
        </div>
      </section>
    </>
  );
}
