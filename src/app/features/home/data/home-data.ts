import { IMAGES } from '../../../core/constants/image-assets';
import { Banner } from '../../../models/banner.model';
import { Category } from '../../../models/category.model';
import { Product, ProductSectionData } from '../../../models/product.model';

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
  { id: 1, eyebrow: 'BEAUTY FAVOURITES', titleLines: ['A little glow.', 'A lot of savings.'], subtitle: 'Up to 60% off', cta: 'Shop now', image: IMAGES.banners.beauty, bg: '#f9e6e8', accent: '#212121' },
  { id: 2, eyebrow: 'SIGNATURE SCENTS', titleLines: ['Your new', 'signature scent.'], subtitle: 'From ₹499', cta: 'Shop now', image: IMAGES.banners.scent, bg: '#ece6f7', accent: '#212121' },
  { id: 3, eyebrow: 'GROCERY ESSENTIALS', titleLines: ['Fresh picks.', 'Smarter prices.'], subtitle: 'Up to 50% off', cta: 'Shop now', image: IMAGES.banners.grocery, bg: '#e8f2df', accent: '#2f7d32' },
  { id: 4, eyebrow: 'BEST OF ELECTRONICS', titleLines: ['Sound that', 'moves you.'], subtitle: 'Up to 70% off', cta: 'Shop now', image: IMAGES.banners.beauty, bg: '#e6eefc', accent: '#2874f0' },
  { id: 5, eyebrow: 'FASHION TOP DEALS', titleLines: ['New season.', 'New you.'], subtitle: 'Min. 40% off', cta: 'Shop now', image: IMAGES.banners.scent, bg: '#fdeedd', accent: '#d9531e' },
];

let nextId = 1;
const p = (
  category: string,
  brand: string | undefined,
  name: string,
  description: string,
  image: string,
  bg: string,
  price: number,
  mrp: number,
  rating: number,
  ratingCount: number | undefined,
  extra: Partial<Product> = {},
): Product => ({
  id: nextId++,
  category,
  brand,
  name,
  description,
  image,
  bg,
  price,
  mrp,
  rating,
  ratingCount,
  ...extra,
});

const GREY = '#f1f1f1';

const suggested: Product[] = [
  p('electronics', undefined, 'Wireless Headphones', 'Immersive sound. All-day comfort.', IMAGES.products.sugHeadphones, '#f1f2f4', 1499, 3999, 4.4, 2340, { tag: 'BESTSELLER', freeDelivery: true, landscape: true }),
  p('beauty', undefined, 'Premium Fragrances', 'Make every day a signature day.', IMAGES.products.sugPerfume, '#e6dcf1', 499, 1299, 4.3, 1820, { tag: 'TOP RATED', freeDelivery: true, landscape: true }),
  p('fashion', undefined, 'Everyday Sneakers', 'Your next favourite pair.', IMAGES.products.sugSneakers, '#f1f2f4', 899, 2499, 4.2, 5120, { tag: 'TRENDING', freeDelivery: true, landscape: true }),
  p('electronics', undefined, 'Smartwatches', 'Stay connected. Keep moving.', IMAGES.products.sugSmartwatch, '#f1f2f4', 1299, 4999, 4.4, 9210, { tag: 'GREAT VALUE', freeDelivery: true, landscape: true }),
  p('beauty', undefined, 'Skincare Favourites', 'A little care goes a long way.', IMAGES.products.sugSkincare, '#f9e6e8', 299, 699, 4.5, 3340, { tag: 'BEAUTY PICKS', freeDelivery: true, landscape: true }),
  p('food', undefined, 'Daily Grocery Essentials', 'Stock up on the everyday.', IMAGES.products.sugGrocery, '#e1ecd7', 199, 399, 4.1, 760, { tag: 'DAILY SAVERS', freeDelivery: true, landscape: true }),
];

