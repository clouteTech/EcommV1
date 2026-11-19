import { IMAGES } from '../../core/constants/image-assets';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '../../core/services/cart-store';
import { productBg, productImage } from '../../core/utils/product-image';
import { ImgFallback } from '../../shared/directives/img-fallback';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, ImgFallback],
  templateUrl: './cart.html',
})
export class Cart {
  protected readonly emptyIcon = IMAGES.icons.forYou;

  protected readonly cart = inject(CartStore);

  protected readonly img = productImage;
  protected readonly bg = productBg;

  protected inr(value: number): string {
    return value.toLocaleString('en-IN');
  }
}
