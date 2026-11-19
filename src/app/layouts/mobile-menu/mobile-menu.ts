import { Component, inject, model } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MORE_LINKS, SERVICE_TABS } from '../../core/constants/nav-links';
import { CartStore } from '../../core/services/cart-store';
import { SearchStore } from '../../core/services/search-store';
import { CATEGORIES } from '../../features/home/data/home-data';

/** Slide-in menu used below the `md` breakpoint (phones). */
@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink],
  templateUrl: './mobile-menu.html',
  host: { '(document:keydown.escape)': 'open.set(false)' },
})
export class MobileMenu {
  /** Two-way bound with the header's hamburger button. */
  readonly open = model(false);

  private readonly router = inject(Router);
  protected readonly search = inject(SearchStore);
  protected readonly cart = inject(CartStore);

  protected readonly categories = CATEGORIES;
  protected readonly tabs = SERVICE_TABS;
  protected readonly moreItems = MORE_LINKS;

  protected close(): void {
    this.open.set(false);
  }

  protected pickCategory(id: string): void {
    this.search.selectCategory(id);
    this.go();
  }

  protected pickTab(tab: (typeof SERVICE_TABS)[number]): void {
    if (tab.search) {
      this.search.searchFor(tab.search);
    } else if (tab.category) {
      this.search.selectCategory(tab.category);
    }
    this.go();
  }

  private go(): void {
    this.close();
    void this.router.navigateByUrl('/');
  }
}
