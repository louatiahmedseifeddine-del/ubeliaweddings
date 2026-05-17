import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Ubelia',
  description: 'How Ubelia LTD collects, uses and protects your personal data.',
};

const sections = [
  {
    title: '1. Who We Are',
    body: `Ubelia LTD ("Ubelia", "we", "us", "our") is the company responsible for the website ubelia.eu and all related digital products. For any privacy-related enquiry, you can contact us at Hello@ubelia.eu.`,
  },
  {
    title: '2. What Data We Collect',
    body: `When you place an order we collect your first name, last name, and email address. We do not collect payment card details — all payments are processed directly by Stripe, which maintains its own privacy policy. We may also collect basic usage data (pages visited, device type, browser) through privacy-first analytics tools.`,
  },
  {
    title: '3. How We Use Your Data',
    body: `We use your email address solely to deliver the digital products you purchased, to send order confirmations, and — with your explicit consent — to send you planning tips and product updates. We never sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: '4. Legal Basis for Processing',
    body: `We process your data on the basis of contractual necessity (to fulfil your order), legitimate interest (fraud prevention, security), and consent where applicable (marketing emails). You may withdraw consent at any time by clicking "Unsubscribe" in any email we send.`,
  },
  {
    title: '5. Data Retention',
    body: `We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law. Order records are kept for seven (7) years for accounting purposes. You may request deletion of your data at any time, subject to legal retention obligations.`,
  },
  {
    title: '6. Cookies',
    body: `Our website uses strictly necessary cookies to operate (session management, security). We may also use analytics cookies to understand how visitors use our site. You can disable non-essential cookies via your browser settings at any time. We do not use advertising or tracking cookies.`,
  },
  {
    title: '7. Third-Party Services',
    body: `We use the following third-party services: Stripe (payment processing), a transactional email provider for order delivery, and a privacy-first analytics tool. Each provider processes data in accordance with their own privacy policies and applicable data protection law.`,
  },
  {
    title: '8. Your Rights',
    body: `Under applicable data protection law you have the right to: access the personal data we hold about you; request correction of inaccurate data; request erasure of your data; object to processing; request data portability. To exercise any of these rights, contact us at Hello@ubelia.eu. We will respond within 30 days.`,
  },
  {
    title: '9. Data Security',
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. All data is transmitted over HTTPS. Payment data is handled exclusively by Stripe and is never stored on our servers.`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date below. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0 clamp(36px, 5vw, 56px)' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">LEGAL</p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 300, color: '#B0BAA8', letterSpacing: '0.06em' }}>
            Ubelia LTD · Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="mb-12"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 300, color: '#687060', lineHeight: 1.85, background: '#F4F0E8', padding: '20px 24px', borderLeft: '3px solid #B59354' }}
          >
            Your privacy matters to us. This policy explains what data Ubelia LTD collects, why we collect it, and how we protect it. If you have any questions, please email us at{' '}
            <a href="mailto:Hello@ubelia.eu" style={{ color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Hello@ubelia.eu
            </a>.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#252018' }}
                >
                  {s.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.9 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-14 pt-10"
            style={{ borderTop: '1px solid rgba(176,186,168,0.3)', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#B0BAA8', fontWeight: 300 }}>
              Questions?{' '}
              <a href="mailto:Hello@ubelia.eu" style={{ color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Hello@ubelia.eu
              </a>
            </p>
            <Link
              href="/terms"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', letterSpacing: '0.1em', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Read our Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
