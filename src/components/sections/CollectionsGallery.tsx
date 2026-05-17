'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const collections = [
  { name: 'Silk Collection',   photo: '/products/invitation/emma-lucas-1.png',     href: '#bundle' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function CollectionsGallery() {
  return (
    <section style={{ background: '#FBFAF6', padding: 'clamp(64px, 8vw, 112px) 0' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-14">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: '12px',
            }}
          >
            ✦ Curated for you
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              lineHeight: 1.05,
            }}
          >
            Our Collections
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {collections.map((col) => (
            <motion.div key={col.name} variants={cardVariants}>
              <Link
                href={col.href}
                className="group block relative overflow-hidden"
                style={{
                  aspectRatio: '1 / 1',
                  borderRadius: '4px',
                  background: '#E8E4DC',
                }}
              >
                {/* Portrait image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={col.photo}
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                />

                {/* Permanent dark gradient at bottom for text */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(37,32,24,0.75) 0%, rgba(37,32,24,0.1) 45%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                {/* Cream overlay that slides up on hover */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'rgba(251,250,246,0.18)',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest('a');
                    if (!parent) return;
                    const show = () => { el.style.transform = 'translateY(0)'; };
                    const hide = () => { el.style.transform = 'translateY(100%)'; };
                    parent.addEventListener('mouseenter', show);
                    parent.addEventListener('mouseleave', hide);
                  }}
                  aria-hidden="true"
                />

                {/* Collection name */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ padding: 'clamp(16px, 3vw, 28px)' }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(20px, 2.5vw, 28px)',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: '#FBFAF6',
                      lineHeight: 1.1,
                      marginBottom: '6px',
                    }}
                  >
                    {col.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '9px',
                      fontWeight: 300,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(181,147,84,0.85)',
                      transform: 'translateY(4px)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                    }}
                    ref={(el) => {
                      if (!el) return;
                      const parent = el.closest('a');
                      if (!parent) return;
                      const show = () => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                      };
                      const hide = () => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(4px)';
                      };
                      parent.addEventListener('mouseenter', show);
                      parent.addEventListener('mouseleave', hide);
                    }}
                  >
                    Discover →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
