'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

const categoryLabel: Record<string, string> = {
  'guide-book':         'Wedding Guide',
  'digital-invitation': 'Invitation',
  'custom-invitation':  'Custom Design',
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card flex flex-col">

      {/* Image */}
      <Link href={`/products/${product.id}`} className="product-card-img block relative overflow-hidden" style={{ height: '300px' }}>
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '150px', background: 'linear-gradient(to top, var(--cream) 0%, transparent 100%)' }} />
        {product.badge && (
          <div className="absolute top-4 right-4" style={{ background: 'var(--charcoal)', padding: '5px 12px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '7.5px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.35em', color: 'var(--gold)' }}>
              {product.badge}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1" style={{ padding: '20px 24px 28px' }}>

        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '7.5px', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.45em', color: 'var(--sage-deep)', marginBottom: '8px' }}>
          {categoryLabel[product.category]}
        </p>

        <Link href={`/products/${product.id}`}>
          <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '20px', color: 'var(--mocha)', lineHeight: 1.2, marginBottom: '8px' }}>
            {product.name}
          </h3>
        </Link>

        {/* Star rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
          <span style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '1px' }}>★★★★★</span>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 300, color: 'var(--sage-deep)' }}>
            4.9{product.reviewCount ? ` (${product.reviewCount.toLocaleString()})` : ''}
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto mb-5">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 300, color: 'var(--mocha)' }}>
              ${product.price.toFixed(0)}
            </span>
            {product.originalPrice && (
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: 'var(--sage)', textDecoration: 'line-through' }}>
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '8.5px', fontWeight: 300, letterSpacing: '0.3em', color: 'var(--champagne)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.28s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blush-deep)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--champagne)')}
          >
            Wishlist ♡
          </button>
        </div>

        <button onClick={() => addItem(product)} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
          Add to Cart
        </button>

      </div>
    </div>
  );
}
