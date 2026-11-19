import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const HOME: Product[] = [
  { id: 'home-fineart-plate-rack-square', category: 'home', brand: 'FineArts', name: 'Plate Kitchen Rack Unique Square', description: 'Stainless steel 12-plate stand.', image: I.plateRack, bg: '#f0f0f0', price: 186, mrp: 999, rating: 4.1, ratingCount: 922, keywords: ['kitchen', 'rack', 'plate stand', 'utensil'] },
  { id: 'home-vb-woodvera-spice-shelf', category: 'home', brand: 'VB WOODVERA', name: 'Utensil Kitchen Rack Counter Shelf', description: 'Three-tier wooden spice organiser.', image: I.spiceShelf, bg: '#efefef', price: 399, mrp: 1299, rating: 4.0, ratingCount: 244, tag: 'New Arrival', offer: '₹359 with Bank offer', keywords: ['kitchen', 'rack', 'shelf', 'organiser', 'spice rack'] },
  { id: 'home-mooka-couple-mug-set', category: 'home', brand: 'MOOKA', name: 'Luxury Couple Mug Set with Lid and Spoon', description: 'Ceramic mugs in a gift tray.', image: I.coupleMugs, bg: '#efefef', price: 900, mrp: 2499, rating: 4.2, ratingCount: 1580, keywords: ['mug', 'cup', 'kitchen', 'gift', 'ceramic'] },
  { id: 'home-radhe-kitchen-trolley', category: 'home', brand: 'RADHE ENTERPRISE', name: 'Utensil Kitchen Rack Trolley', description: '4-tier rolling storage cart.', image: I.kitchenTrolley, bg: '#f2f2f2', price: 298, mrp: 599, rating: 3.9, ratingCount: 133, tag: 'New Arrival', keywords: ['kitchen', 'trolley', 'rack', 'storage', 'cart'] },
  { id: 'home-ajanta-wall-clock', category: 'home', brand: 'Ajanta', name: 'Analog Wall Clock with Wooden Frame', description: 'Silent sweep movement, 30 cm dial.', image: I.wallClock, bg: '#f3ece6', price: 549, mrp: 1299, rating: 4.2, ratingCount: 6720, keywords: ['clock', 'wall clock', 'decor', 'home decor'] },
  { id: 'home-homesake-table-lamp', category: 'home', brand: 'Homesake', name: 'Bedside Table Lamp with Fabric Shade', description: 'Warm light for bedrooms and desks.', image: I.tableLamp, bg: '#fbf3df', price: 699, mrp: 1599, rating: 4.1, ratingCount: 2210, keywords: ['lamp', 'light', 'lighting', 'decor', 'home decor'] },
  { id: 'home-greengarden-ceramic-planter', category: 'home', brand: 'Green Garden', name: 'Terracotta Ceramic Planter with Plant', description: 'Indoor planter pot, 6 inch.', image: I.planter, bg: '#e9f2e4', price: 349, mrp: 799, rating: 4.0, ratingCount: 1184, keywords: ['plant', 'planter', 'pot', 'garden', 'decor', 'home decor'] },
];
