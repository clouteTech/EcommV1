import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const AUTO: Product[] = [
  { id: 'auto-amkette-car-phone-holder', category: 'auto', brand: 'Amkette', name: 'Car Mobile Holder with Suction Mount', description: '360° rotation, fits all phones.', image: I.carPhoneHolder, bg: '#ebeff5', price: 299, mrp: 999, rating: 4.1, ratingCount: 34120, tag: 'BESTSELLER', keywords: ['car', 'phone holder', 'mobile holder', 'mount', 'accessories'] },
  { id: 'auto-70mai-dash-cam', category: 'auto', brand: '70mai', name: 'Full HD Dash Cam with Night Vision', description: '1080p recording with loop mode.', image: I.dashCam, bg: '#e9f1f4', price: 3499, mrp: 6999, rating: 4.2, ratingCount: 7120, keywords: ['dash cam', 'dashcam', 'car camera', 'car', 'accessories'] },
  { id: 'auto-bergmann-tyre-inflator', category: 'auto', brand: 'Bergmann', name: 'Portable Digital Tyre Inflator', description: '12V compressor with auto cut-off.', image: I.tyreInflator, bg: '#fdf0e3', price: 1699, mrp: 3499, rating: 4.3, ratingCount: 9840, keywords: ['tyre', 'tire', 'inflator', 'air pump', 'compressor', 'car', 'accessories'] },
  { id: 'auto-autofy-steering-cover', category: 'auto', brand: 'Autofy', name: 'Leather Steering Wheel Cover', description: 'Anti-slip grip with red stitching.', image: I.steeringWheelCover, bg: '#f0f0f0', price: 349, mrp: 899, rating: 4.0, ratingCount: 12760, keywords: ['steering', 'steering cover', 'car', 'accessories'] },
  { id: 'auto-black-decker-car-vacuum', category: 'auto', brand: 'BLACK+DECKER', name: 'Portable Car Vacuum Cleaner', description: 'High suction with 12V adapter.', image: I.carVacuum, bg: '#e7f0fa', price: 1299, mrp: 2599, rating: 4.1, ratingCount: 5430, keywords: ['vacuum', 'cleaner', 'car cleaning', 'car', 'accessories'] },
  { id: 'auto-ambi-pur-hanging-freshener', category: 'auto', brand: 'Ambi Pur', name: 'Car Hanging Air Freshener (Ocean)', description: 'Up to 30 days of fragrance.', image: I.carAirFreshener, bg: '#e6f4f1', price: 149, mrp: 299, rating: 4.2, ratingCount: 18900, keywords: ['air freshener', 'freshener', 'perfume', 'car', 'accessories'] },
];
