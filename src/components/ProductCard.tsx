'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();

  const categoryLabel: Record<string, string> = {
    'guide-book': 'Guide Book',
    'digital-invitation': 'Digital Invitation',
    'custom-invitation': 'Custom Invitation',
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-blush-100 flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.id}`} className="block relative overflow-hidden bg-blush-50 aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs text-blush-500 font-medium uppercase tracking-wider mb-1">
          {categoryLabel[product.category]}
        </span>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-serif text-gray-800 text-lg leading-snug mb-2 group-hover:text-blush-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-semibold text-gray-800">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="bg-blush-500 hover:bg-blush-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
