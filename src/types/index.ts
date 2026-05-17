export type ProductCategory = 'guide-book' | 'digital-invitation' | 'custom-invitation';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in dollars
  originalPrice?: number; // crossed-out anchor price
  reviewCount?: number;
  category: ProductCategory;
  image: string;
  images?: string[]; // multiple images for gallery
  badge?: string;
  features: string[];
  stripePriceId?: string; // set after creating prices in Stripe dashboard
}

export interface CartItem {
  product: Product;
  quantity: number;
  customization?: string; // for custom invitations
}
