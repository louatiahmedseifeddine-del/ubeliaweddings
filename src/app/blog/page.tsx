import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/lib/posts';
import BlogCard from '@/components/ui/BlogCard';

export const metadata: Metadata = {
  title: 'The Ubelia Journal — Wedding Planning Guides & Advice',
  description: 'Practical advice, real stories, and planning guides for couples. From budgeting to vows, we cover everything.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 8vw, 80px) 0 clamp(40px, 6vw, 64px)', position: 'relative', overflow: 'hidden' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="blog-floral" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="14" fill="none" stroke="#B59354" strokeWidth="0.7" />
              <circle cx="30" cy="30" r="5" fill="#B59354" opacity="0.5" />
              <line x1="30" y1="16" x2="30" y2="0" stroke="#B59354" strokeWidth="0.5" />
              <line x1="30" y1="44" x2="30" y2="60" stroke="#B59354" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-floral)" />
        </svg>
        <div className="relative max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">PLANNING GUIDES · REAL STORIES</p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(44px, 6vw, 64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
            }}
          >
            The Ubelia Journal
          </h1>
          <p className="mt-4 mx-auto" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 300, color: '#687060', maxWidth: '460px', lineHeight: 1.65 }}>
            Practical advice, real stories, and planning guides for couples.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-pad" style={{ background: '#FBFAF6' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: '#F4F0E8' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">READY TO START?</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 300, color: '#252018' }}>
            The system behind every article
          </h2>
          <p className="mb-6" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>
            Everything in The Ubelia Journal is built around the same system. Get it all in one place.
          </p>
          <Link href="/products/bundle" className="btn btn-gold">Get The Complete Pack — $63 →</Link>
        </div>
      </section>
    </>
  );
}
