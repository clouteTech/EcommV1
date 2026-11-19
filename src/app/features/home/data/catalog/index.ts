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

/**
 * The single product catalogue. Every product appears here exactly once, with its own id and its own picture.
 * Home-page sections (Suggested, Recommended) only reference these products by id – they never copy them.
 */
export const PRODUCT_CATALOG: readonly Product[] = [
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
];

const BY_ID = new Map(PRODUCT_CATALOG.map((p) => [p.id, p]));

/** Looks a product up by id; throws early (in dev and tests) if a section points at an unknown id. */
export function productById(id: string): Product {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`Unknown product id: ${id}`);
  return found;
}
