import { Injectable, signal } from '@angular/core';

/** Holds the header search text so the home page can filter its products. */
@Injectable({ providedIn: 'root' })
export class SearchStore {
  readonly query = signal('');
}
