export type CardVariant = 'feature' | 'listing';
export type SectionLayout = 'scroll' | 'grid';

export interface Product {
  id: number;
  category: string;
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
