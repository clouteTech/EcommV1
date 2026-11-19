import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartStore {
  readonly items = signal<CartItem[]>([]);
  readonly count = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));
  readonly total = computed(() => this.items().reduce((sum, i) => sum + i.product.price * i.quantity, 0));

  add(product: Product): void {
    this.items.update((list) => {
      const existing = list.find((i) => i.product.id === product.id);
      return existing
        ? list.map((i) => (i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...list, { product, quantity: 1 }];
    });
  }

  remove(productId: string): void {
    this.items.update((list) => list.filter((i) => i.product.id !== productId));
  }
}
