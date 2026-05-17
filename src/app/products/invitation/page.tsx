import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '@/lib/products';
import { getReviewsByProduct } from '@/lib/reviews';
import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';

const product = getProduct('invitation');

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
};

const faqs = [
  {
    question: 'Do I need to know how to use Canva?',
    answer:
      'Not at all. Step-by-step instructions with screenshots are included. Canva is free and takes less than 5 minutes to learn. Most couples finish customising in under 30 minutes.',
  },
  {
    question: 'Can I change the colours and fonts?',
    answer:
      'Yes — everything is editable. Colours, fonts, layout, wording. Make it completely yours.',
  },
  {
    question: 'Can I print it myself?',
    answer:
      'Yes. The template exports as a high-resolution PDF at A5, A4, and US Letter sizes with print-safe bleed margins. Print at home or at any print shop.',
  },
  {
    question: 'How do I send the digital version?',
    answer:
      'Export as a PDF or image directly from Canva, then share via WhatsApp, email, or any messaging app. Most couples do both — digital first for quick RSVPs, printed for keepsake copies.',
  },
  {
    question: 'Is the RSVP card included?',
    answer:
      'Yes — a matching RSVP card is included, styled to complement the invitation perfectly.',
  },
];

const forWho = [
  { text: 'Couples who want an elegant invitation without agency prices' },
  { text: 'Couples who need to send invitations quickly — digital delivery is instant' },
  { text: 'Couples who want to print at home or at a local print shop' },
  { text: 'Couples who want full control over wording, colours, and layout' },
  { text: 'Couples with both digital and traditional guests to invite' },
];

const galleryItems = [
  { src: '/products/invitation/alicia-marcus-1.png', label: 'Alicia & Marcus' },
  { src: '/products/invitation/emily-steven-1.png', label: 'Emily & Steven' },
  { src: '/products/invitation/jordan-clara-1.png', label: 'Jordan & Clara' },
  { src: '/products/invitation/rafael-kirsten-1.png', label: 'Rafael & Kirsten' },
  { src: '/products/invitation/jackson-avery-1.png', label: 'Jackson & Avery' },
  { src: '/products/invitation/ellice-charlie-1.png', label: 'Ellice & Charlie' },
  { src: '/products/invitation/rafael-james-1.png', label: 'Rafael & Kirsten B.' },
  { src: '/products/invitation/emma-lucas-1.png', label: 'Emma & Lucas' },
  { src: '/products/invitation/camille-marc-1.png', label: 'Camille & Marc' },
  { src: '/products/invitation/liam-zoya-1.png', label: 'Liam & Zoya' },
];

const suiteItems = [
  {
    title: 'Main Invitation',
    desc: 'Your names, date, venue, and a personal message. Fully editable wording, colours, and layout.',
    photo: '/products/invitation/alicia-marcus-3.png',
  },
  {
    title: 'RSVP Card',
    desc: 'Matching reply card for your guests. Add your email, WhatsApp, or a custom URL.',
    photo: '/products/invitation/emily-steven-3.png',
  },
  {
    title: 'Details Card',
    desc: 'Venue address, accommodation options, dress code, and anything else your guests need.',
    photo: '/products/invitation/jordan-clara-3.png',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Purchase & download',
    desc: 'Instant access. You receive a Canva template link by email within seconds of purchase.',
  },
  {
    step: '02',
    title: 'Customise in Canva',
    desc: 'Edit names, date, venue, colours, and fonts. No design skills needed. Free tool.',
  },
  {
    step: '03',
    title: 'Send or print',
    desc: 'Export as PDF or image. Share by email or WhatsApp, or take to any print shop.',
  },
];

