'use client';

import { useState } from 'react';

const messages = [
  '✦ Instant digital download — access your files in seconds',
  '✦ Bundle 3+ items and save 15% automatically at checkout',
  '✦ Trusted by 12,000+ couples worldwide · 4.9★ average rating',
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [idx] = useState(() => Math.floor(Math.random() * messages.length));

  if (!visible) return null;

  return (
    <div
      style={{
        backgroundColor: 'var(--charcoal)',
        borderBottom: '1px solid rgba(181,147,84,0.25)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        position: 'relative',
      }}
    >
      <p
        className="announcement-text"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '9px',
          fontWeight: 300,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--champagne)',
          textAlign: 'center',
        }}
      >
        {messages[idx]}
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        style={{
          position: 'absolute',
          right: '16px',
          background: 'none',
          border: 'none',
          color: 'var(--sage)',
          cursor: 'pointer',
          fontSize: '14px',
          lineHeight: 1,
          padding: '4px',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sage)')}
      >
        ×
      </button>
    </div>
  );
}
