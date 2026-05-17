'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#product',      label: 'Pricing' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq',          label: 'FAQ' },
  ];

  const linkColor = 'rgba(37,32,24,0.65)';

  return (
    <>
      <nav
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,243,238,0.97)' : 'rgba(251,250,246,0.98)',
          borderBottom: '1px solid rgba(181,147,84,0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex-shrink-0">
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '20px',
                fontWeight: 300,
                letterSpacing: '0.35em',
              }}
            >
              <span style={{ color: '#B59354' }}>U</span>
              <span style={{ color: '#252018' }}>BELIA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: linkColor,
                  paddingBottom: '2px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#B59354'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = linkColor; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#product"
              className="btn btn-gold-sm"
              style={{ fontSize: '9px', padding: '10px 20px' }}
            >
              Get Started →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: '#252018',
                transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: '#252018',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: '#252018',
                transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-30 md:hidden transition-all duration-300"
        style={{
          background: '#FAF3EE',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          top: '64px',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '32px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#252018',
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            onClick={() => setMenuOpen(false)}
            className="btn btn-gold mt-4"
          >
            Get Started →
          </a>
        </div>
      </div>
    </>
  );
}
