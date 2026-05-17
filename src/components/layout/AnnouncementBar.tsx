'use client';

import { useState } from 'react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="relative z-50 flex items-center justify-center px-8 py-2.5"
      style={{ background: '#B59354' }}
    >
      <div className="overflow-hidden flex-1 flex justify-center">
        <div className="animate-marquee text-center" style={{ color: '#252018' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8 announcement-text" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', letterSpacing: '0.18em', fontWeight: 300 }}>
              <span>✦ Instant delivery by email</span>
              <span style={{ color: 'rgba(37,32,24,0.4)' }}>·</span>
              <span>Download in seconds</span>
              <span style={{ color: 'rgba(37,32,24,0.4)' }}>·</span>
              <span>4.8/5 based on 11,209 reviews</span>
              <span style={{ color: 'rgba(37,32,24,0.4)' }}>·</span>
              <span>Email support included</span>
              <span style={{ color: 'rgba(37,32,24,0.4)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 flex-shrink-0 md:hidden"
        aria-label="Dismiss announcement"
        style={{ color: 'rgba(37,32,24,0.5)', fontSize: '16px', lineHeight: 1 }}
      >
        ×
      </button>
    </div>
  );
}
