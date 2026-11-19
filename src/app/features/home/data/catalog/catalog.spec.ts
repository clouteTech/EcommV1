import { describe, expect, it } from 'vitest';
import { filterProducts, uniqueById } from '../../../../core/utils/product-search';
import { CATEGORIES, SECTIONS } from '../home-data';
import { PRODUCT_CATALOG } from './index';

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

  it('gives every shopping category its own products', () => {
    for (const c of CATEGORIES.filter((x) => x.id !== 'for-you')) {
      const list = filterProducts(PRODUCT_CATALOG, { category: c.id });
      expect(list.length, c.id).toBeGreaterThanOrEqual(5);
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
    expect(hits.length).toBeGreaterThanOrEqual(2);
    expect(hits.every((p) => p.category === 'electronics')).toBe(true);
  });

  it('handles plurals', () => {
    const watches = filterProducts(PRODUCT_CATALOG, { query: 'watches' });
    expect(watches.some((p) => p.id === 'fash-lee-cooper-watch-rose')).toBe(true);
  });

  it('combines category and search', () => {
    const hits = filterProducts(PRODUCT_CATALOG, { category: 'mobiles', query: 'redmi' });
    expect(hits.map((p) => p.id)).toEqual(['mob-redmi-note-14-5g']);
  });

  it('removes duplicate ids', () => {
    const one = PRODUCT_CATALOG[0];
    expect(uniqueById([one, one, PRODUCT_CATALOG[1]]).length).toBe(2);
  });
});
