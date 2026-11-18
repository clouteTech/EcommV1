import { Component, computed, input, output, signal } from '@angular/core';
import { CardVariant, Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  host: { class: 'block h-full' },
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly variant = input<CardVariant>('feature');
  readonly selected = output<Product>();

  protected readonly wished = signal(false);
  protected readonly discount = computed(() => {
    const { price, mrp } = this.product();
    return Math.floor((1 - price / mrp) * 100);
  });

  /** Photos fill the box; legacy SVG illustrations and wide photos are shown uncropped. */
  protected readonly fit = computed(() => {
    const p = this.product();
    if (p.image.endsWith('.svg')) return 'object-contain p-4';
    return this.variant() === 'listing' && p.landscape ? 'object-contain' : 'object-cover';
  });

  protected inr(value: number): string {
    return value.toLocaleString('en-IN');
  }

  protected toggleWish(event: Event): void {
    event.stopPropagation();
    this.wished.update((v) => !v);
  }
}