const electronics: Product[] = [
  p('electronics', 'boAt', 'Rockerz Bluetooth Headphones', 'Up to 60H playback with fast charge.', IMAGES.products.headphonesBlackSvg, GREY, 1299, 4490, 4.2, 48210, { tag: 'BESTSELLER', freeDelivery: true }),
  p('electronics', 'Noise', 'ColorFit Pro Smartwatch', '1.8" display with Bluetooth calling.', IMAGES.products.smartwatchBlackSvg, GREY, 1799, 5999, 4.1, 21045, { tag: 'TRENDING', freeDelivery: true }),
  p('electronics', 'boAt', 'Aavante Bar Soundbar 2.1', 'Wired subwoofer, 120W RMS output.', IMAGES.products.soundbarSvg, GREY, 6299, 22990, 4.4, 60754, { tag: 'TOP RATED', freeDelivery: true }),
  p('electronics', 'ASUS', 'Vivobook 15 Laptop', 'Intel Core i5, 16 GB RAM, 512 GB SSD.', IMAGES.products.laptopSvg, GREY, 42990, 62990, 4.3, 8412, { tag: 'GREAT VALUE', freeDelivery: true }),
  p('electronics', 'Canon', 'EOS Mirrorless Camera', '24.1 MP sensor with 4K video.', IMAGES.products.cameraSvg, GREY, 48990, 59995, 4.6, 1204, { tag: 'NEW', freeDelivery: true }),
  p('electronics', 'Zebronics', 'Studio Over-Ear Headphones', 'Deep bass with soft ear cushions.', IMAGES.products.headphonesBlueSvg, GREY, 999, 2999, 4.0, 12980, { tag: 'DAILY SAVERS', freeDelivery: true }),
  p('electronics', 'Fire-Boltt', 'Ninja Call Smartwatch', 'AI voice assistant and 120 sports modes.', IMAGES.products.smartwatchNavySvg, GREY, 1099, 8999, 4.0, 90412, { tag: 'HOT DEAL', freeDelivery: true }),
];

const beautyToys: Product[] = [
  p('beauty', 'Aurum', 'Eau de Parfum Duo', 'Long-lasting woody and floral notes.', IMAGES.products.sugPerfume, '#e6dcf1', 649, 1599, 4.3, 4120, { tag: 'TOP RATED', freeDelivery: true }),
  p('beauty', 'Velvet', 'Glow Skincare Kit', 'Cleanser, serum and moisturiser set.', IMAGES.products.sugSkincare, '#f9e6e8', 799, 1999, 4.5, 6230, { tag: 'BEAUTY PICKS', freeDelivery: true }),
  p('beauty', 'Washy', 'Travel Wash Bag Set', 'Water-resistant pouches, set of 3.', IMAGES.products.washbagSvg, '#ece6f7', 151, 799, 4.1, 1397, { tag: 'NEW', freeDelivery: true }),
  p('toys', 'FunZone', 'Remote Control Robot', 'Walks, talks and lights up.', IMAGES.products.robotSvg, '#fdeedd', 549, 1499, 4.2, 2980, { tag: 'KIDS FAVOURITE', freeDelivery: true }),
  p('toys', 'NANO', 'Football with Air Pump', 'PU leather, standard size 5.', IMAGES.products.footballSvg, GREY, 349, 899, 4.0, 11, { tag: 'SPORTY', freeDelivery: true }),
  p('food', 'Yumzy', 'Snack Hamper Combo', 'Chips, cookies and namkeen box.', IMAGES.products.snackRedSvg, '#fdeaea', 249, 549, 4.2, 1840, { tag: 'DAILY SAVERS', freeDelivery: true }),
  p('food', 'Greenfield', 'Healthy Munch Pack', 'Roasted seeds and trail mix.', IMAGES.products.snackGreenSvg, '#e8f2df', 299, 599, 4.4, 920, { tag: 'HEALTHY', freeDelivery: true }),
];

const fashion: Product[] = [
  p('fashion', 'LEE COOPER', 'Quartz Analog Watch - For Women', 'Rose dial with two-tone strap.', IMAGES.products.watchRoseSvg, GREY, 3449, 18450, 4.3, 20, { offer: '₹2,991 with Coupon offer + more' }),
  p('fashion', 'Lavie Luxe', 'Women White Satchel', 'Structured handbag with top handle.', IMAGES.products.handbagWhiteSvg, GREY, 3569, 6499, 5, 7, { offer: '₹3,390 with Bank offer' }),
  p('fashion', 'Fastrack', 'UV Protection Wayfarer Sunglasses', 'Classic black wayfarer frame.', IMAGES.products.sunglassesSvg, GREY, 509, 1200, 4.1, 105572),
  p('fashion', 'LEE COOPER', 'Quartz Analog Watch - For Men', 'Blue dial, stainless steel strap.', IMAGES.products.watchBlueSvg, GREY, 3359, 18450, 4.3, 31, { offer: '₹2,906 with Coupon offer + more' }),
  p('fashion', 'Roadster', 'Cotton Round Neck T-Shirt', 'Soft everyday tee, regular fit.', IMAGES.products.tshirtBlueSvg, GREY, 349, 999, 4.0, 18240, { tag: 'New Arrival' }),
  p('fashion', 'Lavie Luxe', 'Women Tan Tote Bag', 'Roomy tote with zip closure.', IMAGES.products.handbagTanSvg, GREY, 1899, 3999, 4.2, 412, { offer: '₹1,790 with Bank offer' }),
  p('fashion', 'Puma', 'Running Shoes For Men', 'Cushioned sole, breathable mesh.', IMAGES.products.sneakersRedSvg, GREY, 2299, 5999, 4.2, 9812, { offer: '₹2,069 with Bank offer' }),
];

