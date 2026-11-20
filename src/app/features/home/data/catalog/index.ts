import { INTERIM_IMAGES, SHOW_INTERIM_ILLUSTRATIONS } from '../../../../core/constants/interim-images';
import { PENDING_IMAGES } from '../../../../core/constants/pending-images';
import { Product } from '../../../../models/product.model';
import { APPLIANCES } from './appliances';
import { AUTO } from './auto';
import { BEAUTY } from './beauty';
import { BOOKS } from './books';
import { ELECTRONICS } from './electronics';
import { FASHION } from './fashion';
import { FOOD } from './food';
import { FURNITURE } from './furniture';
import { HOME } from './home';
import { MOBILES } from './mobiles';
import { SPORTS } from './sports';
import { TOYS } from './toys';
import { WHEELERS } from './wheelers';

/** Uses the interim illustration for a product whose real photo is not in the project yet (if enabled). */
const resolveImage = (p: Product): Product => {
  const interim = SHOW_INTERIM_ILLUSTRATIONS && PENDING_IMAGES.has(p.image) ? INTERIM_IMAGES[p.image] : undefined;
  return interim ? { ...p, image: interim } : p;
};

/** Every product record, including products whose photograph has not been added yet. */
export const FULL_CATALOG: readonly Product[] = ([
  ...FASHION,
  ...MOBILES,
  ...ELECTRONICS,
  ...BEAUTY,
  ...HOME,
  ...APPLIANCES,
  ...TOYS,
  ...FOOD,
  ...AUTO,
  ...SPORTS,
  ...FURNITURE,
  ...BOOKS,
  ...WHEELERS,
]).map(resolveImage);

/**
 * The catalogue the website shows. Every product appears once, with its own id and its own real photograph.
 * A product whose photograph file is missing (listed in pending-images.ts) is left out until the photo is added,
 * so no card ever shows a placeholder or an empty picture. Home-page sections only reference these products by id.
 */
export const PRODUCT_CATALOG: readonly Product[] = FULL_CATALOG.filter(hasRealImage);

/** A product is shown only if its image path is set, is not a placeholder, and its file is not pending. */
export function hasRealImage(p: Product): boolean {
  const path = (p.image ?? '').trim();
  return path.length > 0 && !/placeholder|coming-soon|fallback/i.test(path) && !PENDING_IMAGES.has(path);
}

const BY_ID = new Map(FULL_CATALOG.map((p) => [p.id, p]));
const VISIBLE_IDS = new Set(PRODUCT_CATALOG.map((p) => p.id));

/**
 * Looks a product up by id. Throws early (in dev and tests) if the id does not exist at all;
 * returns undefined when the product exists but is hidden because its photograph is still pending.
 */
export function productById(id: string): Product | undefined {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`Unknown product id: ${id}`);
  return VISIBLE_IDS.has(id) ? found : undefined;
}
