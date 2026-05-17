const bullets = [
  {
    title: "Budget you'll actually stick to",
    desc: 'Estimate, track, and catch overruns before they happen — every dollar accounted for.',
  },
  {
    title: 'Vendor scripts that get better prices',
    desc: 'Email templates and questions that put you in control of every negotiation.',
  },
  {
    title: "Vow frameworks you'll be proud of",
    desc: 'Structure and examples that help you find your own voice — not a copy-paste script.',
  },
  {
    title: '12-month timeline, task by task',
    desc: 'Know exactly what to do next. Nothing slips, nothing forgotten.',
  },
  {
    title: 'Digital invitation + RSVP included',
    desc: 'Fully customisable Canva template with embedded Google Form for RSVPs.',
  },
  {
    title: 'Day-of vendor handoff in one page',
    desc: 'One sheet with every contact, timeline, and instruction — day-of stress gone.',
  },
];

function Diamond() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, marginTop: '4px' }}
    >
      <path d="M4 0L8 4L4 8L0 4L4 0Z" fill="#B59354" />
    </svg>
  );
}

export default function PhotoBanner() {
  return (
    <>
      {/* ── 1. Standalone photo ── */}
      <div style={{ width: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/products/photo-banner.jpg"
          alt="Elegant wedding setting"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* ── 2. Bullets on light background ── */}
      <section style={{ background: '#FAF3EE', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '10px',
                fontWeight: 300,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#B59354',
                marginBottom: '14px',
              }}
            >
              ✦ What&apos;s inside
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(28px, 4.5vw, 46px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#252018',
                lineHeight: 1.15,
              }}
            >
              Everything you need, nothing you don&apos;t
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                fontWeight: 300,
                color: '#687060',
                marginTop: '12px',
                maxWidth: '460px',
                margin: '12px auto 0',
                lineHeight: 1.7,
              }}
            >
              96+ pages built to replace the overwhelm with a clear, step-by-step system.
            </p>
          </div>

          {/* Bullets grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(20px, 3vw, 32px) clamp(28px, 6vw, 64px)',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {bullets.map((b) => (
              <div
                key={b.title}
                style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
              >
                <Diamond />
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#252018',
                      marginBottom: '5px',
                      lineHeight: 1.4,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {b.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '12px',
                      fontWeight: 300,
                      color: '#687060',
                      lineHeight: 1.7,
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
