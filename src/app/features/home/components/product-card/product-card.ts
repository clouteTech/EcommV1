import { Component, computed, inject, input, output, signal } from '@angular/core';
import { BrokenImages } from '../../../../core/services/broken-images';
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

  private readonly broken = inject(BrokenImages);

  protected readonly wished = signal(false);
  protected readonly discount = computed(() => {
    const { price, mrp } = this.product();
    return Math.floor((1 - price / mrp) * 100);
  });

  /** Every picture is shown whole (never cropped or stretched). */
  protected readonly img = computed(() => this.product().image);
  protected readonly bg = computed(() => this.product().bg);
  protected readonly fit = computed(() => 'object-contain');

  /** The picture failed to load: tell the listings so this whole card disappears. */
  protected imageFailed(): void {
    this.broken.report(this.product().image);
  }

  protected inr(value: number): string {
    return value.toLocaleString('en-IN');
  }

  protected toggleWish(event: Event): void {
    event.stopPropagation();
    this.wished.update((v) => !v);
  }
}
