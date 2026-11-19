import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const TOYS: Product[] = [
  { id: 'toys-funzone-remote-robot', category: 'toys', brand: 'FunZone', name: 'Remote Control Robot', description: 'Walks, talks and lights up.', image: I.remoteControlRobot, bg: '#fdeedd', price: 549, mrp: 1499, rating: 4.2, ratingCount: 2980, tag: 'KIDS FAVOURITE', freeDelivery: true, keywords: ['robot', 'remote control', 'kids', 'toy'] },
  { id: 'toys-playkart-alphabet-blocks', category: 'toys', brand: 'Playkart', name: 'Alphabet Building Blocks (Set of 36)', description: 'Colourful wooden learning blocks.', image: I.buildingBlocks, bg: '#eaf2fb', price: 399, mrp: 999, rating: 4.3, ratingCount: 5120, tag: 'LEARNING', freeDelivery: true, keywords: ['blocks', 'building blocks', 'kids', 'toy', 'learning'] },
  { id: 'toys-huggy-teddy-bear', category: 'toys', brand: 'Huggy', name: 'Soft Teddy Bear 60 cm', description: 'Plush toy with a red bow tie.', image: I.teddyBear, bg: '#f7eadf', price: 449, mrp: 1299, rating: 4.4, ratingCount: 8410, freeDelivery: true, keywords: ['teddy', 'teddy bear', 'soft toy', 'plush', 'kids', 'toy'] },
  { id: 'toys-zest-rc-racing-car', category: 'toys', brand: 'Zest', name: 'Remote Control Racing Car', description: 'Rechargeable car with 2.4 GHz remote.', image: I.rcCar, bg: '#fbeaea', price: 699, mrp: 1799, rating: 4.0, ratingCount: 3760, tag: 'HOT DEAL', freeDelivery: true, keywords: ['rc car', 'remote control', 'car', 'kids', 'toy'] },
  { id: 'toys-camlin-crayons-24', category: 'toys', brand: 'Camlin', name: 'Wax Crayons 24 Shades', description: 'Non-toxic crayons for school and art.', image: I.crayons, bg: '#fdf5da', price: 120, mrp: 180, rating: 4.5, ratingCount: 12980, keywords: ['crayons', 'colours', 'art', 'drawing', 'kids', 'stationery'] },
];
