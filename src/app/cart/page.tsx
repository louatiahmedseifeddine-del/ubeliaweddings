'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleCheckout() {
    if (items.length === 0) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="text-5xl mb-6">🛒</div>
        <h1 className="font-serif text-3xl text-gray-800 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some beautiful wedding products to get started.</p>
        <Link
          href="/shop"
          className="inline-block bg-blush-500 hover:bg-blush-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-gray-800 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-2xl border border-blush-100 p-5 flex items-start gap-4"
            >
              {/* Product thumbnail */}
              <div className="relative w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-gray-800 text-sm leading-snug">{item.product.name}</h3>
                <p className="text-blush-500 font-semibold mt-1">${item.product.price.toFixed(2)}</p>
                {item.customization && (
                  <p className="text-xs text-gray-400 mt-1 truncate">Note: {item.customization}</p>
                )}
                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:border-blush-400 hover:text-blush-500 transition-colors flex items-center justify-center text-lg leading-none"
                  >
                    -
                  </button>
                  <span className="text-sm w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:border-blush-400 hover:text-blush-500 transition-colors flex items-center justify-center text-lg leading-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-gray-300 hover:text-red-400 transition-colors mt-1"
                title="Remove"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl border border-blush-100 p-6 h-fit sticky top-20">
          <h2 className="font-serif text-xl text-gray-800 mb-5">Order Summary</h2>
          <div className="space-y-3 text-sm text-gray-600 mb-5">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between">
                <span className="truncate pr-2">{item.product.name} &times; {item.quantity}</span>
                <span className="font-medium text-gray-800 flex-shrink-0">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-blush-100 pt-4 mb-6 flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {error && (
            <p className="text-red-500 text-xs mb-3 text-center">{error}</p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-blush-500 hover:bg-blush-600 disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors text-sm"
          >
            {loading ? 'Redirecting...' : 'Proceed to Checkout'}
          </button>
          <Link
            href="/shop"
            className="block text-center text-sm text-blush-600 hover:underline mt-3"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
