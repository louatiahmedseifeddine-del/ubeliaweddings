'use client';

import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

const ease = 'easeOut' as const;

const slideIn = (x: number, delay: number) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, delay, ease } satisfies Transition,
});

export default function AboutSection() {
  return (
    <section style={{ background: '#F4F0E8', padding: 'clamp(64px, 8vw, 112px) 0', overflow: 'hidden' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — portrait image */}
          <motion.div
            {...slideIn(-60, 0)}
            style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '4px', overflow: 'hidden', background: '#DDD8CE' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/invitation/rafael-kirsten-1.png"
              alt="Bride in a beautifully crafted wedding dress"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Subtle vignette */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(37,32,24,0.18) 100%)',
              }}
            />
          </motion.div>

          {/* Right — text block */}
          <motion.div {...slideIn(60, 0.2)}>

            {/* Label */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#B59354',
                marginBottom: '20px',
              }}
            >
              Our Story
            </p>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 4.5vw, 58px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#252018',
                lineHeight: 1.1,
                marginBottom: '28px',
              }}
            >
              Born from a passion<br />for beauty
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                fontWeight: 300,
                color: '#687060',
                lineHeight: 1.9,
                marginBottom: '14px',
                maxWidth: '480px',
              }}
            >
              Ubelia was founded on a single belief: every couple deserves a wedding that feels effortless, intimate, and entirely their own. We craft every tool and template with the same attention to detail a couturier brings to a hand-stitched gown.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                fontWeight: 300,
                color: '#687060',
                lineHeight: 1.9,
                marginBottom: '36px',
                maxWidth: '480px',
              }}
            >
              From intimate garden ceremonies to grand ballroom affairs, our collections are designed to bring clarity, elegance, and a quiet confidence to one of life's most beautiful moments.
            </p>

            {/* Gold decorative line */}
            <div
              aria-hidden="true"
              style={{
                width: '60px',
                height: '1px',
                background: '#B59354',
                marginBottom: '32px',
              }}
            />

            {/* Text link */}
            <a
              href="#bundle"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#B59354',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(181,147,84,0.35)',
                paddingBottom: '3px',
                transition: 'gap 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.gap = '14px';
                el.style.borderColor = '#B59354';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.gap = '8px';
                el.style.borderColor = 'rgba(181,147,84,0.35)';
              }}
            >
              Start Planning <span aria-hidden="true">→</span>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