export default function InvitationPage() {
  const reviews = getReviewsByProduct('invitation');

  return (
    <>
      {/* ── Sticky mobile CTA ────────────────────────────────── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          background: '#252018',
          borderTop: '1px solid rgba(181,147,84,0.25)',
          padding: 'clamp(12px,3vw,16px) clamp(16px,5vw,24px)',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              color: 'rgba(251,250,246,0.55)',
              letterSpacing: '0.08em',
              textDecoration: 'line-through',
              lineHeight: 1,
              marginBottom: '2px',
            }}
          >
            ${product.originalPrice}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(26px,6vw,32px)',
              fontWeight: 300,
              color: '#FBFAF6',
              lineHeight: 1,
            }}
          >
            ${product.price}
          </p>
        </div>
        <Link
          href="/checkout?product=invitation"
          className="btn btn-gold"
          style={{ fontSize: '13px', padding: '14px 24px', flexShrink: 0 }}
        >
          Get Instant Access →
        </Link>
      </div>

      {/* ── Breadcrumb ───────────────────────────────────────── */}
      <nav
        style={{
          background: '#FBFAF6',
          borderBottom: '1px solid rgba(181,147,84,0.12)',
          padding: 'clamp(10px,1.5vw,14px) 0',
        }}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <ol
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(10px,1.2vw,12px)',
              color: '#B0BAA8',
              letterSpacing: '0.04em',
            }}
          >
            <li>
              <Link href="/" style={{ color: '#B0BAA8' }}>
                Home
              </Link>
            </li>
            <li style={{ color: 'rgba(176,186,168,0.5)' }}>›</li>
            <li>
              <Link href="/products" style={{ color: '#B0BAA8' }}>
                Products
              </Link>
            </li>
            <li style={{ color: 'rgba(176,186,168,0.5)' }}>›</li>
            <li style={{ color: '#687060' }}>Digital Wedding Invitation</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(40px,6vw,72px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — hero image */}
            <div
              className="relative rounded-lg overflow-hidden order-1 lg:order-none"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/invitation/alicia-marcus-1.png"
                alt="Elegant digital wedding invitation — Alicia & Marcus"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute top-5 left-5"
                style={{
                  background: '#C4866A',
                  color: '#FBFAF6',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(8px,0.9vw,10px)',
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  padding: 'clamp(6px,0.8vw,8px) clamp(12px,1.5vw,16px)',
                  borderRadius: '3px',
                }}
              >
                CANVA TEMPLATE
              </div>
            </div>

            {/* Right — product info */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(9px,1vw,11px)',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#B59354',
                  marginBottom: 'clamp(12px,1.5vw,16px)',
                }}
              >
                DIGITAL DOWNLOAD · INSTANT DELIVERY
              </p>

              <h1
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(34px,4.5vw,54px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1.05,
                  marginBottom: 'clamp(12px,1.5vw,16px)',
                }}
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-3" style={{ marginBottom: 'clamp(18px,2.5vw,24px)' }}>
                <StarRating size={14} />
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(11px,1.2vw,13px)',
                    color: '#B0BAA8',
                  }}
                >
                  4.8 · 11,209 reviews
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(13px,1.4vw,15px)',
                  fontWeight: 300,
                  color: '#687060',
                  lineHeight: 1.85,
                  marginBottom: 'clamp(14px,2vw,20px)',
                }}
              >
                A beautifully designed wedding invitation suite — fully editable in Canva (free).
                Customise every detail: names, date, venue, colours, and fonts. Send digitally in
                seconds or print for a timeless keepsake.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(13px,1.4vw,15px)',
                  fontWeight: 300,
                  color: '#687060',
                  lineHeight: 1.85,
                  marginBottom: 'clamp(20px,3vw,28px)',
                }}
              >
                Includes the main invitation, matching RSVP card, and details card. No design
                experience needed — step-by-step instructions included.
              </p>

              <ul
                className="check-list space-y-2"
                style={{ marginBottom: 'clamp(24px,3.5vw,36px)' }}
              >
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="flex items-center gap-3" style={{ marginBottom: 'clamp(6px,1vw,10px)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(12px,1.3vw,14px)',
                    color: '#B0BAA8',
                    textDecoration: 'line-through',
                  }}
                >
                  ${product.originalPrice}
                </span>
                <span
                  style={{
                    background: '#EAD9B2',
                    color: '#4A3828',
                    fontSize: 'clamp(8px,0.9vw,10px)',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    padding: '3px 8px',
                    borderRadius: '3px',
                  }}
                >
                  {product.badge}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(48px,6vw,64px)',
                  fontWeight: 300,
                  color: '#252018',
                  lineHeight: 1,
                  marginBottom: 'clamp(20px,3vw,28px)',
                }}
              >
                ${product.price}
              </p>

              <Link
                href={`/checkout?product=${product.id}`}
                className="btn btn-gold w-full justify-center block text-center"
                style={{
                  fontSize: 'clamp(13px,1.4vw,15px)',
                  padding: 'clamp(15px,2vw,18px) clamp(24px,3vw,32px)',
                  marginBottom: 'clamp(12px,1.5vw,16px)',
                }}
              >
                Get Instant Access — ${product.price} →
              </Link>

              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(10px,1.1vw,12px)',
                  color: '#B0BAA8',
                  letterSpacing: '0.05em',
                }}
              >
                Secure checkout · Instant email delivery · Email support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Couples gallery ──────────────────────────────────── */}
      <section style={{ background: '#252018', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section header */}
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(9px,1vw,11px)',
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: 'clamp(12px,1.5vw,16px)',
            }}
          >
            REAL COUPLES · REAL INVITATIONS
          </p>

          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px,4vw,52px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#FBFAF6',
              lineHeight: 1.1,
              marginBottom: 'clamp(12px,2vw,20px)',
            }}
          >
            10 designs. Each completely unique.
          </h2>

          <p
            className="text-center mx-auto"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(13px,1.4vw,15px)',
              fontWeight: 300,
              color: 'rgba(251,250,246,0.65)',
              lineHeight: 1.75,
              maxWidth: 'clamp(280px,55vw,560px)',
              marginBottom: 'clamp(36px,5vw,60px)',
            }}
          >
            Every template is fully customisable — colours, fonts, wording. These are real couples
            who used Ubelia.
          </p>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {galleryItems.map(({ src, label }) => (
              <div
                key={src}
                className="relative overflow-hidden"
                style={{ aspectRatio: '1 / 1', borderRadius: '4px' }}
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                  className="object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 sm:p-3"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(37,32,24,0.8) 0%, transparent 100%)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(12px,1.5vw,16px)',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: '#FBFAF6',
                    }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three-piece suite ────────────────────────────────── */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px,7vw,80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(9px,1vw,11px)',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: 'clamp(10px,1.5vw,14px)',
            }}
          >
            COMPLETE SUITE
          </p>
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px,3.5vw,44px)',
              fontWeight: 300,
              color: '#252018',
              marginBottom: 'clamp(32px,5vw,56px)',
            }}
          >
            Three pieces, one cohesive style
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {suiteItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#FBFAF6',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(181,147,84,0.15)',
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div style={{ padding: 'clamp(16px,3vw,24px)' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(18px,2vw,22px)',
                      fontWeight: 400,
                      color: '#252018',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'clamp(12px,1.2vw,13px)',
                      fontWeight: 300,
                      color: '#687060',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px,7vw,80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(9px,1vw,11px)',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: 'clamp(10px,1.5vw,14px)',
            }}
          >
            HOW IT WORKS
          </p>
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px,3.5vw,44px)',
              fontWeight: 300,
              color: '#252018',
              marginBottom: 'clamp(36px,5vw,60px)',
            }}
          >
            Ready in under 30 minutes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {howItWorks.map((step) => (
              <div key={step.step}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(52px,7vw,72px)',
                    fontWeight: 300,
                    color: '#B59354',
                    lineHeight: 1,
                    marginBottom: 'clamp(10px,1.5vw,16px)',
                    opacity: 0.7,
                  }}
                >
                  {step.step}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(18px,2vw,22px)',
                    fontWeight: 400,
                    color: '#252018',
                    marginBottom: 'clamp(8px,1vw,12px)',
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(12px,1.2vw,14px)',
                    fontWeight: 300,
                    color: '#687060',
                    lineHeight: 1.8,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ──────────────────────────────────── */}
      <section style={{ background: '#252018', padding: 'clamp(48px,7vw,80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(9px,1vw,11px)',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#B59354',
                  marginBottom: 'clamp(12px,1.5vw,16px)',
                }}
              >
                THIS IS FOR YOU IF…
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(28px,3.5vw,44px)',
                  fontWeight: 300,
                  color: '#FBFAF6',
                  lineHeight: 1.1,
                  marginBottom: 'clamp(24px,3.5vw,36px)',
                }}
              >
                Elegant invitations, without the agency price tag
              </h2>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item.text} className="flex gap-3 items-start">
                    <span
                      style={{
                        color: '#B59354',
                        fontSize: 'clamp(13px,1.4vw,15px)',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'clamp(12px,1.3vw,14px)',
                        fontWeight: 300,
                        color: 'rgba(251,250,246,0.8)',
                        lineHeight: 1.75,
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — image */}
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src="/products/invitation/camille-marc-1.png"
                alt="Camille & Marc — wedding invitation"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features grid ────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px,7vw,80px) 0' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(9px,1vw,11px)',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: 'clamp(10px,1.5vw,14px)',
            }}
          >
            EVERYTHING INCLUDED
          </p>
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px,3.5vw,44px)',
              fontWeight: 300,
              color: '#252018',
              marginBottom: 'clamp(36px,5vw,56px)',
            }}
          >
            All the details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {product.detailedFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#F4F0E8',
                  borderRadius: '8px',
                  padding: 'clamp(20px,3vw,28px)',
                  border: '1px solid rgba(181,147,84,0.15)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(18px,2vw,22px)',
                    fontWeight: 400,
                    color: '#252018',
                    marginBottom: '8px',
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(12px,1.2vw,13px)',
                    fontWeight: 300,
                    color: '#687060',
                    lineHeight: 1.75,
                  }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed photo break ───────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '1 / 1', maxHeight: '600px' }}
      >
        <Image
          src="/products/invitation/emma-lucas-1.png"
          alt="Emma & Lucas — wedding day"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(37,32,24,0.5)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(18px,3vw,34px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#FBFAF6',
              textAlign: 'center',
              textShadow: '0 2px 16px rgba(0,0,0,0.35)',
              maxWidth: 'clamp(300px,65vw,720px)',
              lineHeight: 1.4,
            }}
          >
            &ldquo;Our guests keep asking us where we got our invitations. They thought we hired a
            designer.&rdquo; — Emma &amp; Lucas
          </p>
        </div>
      </div>

      {/* ── Reviews ──────────────────────────────────────────── */}
      {reviews.length > 0 && (
        <section style={{ background: '#F4F0E8', padding: 'clamp(48px,7vw,80px) 0' }}>
          <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12">
            <p
              className="text-center"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'clamp(9px,1vw,11px)',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B59354',
                marginBottom: 'clamp(10px,1.5vw,14px)',
              }}
            >
              VERIFIED REVIEWS
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(28px,3.5vw,42px)',
                fontWeight: 300,
                color: '#252018',
                marginBottom: 'clamp(32px,5vw,48px)',
              }}
            >
              What couples say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <TestimonialCard key={r.id} review={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px,7vw,80px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px,3.5vw,40px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              marginBottom: 'clamp(32px,4.5vw,48px)',
            }}
          >
            Questions about this product
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── Bundle upsell ────────────────────────────────────── */}
      <section
        className="pb-24 md:pb-0"
        style={{ background: '#252018', padding: 'clamp(48px,7vw,80px) 0' }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(9px,1vw,11px)',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#B59354',
              marginBottom: 'clamp(12px,1.5vw,16px)',
            }}
          >
            GET MORE FOR LESS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px,3.5vw,48px)',
              fontWeight: 300,
              color: '#FBFAF6',
              lineHeight: 1.1,
              marginBottom: 'clamp(14px,2vw,20px)',
            }}
          >
            Save $27 with the Complete Pack
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(13px,1.4vw,15px)',
              fontWeight: 300,
              color: 'rgba(251,250,246,0.65)',
              lineHeight: 1.75,
              marginBottom: 'clamp(24px,3.5vw,36px)',
            }}
          >
            Get the Guide + Budget Spreadsheet + Digital Invitation — all for $63. The complete
            system in one purchase.
          </p>
          <Link
            href="/products/bundle"
            className="btn btn-gold"
            style={{
              fontSize: 'clamp(13px,1.4vw,15px)',
              padding: 'clamp(15px,2vw,18px) clamp(32px,4vw,48px)',
            }}
          >
            See The Complete Pack →
          </Link>
        </div>
      </section>
    </>
  );
}
