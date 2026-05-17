import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blush-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-blush-700 mb-3">Ever After</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Beautiful wedding planning resources to help you create the day of your dreams.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/shop?category=guide-book" className="hover:text-blush-600 transition-colors">Guide Books</Link></li>
              <li><Link href="/shop?category=digital-invitation" className="hover:text-blush-600 transition-colors">Digital Invitations</Link></li>
              <li><Link href="/shop?category=custom-invitation" className="hover:text-blush-600 transition-colors">Custom Invitations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:hello@everafter.com" className="hover:text-blush-600 transition-colors">hello@everafter.com</a></li>
              <li><span>Returns &amp; Refunds</span></li>
              <li><span>FAQ</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blush-100 mt-10 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Ever After. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
