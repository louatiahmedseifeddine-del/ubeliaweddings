import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Design Service — Ubelia',
  description: 'A fully personalised invitation suite created exclusively for your wedding by the Ubelia team.',
};

const steps = [
  { step: '01', title: 'Consultation', desc: 'We discuss your vision, colours, and wedding theme by email.' },
  { step: '02', title: 'Creation', desc: 'Our designer crafts an exclusive first draft tailored to you.' },
  { step: '03', title: 'Refinement', desc: 'Revisions until every detail is perfect.' },
  { step: '04', title: 'Delivery', desc: 'High-resolution files delivered by email in 7–10 business days.' },
];

export default function SurMesurePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#252018', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <p className="eyebrow-gold">EXCLUSIVE CREATION</p>
              <span className="gold-rule mb-8 block" />
              <h1
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontSize: 'clamp(38px, 5.5vw, 64px)',
                  lineHeight: 1.0,
                  color: '#FBFAF6',
                  marginBottom: '24px',
                }}
              >
                Custom Design
                <br />
                <em style={{ color: '#C4866A', fontStyle: 'italic' }}>by Ubelia</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.85, color: 'rgba(251,250,246,0.7)', maxWidth: '440px', marginBottom: '36px' }}>
                Every couple is unique. Our custom design service lets you create a fully personalised
                invitation suite, conceived and crafted exclusively by our designers.
              </p>
              <Link
                href="/contact"
                className="btn btn-gold"
                style={{ fontSize: '13px', padding: '16px 36px' }}
              >
                Start Your Project →
              </Link>
            </div>

            {/* Right — steps */}
            <div className="flex flex-col gap-6">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      fontSize: '28px',
                      color: '#B59354',
                      lineHeight: 1,
                      flexShrink: 0,
                      width: '40px',
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(176,186,168,0.7)', marginBottom: '4px' }}>
                      {item.title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '13px', lineHeight: 1.75, color: 'rgba(176,186,168,0.8)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow text-center">WHAT&apos;S INCLUDED</p>
          <h2 className="text-center mb-12" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 300, color: '#252018' }}>
            Your bespoke invitation suite
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '✦', title: 'Main Invitation', desc: 'A fully custom design matching your colours, fonts, and theme.' },
              { icon: '✦', title: 'RSVP Card', desc: 'Matching RSVP card for a complete, cohesive suite.' },
              { icon: '✦', title: 'Details Card', desc: 'Venue directions, accommodation, and dress code in style.' },
              { icon: '✦', title: 'Digital Version', desc: 'Share via WhatsApp, email, or any messaging platform instantly.' },
              { icon: '✦', title: 'Print-Ready Files', desc: 'High-resolution PDFs at A5 and A4 with bleed marks.' },
              { icon: '✦', title: 'Revisions Included', desc: 'Unlimited rounds of revisions until you love every detail.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#FBFAF6', borderRadius: '8px', padding: 'clamp(20px, 3vw, 28px)', border: '1px solid rgba(181,147,84,0.15)' }}>
                <p style={{ color: '#B59354', fontSize: '18px', marginBottom: '10px' }}>{item.icon}</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 400, color: '#252018', marginBottom: '8px' }}>{item.title}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">READY TO BEGIN?</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, fontStyle: 'italic', color: '#252018' }}>
            Let&apos;s create something beautiful.
          </h2>
          <p className="mb-8" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>
            Send us a message with your wedding date, vision, and any inspiration — we&apos;ll come back to you within 48 hours with a quote and timeline.
          </p>
          <Link href="/contact" className="btn btn-gold" style={{ fontSize: '13px', padding: '16px 36px' }}>
            Contact Us to Get Started →
          </Link>
          <p className="mt-5" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B0BAA8' }}>
            Or email us directly at{' '}
            <a href="mailto:Hello@ubelia.eu" style={{ color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Hello@ubelia.eu
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
