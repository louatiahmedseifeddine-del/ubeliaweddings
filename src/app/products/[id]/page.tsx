'use client';

import { useParams, notFound } from 'next/navigation';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [customization, setCustomization] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) return notFound();

  const categoryLabel: Record<string, string> = {
    'guide-book': 'Guide Book',
    'digital-invitation': 'Digital Invitation',
    'custom-invitation': 'Custom Invitation',
  };

  function handleAddToCart() {
    addItem(product, customization || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/shop" className="hover:text-blush-600 transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-square border border-blush-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <span className="text-xs text-blush-500 font-medium uppercase tracking-widest mb-2">
            {categoryLabel[product.category]}
          </span>
          {product.badge && (
            <span className="inline-block bg-gold-400 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3">
              {product.badge}
            </span>
          )}
          <h1 className="font-serif text-3xl text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-500 leading-relaxed mb-6">{product.longDescription}</p>

          {/* Features */}
          <ul className="space-y-2 mb-8">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-blush-400 mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Custom invitation notes */}
          {product.category === 'custom-invitation' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tell us about your vision (optional)
              </label>
              <textarea
                value={customization}
                onChange={(e) => setCustomization(e.target.value)}
                rows={4}
                placeholder="Colors, theme, names, wedding date, any inspiration..."
                className="w-full border border-blush-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blush-300 resize-none"
              />
            </div>
          )}

          {/* Price + CTA */}
          <div className="flex items-center gap-4 mt-auto">
            <span className="text-3xl font-semibold text-gray-800">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 rounded-full font-medium text-sm transition-colors ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-blush-500 hover:bg-blush-600 text-white'
              }`}
            >
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
          <Link
            href="/cart"
            className="text-center text-sm text-blush-600 hover:underline mt-4"
          >
            View Cart &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
