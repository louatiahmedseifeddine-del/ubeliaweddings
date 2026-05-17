'use client';

import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

const ease = 'easeOut' as const;

const testimonials = [
  {
    quote:
      'From the very first page, I felt like someone finally understood what wedding planning actually feels like. The timelines alone saved us weeks of back-and-forth.',
    name: 'Camille',
    label: 'Bride 2024',
  },
  {
    quote:
      'I went from completely overwhelmed to having a clear plan in a single afternoon. The vendor email scripts are pure gold — every supplier responded within 24 hours.',
    name: 'Sophie',
    label: 'Bride 2024',
  },
  {
    quote:
      'The budget spreadsheet changed everything. Seeing estimate vs actual vs variance in real time meant no nasty surprises. Worth every cent, ten times over.',
    name: 'Élise',
    label: 'Bride 2024',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease } satisfies Transition,
  },
};

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: '#B59354', fontSize: '14px', lineHeight: 1 }}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsHighlight() {
  return (
    <section style={{ background: '#F5EFE6', padding: 'clamp(64px, 8vw, 112px) 0', overflow: 'hidden' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: '12px',
            }}
          >
            ✦ Verified reviews
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              lineHeight: 1.05,
            }}
          >
            They trusted us
          </h2>
        </div>

        {/* Cards — desktop grid / mobile horizontal scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(16px, 2.5vw, 28px)',
          }}
          className="!flex lg:!grid overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="snap-center flex-shrink-0"
              style={{
                width: 'clamp(280px, 75vw, 100%)',
                background: '#FDFCF8',
                borderRadius: '4px',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 4px 24px rgba(37,32,24,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Decorative opening quote */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '72px',
                  lineHeight: 0.7,
                  color: '#B59354',
                  opacity: 0.45,
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  fontWeight: 300,
                  color: '#4A3828',
                  lineHeight: 1.85,
                  flexGrow: 1,
                }}
              >
                {t.quote}
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                {/* Divider */}
                <div style={{ width: '32px', height: '1px', background: 'rgba(181,147,84,0.4)' }} aria-hidden="true" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#252018',
                        lineHeight: 1.2,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '10px',
                        fontWeight: 300,
                        letterSpacing: '0.12em',
                        color: '#B0BAA8',
                        marginTop: '2px',
                      }}
                    >
                      {t.label}
                    </p>
                  </div>
                  <Stars />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
