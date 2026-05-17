import { products } from '@/lib/products';
import PricingCard from '@/components/ui/PricingCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function BundleSection() {
  const individuals = products.filter((p) => p.id !== 'bundle');
  const bundle = products.find((p) => p.id === 'bundle')!;

  return (
    <section className="section-pad-lg" style={{ background: '#FBFAF6' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-14">
          <p className="eyebrow">YOUR SYSTEM</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, color: '#252018' }}>
            Choose your starting point
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', maxWidth: '480px', margin: '0 auto' }}>
            Every product delivered instantly to your inbox.
          </p>
        </AnimateOnScroll>

        {/* Individual products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
          {individuals.map((p, i) => (
            <AnimateOnScroll key={p.id} animation="fadeUp" delay={i * 100}>
              <PricingCard product={p} variant="light" />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bundle hero */}
        <AnimateOnScroll animation="scaleUp" delay={150}>
          <PricingCard product={bundle} variant="bundle" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" delay={300}>
          <p className="text-center mt-8" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: '#687060', letterSpacing: '0.05em' }}>
            🔒 Secure checkout via Stripe &nbsp;·&nbsp; 📩 Instant email delivery
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
