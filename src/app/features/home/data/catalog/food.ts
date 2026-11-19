import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const FOOD: Product[] = [
  { id: 'food-greenfield-grocery-combo', category: 'food', brand: 'Greenfield', name: 'Fresh Grocery Essentials Combo', description: 'Fruits, vegetables, milk and staples.', image: I.groceryBag, bg: '#bdb897', landscape: true, price: 199, mrp: 399, rating: 4.1, ratingCount: 760, tag: 'DAILY SAVERS', freeDelivery: true, keywords: ['grocery', 'vegetables', 'fruits', 'staples', 'essentials'] },
  { id: 'food-yumzy-snack-hamper', category: 'food', brand: 'Yumzy', name: 'Snack Hamper Combo', description: 'Chips, cookies and namkeen box.', image: I.snackHamper, bg: '#fdeaea', price: 249, mrp: 549, rating: 4.2, ratingCount: 1840, tag: 'DAILY SAVERS', freeDelivery: true, keywords: ['snacks', 'chips', 'cookies', 'namkeen', 'hamper', 'gift'] },
  { id: 'food-greenfield-healthy-munch', category: 'food', brand: 'Greenfield', name: 'Healthy Munch Pack', description: 'Roasted seeds and trail mix.', image: I.healthyMunch, bg: '#e8f2df', price: 299, mrp: 599, rating: 4.4, ratingCount: 920, tag: 'HEALTHY', freeDelivery: true, keywords: ['seeds', 'trail mix', 'dry fruits', 'snacks', 'healthy'] },
  { id: 'food-dabur-honey-500g', category: 'food', brand: 'Dabur', name: '100% Pure Honey 500 g', description: 'No added sugar, rich natural taste.', image: I.honey, bg: '#fdf1d4', price: 229, mrp: 325, rating: 4.4, ratingCount: 112340, keywords: ['honey', 'sweetener', 'breakfast'] },
  { id: 'food-india-gate-basmati-rice-5kg', category: 'food', brand: 'India Gate', name: 'Premium Basmati Rice 5 kg', description: 'Long-grain aged basmati.', image: I.basmatiRice, bg: '#f4f0e4', price: 689, mrp: 899, rating: 4.5, ratingCount: 68410, keywords: ['rice', 'basmati', 'staples', 'grocery'] },
  { id: 'food-figaro-olive-oil-1l', category: 'food', brand: 'Figaro', name: 'Olive Oil 1 L', description: 'Ideal for salads and light cooking.', image: I.oliveOil, bg: '#eef3e2', price: 949, mrp: 1399, rating: 4.3, ratingCount: 21050, keywords: ['oil', 'olive oil', 'cooking oil', 'grocery'] },
  { id: 'food-tata-tea-gold-500g', category: 'food', brand: 'Tata Tea', name: 'Gold Assam Tea 500 g', description: 'Rich aroma with long leaves.', image: I.tea, bg: '#f8e9e6', price: 299, mrp: 360, rating: 4.4, ratingCount: 45720, keywords: ['tea', 'chai', 'assam', 'beverage', 'grocery'] },
];
