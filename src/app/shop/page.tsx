'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ProductCategory } from '@/types';

const categories: { value: 'all' | ProductCategory; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'guide-book', label: 'Guide Books' },
  { value: 'digital-invitation', label: 'Digital Invitations' },
  { value: 'custom-invitation', label: 'Custom Invitations' },
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');

  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory | null;
    if (cat && categories.some((c) => c.value === cat)) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const filtered =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-gray-800 mb-2">Shop</h1>
      <p className="text-gray-500 mb-8">
        Everything you need to plan and celebrate your perfect wedding.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === cat.value
                ? 'bg-blush-500 text-white border-blush-500'
                : 'bg-white text-gray-600 border-blush-200 hover:border-blush-400 hover:text-blush-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-20">No products found in this category.</p>
      )}
    </div>
  );
}
