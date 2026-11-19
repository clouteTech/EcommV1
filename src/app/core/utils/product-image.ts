import { IMAGES } from '../constants/image-assets';
import { PENDING_IMAGES } from '../constants/pending-images';
import { Product } from '../../models/product.model';

/**
 * The picture to show for a product. If the photo file has not been added to public/ yet
 * (it is listed in pending-images.ts), the neutral "Photo coming soon" picture is used instead of
 * requesting a file that does not exist. Used by cards, quick view and cart so a product looks the same everywhere.
 */
export function productImage(product: Product): string {
  return PENDING_IMAGES.has(product.image) ? IMAGES.fallback : product.image;
}

/** Background behind the picture (neutral grey while the photo is pending). */
export function productBg(product: Product): string {
  return PENDING_IMAGES.has(product.image) ? '#f1f1f1' : product.bg;
}
