import { Component, computed, input, output, signal } from '@angular/core';
import { productBg, productImage } from '../../../../core/utils/product-image';
import { ImgFallback } from '../../../../shared/directives/img-fallback';
import { CardVariant, Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [ImgFallback],
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

  /** Every picture is shown whole (never cropped or stretched). */
  protected readonly img = computed(() => productImage(this.product()));
  protected readonly bg = computed(() => productBg(this.product()));
  protected readonly fit = computed(() => 'object-contain');

  protected inr(value: number): string {
    return value.toLocaleString('en-IN');
  }

  protected toggleWish(event: Event): void {
    event.stopPropagation();
    this.wished.update((v) => !v);
  }
}
