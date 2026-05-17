'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white border-b border-blush-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl text-blush-700 tracking-wide">
            Ever After
          </Link>

          {/* Nav Links */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-sm text-gray-600 hover:text-blush-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/shop?category=guide-book"
              className="text-sm text-gray-600 hover:text-blush-600 transition-colors"
            >
              Guide Books
            </Link>
            <Link
              href="/shop?category=digital-invitation"
              className="text-sm text-gray-600 hover:text-blush-600 transition-colors"
            >
              Invitations
            </Link>
            <Link
              href="/shop?category=custom-invitation"
              className="text-sm text-gray-600 hover:text-blush-600 transition-colors"
            >
              Custom
            </Link>
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative flex items-center gap-1 text-gray-700 hover:text-blush-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blush-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
