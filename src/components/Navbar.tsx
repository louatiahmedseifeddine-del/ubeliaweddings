'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/shop',                             label: 'Collections' },
  { href: '/shop?category=digital-invitation', label: 'Invitations' },
  { href: '/shop?category=guide-book',         label: 'Guides'      },
  { href: '/inspiration',                      label: 'Inspiration' },
  { href: '/blog',                             label: 'Blog'        },
  { href: '/sur-mesure',                       label: 'Custom'      },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50"
        style={{ backgroundColor: 'var(--charcoal)', borderBottom: '1px solid rgba(213,188,148,0.10)' }}
      >
        <div className="max-w-8xl mx-auto" style={{ padding: '0 24px' }}>
          <div className="flex items-center justify-between" style={{ height: '64px' }}>

            {/* Logo */}
            <Link href="/" onClick={() => setOpen(false)} className="flex flex-col items-start" style={{ gap: '3px' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '20px', letterSpacing: '0.22em', color: 'var(--ivory)', lineHeight: 1 }}>
                <span style={{ color: 'var(--gold)' }}>U</span>BELIA
              </span>
              <span className="gold-rule" style={{ width: '100%', opacity: 0.45 }} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 200, fontSize: '6px', letterSpacing: '0.5em', color: 'var(--champagne)', textTransform: 'uppercase' }}>
                Wedding House
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '8.5px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.35em', color: 'var(--champagne)', transition: 'color 0.28s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--champagne)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right — cart + hamburger */}
            <div className="flex items-center" style={{ gap: '20px' }}>

              {/* Cart */}
              <Link href="/cart" className="relative" style={{ color: 'var(--champagne)', display: 'flex', alignItems: 'center', padding: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute" style={{ top: '0px', right: '0px', background: 'var(--gold)', color: 'var(--white)', fontSize: '8px', fontFamily: 'var(--font-dm-sans)', fontWeight: 500, width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Hamburger — mobile only */}
              <button
                className="lg:hidden"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: open ? 'var(--gold)' : 'var(--champagne)', transition: 'all 0.28s ease', transform: open ? 'rotate(45deg) translateY(6px)' : 'none' }} />
                <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: open ? 'var(--gold)' : 'var(--champagne)', transition: 'all 0.28s ease', opacity: open ? 0 : 1 }} />
                <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: open ? 'var(--gold)' : 'var(--champagne)', transition: 'all 0.28s ease', transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ backgroundColor: 'var(--charcoal)', paddingTop: '64px', overflowY: 'auto' }}
        >
          <div style={{ padding: '48px 32px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontSize: '36px',
                  color: 'var(--ivory)',
                  lineHeight: 1,
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(213,188,148,0.10)',
                  display: 'block',
                  transition: 'color 0.28s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
              >
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', letterSpacing: '0.35em', color: 'var(--champagne)', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                  0{i + 1}
                </span>
                {link.label}
              </Link>
            ))}

            {/* Mobile bottom */}
            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/cart" onClick={() => setOpen(false)} className="btn btn-gold" style={{ textAlign: 'center', justifyContent: 'center' }}>
                View Cart {totalItems > 0 ? `(${totalItems})` : ''}
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-outline-ivory" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Contact Us
              </Link>
            </div>

            <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '18px', color: 'var(--blush-deep)', marginTop: '48px' }}>
              The Art of Your Perfect Day
            </p>
          </div>
        </div>
      )}
    </>
  );
}
