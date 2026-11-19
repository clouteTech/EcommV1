import { Component, computed, input, output } from '@angular/core';
import { productBg, productImage } from '../../../../core/utils/product-image';
import { ImgFallback } from '../../../../shared/directives/img-fallback';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-quick-view',
  imports: [ImgFallback],
  templateUrl: './product-quick-view.html',
  host: { '(document:keydown.escape)': 'closed.emit()' },
})
export class ProductQuickView {
  readonly product = input.required<Product>();
  readonly closed = output<void>();
  readonly addToCart = output<Product>();
  readonly buyNow = output<Product>();

  protected readonly img = computed(() => productImage(this.product()));
  protected readonly bg = computed(() => productBg(this.product()));

  protected readonly discount = computed(() => {
    const { price, mrp } = this.product();
    return Math.floor((1 - price / mrp) * 100);
  });

  protected inr(value: number): string {
    return value.toLocaleString('en-IN');
  }
}
