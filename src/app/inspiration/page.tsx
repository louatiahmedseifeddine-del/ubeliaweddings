import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Wedding Inspiration — Ubelia',
  description: 'Ideas, trends, and visual worlds to spark your imagination for your perfect wedding day.',
};

const posts = [
  {
    title: 'A Wedding in Provence',
    subtitle: 'Lavender, ivory and gold',
    category: 'Decoration',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop&crop=center',
  },
  {
    title: 'The Art of the Invitation',
    subtitle: 'Fine stationery & typography',
    category: 'Stationery',
    photo: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80&fit=crop&crop=center',
  },
  {
    title: 'Champagne & Sage Palette',
    subtitle: 'Trends 2025–2026',
    category: 'Trends',
    photo: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80&fit=crop&crop=center',
  },
  {
    title: 'Château Ceremony',
    subtitle: 'Classic elegance, reimagined',
    category: 'Ceremony',
    photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=80&fit=crop&crop=center',
  },
  {
    title: 'Minimalist Table Setting',
    subtitle: 'Less, but so much more',
    category: 'Decoration',
    photo: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=700&q=80&fit=crop&crop=center',
  },
  {
    title: 'Natural Bouquets',
    subtitle: 'Wild, poetic florals',
    category: 'Floral',
    photo: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=80&fit=crop&crop=center',
  },
];

export default function InspirationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 8vw, 96px) 0 clamp(36px, 5vw, 64px)' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">IDEAS · MOOD · VISION</p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              lineHeight: 1.0,
              marginBottom: '16px',
            }}
          >
            Inspiration
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '15px', color: '#687060', lineHeight: 1.75, maxWidth: '480px' }}>
            Ideas, trends, and visual worlds to spark your imagination and shape the vision of your perfect day.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.title}
                style={{ background: '#FFFFFF', border: '1px solid #F0EDE6', borderRadius: '8px', overflow: 'hidden' }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: 'clamp(160px, 22vw, 220px)' }}>
                  <Image
                    src={post.photo}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      marginBottom: '10px',
                      background: '#F4F0E8',
                      color: '#687060',
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
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: '#252018', lineHeight: 1.2, marginBottom: '6px' }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '12px', color: '#687060' }}>
                    {post.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(40px, 6vw, 64px) 0', borderTop: '1px solid rgba(181,147,84,0.15)' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">READY TO PLAN?</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 300, color: '#252018' }}>
            Turn inspiration into action
          </h2>
          <p className="mb-6" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>
            The Ubelia system gives you the tools to bring your vision to life — organised, on budget, and stress-free.
          </p>
          <Link href="/products/bundle" className="btn btn-gold">
            Get The Complete Pack — $63 →
          </Link>
        </div>
      </section>
    </>
  );
}
