'use client';

import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const pillars = [
  { icon: '✦', title: 'Guided, not blank', description: 'Pre-filled timelines and suggested tasks so you never stare at an empty tab.' },
  { icon: '✦', title: 'Protect your budget', description: 'Estimate vs actual vs variance — spot overruns before they become disasters.' },
  { icon: '✦', title: 'Designed for two', description: 'Shareable pages and delegation tools so your partner finally participates.' },
];

export default function SolutionSection() {
  return (
    <section className="section-pad" style={{ background: '#FBFAF6' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <AnimateOnScroll animation="fadeUp">
          <p className="eyebrow">THE UBELIA METHOD</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, fontStyle: 'italic', color: '#252018' }}>
            There&apos;s a better way.
          </h2>
          <p className="mb-16 mx-auto" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 300, color: '#687060', maxWidth: '520px', lineHeight: 1.7 }}>
            The Ubelia System turns chaos into clarity — one week at a time.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} animation="fadeUp" delay={i * 120}>
              <div className="group text-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div
                    className="flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{ width: '44px', height: '44px', border: '1px solid rgba(181,147,84,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B59354', fontSize: '16px', transition: 'all 0.4s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(181,147,84,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = '#B59354'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(181,147,84,0.3)'; }}
                  >
                    {p.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 400, color: '#252018', lineHeight: 1.2 }}>{p.title}</h3>
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>{p.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
