import CountUp from '@/components/ui/CountUp';

export default function SocialProofBar() {
  const items = [
    '11,209 couples organized',
    'Instant download',
    'Satisfaction guaranteed',
    'Trusted worldwide',
    '4.8 / 5 stars',
    '',
    '11,209 couples organized',
    'Instant download',
    'Satisfaction guaranteed',
    'Trusted worldwide',
    '4.8 / 5 stars',
    '',
  ];

  return (
    <div
      className="overflow-hidden py-3.5"
      style={{ background: '#F4F0E8', borderTop: '1px solid rgba(181,147,84,0.2)', borderBottom: '1px solid rgba(181,147,84,0.2)' }}
    >
      <div className="animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B59354', padding: '0 20px', whiteSpace: 'nowrap' }}>
            {item}
            <span style={{ color: 'rgba(181,147,84,0.5)', fontSize: '8px' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
