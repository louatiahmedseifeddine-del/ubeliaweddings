'use client';

import { motion, type Transition } from 'framer-motion';

const ease = 'easeOut' as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease } satisfies Transition,
});

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Background image with zoom-out animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 8, ease } satisfies Transition}
        style={{
          backgroundImage: 'url(/products/ebook/1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay — suppresses image, keeps luxury mood */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(37,32,24,0.83)',
        }}
        aria-hidden="true"
      />
      {/* Subtle vignette on edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(37,32,24,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 max-w-4xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'clamp(10px, 1.5vw, 12px)',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(251,250,246,0.75)',
            marginBottom: '20px',
          }}
        >
          ✦ Used by 11,209+ couples worldwide · Instant download
        </motion.p>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.3)}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(60px, 9vw, 120px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.0,
            color: '#FBFAF6',
            textShadow: '0 2px 24px rgba(37,32,24,0.5)',
            marginBottom: '24px',
          }}
        >
          The Complete<br />Wedding Guide
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontWeight: 300,
            color: 'rgba(251,250,246,0.85)',
            letterSpacing: '0.04em',
            lineHeight: 1.7,
            maxWidth: '480px',
            marginBottom: '40px',
          }}
        >
          Guide PDF + Budget Calculator + Digital Invitation — everything you need to plan your perfect wedding. $39, instant download.
        </motion.p>

        {/* CTA Button */}
        <motion.div {...fadeUp(0.9)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <a
            href="#product"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(11px, 1.5vw, 13px)',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FBFAF6',
              border: '1px solid #B59354',
              padding: 'clamp(14px, 2vw, 18px) clamp(28px, 5vw, 56px)',
              borderRadius: '2px',
              display: 'inline-block',
              transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#B59354';
              el.style.color = '#252018';
              el.style.boxShadow = '0 8px 32px rgba(181,147,84,0.35)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = '#FBFAF6';
              el.style.boxShadow = 'none';
            }}
          >
            Start Planning →
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator — anchored to section bottom, outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8, ease } satisfies Transition}
        className="absolute bottom-8 left-1/2"
        style={{ transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 20 }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '9px',
            letterSpacing: '0.3em',
            color: 'rgba(251,250,246,0.5)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>

        {/* Animated chevron arrow */}
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M3 6L9 12L15 6"
            stroke="rgba(181,147,84,0.75)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>

    </section>
  );
}
