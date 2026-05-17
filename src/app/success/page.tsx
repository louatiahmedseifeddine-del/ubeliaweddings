'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">💍</div>
      <h1 className="font-serif text-4xl text-gray-800 mb-4">Order Confirmed!</h1>
      <p className="text-gray-500 leading-relaxed mb-4">
        Thank you so much for your purchase. Your order has been received and you will get an email shortly.
      </p>
      <p className="text-gray-500 text-sm leading-relaxed mb-10">
        For digital products, your download link will be emailed to you. For custom invitations, our design team will reach out within 1-2 business days.
      </p>
      <Link
        href="/shop"
        className="inline-block bg-blush-500 hover:bg-blush-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
