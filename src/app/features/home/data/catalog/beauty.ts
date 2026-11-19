import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const BEAUTY: Product[] = [
  { id: 'beauty-aurum-eau-de-parfum-duo', category: 'beauty', brand: 'Aurum', name: 'Eau de Parfum Duo', description: 'Long-lasting woody and floral notes.', image: I.perfume, bg: '#d8d2dc', landscape: true, price: 649, mrp: 1599, rating: 4.3, ratingCount: 4120, tag: 'TOP RATED', freeDelivery: true, keywords: ['perfume', 'fragrance', 'scent', 'deodorant'] },
  { id: 'beauty-velvet-glow-skincare-kit', category: 'beauty', brand: 'Velvet', name: 'Glow Skincare Kit', description: 'Cleanser, serum and moisturiser set.', image: I.skincareKit, bg: '#f1eaec', landscape: true, price: 799, mrp: 1999, rating: 4.5, ratingCount: 6230, tag: 'BEAUTY PICKS', freeDelivery: true, keywords: ['skincare', 'serum', 'moisturiser', 'moisturizer', 'cream', 'face'] },
  { id: 'beauty-dharti-wash-bag-set', category: 'beauty', brand: 'dharti enterprise', name: 'Wash Bag Cosmetic Case (Set of 3)', description: 'Water-resistant travel organiser pouches.', image: I.washBag, bg: '#f1f1f1', price: 151, mrp: 799, rating: 4.1, ratingCount: 1397, tag: 'NEW', offer: '₹133 with Coupon offer + more', keywords: ['travel', 'cosmetic bag', 'makeup bag', 'pouch', 'organiser'] },
  { id: 'beauty-lakme-absolute-matte-lipstick', category: 'beauty', brand: 'Lakmé', name: 'Absolute Matte Lipstick', description: 'Intense colour with a soft matte finish.', image: I.lipstick, bg: '#f9e6ee', price: 449, mrp: 650, rating: 4.2, ratingCount: 23510, tag: 'BESTSELLER', keywords: ['lipstick', 'makeup', 'lip colour', 'cosmetics'] },
  { id: 'beauty-himalaya-neem-face-wash', category: 'beauty', brand: 'Himalaya', name: 'Purifying Neem Face Wash 150 ml', description: 'Fights pimples and keeps skin fresh.', image: I.faceWash, bg: '#e6f4ec', price: 169, mrp: 215, rating: 4.4, ratingCount: 181240, keywords: ['face wash', 'facewash', 'cleanser', 'skincare', 'neem'] },
  { id: 'beauty-lotus-safe-sun-spf-50', category: 'beauty', brand: 'Lotus', name: 'Safe Sun UV Screen SPF 50 PA+++', description: 'Lightweight daily sunscreen, 100 g.', image: I.sunscreen, bg: '#fdf1de', price: 399, mrp: 595, rating: 4.1, ratingCount: 37020, keywords: ['sunscreen', 'sun screen', 'spf', 'skincare', 'lotion'] },
  { id: 'beauty-head-and-shoulders-shampoo', category: 'beauty', brand: 'Head & Shoulders', name: 'Anti-Dandruff Shampoo 650 ml', description: 'Daily care for a flake-free scalp.', image: I.shampoo, bg: '#e8f1fb', price: 389, mrp: 545, rating: 4.3, ratingCount: 94210, keywords: ['shampoo', 'hair care', 'haircare', 'hair'] },
];
