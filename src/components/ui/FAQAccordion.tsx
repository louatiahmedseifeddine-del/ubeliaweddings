'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: 'light' | 'dark';
}

export default function FAQAccordion({ items, theme = 'light' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: `1px solid ${theme === 'dark' ? 'rgba(181,147,84,0.15)' : 'rgba(176,186,168,0.3)'}`,
            }}
          >
            <button
              className="w-full text-left py-5 flex items-center justify-between gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(15px, 2.5vw, 19px)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  color: theme === 'dark' ? '#FBFAF6' : '#252018',
                  lineHeight: 1.3,
                }}
              >
                {item.question}
              </span>
              <span
                className="flex-shrink-0 transition-transform duration-200"
                style={{
                  color: '#B59354',
                  fontSize: '20px',
                  lineHeight: 1,
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '400px' : '0', opacity: isOpen ? 1 : 0 }}
            >
              <p
                className="pb-5 pr-8"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: theme === 'dark' ? 'rgba(176,186,168,0.8)' : '#687060',
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
