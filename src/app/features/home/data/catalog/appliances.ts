import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const APPLIANCES: Product[] = [
  { id: 'appl-prestige-pressure-cooker-5l', category: 'appliances', brand: 'Prestige', name: 'Aluminium Pressure Cooker 5 L', description: 'Induction base, safety valve.', image: I.pressureCooker, bg: '#eef0f3', price: 1349, mrp: 2095, rating: 4.4, ratingCount: 30421, offer: '₹1,214 with Bank offer', keywords: ['pressure cooker', 'cooker', 'kitchen', 'cookware'] },
  { id: 'appl-havells-electric-kettle-1-5l', category: 'appliances', brand: 'Havells', name: 'Electric Kettle 1.5 L', description: 'Stainless steel, auto cut-off.', image: I.electricKettle, bg: '#eef1f2', price: 699, mrp: 1495, rating: 4.3, ratingCount: 18322, keywords: ['electric kettle', 'kettle', 'kitchen', 'water heater'] },
  { id: 'appl-bajaj-rex-mixer-grinder', category: 'appliances', brand: 'Bajaj', name: 'Rex 500W Mixer Grinder with 3 Jars', description: 'Powerful motor with overload protection.', image: I.mixerGrinder, bg: '#fbeeee', price: 2199, mrp: 3290, rating: 4.2, ratingCount: 76310, tag: 'BESTSELLER', keywords: ['mixer', 'grinder', 'mixie', 'blender', 'kitchen'] },
  { id: 'appl-philips-steam-iron', category: 'appliances', brand: 'Philips', name: 'Steam Iron with Non-Stick Soleplate', description: '2000W with spray and vertical steam.', image: I.steamIron, bg: '#e8f1fb', price: 1599, mrp: 2495, rating: 4.3, ratingCount: 41120, keywords: ['iron', 'steam iron', 'clothes', 'press'] },
  { id: 'appl-pigeon-digital-air-fryer-4l', category: 'appliances', brand: 'Pigeon', name: 'Digital Air Fryer 4 L', description: 'Rapid air technology, 8 presets.', image: I.airFryer, bg: '#eef0f2', price: 4299, mrp: 8995, rating: 4.1, ratingCount: 9810, tag: 'HOT DEAL', keywords: ['air fryer', 'airfryer', 'fryer', 'kitchen'] },
  { id: 'appl-havells-ceiling-fan-1200mm', category: 'appliances', brand: 'Havells', name: 'Ceiling Fan 1200 mm (Wood Brown)', description: 'High-speed motor with 5-star rating.', image: I.ceilingFan, bg: '#f4eee9', price: 2199, mrp: 3550, rating: 4.4, ratingCount: 23440, keywords: ['fan', 'ceiling fan', 'cooling'] },
  { id: 'appl-ifb-convection-microwave-25l', category: 'appliances', brand: 'IFB', name: '25 L Convection Microwave Oven', description: 'Auto cook menus with child lock.', image: I.microwave, bg: '#eef0f3', price: 9490, mrp: 14990, rating: 4.4, ratingCount: 15730, offer: '₹8,990 with Bank offer', keywords: ['microwave', 'oven', 'convection', 'kitchen'] },
];
