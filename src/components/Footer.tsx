'use client';

import Link from 'next/link';

const cols = [
  {
    title: 'Collections',
    links: [
      { label: 'Invitations', href: '/shop?category=digital-invitation' },
      { label: 'Guides',      href: '/shop?category=guide-book'         },
      { label: 'Custom',      href: '/sur-mesure'                       },
      { label: 'Inspiration', href: '/inspiration'                      },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story',  href: '/inspiration' },
      { label: 'Custom',     href: '/sur-mesure'  },
      { label: 'Contact',    href: '/contact'     },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Hello@ubelia.eu', href: 'mailto:Hello@ubelia.eu' },
      { label: 'FAQ',              href: '/contact'                },
      { label: 'Returns',          href: '/contact'                },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--charcoal)', borderTop: '1px solid rgba(213,188,148,0.10)' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-10 lg:mb-16">

          {/* Logo block */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex flex-col items-start" style={{ gap: '4px', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '26px', letterSpacing: '0.22em', color: 'var(--ivory)', lineHeight: 1 }}>
                <span style={{ color: 'var(--gold)' }}>U</span>BELIA
              </span>
              <span className="gold-rule" style={{ opacity: 0.4 }} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 200, fontSize: '6.5px', letterSpacing: '0.5em', color: 'var(--champagne)', textTransform: 'uppercase' }}>
                Wedding House
              </span>
            </Link>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '18px', color: 'var(--blush-deep)', lineHeight: 1.4 }}>
              The Art of Your<br />Perfect Day
            </p>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="section-label mb-6" style={{ color: 'var(--champagne)' }}>{col.title}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 200, color: 'var(--sage)', transition: 'color 0.28s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sage)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'rgba(213,188,148,0.10)', marginBottom: '24px' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 200, color: 'var(--sage)', letterSpacing: '0.1em' }}>
            &copy; {new Date().getFullYear()} Ubelia — All rights reserved
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 200, color: 'var(--sage)', letterSpacing: '0.1em' }}>
            France · Belgium · Switzerland · Canada
          </p>
        </div>

      </div>
    </footer>
  );
}
