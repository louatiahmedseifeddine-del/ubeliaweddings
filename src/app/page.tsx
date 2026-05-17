import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import WhatIsInsideSection from '@/components/sections/WhatIsInsideSection';
import ProductSection from '@/components/sections/ProductSection';
import ReviewsSwiper from '@/components/sections/ReviewsSwiper';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import PhotoBanner from '@/components/sections/PhotoBanner';

export const metadata: Metadata = {
  title: 'The Complete Wedding Guide — Ubelia',
  description:
    'The complete wedding planning system: 96+ page guide, budget calculator & digital invitation. Used by 11,209+ couples. Instant download — $39.',
};

const faqItems = [
  {
    question: 'There are free templates online — why pay?',
    answer:
      "Free templates are a great starting point — until you're staring at a blank tab wondering what to do first. The Complete Wedding Guide is guided planning: pre-filled timelines, decision rules, and vendor email scripts so you always know your next move.",
  },
  {
    question: 'Will this work for my unique wedding?',
    answer:
      "Absolutely. The guide includes a dedicated 'what to skip' section so you remove everything that doesn't match your day. It's your wedding, not a mold.",
  },
  {
    question: "I hate spreadsheets and I'm always on my phone.",
    answer:
      'The system is built for quick mobile updates — only the tabs you actually need: budget, payments, vendors, guests. No bloat.',
  },
  {
    question: "We're getting married in 5–6 months. Is it too late?",
    answer:
      "Not at all. The condensed 6-month sprint version is included. It tells you exactly what matters right now and what you can safely ignore.",
  },
  {
    question: 'How is it delivered?',
    answer:
      'Instantly. Once your payment is confirmed, you receive a download link by email within seconds. High-resolution PDF + spreadsheet files, optimized for both digital use and printing.',
  },
  {
    question: 'What exactly do I get?',
    answer:
      'The Complete Wedding Guide: a 96+ page PDF with a pre-filled 12-month timeline, 6-month sprint version, vendor email scripts, budget tracker, vow frameworks, checklists, and a "what to skip" guide. Everything you need in one place.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Offer first */}
      <div id="product"><ProductSection /></div>

      {/* 2 — Social proof bar */}
      <SocialProofBar />

      {/* 3 — Problem agitation */}
      <ProblemSection />

      {/* 4 — Solution */}
      <SolutionSection />

      {/* 5 — What's inside */}
      <WhatIsInsideSection />

      {/* 6 — Photo + bullets */}
      <PhotoBanner />

      {/* 7 — Reviews */}
      <div id="testimonials"><ReviewsSwiper /></div>

      {/* 8 — FAQ */}
      <section id="faq" className="section-pad" style={{ background: '#F4F0E8' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#252018',
              }}
            >
              Questions &amp; Answers
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* 9 — Final CTA */}
      <FinalCTASection />

      {/* 10 — Hero / brand story */}
      <div id="hero"><HeroSection /></div>
    </>
  );
}
