import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome to Ubelia — Your Order Is Confirmed',
  description: 'Your Ubelia files are on their way. Check your inbox.',
};

export default function MerciPage() {
  return (
    <>
      {/* Confirmation hero */}
      <section style={{ background: '#252018', padding: 'clamp(56px, 8vw, 96px) 0 clamp(48px, 7vw, 80px)' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          {/* Animated check */}
          <div className="mx-auto mb-8" style={{ width: '72px', height: '72px', position: 'relative' }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-label="Order confirmed">
              <circle
                cx="36" cy="36" r="32"
                stroke="#B59354"
                strokeWidth="2"
                fill="none"
                strokeDasharray="201"
                strokeDashoffset="0"
                style={{ animation: 'drawCircle 1s ease forwards' }}
              />
              <path d="M22 37l10 10 18-20" stroke="#B59354" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1
            className="mb-4"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: '#FBFAF6', lineHeight: 1.1 }}
          >
            Welcome to the Ubelia family. ✦
          </h1>
          <p
            className="mb-3"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.65 }}
          >
            Your files are on their way to your inbox right now.
          </p>
          <p
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: 'rgba(176,186,168,0.5)', letterSpacing: '0.05em' }}
          >
            Can&apos;t find it? Check your spam folder or{' '}
            <a href="mailto:Hello@ubelia.eu" style={{ color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* Upsell — one-time offer */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(56px, 8vw, 80px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            style={{
              border: '1px solid rgba(181,147,84,0.3)',
              borderRadius: '12px',
              padding: '40px',
              background: '#FBFAF6',
            }}
          >
            <p
              className="eyebrow-gold text-center mb-3"
            >
              EXCLUSIVE ONE-TIME OFFER
            </p>
            <h2
              className="text-center mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: '#252018' }}
            >
              Want to go further?
            </h2>
            <p
              className="text-center mb-6"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}
            >
              Book a 30-minute private Ubelia consultation — we&apos;ll review your planning together
              and answer every question you have. Tailored to your exact situation.
            </p>

            <div className="text-center mb-6">
              <span
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '52px', fontWeight: 300, color: '#252018', lineHeight: 1 }}
              >
                $97
              </span>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B0BAA8', marginTop: '4px' }}>
                30-minute private session via video call
              </p>
            </div>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full justify-center block text-center"
              style={{ fontSize: '14px', padding: '18px 32px' }}
            >
              Book My Session →
            </a>

            <p
              className="text-center mt-4"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8', fontStyle: 'italic' }}
            >
              This offer is only available on this page.
            </p>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(40px, 6vw, 64px) 0 clamp(48px, 8vw, 80px)' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">WHAT&apos;S NEXT</p>
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: '#252018' }}>
            Start planning today
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { step: '01', title: 'Check your inbox', desc: 'Your files were sent instantly. Open your email and look for a message from Hello@ubelia.eu.' },
              { step: '02', title: 'Open the guide', desc: 'Start with the overview section. In 20 minutes you\'ll have clarity on what to do first.' },
              { step: '03', title: 'Start your timeline', desc: 'Fill in your wedding date and let the 12-month (or 6-month) timeline show you the way.' },
            ].map((item) => (
              <div key={item.step}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px', color: '#B59354', fontWeight: 300, lineHeight: 1, marginBottom: '8px' }}>
                  {item.step}
                </p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', color: '#252018', marginBottom: '8px', fontWeight: 400 }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#687060', fontWeight: 300, lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link href="/" className="btn btn-gold mt-10 inline-block" style={{ fontSize: '13px' }}>
            Back to Ubelia →
          </Link>
        </div>
      </section>
    </>
  );
}
