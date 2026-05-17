'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F0E8', padding: 'clamp(48px, 7vw, 80px) 0 clamp(36px, 5vw, 56px)' }}>
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow">WE&apos;RE HERE TO HELP</p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(38px, 6vw, 60px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#252018',
              lineHeight: 1.05,
            }}
          >
            Get in Touch
          </h1>
          <p className="mt-4 mx-auto" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#687060', maxWidth: '440px', lineHeight: 1.75 }}>
            A question about your order, a refund, or just need advice? We reply within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Two-col layout */}
      <section style={{ background: '#FBFAF6', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

            {/* Left — contact info */}
            <div>
              <h2 className="mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 300, color: '#252018' }}>
                Contact Information
              </h2>

              {[
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'Hello@ubelia.eu',
                  href: 'mailto:Hello@ubelia.eu',
                },
                {
                  icon: '⏱',
                  label: 'Response time',
                  value: 'Within 24–48 hours',
                },
                {
                  icon: '🌍',
                  label: 'Languages',
                  value: 'English · Français',
                },
                {
                  icon: '↩',
                  label: 'Refunds',
                  value: ' — no questions asked',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 mb-6" style={{ alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '16px', marginTop: '1px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#B0BAA8', marginBottom: '3px' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#B59354', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#252018' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(176,186,168,0.3)' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.75 }}>
                  Ubelia LTD<br />
                  <a href="mailto:Hello@ubelia.eu" style={{ color: '#B59354' }}>Hello@ubelia.eu</a>
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div
              style={{ background: '#F4F0E8', borderRadius: '8px', padding: 'clamp(24px, 4vw, 40px)' }}
            >
              {sent ? (
                <div className="text-center py-8">
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 300, color: '#252018', marginBottom: '12px' }}>
                    Message sent!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#687060', lineHeight: 1.75 }}>
                    Thank you for reaching out. We&apos;ll reply to <strong>{form.email}</strong> within 24–48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-7" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '26px', fontWeight: 300, color: '#252018' }}>
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="input-label" htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Sophie & Antoine"
                      />
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
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="input-label" htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="input-field"
                        style={{ appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="" disabled>Select a topic…</option>
                        <option value="order">Order or delivery issue</option>
                        <option value="refund">Refund request</option>
                        <option value="product">Question about a product</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div>
                      <label className="input-label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Tell us how we can help…"
                        style={{ resize: 'none' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-gold w-full justify-center"
                      style={{ fontSize: '13px', padding: '16px 32px' }}
                    >
                      Send Message →
                    </button>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#B0BAA8', textAlign: 'center' }}>
                      We reply to every message · Usually within 24 hours
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ nudge */}
      <section style={{ background: '#252018', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow-ivory">QUICK ANSWERS</p>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 300, color: '#FBFAF6' }}>
            Check the FAQ first
          </h2>
          <p className="mb-6" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#B0BAA8', lineHeight: 1.75 }}>
            Most questions about delivery, refunds and product access are answered there.
          </p>
          <a
            href="/faq"
            className="btn btn-outline-ivory"
            style={{ fontSize: '10px', letterSpacing: '0.25em' }}
          >
            View FAQ →
          </a>
        </div>
      </section>
    </>
  );
}
