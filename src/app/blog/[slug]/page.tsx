import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug } from '@/lib/posts';
import BlogCard from '@/components/ui/BlogCard';

const categoryPhotos: Record<string, string> = {
  PLANNING: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&fit=crop&crop=center',
  BUDGET:   'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&fit=crop&crop=top',
  VENDORS:  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&fit=crop&crop=center',
  CEREMONY: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80&fit=crop&crop=center',
  MINDSET:  'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1200&q=80&fit=crop&crop=center',
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — The Ubelia Journal`, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const lines = post.content.split('\n');

  return (
    <>
      {/* Article Hero */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(40px, 6vw, 56px) 0 clamp(32px, 5vw, 48px)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-5">
            <span
              style={{
                background: '#B59354',
                color: '#252018',
                fontSize: '8px',
                letterSpacing: '0.3em',
                padding: '4px 10px',
                borderRadius: '2px',
                fontFamily: 'var(--font-dm-sans)',
                textTransform: 'uppercase',
              }}
            >
              {post.category}
            </span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8', letterSpacing: '0.08em' }}>{post.readTime}</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 300,
              color: '#252018',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            {post.title}
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: '#B0BAA8', letterSpacing: '0.1em' }}>
            {post.date} · By The Ubelia Team
          </p>
        </div>
      </section>

      {/* Layout: article + sidebar */}
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12 items-start">
          {/* Article body */}
          <article>
            {/* Article hero photo */}
            <div className="relative rounded-lg overflow-hidden mb-10" style={{ height: 'clamp(200px, 30vw, 360px)' }}>
              <Image
                src={categoryPhotos[post.category] || categoryPhotos.PLANNING}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Excerpt */}
            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '22px',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#C4866A',
                lineHeight: 1.5,
                borderLeft: '2px solid #B59354',
                paddingLeft: '20px',
              }}
            >
              {post.excerpt}
            </p>

            {/* Content rendered as paragraphs/headers */}
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#4A3828', lineHeight: 1.9 }}>
              {lines.map((line, i) => {
                if (!line.trim()) return <div key={i} style={{ height: '16px' }} />;
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={i} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 300, color: '#252018', marginTop: '40px', marginBottom: '16px' }}>
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <p key={i} style={{ fontWeight: 500, color: '#252018', marginBottom: '8px' }}>
                      {line.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (line.startsWith('→ ')) {
                  return (
                    <p key={i} className="my-6 py-4 px-5" style={{ background: '#F4F0E8', borderLeft: '2px solid #B59354', fontStyle: 'italic', color: '#687060', fontSize: '14px' }}>
                      {line.replace('→ ', '')}
                    </p>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} style={{ marginLeft: '20px', marginBottom: '6px', color: '#687060', fontSize: '14px' }}>
                      {line.replace('- ', '')}
                    </li>
                  );
                }
                return <p key={i} className="mb-4">{line}</p>;
              })}
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(181,147,84,0.2)' }}>
              <Link href="/blog" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                ← Back to The Journal
              </Link>
            </div>
          </article>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block" style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                background: '#1A1710',
                border: '1px solid rgba(181,147,84,0.2)',
                borderRadius: '10px',
                padding: '28px',
              }}
            >
              <p className="eyebrow-gold mb-3">THE SYSTEM</p>
              <h3 className="mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 300, color: '#FBFAF6', lineHeight: 1.2 }}>
                Get The Complete Wedding Pack
              </h3>
              <p className="mb-5" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.7 }}>
                Guide + Budget Spreadsheet + Digital Invitation. Everything you need, instantly delivered.
              </p>
              <div className="flex items-baseline gap-3 mb-5">
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '38px', color: '#FBFAF6', fontWeight: 300 }}>$63</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#B0BAA8', textDecoration: 'line-through' }}>$90</span>
                <span style={{ background: '#B59354', color: '#252018', fontSize: '8px', padding: '2px 7px', borderRadius: '2px', fontFamily: 'var(--font-dm-sans)' }}>SAVE $27</span>
              </div>
              <Link href="/products/bundle" className="btn btn-gold w-full justify-center block text-center" style={{ fontSize: '11px' }}>
                Get The Pack →
              </Link>
              <p className="text-center mt-3" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', color: 'rgba(176,186,168,0.4)' }}>
                Instant delivery
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ background: '#F4F0E8', padding: '64px 0 80px' }}>
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <p className="eyebrow">READ NEXT</p>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {related.map((rel) => <BlogCard key={rel.slug} post={rel} size="small" />)}
            </div>
          </div>
        </section>
      )}

      {/* Mobile CTA */}
      <section className="lg:hidden" style={{ background: '#252018', padding: '48px 0' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow-gold">THE SYSTEM</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 300, color: '#FBFAF6' }}>Get The Complete Pack</h2>
          <Link href="/products/bundle" className="btn btn-gold">Get The Pack — $63 →</Link>
        </div>
      </section>
    </>
  );
}
