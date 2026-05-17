import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { getProduct } from '@/lib/products';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Ubelia',
  description: 'Everything you need to know about the Ubelia wedding planning system. Delivery, customization, refunds, and more.',
};

const bundle = getProduct('bundle');

const allFaqs = [
  // ── VALUE & PRICE ──────────────────────────────────────────────
  {
    question: 'There are free templates online — why pay for this?',
    answer: "Free templates give you a blank page and call it a plan. The Ubelia System is filled in for you: pre-built timelines, suggested vendors, email scripts, budget formulas, and decision rules. You're not buying a template — you're buying 200+ hours of planning work already done.",
  },
  {
    question: "Is $63 really worth it for a wedding that costs $20,000?",
    answer: "Think of it this way: one missed vendor deadline or budget miscalculation can cost you $500–$2,000. The Ubelia System pays for itself the moment it catches a single overrun, saves you one awkward vendor negotiation, or helps you skip two wasted venue visits. Most couples say it paid back in the first week.",
  },
  {
    question: "I could just Google everything — why do I need this?",
    answer: "You absolutely can. But Google gives you 4 million results with no order, no context, and no connection to your specific situation. The Ubelia System gives you one clear path — what to do, when to do it, and how to do it — without the 3am rabbit holes.",
  },
  {
    question: "I already started planning. Is it too late to use the system?",
    answer: "Not at all. Pick it up exactly where you are. Every section is independent — jump straight to budgeting, vendor management, or the timeline sprint without re-doing earlier work.",
  },

  // ── TIMING ─────────────────────────────────────────────────────
  {
    question: "We're getting married in 5–6 months. Is it too late?",
    answer: "The condensed 6-month sprint version is included specifically for this. It cuts straight to what matters right now and lists everything you can safely skip. Many couples say the sprint guide reduced their weekly stress by half.",
  },
  {
    question: "We have 18+ months. Is this still useful?",
    answer: "Yes — actually ideal. Starting the Ubelia System early means you avoid panic-booking and make every decision calmly. The 12-month timeline gives you breathing room and locks in the best vendors before they're taken.",
  },

  // ── FIT & FLEXIBILITY ──────────────────────────────────────────
  {
    question: 'Will this work for my unique wedding?',
    answer: "Yes. The guide opens with a 'what to skip' section — a decision tree that lets you remove entire chapters that don't apply. Planning a micro-wedding of 20? A destination ceremony? A civil ceremony with no religious elements? Strip the guide down to exactly what you need.",
  },
  {
    question: 'We want a small, intimate wedding (20–30 guests). Is this overkill?',
    answer: "The 'what to skip' chapter was designed with exactly this couple in mind. Less guests doesn't mean less complexity — budgets, vendors, invitations, and timelines still need managing. The guide trims to the essentials so you plan less but cover everything.",
  },
  {
    question: "What if we're planning a destination wedding abroad?",
    answer: "The vendor section covers remote communication, international deposit management, and timing adjustments for destination weddings. The email scripts are written for couples coordinating with vendors they can't meet in person.",
  },
  {
    question: "My partner isn't involved in the planning. Will this help?",
    answer: "Yes — the system includes delegation pages designed for exactly this. Clear, short task lists your partner can action without needing to understand the full plan. Several couples said it was the first time their partner felt genuinely part of the planning.",
  },

  // ── PRODUCT ────────────────────────────────────────────────────
  {
    question: 'How is it delivered?',
    answer: 'Instantly. Once your payment is confirmed, you receive a download link by email within seconds. High-resolution PDF files optimised for both screen reading and printing, plus the spreadsheet in Google Sheets format.',
    id: 'delivery',
  },
  {
    question: 'Can I use the spreadsheet on my phone?',
    answer: "Yes — it works in Google Sheets (free), which is fully mobile-optimised. Quick budget updates, vendor notes, and payment tracking from your couch, in bed, or during a venue visit.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "Every product comes with a quick-start guide written in plain language. If you can open an email and click a link, you can use everything in the Ubelia System. No apps to install, no accounts to create.",
  },
  {
    question: 'Is the digital invitation customizable?',
    answer: 'Fully. All text, colours, fonts, and layout are editable in Canva (free). The invitation includes a matching RSVP card. Step-by-step customisation instructions are included — most couples finish their invitations in under 30 minutes.',
  },
  {
    question: 'Is the guide a physical book?',
    answer: "No — it's a high-resolution PDF delivered instantly to your inbox. You can read it on any device, or print it at home or at a print shop. A4, A5, and US Letter formats are all included.",
  },
  {
    question: 'Do I need any software to use the spreadsheet?',
    answer: "No paid software required. The spreadsheet is compatible with Google Sheets (free) and Microsoft Excel. A Google account is all you need to open, edit, and share it with your partner instantly.",
  },

  // ── TRUST & RISK ───────────────────────────────────────────────
  {
    question: "What if I have an issue with my files?",
    answer: "Email Hello@ubelia.eu and we'll sort it out quickly — usually within 24 hours. If there's a technical problem with your download, we'll re-send the files or find a solution. We want every couple to have a smooth experience.",
    id: 'refund',
  },
  {
    question: 'Is checkout secure?',
    answer: "Yes. All payments are processed by Stripe, one of the world's most trusted payment providers. We never see or store your card details. Every transaction is encrypted with SSL/TLS.",
  },
  {
    question: "What if I don't receive my files?",
    answer: "Check your spam/junk folder first — automated emails sometimes land there. If you still can't find them within 15 minutes, email Hello@ubelia.eu and we'll resend your files immediately.",
  },
  {
    question: 'How many couples have used this?',
    answer: "Over 11,000 couples worldwide have used the Ubelia System to plan their wedding. It's rated 4.8/5 across more than 11,000 verified reviews. We're proud of that number — and we work hard to keep it.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 72px) 0 clamp(36px, 5vw, 56px)' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">SUPPORT</p>
          <h1
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, fontStyle: 'italic', color: '#252018' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="mt-4 mx-auto" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', maxWidth: '440px', lineHeight: 1.65 }}>
            Can&apos;t find your answer?{' '}
            <a href="mailto:Hello@ubelia.eu" style={{ color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Email us
            </a>
            {' '}— we reply within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ background: '#FBFAF6', padding: 'clamp(40px, 6vw, 64px) 0 clamp(48px, 8vw, 80px)' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Value & Price */}
          <div id="value" className="mb-14">
            <p className="eyebrow mb-6">VALUE & PRICE</p>
            <FAQAccordion items={allFaqs.filter(f => ['There are free templates online', 'Is $63', 'I could just Google', 'I already started'].some(k => f.question.startsWith(k)))} />
          </div>

          {/* Timing */}
          <div id="timing" className="mb-14">
            <p className="eyebrow mb-6">TIMING</p>
            <FAQAccordion items={allFaqs.filter(f => ['We\'re getting married in 5', 'We have 18'].some(k => f.question.startsWith(k)))} />
          </div>

          {/* Fit */}
          <div id="fit" className="mb-14">
            <p className="eyebrow mb-6">FIT & FLEXIBILITY</p>
            <FAQAccordion items={allFaqs.filter(f => ['Will this work', 'We want a small', 'What if we\'re planning a destination', 'My partner'].some(k => f.question.startsWith(k)))} />
          </div>

          {/* Product */}
          <div id="delivery" className="mb-14">
            <p className="eyebrow mb-6">PRODUCT & DELIVERY</p>
            <FAQAccordion items={allFaqs.filter(f => ['How is it delivered', 'Can I use the spreadsheet', 'What if I\'m not tech', 'Is the digital invitation', 'Is the guide', 'Do I need any software'].some(k => f.question.startsWith(k)))} />
          </div>

          {/* Trust */}
          <div id="refund">
            <p className="eyebrow mb-6">TRUST & SUPPORT</p>
            <FAQAccordion items={allFaqs.filter(f => ['What if I have an issue', 'Is checkout secure', 'What if I don\'t receive', 'How many couples'].some(k => f.question.startsWith(k)))} />
          </div>

        </div>
      </section>

      {/* Bundle CTA */}
      <section style={{ background: '#252018', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
          <div style={{ border: '2px solid #B59354', borderRadius: '12px', padding: 'clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
            <span
              className="animate-badgePulse inline-block mb-4"
              style={{ background: '#B59354', color: '#252018', fontFamily: 'var(--font-dm-sans)', fontSize: '10px', letterSpacing: '0.3em', padding: '7px 16px', borderRadius: '3px', textTransform: 'uppercase' }}
            >
              ✦ BEST VALUE · SAVE $27 ✦
            </span>
            <h2 className="mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 300, color: '#FBFAF6' }}>
              {bundle.name}
            </h2>
            <p className="mb-6" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.7 }}>
              {bundle.tagline}
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '52px', color: '#FBFAF6', fontWeight: 300 }}>${bundle.price}</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#B0BAA8', textDecoration: 'line-through' }}>${bundle.originalPrice}</span>
            </div>
            <Link href="https://buy.stripe.com/00w7sLgmZcdl8dG5g2dnW0V" className="btn btn-gold" style={{ fontSize: '14px', padding: '18px 40px' }}>
              Get The Complete Pack →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
