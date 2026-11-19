import { Injectable, signal } from '@angular/core';

/**
 * Shared "what is the shopper looking at" state.
 * The header, mobile menu, banners and home page all read/write it,
 * so a click anywhere (e.g. a banner button) filters the home page.
 */
@Injectable({ providedIn: 'root' })
export class SearchStore {
  readonly query = signal('');
  readonly category = signal('for-you');

  selectCategory(id: string): void {
    this.category.set(id);
    this.query.set('');
  }

  searchFor(text: string): void {
    this.category.set('for-you');
    this.query.set(text);
  }

  reset(): void {
    this.category.set('for-you');
    this.query.set('');
  }
}
