import type { Metadata } from 'next';
import { products } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';

export const metadata: Metadata = {
  title: 'Our Collection — Ubelia Wedding Planning',
  description: 'Everything you need to plan with confidence. Digital downloads delivered instantly.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 8vw, 80px) 0 clamp(40px, 6vw, 64px)' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">DIGITAL DOWNLOADS · INSTANT DELIVERY</p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(44px, 6vw, 64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
            }}
          >
            Our Collection
          </h1>
          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              fontWeight: 300,
              color: '#687060',
              maxWidth: '460px',
              lineHeight: 1.65,
            }}
          >
            Everything you need to plan with confidence.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-pad" style={{ background: '#FBFAF6' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
