import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const FURNITURE: Product[] = [
  { id: 'furn-nilkamal-wooden-bookcase', category: 'furniture', brand: 'Nilkamal', name: 'Wooden 3-Shelf Bookcase', description: 'Space-saving open shelf unit.', image: I.bookcase, bg: '#f3ede6', price: 749, mrp: 1899, rating: 4.1, ratingCount: 612, offer: '₹699 with Coupon offer + more', keywords: ['bookcase', 'bookshelf', 'shelf', 'storage'] },
  { id: 'furn-woodsworth-study-table', category: 'furniture', brand: 'Woodsworth', name: 'Engineered Wood Study Table with Drawers', description: 'Compact desk with 3 drawers.', image: I.studyDesk, bg: '#f4efe6', price: 4999, mrp: 9999, rating: 4.1, ratingCount: 3120, tag: 'TOP RATED', keywords: ['desk', 'study table', 'table', 'office'] },
  { id: 'furn-green-soul-office-chair', category: 'furniture', brand: 'Green Soul', name: 'Ergonomic Mesh Office Chair', description: 'Adjustable height with lumbar support.', image: I.officeChair, bg: '#eceff2', price: 5499, mrp: 12999, rating: 4.2, ratingCount: 18240, tag: 'BESTSELLER', keywords: ['chair', 'office chair', 'seating', 'office'] },
  { id: 'furn-wakefit-3-seater-sofa', category: 'furniture', brand: 'Wakefit', name: '3 Seater Fabric Sofa (Grey Blue)', description: 'High-density foam with wooden legs.', image: I.sofa, bg: '#edf0f5', price: 17999, mrp: 32999, rating: 4.3, ratingCount: 4210, keywords: ['sofa', 'couch', 'living room', 'seating'] },
  { id: 'furn-godrej-interio-queen-bed', category: 'furniture', brand: 'Godrej Interio', name: 'Queen Size Wooden Bed with Headboard', description: 'Solid frame with box storage option.', image: I.bed, bg: '#f2ece8', price: 14999, mrp: 26999, rating: 4.2, ratingCount: 2680, keywords: ['bed', 'queen bed', 'bedroom'] },
  { id: 'furn-homecentre-round-coffee-table', category: 'furniture', brand: 'Home Centre', name: 'Round Wooden Coffee Table', description: 'Sturdy centre table for living rooms.', image: I.coffeeTable, bg: '#f6eee4', price: 2899, mrp: 5499, rating: 4.0, ratingCount: 1530, keywords: ['coffee table', 'centre table', 'table', 'living room'] },
];