const homeKitchen: Product[] = [
  p('home', 'FineArts', 'Plate Kitchen Rack Unique Square', 'Stainless steel 12-plate stand.', IMAGES.products.platerackSvg, GREY, 186, 999, 4.1, 922),
  p('home', 'VB WOODVERA', 'Utensil Kitchen Rack Counter Shelf', 'Three-tier wooden spice organiser.', IMAGES.products.shelfSvg, GREY, 399, 1299, 4.0, 244, { offer: '₹359 with Bank offer', tag: 'New Arrival' }),
  p('home', 'MOOKA', 'Luxury Couple Mug Set with Lid and Spoon', 'Ceramic mugs in a gift tray.', IMAGES.products.mugsSvg, GREY, 900, 2499, 4.2, 1580),
  p('appliances', 'Prestige', 'Aluminium Pressure Cooker 5 L', 'Induction base, safety valve.', IMAGES.products.cookerSvg, GREY, 1349, 2095, 4.4, 30421, { offer: '₹1,214 with Bank offer' }),
  p('appliances', 'Havells', 'Electric Kettle 1.5 L', 'Stainless steel, auto cut-off.', IMAGES.products.kettleSvg, GREY, 699, 1495, 4.3, 18322),
  p('home', 'RADHE ENTERPRISE', 'Utensil Kitchen Rack Trolley', '4-tier rolling storage cart.', IMAGES.products.platerackSvg, GREY, 298, 599, 3.9, 133),
  p('furniture', 'Nilkamal', 'Wooden Step Organiser Shelf', 'Space-saving counter organiser.', IMAGES.products.shelfSvg, GREY, 749, 1899, 4.1, 612, { offer: '₹699 with Coupon offer + more' }),
];

const mobiles: Product[] = [
  p('mobiles', 'Ai+', 'Pulse 2 (Black, 64 GB)', '6000mAh battery, 50MP dual camera.', IMAGES.products.phoneBlackSvg, GREY, 10999, 12499, 4.1, 19596, { tag: 'HOT DEAL', freeDelivery: true, offer: '₹10,449 with Bank offer' }),
  p('mobiles', 'Redmi', 'Note 14 5G (Midnight Blue, 128 GB)', '108MP camera, AMOLED display.', IMAGES.products.phoneBlueSvg, GREY, 16999, 21999, 4.4, 58120, { tag: 'BESTSELLER', freeDelivery: true }),
  p('mobiles', 'realme', 'Narzo 80x 5G (Black, 128 GB)', '6000mAh battery, 120Hz display.', IMAGES.products.phoneBlackSvg, GREY, 12999, 16999, 4.3, 22440, { tag: 'TRENDING', freeDelivery: true }),
  p('mobiles', 'POCO', 'M7 Plus 5G (Blue, 128 GB)', '7000mAh battery, Snapdragon 6 Gen 3.', IMAGES.products.phoneBlueSvg, GREY, 12499, 16999, 4.2, 14310, { tag: 'GREAT VALUE', freeDelivery: true }),
  p('mobiles', 'Motorola', 'G45 5G (Black, 128 GB)', 'Snapdragon 6s Gen 3, 50MP camera.', IMAGES.products.phoneBlackSvg, GREY, 9999, 15999, 4.2, 31220, { tag: 'TOP RATED', freeDelivery: true }),
  p('mobiles', 'Infinix', 'Hot 50 5G (Blue, 128 GB)', 'Dimensity 6300, 48MP camera.', IMAGES.products.phoneBlueSvg, GREY, 8999, 13999, 4.1, 17640, { tag: 'DAILY SAVERS', freeDelivery: true }),
];

