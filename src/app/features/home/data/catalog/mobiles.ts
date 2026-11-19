import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;
const PHONE = ['phone', 'smartphone', 'mobile', '5g'];

export const MOBILES: Product[] = [
  { id: 'mob-ai-plus-pulse-2', category: 'mobiles', brand: 'Ai+', name: 'Pulse 2 (Black, 64 GB)', description: '6000mAh battery, 50MP dual camera.', image: I.aiPlusPulsePhone, bg: '#f0f0f0', price: 10999, mrp: 12499, rating: 4.1, ratingCount: 19596, tag: 'HOT DEAL', freeDelivery: true, offer: '₹10,449 with Bank offer', keywords: PHONE },
  { id: 'mob-redmi-note-14-5g', category: 'mobiles', brand: 'Redmi', name: 'Note 14 5G (Midnight Blue, 128 GB)', description: '108MP camera, AMOLED display.', image: I.redmiPhone, bg: '#eceffa', price: 16999, mrp: 21999, rating: 4.4, ratingCount: 58120, tag: 'BESTSELLER', freeDelivery: true, keywords: PHONE },
  { id: 'mob-realme-narzo-80x-5g', category: 'mobiles', brand: 'realme', name: 'Narzo 80x 5G (Black, 128 GB)', description: '6000mAh battery, 120Hz display.', image: I.realmePhone, bg: '#fdf0ea', price: 12999, mrp: 16999, rating: 4.3, ratingCount: 22440, tag: 'TRENDING', freeDelivery: true, keywords: PHONE },
  { id: 'mob-poco-m7-plus-5g', category: 'mobiles', brand: 'POCO', name: 'M7 Plus 5G (Blue, 128 GB)', description: '7000mAh battery, Snapdragon 6 Gen 3.', image: I.pocoPhone, bg: '#e8f5ee', price: 12499, mrp: 16999, rating: 4.2, ratingCount: 14310, tag: 'GREAT VALUE', freeDelivery: true, keywords: PHONE },
  { id: 'mob-motorola-g45-5g', category: 'mobiles', brand: 'Motorola', name: 'G45 5G (Black, 128 GB)', description: 'Snapdragon 6s Gen 3, 50MP camera.', image: I.motorolaPhone, bg: '#f0eafb', price: 9999, mrp: 15999, rating: 4.2, ratingCount: 31220, tag: 'TOP RATED', freeDelivery: true, keywords: PHONE },
  { id: 'mob-infinix-hot-50-5g', category: 'mobiles', brand: 'Infinix', name: 'Hot 50 5G (Blue, 128 GB)', description: 'Dimensity 6300, 48MP camera.', image: I.infinixPhone, bg: '#fff6df', price: 8999, mrp: 13999, rating: 4.1, ratingCount: 17640, tag: 'DAILY SAVERS', freeDelivery: true, keywords: PHONE },
  { id: 'mob-samsung-galaxy-m35-5g', category: 'mobiles', brand: 'SAMSUNG', name: 'Galaxy M35 5G (Thunder Grey, 128 GB)', description: '6000mAh battery, Super AMOLED display.', image: I.samsungPhone, bg: '#e6f3f8', price: 15499, mrp: 24499, rating: 4.3, ratingCount: 40870, tag: 'NEW', freeDelivery: true, offer: '₹14,749 with Bank offer', keywords: PHONE },
];
