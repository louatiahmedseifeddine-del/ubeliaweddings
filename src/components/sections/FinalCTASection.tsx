import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function FinalCTASection() {
  return (
    <section className="section-pad-lg" style={{ background: '#FAF3EE' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 300, fontStyle: 'italic', color: '#252018', lineHeight: 1.1 }}>
            Your wedding deserves<br />
            a plan worthy of it.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={150}>
          <p className="mb-10 mx-auto" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '19px', fontWeight: 300, color: '#687060', maxWidth: '440px', lineHeight: 1.65 }}>
            Join 11,209 couples who planned with clarity.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="scaleUp" delay={300}>
          <Link href="https://buy.stripe.com/00w7sLgmZcdl8dG5g2dnW0V" className="btn btn-gold" style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', padding: '18px clamp(24px, 5vw, 48px)', maxWidth: '100%', textAlign: 'center' }}>
            Get The Complete Pack — $39 →
          </Link>
          <p className="mt-5" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: '#B59354', letterSpacing: '0.08em' }}>
            Instant delivery · Secure checkout
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