const recommended: Product[] = [
  p('fashion', 'LEE COOPER', 'Quartz Analog Watch - For Women', 'Rose dial with two-tone strap.', IMAGES.products.watchRose, GREY, 3449, 18450, 4.3, 20, { offer: '₹2,991 with Coupon offer + more' }),
  p('fashion', 'Lavie Luxe', 'Women White Satchel', 'Structured top-handle bag.', IMAGES.products.satchel, GREY, 3569, 6499, 5, 7, { offer: '₹3,390 with Bank offer' }),
  p('beauty', 'dharti enterprise', 'Wash Bag Cosmetic Case', 'Clear travel organiser set.', IMAGES.products.washbag, GREY, 151, 799, 4.1, 1397, { offer: '₹133 with Coupon offer + more' }),
  p('home', 'FineArts', 'Plate Kitchen Rack Unique Square', 'Stainless steel plate stand.', IMAGES.products.platerack, GREY, 186, 999, 4.1, 922),
  p('electronics', 'boAt', 'Bar Thump with Wired Subwoofer, Remote', 'Wired subwoofer, 120W.', IMAGES.products.soundbar, GREY, 6299, 22990, 4.4, 60754, { offer: '₹5,858 with Bank offer' }),
  p('home', 'RADHE ENTERPRISE', 'Utensil Kitchen Rack Trolley', '4-tier rolling storage cart.', IMAGES.products.trolley, GREY, 298, 599, 0, undefined, { tag: 'New Arrival' }),
  p('sports', 'NANO', 'PU Leather Football Standard Pack', 'Size 5 with air pump.', IMAGES.products.football, GREY, 349, 899, 4, 11),
  p('furniture', 'VB WOODVERA', 'Utensil Kitchen Rack Counter Shelf', 'Three-tier wooden organiser.', IMAGES.products.shelf, GREY, 399, 1299, 4, 244, { offer: '₹359 with Bank offer' }),
  p('fashion', 'LEE COOPER', 'Quartz Analog Watch - For Women', 'White dial with two-tone strap.', IMAGES.products.watchWhite, GREY, 3359, 18450, 4.3, 31, { offer: '₹2,906 with Coupon offer + more' }),
  p('mobiles', 'Ai+', 'Pulse 2 (Black, 64 GB)', '6000mAh battery, 50MP camera.', IMAGES.products.phone, GREY, 10999, 12499, 4.1, 19596, { offer: '₹10,449 with Bank offer' }),
  p('home', 'MOOKA', 'Luxury Couple Set with Lid and Spoon', 'Ceramic mugs in a gift tray.', IMAGES.products.mugs, GREY, 900, 2499, 0, undefined),
  p('fashion', 'Fastrack', 'UV Protection Wayfarer Sunglasses', 'Classic black wayfarer.', IMAGES.products.sunglasses, '#e6dde0', 509, 1200, 4.1, 105572),
];

const ALL_SECTIONS: ProductSectionData[] = [
  { id: 'suggested', title: 'Suggested For You', subtitle: "Discover something you'll love, at prices you'll love more.", variant: 'feature', layout: 'scroll', products: suggested },
  { id: 'electronics', title: 'Best of Electronics', subtitle: 'Top picks in audio, wearables and more.', variant: 'feature', layout: 'scroll', products: electronics },
  { id: 'beauty-toys', title: 'Beauty, Food, Toys & More', subtitle: 'Little treats for every day.', variant: 'feature', layout: 'scroll', products: beautyToys },
  { id: 'fashion', title: 'Fashion Top Deals', subtitle: 'Styles that are worth the scroll.', variant: 'listing', layout: 'scroll', products: fashion },
  { id: 'home-kitchen', title: 'Home & Kitchen Essentials', subtitle: 'Organise, cook and decorate for less.', variant: 'listing', layout: 'scroll', products: homeKitchen },
  { id: 'mobiles', title: 'Top Deals on Mobiles', subtitle: 'Latest smartphones with exchange and bank offers.', variant: 'feature', layout: 'scroll', products: mobiles },
  { id: 'recommended', title: 'Recommended Products', variant: 'listing', layout: 'grid', products: recommended },
];

/** Sections rendered on the home page – exactly the ones visible in the reference screenshots. */
export const SECTIONS: ProductSectionData[] = ALL_SECTIONS.filter((s) => s.id === 'suggested' || s.id === 'recommended');

const PHOTO_PRODUCTS = [...suggested, ...recommended];
const photoCategories = new Set(PHOTO_PRODUCTS.map((x) => x.category));

/** Pool used by search and category filters: every photo product, plus illustrations for categories without photos. */
export const ALL_PRODUCTS: Product[] = [
  ...PHOTO_PRODUCTS,
  ...ALL_SECTIONS.flatMap((s) => s.products).filter((x) => !photoCategories.has(x.category) && x.image.endsWith('.svg')),
];
