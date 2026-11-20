import { IMAGES } from '../../core/constants/image-assets';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '../../core/services/cart-store';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
})
export class Cart {
  protected readonly emptyIcon = IMAGES.icons.forYou;

  protected readonly cart = inject(CartStore);

  protected inr(value: number): string {
    return value.toLocaleString('en-IN');
  }
}
