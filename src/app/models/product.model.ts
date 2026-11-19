export type CardVariant = 'feature' | 'listing';
export type SectionLayout = 'scroll' | 'grid';

/** Ids of the shopping categories that own products (the "For You" tab has no products of its own). */
export type ProductCategory =
  | 'fashion' | 'mobiles' | 'electronics' | 'beauty' | 'home' | 'appliances' | 'toys'
  | 'food' | 'auto' | 'sports' | 'furniture' | 'books' | 'wheelers';

export interface Product {
  /** Unique, stable slug, e.g. "elec-boat-rockerz-450". Never reuse or renumber. */
  id: string;
  category: ProductCategory;
  brand?: string;
  name: string;
  description: string;
  image: string;
  /** Tint shown behind the product image. */
  bg: string;
  price: number;
  mrp: number;
  rating: number;
  ratingCount?: number;
  tag?: string;
  offer?: string;
  freeDelivery?: boolean;
  /** Wide photo (e.g. 212x184) – shown uncropped inside tall listing cards. */
  landscape?: boolean;
  /** Extra search words (synonyms, product type) so "watch" finds "smartwatch" etc. */
  keywords?: string[];
}

export interface ProductSectionData {
  id: string;
  title: string;
  subtitle?: string;
  variant: CardVariant;
  layout: SectionLayout;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
