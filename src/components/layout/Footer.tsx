const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms',   label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#F4F0E8', borderTop: '1px solid rgba(181,147,84,0.2)' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 300, letterSpacing: '0.35em' }}>
              <span style={{ color: '#B59354' }}>U</span>
              <span style={{ color: '#252018' }}>BELIA</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#687060', letterSpacing: '0.05em', lineHeight: 1.7, fontWeight: 300 }}>
              Wedding Planning, Elevated.
            </p>
            <a
              href="mailto:Hello@ubelia.eu"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', letterSpacing: '0.05em', fontWeight: 300, marginTop: '6px', display: 'block', textDecoration: 'none' }}
            >
              Hello@ubelia.eu
            </a>
          </div>

          {/* Nav anchors */}
          <div className="flex flex-wrap gap-6">
            {[
              { href: '#testimonials', label: 'Reviews' },
              { href: '#product',     label: 'Get the Guide' },
              { href: '#faq',         label: 'FAQ' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="footer-link"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#687060', textDecoration: 'none' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="footer-link"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#687060', letterSpacing: '0.05em', textDecoration: 'none' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(181,147,84,0.1)' }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#687060', letterSpacing: '0.08em', fontWeight: 300 }}>
            © 2026 Ubelia LTD · All rights reserved · Secure payments via Stripe
          </p>
          <div className="flex items-center gap-3" style={{ opacity: 0.35 }}>
            <VisaSVG />
            <MastercardSVG />
            <StripeSVG />
          </div>
        </div>
      </div>
    </footer>
  );
}

function VisaSVG() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect width="38" height="24" rx="4" fill="rgba(37,32,24,0.08)" />
      <text x="6" y="17" fontSize="12" fontWeight="700" fill="#252018" fontFamily="Arial">VISA</text>
    </svg>
  );
}
function MastercardSVG() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect width="38" height="24" rx="4" fill="rgba(37,32,24,0.08)" />
      <circle cx="15" cy="12" r="7" fill="rgba(37,32,24,0.3)" />
      <circle cx="23" cy="12" r="7" fill="rgba(181,147,84,0.5)" />
    </svg>
  );
}
function StripeSVG() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect width="38" height="24" rx="4" fill="rgba(37,32,24,0.08)" />
      <text x="5" y="17" fontSize="11" fontWeight="600" fill="#252018" fontFamily="Arial">stripe</text>
    </svg>
  );
}
