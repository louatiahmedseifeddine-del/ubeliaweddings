'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp';
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

const animationStyles: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  fadeUp: {
    hidden:  { opacity: 0, transform: 'translateY(32px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden:  { opacity: 0, transform: 'translateX(-32px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeRight: {
    hidden:  { opacity: 0, transform: 'translateX(32px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  scaleUp: {
    hidden:  { opacity: 0, transform: 'scale(0.92)' },
    visible: { opacity: 1, transform: 'scale(1)' },
  },
};

export default function AnimateOnScroll({
  children,
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  className = '',
  style = {},
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const anim = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(!visible ? anim.hidden : anim.visible),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
