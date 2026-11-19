import { Product } from '../../models/product.model';

export interface ProductFilter {
  /** Category id, or 'for-you' / undefined for "all categories". */
  category?: string;
  /** Free-text search typed by the shopper. */
  query?: string;
}

/** Lower-case, strip punctuation and reduce a word to a simple singular ("watches" → "watch"). */
function stem(word: string): string {
  const w = word.toLowerCase().replace(/[^a-z0-9+]/g, '');
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 4 && /(ch|sh|x|s)es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

const tokens = (text: string): string[] => text.split(/\s+/).map(stem).filter(Boolean);

/** Removes repeated ids, keeping the first occurrence. */
export function uniqueById<T extends { id: string }>(items: readonly T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(item.id) ? false : (seen.add(item.id), true)));
}

/**
 * Filters the catalogue by category and/or search text.
 * - A product belongs to exactly one category, so a category page never shows other categories' items.
 * - Every search word must match the product's brand, name, category or keywords (not the long description),
 *   which keeps results relevant. Name matches are ranked first.
 */
export function filterProducts(
  catalog: readonly Product[],
  { category, query }: ProductFilter,
  categoryLabel: (id: string) => string = (id) => id,
): Product[] {
  const inCategory =
    !category || category === 'for-you' ? [...catalog] : catalog.filter((p) => p.category === category);

  const words = tokens(query ?? '');
  if (!words.length) return uniqueById(inCategory);

  const scored: { product: Product; score: number }[] = [];
  for (const product of inCategory) {
    const nameWords = new Set(tokens(`${product.brand ?? ''} ${product.name}`));
    const otherWords = new Set(tokens(`${categoryLabel(product.category)} ${(product.keywords ?? []).join(' ')}`));
    const otherText = ` ${[...otherWords].join(' ')} `;
    const nameText = ` ${[...nameWords].join(' ')} `;
    let score = 0;
    let matchedAll = true;
    for (const w of words) {
      if (nameText.includes(` ${w}`) || [...nameWords].some((n) => n.startsWith(w))) score += 3;
      else if (otherText.includes(` ${w}`) || [...otherWords].some((o) => o.startsWith(w))) score += 1;
      else {
        matchedAll = false;
        break;
      }
    }
    if (matchedAll) scored.push({ product, score });
  }
  // Stable sort keeps catalogue order for equal scores.
  return uniqueById(scored.sort((a, b) => b.score - a.score).map((s) => s.product));
}
