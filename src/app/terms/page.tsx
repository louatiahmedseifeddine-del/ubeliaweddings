import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Ubelia',
  description: 'Terms and conditions governing the use of Ubelia digital products and services.',
};

const sections = [
  {
    title: '1. About Us',
    body: `These Terms of Service ("Terms") govern your purchase and use of digital products sold by Ubelia LTD ("Ubelia", "we", "us"). By completing a purchase you agree to be bound by these Terms. For any questions, contact us at Hello@ubelia.eu.`,
  },
  {
    title: '2. Products & Delivery',
    body: `All Ubelia products are digital downloads (PDF files or spreadsheet templates). Upon successful payment, you will receive a download link or direct file delivery by email to the address provided at checkout. Delivery is typically instant; in exceptional cases please allow up to 24 hours. If you have not received your files within 24 hours, contact Hello@ubelia.eu.`,
  },
  {
    title: '3. Licence & Permitted Use',
    body: `When you purchase an Ubelia product, you are granted a non-exclusive, non-transferable, personal licence to use the product for your own wedding planning. You may not resell, redistribute, sublicence, share publicly, or create derivative works based on our products without our prior written consent. You may print products for personal use.`,
  },
  {
    title: '4. Intellectual Property',
    body: `All content, designs, text, graphics, and digital files sold by Ubelia LTD remain the exclusive intellectual property of Ubelia LTD. Purchasing a product does not transfer any intellectual property rights. Unauthorised reproduction or distribution constitutes copyright infringement and may result in legal action.`,
  },
  {
    title: '5. Refund Policy',
    body: `All Ubelia products are digital downloads. Due to the nature of digital goods, purchases are generally final once files have been delivered. If you experience a technical issue — such as not receiving your files or a corrupted download — contact us at Hello@ubelia.eu and we will resolve the issue promptly, including re-sending your files or issuing a refund at our discretion. We are committed to ensuring every customer receives what they paid for.`,
  },
  {
    title: '6. Pricing',
    body: `All prices are listed in US Dollars (USD) and are inclusive of any applicable taxes where required by law. We reserve the right to change prices at any time. The price displayed at the time of your purchase is the price you pay — no retroactive changes apply to completed orders.`,
  },
  {
    title: '7. Payment',
    body: `Payments are processed securely by Stripe. Ubelia LTD does not store or handle payment card details. By providing payment information you agree to Stripe's Terms of Service. All transactions are encrypted via SSL/TLS.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `Ubelia LTD provides digital planning tools for informational purposes. We do not guarantee specific planning outcomes or that our timelines will be suitable for every couple's situation. To the maximum extent permitted by law, Ubelia LTD shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products.`,
  },
  {
    title: '9. Governing Law',
    body: `These Terms are governed by and construed in accordance with applicable law. Any dispute arising from these Terms or from a purchase shall be subject to the exclusive jurisdiction of the competent courts.`,
  },
  {
    title: '10. Changes to These Terms',
    body: `We may update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our website or products after changes constitutes acceptance of the revised Terms. For questions about any changes, contact Hello@ubelia.eu.`,
  },
];

export default function TermsPage() {
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
            Terms of Service
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
            Please read these Terms carefully before purchasing. By completing an order you confirm that you have read, understood, and agree to these Terms. Questions? Email us at{' '}
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

          {/* Support callout */}
          <div
            className="mt-12"
            style={{ background: '#252018', borderRadius: '8px', padding: 'clamp(24px, 4vw, 36px)', textAlign: 'center' }}
          >
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 300, color: '#FBFAF6', marginBottom: '8px' }}>
              Any questions?
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 20px' }}>
              If you have any issues with your order or files, reach out and we'll respond within 24 hours.
            </p>
            <a
              href="mailto:Hello@ubelia.eu"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', letterSpacing: '0.12em', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              Hello@ubelia.eu
            </a>
          </div>

          <div
            className="mt-10"
            style={{ borderTop: '1px solid rgba(176,186,168,0.3)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#B0BAA8', fontWeight: 300 }}>
              © 2026 Ubelia LTD · All rights reserved
            </p>
            <Link
              href="/privacy"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B59354', letterSpacing: '0.1em', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
