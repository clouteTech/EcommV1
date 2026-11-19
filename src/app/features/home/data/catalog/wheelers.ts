import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const WHEELERS: Product[] = [
  { id: 'wheel-hero-splendor-plus', category: 'wheelers', brand: 'Hero', name: 'Splendor Plus Self Start Motorcycle (Candy Red)', description: '100cc commuter with i3S fuel saving.', image: I.motorcycle, bg: '#f7ebea', price: 76500, mrp: 79000, rating: 4.4, ratingCount: 12480, tag: 'POPULAR', keywords: ['bike', 'motorcycle', 'two wheeler', 'vehicle'] },
  { id: 'wheel-ola-s1-x-scooter', category: 'wheelers', brand: 'Ola', name: 'S1 X Electric Scooter (Teal)', description: '3 kWh battery with 151 km range.', image: I.electricScooter, bg: '#e6f4f1', price: 79999, mrp: 99999, rating: 4.1, ratingCount: 8340, tag: 'NEW', keywords: ['scooter', 'electric scooter', 'ev', 'two wheeler', 'vehicle'] },
  { id: 'wheel-steelbird-full-face-helmet', category: 'wheelers', brand: 'Steelbird', name: 'Full Face ISI Helmet with Visor', description: 'Impact-resistant shell, scratch-proof visor.', image: I.helmet, bg: '#eceef0', price: 1099, mrp: 1850, rating: 4.2, ratingCount: 21330, tag: 'BESTSELLER', keywords: ['helmet', 'riding', 'bike', 'safety'] },
  { id: 'wheel-cramster-riding-gloves', category: 'wheelers', brand: 'Cramster', name: 'Full Finger Riding Gloves', description: 'Padded palm with touchscreen fingertips.', image: I.ridingGloves, bg: '#f0f0f0', price: 449, mrp: 999, rating: 4.0, ratingCount: 6720, keywords: ['gloves', 'riding', 'bike', 'safety'] },
  { id: 'wheel-autofy-bike-body-cover', category: 'wheelers', brand: 'Autofy', name: 'Water-Resistant Bike Body Cover', description: 'Dust and UV protection, universal fit.', image: I.bikeCover, bg: '#eaeef1', price: 349, mrp: 799, rating: 4.1, ratingCount: 15410, keywords: ['bike cover', 'cover', 'bike', 'accessories'] },
  { id: 'wheel-godrej-disc-brake-lock', category: 'wheelers', brand: 'Godrej', name: 'Motorcycle Disc Brake Lock', description: 'Hardened steel pin with 2 keys.', image: I.discBrakeLock, bg: '#fbf4d9', price: 399, mrp: 899, rating: 4.3, ratingCount: 4210, keywords: ['lock', 'disc lock', 'bike', 'security', 'accessories'] },
];
