import { reviews } from '@/lib/reviews';
import TestimonialCard from '@/components/ui/TestimonialCard';
import StarRating from '@/components/ui/StarRating';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';

export default function TestimonialsSection() {
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="section-pad" style={{ background: '#FBFAF6' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-14">
          <p className="eyebrow">WHAT COUPLES SAY</p>
          <div className="flex justify-center items-center gap-3 mb-3">
            <StarRating size={22} />
          </div>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 300, color: '#B59354', lineHeight: 1, marginBottom: '8px' }}>
            <CountUp target={4.8} duration={1500} suffix=" / 5" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 300, color: '#B59354' }} />
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: '#B0BAA8', letterSpacing: '0.08em' }}>
            Based on <CountUp target={11209} duration={2000} style={{ fontWeight: 400, color: '#687060' }} /> verified reviews
          </p>
        </AnimateOnScroll>

        {/* Masonry desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          <div className="space-y-5">
            {col1.map((r, i) => (
              <AnimateOnScroll key={r.id} animation="fadeUp" delay={i * 100}>
                <TestimonialCard review={r} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="space-y-5">
            {col2.map((r, i) => (
              <AnimateOnScroll key={r.id} animation="fadeUp" delay={i * 100 + 80}>
                <TestimonialCard review={r} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="space-y-5">
            {col3.map((r, i) => (
              <AnimateOnScroll key={r.id} animation="fadeUp" delay={i * 100 + 160}>
                <TestimonialCard review={r} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <AnimateOnScroll key={r.id} animation="fadeUp" delay={i * 60}>
              <TestimonialCard review={r} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
