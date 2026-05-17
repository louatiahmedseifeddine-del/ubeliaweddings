'use client';

import Link from 'next/link';
import Image from 'next/image';
import { UbeliaProduct } from '@/lib/products';
import StarRating from './StarRating';

const productPhotos: Record<string, string> = {
  ebook:       '/products/ebook/1.png',
  spreadsheet: '/products/budget/1.jpg',
  invitation:  '/products/invitation/alicia-marcus-1.png',
  bundle:      '/products/invitation/emma-lucas-1.png',
};

const photoCrop: Record<string, string> = {
  ebook:       'center top',
  spreadsheet: 'center center',
  invitation:  'center 20%',
  bundle:      'center 25%',
};

export default function ProductCard({ product }: { product: UbeliaProduct }) {
  const isBundle = product.id === 'bundle';

  return (
    <Link
      href={product.slug}
      className="group block"
      style={{
        background: isBundle ? '#252018' : '#FFFFFF',
        border: isBundle ? '2px solid #B59354' : '1px solid #F0EDE6',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(37,32,24,0.12)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Photo area */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '1 / 1' }}
      >
        <Image
          src={productPhotos[product.id] || productPhotos.ebook}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isBundle
              ? 'linear-gradient(to top, rgba(37,32,24,0.85) 0%, rgba(37,32,24,0.2) 60%, transparent 100%)'
              : 'linear-gradient(to top, rgba(37,32,24,0.55) 0%, transparent 55%)',
          }}
        />
        {/* Badge */}
        {isBundle && (
          <span
            className="absolute top-4 left-4 animate-badgePulse"
            style={{
              background: '#B59354',
              color: '#252018',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '8px',
              letterSpacing: '0.25em',
              padding: '4px 10px',
              borderRadius: '2px',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            BEST VALUE
          </span>
        )}
        {/* Price overlay at bottom of photo */}
        <div
          className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-end justify-between"
        >
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '36px',
              fontWeight: 300,
              color: '#FBFAF6',
              lineHeight: 1,
            }}
          >
            ${product.price}
          </p>
          <span
            style={{
              background: '#EAD9B2',
              color: '#4A3828',
              fontSize: '8px',
              letterSpacing: '0.15em',
              padding: '3px 8px',
              borderRadius: '2px',
              fontFamily: 'var(--font-dm-sans)',
              marginBottom: '4px',
            }}
          >
            {product.badge}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3
          className="mb-1"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '22px',
            fontWeight: 400,
            color: isBundle ? '#FBFAF6' : '#252018',
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          className="mb-4"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '12px',
            fontWeight: 300,
            color: isBundle ? '#B0BAA8' : '#687060',
            lineHeight: 1.65,
          }}
        >
          {product.tagline}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <StarRating size={11} />
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8' }}>
            4.8 · 11,209 reviews
          </span>
        </div>

        <p
          className="group-hover:gap-3 transition-all duration-200 flex items-center gap-2"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#B59354',
          }}
        >
          View Details →
        </p>
      </div>
    </Link>
  );
}
