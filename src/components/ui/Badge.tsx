interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'sage' | 'blush' | 'dark' | 'animated';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    gold: { background: '#EAD9B2', color: '#4A3828', fontSize: '9px', letterSpacing: '0.2em', padding: '4px 10px', borderRadius: '3px', fontWeight: 400, textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)', display: 'inline-block', whiteSpace: 'nowrap' },
    sage: { background: '#B0BAA8', color: '#FBFAF6', fontSize: '9px', letterSpacing: '0.2em', padding: '4px 10px', borderRadius: '3px', fontWeight: 400, textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)', display: 'inline-block', whiteSpace: 'nowrap' },
    blush: { background: '#C4866A', color: '#FBFAF6', fontSize: '9px', letterSpacing: '0.2em', padding: '4px 10px', borderRadius: '3px', fontWeight: 400, textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)', display: 'inline-block', whiteSpace: 'nowrap' },
    dark: { background: '#252018', color: '#B59354', fontSize: '9px', letterSpacing: '0.2em', padding: '4px 10px', borderRadius: '3px', fontWeight: 400, textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)', display: 'inline-block', whiteSpace: 'nowrap' },
    animated: { background: '#B59354', color: '#252018', fontSize: '10px', letterSpacing: '0.25em', padding: '6px 16px', borderRadius: '3px', fontWeight: 400, textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)', display: 'inline-block', whiteSpace: 'nowrap' },
  };

  return (
    <span
      style={styles[variant]}
      className={`${variant === 'animated' ? 'animate-badgePulse' : ''} ${className}`}
    >
      {children}
    </span>
  );
}
