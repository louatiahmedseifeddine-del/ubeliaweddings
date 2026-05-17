'use client';

import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const problems = [
  { title: '17 browser tabs open at once', description: 'Venue quotes here, vendor contacts there, budget scattered everywhere.' },
  { title: 'Budget creeping up silently', description: "You signed without knowing real costs. Now you're over budget." },
  { title: 'Waiting weeks for vendor quotes', description: 'No pricing on websites. No reply to emails. Time wasted on dead-end tours.' },
  { title: 'Decision fatigue is very real', description: 'Every week brings 50 new decisions. The joy is slowly disappearing.' },
  { title: "Don't know where to start", description: 'Every checklist assumes 18 months. You have 6. Where do you even begin?' },
  { title: 'The whole wedding rests on you', description: "Your partner isn't engaged in the planning. You're doing this alone." },
];

export default function ProblemSection() {
  return (
    <section className="section-pad" style={{ background: '#F4F0E8' }}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-16">
          <p className="eyebrow">SOUND FAMILIAR?</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, fontStyle: 'italic', color: '#252018' }}>
            We know that feeling.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(176,186,168,0.2)' }}>
          {problems.map((p, i) => (
            <AnimateOnScroll key={p.title} animation="fadeUp" delay={i * 80}>
              <ProblemCard {...p} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="group p-8 transition-all duration-300"
      style={{ background: '#F4F0E8', borderBottom: '1px solid rgba(181,147,84,0.2)', cursor: 'default' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#F8EDE4'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F4F0E8'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12 8h6l-5 4 2 6-5-4-5 4 2-6L2 8h6z" fill="#B59354" opacity="0.6" />
          </svg>
        </div>
        <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: '#252018', letterSpacing: '0.01em', lineHeight: 1.3 }}>
          {title}
        </h3>
      </div>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>
        {description}
      </p>
    </div>
  );
}
