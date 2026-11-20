import { describe, expect, it } from 'vitest';
import { filterProducts, uniqueById } from '../../../../core/utils/product-search';
import { CATEGORIES, SECTIONS } from '../home-data';
import { PENDING_IMAGES } from '../../../../core/constants/pending-images';
import { BrokenImages } from '../../../../core/services/broken-images';
import { FULL_CATALOG, PRODUCT_CATALOG, hasRealImage } from './index';

describe('product catalogue', () => {
  it('has a unique id for every product', () => {
    const ids = PRODUCT_CATALOG.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('never shares one picture between two products', () => {
    const images = PRODUCT_CATALOG.map((p) => p.image);
    expect(new Set(images).size).toBe(images.length);
  });

  it('never repeats a brand + name pair', () => {
    const keys = PRODUCT_CATALOG.map((p) => `${p.brand ?? ''}|${p.name}`.toLowerCase());
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('has a sane price, discount and rating on every product', () => {
    for (const p of PRODUCT_CATALOG) {
      expect(p.price, p.id).toBeGreaterThan(0);
      expect(p.mrp, p.id).toBeGreaterThanOrEqual(p.price);
      expect(p.rating, p.id).toBeGreaterThanOrEqual(0);
      expect(p.rating, p.id).toBeLessThanOrEqual(5);
    }
  });

  it('only shows products whose photograph is not pending (file existence is checked by npm run check:assets)', () => {
    for (const p of PRODUCT_CATALOG) {
      expect(PENDING_IMAGES.has(p.image), p.id).toBe(false);
    }
  });

  it('shows each pending-photo product with its own interim picture, or hides it', () => {
    const hidden = FULL_CATALOG.filter((p) => !PRODUCT_CATALOG.includes(p));
    expect(hidden.every((p) => PENDING_IMAGES.has(p.image))).toBe(true);
    expect(hidden.length + PRODUCT_CATALOG.length).toBe(FULL_CATALOG.length);
  });

  it('keeps each category list consistent', () => {
    for (const c of CATEGORIES.filter((x) => x.id !== 'for-you')) {
      const list = filterProducts(PRODUCT_CATALOG, { category: c.id });
      expect(list.every((p) => p.category === c.id)).toBe(true);
    }
  });

  it('keeps home sections free of repeated products', () => {
    for (const s of SECTIONS) {
      const ids = s.products.map((p) => p.id);
      expect(new Set(ids).size, s.id).toBe(ids.length);
    }
  });
});

describe('product search', () => {
  it('finds headphones by name or synonym and nothing unrelated', () => {
    const hits = filterProducts(PRODUCT_CATALOG, { query: 'headphone' });
    expect(hits.length).toBeGreaterThanOrEqual(1);
    expect(hits.every((p) => p.category === 'electronics')).toBe(true);
  });

  it('handles plurals', () => {
    const watches = filterProducts(PRODUCT_CATALOG, { query: 'watches' });
    expect(watches.some((p) => p.id === 'fash-lee-cooper-watch-rose')).toBe(true);
  });

  it('combines category and search', () => {
    const hits = filterProducts(PRODUCT_CATALOG, { category: 'mobiles', query: 'pulse' });
    expect(hits.map((p) => p.id)).toEqual(['mob-ai-plus-pulse-2']);
  });

  it('removes duplicate ids', () => {
    const one = PRODUCT_CATALOG[0];
    expect(uniqueById([one, one, PRODUCT_CATALOG[1]]).length).toBe(2);
  });
});

describe('image validity', () => {
  const base = PRODUCT_CATALOG[0];

  it('excludes empty, placeholder and pending image paths', () => {
    expect(hasRealImage({ ...base, image: '' })).toBe(false);
    expect(hasRealImage({ ...base, image: '/images/placeholder-product.png' })).toBe(false);
    expect(hasRealImage({ ...base, image: [...PENDING_IMAGES][0] })).toBe(false);
    expect(hasRealImage(base)).toBe(true);
  });

  it('remembers pictures that failed to load', () => {
    const broken = new BrokenImages();
    expect(broken.isBroken('/images/x.png')).toBe(false);
    broken.report('/images/x.png');
    expect(broken.isBroken('/images/x.png')).toBe(true);
  });
});
