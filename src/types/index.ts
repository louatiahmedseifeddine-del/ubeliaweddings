export type ProductCategory = 'guide-book' | 'digital-invitation' | 'custom-invitation';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in dollars
  category: ProductCategory;
  image: string;
  badge?: string;
  features: string[];
  stripePriceId?: string; // set after creating prices in Stripe dashboard
}

export interface CartItem {
  product: Product;
  quantity: number;
  customization?: string; // for custom invitations
}
