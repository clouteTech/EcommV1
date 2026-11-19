import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const SPORTS: Product[] = [
  { id: 'sport-nano-football-size-5', category: 'sports', brand: 'NANO', name: 'PU Leather Football with Air Pump', description: 'Standard size 5, includes pump.', image: I.football, bg: '#f2f2f2', price: 349, mrp: 899, rating: 4.0, ratingCount: 11, tag: 'SPORTY', freeDelivery: true, keywords: ['football', 'soccer', 'ball'] },
  { id: 'sport-sg-kashmir-willow-bat', category: 'sports', brand: 'SG', name: 'Kashmir Willow Cricket Bat (Full Size)', description: 'Light pick-up with cane handle.', image: I.cricketBat, bg: '#f6eddc', price: 1199, mrp: 2199, rating: 4.2, ratingCount: 6120, keywords: ['cricket', 'bat', 'cricket bat'] },
  { id: 'sport-yonex-badminton-racquet', category: 'sports', brand: 'Yonex', name: 'Graphite Badminton Racquet with Cover', description: 'Lightweight frame for fast play.', image: I.badmintonRacket, bg: '#e8f1fb', price: 1099, mrp: 1750, rating: 4.4, ratingCount: 14320, keywords: ['badminton', 'racket', 'racquet'] },
  { id: 'sport-boldfit-yoga-mat', category: 'sports', brand: 'Boldfit', name: 'Anti-Skid Yoga Mat 6 mm', description: 'Extra thick with carry strap.', image: I.yogaMat, bg: '#f0eafa', price: 399, mrp: 1299, rating: 4.2, ratingCount: 27650, tag: 'TRENDING', keywords: ['yoga', 'mat', 'exercise', 'fitness', 'gym'] },
  { id: 'sport-kore-dumbbell-set', category: 'sports', brand: 'Kore', name: 'Hex Dumbbell Pair 5 kg', description: 'Rubber coated, anti-roll design.', image: I.dumbbells, bg: '#eceff1', price: 999, mrp: 1999, rating: 4.3, ratingCount: 9210, keywords: ['dumbbell', 'weights', 'gym', 'fitness', 'exercise'] },
  { id: 'sport-milton-sports-bottle-1l', category: 'sports', brand: 'Milton', name: 'Insulated Sports Bottle 1 L', description: 'Keeps drinks cold for 24 hours.', image: I.sportsBottle, bg: '#e4f4f7', price: 449, mrp: 799, rating: 4.4, ratingCount: 33180, keywords: ['bottle', 'water bottle', 'sipper', 'gym', 'fitness'] },
];
