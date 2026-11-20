import { IMAGES } from '../../../core/constants/image-assets';
import { Banner } from '../../../models/banner.model';
import { Category } from '../../../models/category.model';
import { Product, ProductSectionData } from '../../../models/product.model';
import { PRODUCT_CATALOG, productById } from './catalog';

export const CATEGORIES: Category[] = [
  { id: 'for-you', label: 'For You', icon: IMAGES.icons.forYou },
  { id: 'fashion', label: 'Fashion', icon: IMAGES.icons.fashion },
  { id: 'mobiles', label: 'Mobiles', icon: IMAGES.icons.mobiles },
  { id: 'electronics', label: 'Electronics', icon: IMAGES.icons.electronics },
  { id: 'beauty', label: 'Beauty', icon: IMAGES.icons.beauty },
  { id: 'home', label: 'Home', icon: IMAGES.icons.home },
  { id: 'appliances', label: 'Appliances', icon: IMAGES.icons.appliances },
  { id: 'toys', label: 'Toys', icon: IMAGES.icons.toys },
  { id: 'food', label: 'Food', icon: IMAGES.icons.food },
  { id: 'auto', label: 'Auto Accessories', icon: IMAGES.icons.auto },
  { id: 'sports', label: 'Sports', icon: IMAGES.icons.sports },
  { id: 'furniture', label: 'Furniture', icon: IMAGES.icons.furniture },
  { id: 'books', label: 'Books', icon: IMAGES.icons.books },
  { id: 'wheelers', label: '2 Wheelers', icon: IMAGES.icons.wheelers },
];

export const BANNERS: Banner[] = [
  { id: 1, eyebrow: 'BEAUTY FAVOURITES', titleLines: ['A little glow.', 'A lot of savings.'], subtitle: 'Up to 60% off', cta: 'Shop now', image: IMAGES.banners.beauty, bg: '#f9e6e8', accent: '#212121', category: 'beauty' },
  { id: 2, eyebrow: 'SIGNATURE SCENTS', titleLines: ['Your new', 'signature scent.'], subtitle: 'From ₹499', cta: 'Shop now', image: IMAGES.banners.scent, bg: '#ece6f7', accent: '#212121', category: 'beauty' },
  { id: 3, eyebrow: 'GROCERY ESSENTIALS', titleLines: ['Fresh picks.', 'Smarter prices.'], subtitle: 'Up to 50% off', cta: 'Shop now', image: IMAGES.banners.grocery, bg: '#e8f2df', accent: '#2f7d32', category: 'food' },
  { id: 4, eyebrow: 'BEST OF ELECTRONICS', titleLines: ['Sound that', 'moves you.'], subtitle: 'Up to 70% off', cta: 'Shop now', image: IMAGES.banners.electronics, bg: '#e6eefc', accent: '#2874f0', category: 'electronics' },
  { id: 5, eyebrow: 'FASHION TOP DEALS', titleLines: ['New season.', 'New you.'], subtitle: 'Min. 40% off', cta: 'Shop now', image: IMAGES.banners.fashion, bg: '#fdeedd', accent: '#d9531e', category: 'fashion' },
];

/** Ids shown in the home-page "Suggested For You" row (wide photos, feature cards). */
const SUGGESTED_IDS = [
  'elec-boat-rockerz-450',
  'beauty-aurum-eau-de-parfum-duo',
  'fash-puma-running-shoes',
  'elec-noise-colorfit-pro',
  'beauty-velvet-glow-skincare-kit',
  'food-greenfield-grocery-combo',
];

/** Ids shown in the home-page "Recommended Products" grid (mixed categories on purpose). */
const RECOMMENDED_IDS = [
  'fash-lee-cooper-watch-rose',
  'fash-lavie-luxe-satchel-white',
  'beauty-dharti-wash-bag-set',
  'home-fineart-plate-rack-square',
  'elec-boat-bar-thump',
  'home-radhe-kitchen-trolley',
  'sport-nano-football-size-5',
  'home-vb-woodvera-spice-shelf',
  'fash-lee-cooper-watch-white',
  'mob-ai-plus-pulse-2',
  'home-mooka-couple-mug-set',
  'fash-fastrack-wayfarer-sunglasses',
];

/** Looks the ids up in the catalogue and silently skips products that are hidden (photo pending). */
const pick = (ids: string[]): Product[] => ids.map(productById).filter((p): p is Product => !!p);

/** Sections rendered on the home page. They only reference catalogue products – no copies. */
export const SECTIONS: ProductSectionData[] = [
  { id: 'suggested', title: 'Suggested For You', subtitle: "Discover something you'll love, at prices you'll love more.", variant: 'feature', layout: 'scroll', products: pick(SUGGESTED_IDS) },
  { id: 'recommended', title: 'Recommended Products', variant: 'listing', layout: 'grid', products: pick(RECOMMENDED_IDS) },
];

/** Pool used by search and category pages: the catalogue, each product once. */
export const ALL_PRODUCTS: readonly Product[] = PRODUCT_CATALOG;
