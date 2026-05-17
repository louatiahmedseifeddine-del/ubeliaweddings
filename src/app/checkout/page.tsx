'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { products, ProductId } from '@/lib/products';
import StarRating from '@/components/ui/StarRating';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = (searchParams.get('product') || 'bundle') as ProductId;
  const product = products.find((p) => p.id === productId) || products.find((p) => p.id === 'bundle')!;

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#FBFAF6', minHeight: '100vh' }}>
      {/* Simple navbar */}
      <div style={{ background: '#FBFAF6', borderBottom: '1px solid rgba(176,186,168,0.2)', padding: '16px 24px' }}>
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 300, letterSpacing: '0.35em' }}>
            <span style={{ color: '#B59354' }}>U</span>
            <span style={{ color: '#252018' }}>BELIA</span>
          </Link>
          <Link href="/faq" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#687060', letterSpacing: '0.05em' }}>
            Need help?
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Order Summary */}
          <div>
            <p className="eyebrow">YOUR ORDER</p>
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 300, color: '#252018' }}>
              {product.name}
            </h1>

            <div style={{ background: '#F4F0E8', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <ul className="space-y-2 check-list">
                {product.features.slice(0, 5).map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid rgba(176,186,168,0.3)', borderBottom: '1px solid rgba(176,186,168,0.3)' }}>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#687060' }}>Total</span>
              <div className="flex items-center gap-3">
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#B0BAA8', textDecoration: 'line-through' }}>${product.originalPrice}</span>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px', color: '#252018', fontWeight: 300 }}>${product.price}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-5">
              {[
                { icon: '✓', text: 'Instant email delivery' },
                { icon: '✓', text: 'Email support included' },
              ].map(({ icon, text }) => (
                <p key={text} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#687060' }}>
                  <span style={{ color: '#B59354', marginRight: '4px' }}>{icon}</span> {text}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <StarRating size={12} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#B0BAA8', marginTop: '4px' }}>4.8/5 · 11,209 verified reviews</p>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <p className="eyebrow">YOUR DETAILS</p>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 300, color: '#252018' }}>
              Complete your purchase
            </h2>

            {submitted ? (
              <div style={{ background: '#F4F0E8', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', color: '#252018', marginBottom: '12px' }}>
                  Thank you, {form.firstName}!
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#687060', lineHeight: 1.7 }}>
                  Stripe payment integration coming soon. Your order has been received.
                </p>
                <Link href="/merci" className="btn btn-gold mt-6 inline-block">Continue →</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="input-label" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Emma"
                    />
                  </div>
                  <div>
                    <label className="input-label" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Laurent"
                    />
                  </div>
                </div>
                <div>
                  <label className="input-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="emma@example.com"
                  />
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8', marginTop: '4px' }}>
                    Your files will be sent to this address instantly.
                  </p>
                </div>

                <div style={{ background: '#F4F0E8', borderRadius: '6px', padding: '16px', border: '1px solid rgba(181,147,84,0.15)' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#687060', textAlign: 'center', fontStyle: 'italic' }}>
                    💳 Stripe payment integration — coming soon
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn btn-gold w-full justify-center"
                  style={{ fontSize: '14px', padding: '18px 32px', width: '100%', textAlign: 'center' }}
                >
                  Complete Purchase — ${product.price} →
                </button>

                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8', textAlign: 'center', lineHeight: 1.6 }}>
                  🔒 Secured by Stripe · Your info is never shared
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Minimal footer */}
      <div style={{ borderTop: '1px solid rgba(176,186,168,0.2)', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8', letterSpacing: '0.05em' }}>
          © 2026 Ubelia · All rights reserved · <Link href="/privacy" style={{ color: '#B59354' }}>Privacy</Link> · <Link href="/terms" style={{ color: '#B59354' }}>Terms</Link>
        </p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FBFAF6' }} />}>
      <CheckoutContent />
    </Suspense>
  );
}
