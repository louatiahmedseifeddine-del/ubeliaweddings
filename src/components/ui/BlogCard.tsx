'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/posts';

const categoryPhotos: Record<string, string> = {
  PLANNING: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80&fit=crop&crop=center',
  BUDGET:   'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&fit=crop&crop=center',
  VENDORS:  'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop&crop=center',
  CEREMONY: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=80&fit=crop&crop=center',
  MINDSET:  'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=700&q=80&fit=crop&crop=center',
};

const categoryBg: Record<string, string> = {
  PLANNING:  '#B0BAA8',
  BUDGET:    '#EAD9B2',
  VENDORS:   '#C4866A',
  CEREMONY:  '#4A3828',
  MINDSET:   '#687060',
};

const categoryTextColors: Record<string, string> = {
  PLANNING:  '#687060',
  BUDGET:    '#4A3828',
  VENDORS:   '#FBFAF6',
  CEREMONY:  '#FBFAF6',
  MINDSET:   '#FBFAF6',
};

interface BlogCardProps {
  post: BlogPost;
  size?: 'normal' | 'small';
}

export default function BlogCard({ post, size = 'normal' }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
      style={{
        background: '#FFFFFF',
        border: '1px solid #F0EDE6',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(37,32,24,0.1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Photo */}
      <div
        className="relative overflow-hidden"
        style={{ height: size === 'small' ? 'clamp(90px, 15vw, 120px)' : 'clamp(140px, 20vw, 180px)' }}
      >
        <Image
          src={categoryPhotos[post.category] || categoryPhotos.PLANNING}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={size === 'small' ? 'p-4' : 'p-6'}>
        {/* Category badge */}
        <span
          className="inline-block mb-3"
          style={{
            background: categoryBg[post.category] || '#B0BAA8',
            color: categoryTextColors[post.category] || '#FBFAF6',
            fontSize: '8px',
            letterSpacing: '0.3em',
            fontWeight: 400,
            padding: '3px 8px',
            borderRadius: '2px',
            fontFamily: 'var(--font-dm-sans)',
            textTransform: 'uppercase',
          }}
        >
          {post.category}
        </span>
        <h3
          className="mb-2"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: size === 'small' ? '17px' : '21px',
            fontWeight: 400,
            lineHeight: 1.2,
            color: '#252018',
          }}
        >
          {post.title}
        </h3>
        {size !== 'small' && (
          <p
            className="mb-4"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#687060',
            }}
          >
            {post.excerpt}
          </p>
        )}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '10px',
            fontWeight: 300,
            color: '#B0BAA8',
            letterSpacing: '0.08em',
          }}
        >
          {post.readTime}
        </p>
      </div>
    </Link>
  );
}
