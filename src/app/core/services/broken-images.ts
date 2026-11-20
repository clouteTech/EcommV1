import { Injectable, signal } from '@angular/core';

/**
 * Remembers product pictures that failed to load in the browser. Listings hide the whole product card
 * for those pictures (no placeholder, no empty box). Nothing is deleted from the catalogue data.
 */
@Injectable({ providedIn: 'root' })
export class BrokenImages {
  private readonly failed = signal<ReadonlySet<string>>(new Set());

  /** Call from inside a computed/template: it re-runs when a new failure is recorded. */
  isBroken(path: string): boolean {
    return this.failed().has(path);
  }

  report(path: string): void {
    if (this.failed().has(path)) return;
    this.failed.update((s) => new Set(s).add(path));
  }
}
