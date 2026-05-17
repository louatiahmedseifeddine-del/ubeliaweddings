'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1,  name: 'Kevin M.',  image: '/reviews/review1.jpg'  },
  { id: 2,  name: 'James B.',  image: '/reviews/review2.jpg'  },
  { id: 3,  name: 'Sarah M.',  image: '/reviews/review3.jpg'  },
  { id: 4,  name: 'Rachel L.', image: '/reviews/review4.jpg'  },
  { id: 5,  name: 'Jessica K.',image: '/reviews/review5.jpg'  },
  { id: 6,  name: 'Amber T.',  image: '/reviews/review6.jpg'  },
  { id: 7,  name: 'Nina P.',   image: '/reviews/review7.jpg'  },
  { id: 8,  name: 'Marcus C.', image: '/reviews/review8.jpg'  },
  { id: 9,  name: 'Daniel W.', image: '/reviews/review9.jpg'  },
  { id: 10, name: 'Tyler R.',  image: '/reviews/review10.jpg' },
];

const N = reviews.length;
const SWIPE_THRESHOLD = 50;

export default function ReviewsSwiper() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const intervalRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const pointerStartX = useRef(0);
  const isDragging    = useRef(false);

  const next = useCallback(() => setCurrent((c) => (c === N - 1 ? 0 : c + 1)), []);
  const prev = useCallback(() => setCurrent((c) => (c === 0 ? N - 1 : c - 1)), []);
  const go   = useCallback((idx: number) => setCurrent(idx), []);

  /* ── Auto-play ── */
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next]);

  /* ── Pointer drag ── */
  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    isDragging.current    = true;
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const d = e.clientX - pointerStartX.current;
    if (d < -SWIPE_THRESHOLD) next();
    else if (d > SWIPE_THRESHOLD) prev();
    setPaused(false);
  };
  const onPointerLeave = (e: React.PointerEvent) => {
    if (isDragging.current) {
      isDragging.current = false;
      const d = e.clientX - pointerStartX.current;
      if (d < -SWIPE_THRESHOLD) next();
      else if (d > SWIPE_THRESHOLD) prev();
    }
    setPaused(false);
  };

  return (
    <section style={{ background: '#FBFAF6', padding: 'clamp(64px, 8vw, 112px) 0', overflow: 'hidden' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B59354', marginBottom: '14px' }}>
            ✦ Verified reviews
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 300, fontStyle: 'italic', color: '#252018', lineHeight: 1.05 }}>
            What couples say
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: '#687060', letterSpacing: '0.1em', marginTop: '10px' }}>
            Based on 3,054 reviews
          </p>
        </div>

        {/* ── Swiper wrapper ── */}
        <div style={{ position: 'relative', maxWidth: '440px', margin: '0 auto', userSelect: 'none' }}>

          {/* ── Film-strip clip ── */}
          <div
            style={{ overflow: 'hidden', borderRadius: '14px', cursor: 'grab', touchAction: 'pan-y' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerLeave}
          >
            {/*
              All 10 cards in a single flex row — true film-strip.
              Strip width  = N × 100% of the container.
              Each card    = (100/N)% of the strip  = 100% of the container.
              Slide to `current` by translating  -(current/N × 100)%.
            */}
            <motion.div
              style={{ display: 'flex', width: `${N * 100}%` }}
              animate={{ x: `-${(current / N) * 100}%` }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            >
              {reviews.map((review) => (
                <div key={review.id} style={{ width: `${100 / N}%`, flexShrink: 0 }}>

                  {/*
                    ── Crop window ──────────────────────────────────────────
                    aspectRatio '1/1.2'  →  height = 1.2 × width
                    overflow: hidden clips everything outside.

                    Image is 100% wide with height:auto (natural proportions).
                    marginTop '-20%' = −20% of the container WIDTH (CSS spec).

                    For a typical 2∶3 Pinterest screenshot (height ≈ 1.5 × width):
                      • image starts at  −0.20w  (20% of w above container top)
                      • image ends   at   1.30w  (1.5w − 0.20w)
                      • container shows  0 → 1.2w
                      • visible slice: 0.20w → 1.40w of the image
                      • as % of image:  13% → 93%
                      → crops ~13% from top  (removes the dark header bar)
                      → crops  ~7% from bottom (removes the gold CTA button)
                      → shows the wedding photo + the white testimonial card
                    ─────────────────────────────────────────────────────────
                  */}
                  <div
                    style={{
                      overflow: 'hidden',
                      /*
                        aspectRatio '1/1.06' makes the container ~6% shorter,
                        which clips the gold CTA button at the bottom while
                        keeping the full white testimonial text box visible.
                        marginTop '-20%' crops the dark header bar at the top.
                      */
                      aspectRatio: '1 / 1.05',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.image}
                      alt={review.name}
                      draggable={false}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        marginTop: '-20%',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Arrow prev ── */}
          <button
            onClick={prev}
            aria-label="Previous review"
            style={{
              position: 'absolute', top: '50%', left: '-20px',
              transform: 'translateY(-50%)',
              width: '40px', height: '40px', borderRadius: '50%',
              background: '#FFFFFF', border: '1px solid rgba(181,147,84,0.3)',
              color: '#B59354', fontSize: '20px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', zIndex: 10,
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(181,147,84,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#B59354'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(181,147,84,0.3)'; }}
          >
            ‹
          </button>

          {/* ── Arrow next ── */}
          <button
            onClick={next}
            aria-label="Next review"
            style={{
              position: 'absolute', top: '50%', right: '-20px',
              transform: 'translateY(-50%)',
              width: '40px', height: '40px', borderRadius: '50%',
              background: '#FFFFFF', border: '1px solid rgba(181,147,84,0.3)',
              color: '#B59354', fontSize: '20px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', zIndex: 10,
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(181,147,84,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#B59354'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(181,147,84,0.3)'; }}
          >
            ›
          </button>
        </div>

        {/* ── Progress bar ── */}
        <div style={{ maxWidth: '440px', margin: '18px auto 0', height: '2px', background: 'rgba(181,147,84,0.15)', borderRadius: '1px', overflow: 'hidden' }}>
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: paused ? undefined : '100%' }}
            transition={{ duration: 3.5, ease: 'linear' }}
            style={{ height: '100%', background: '#B59354', borderRadius: '1px' }}
          />
        </div>

        {/* ── Dots ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '14px' }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { go(i); setPaused(false); }}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === current ? '#B59354' : 'rgba(181,147,84,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* ── Counter ── */}
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 300, color: 'rgba(104,112,96,0.6)', letterSpacing: '0.2em', marginTop: '10px' }}>
          {current + 1} / {N}
        </p>

      </div>
    </section>
  );
}
