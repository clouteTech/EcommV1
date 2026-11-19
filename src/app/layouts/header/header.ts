import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MORE_LINKS, SERVICE_TABS } from '../../core/constants/nav-links';
import { CartStore } from '../../core/services/cart-store';
import { SearchStore } from '../../core/services/search-store';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  imports: [RouterLink, MobileMenu],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
  host: {
    class: 'sticky top-0 z-40 block md:static',
    '(document:click)': 'closeMoreOnOutsideClick($event)',
    '(document:keydown.escape)': 'moreOpen.set(false)',
  },
})
export class Header {
  private readonly router = inject(Router);
  protected readonly search = inject(SearchStore);
  protected readonly cart = inject(CartStore);

  protected readonly moreOpen = signal(false);
  protected readonly menuOpen = signal(false);
  /** Shorter hint on phones so it is not cut off by the narrow input. */
  protected readonly placeholder = signal('Search for Products, Brands and More');
  private readonly moreWrap = viewChild<ElementRef<HTMLElement>>('moreWrap');

  protected readonly tabs = SERVICE_TABS;
  protected readonly moreItems = MORE_LINKS;

  constructor() {
    if (typeof matchMedia === 'undefined') return;
    const wide = matchMedia('(min-width: 480px)');
    const update = () =>
      this.placeholder.set(wide.matches ? 'Search for Products, Brands and More' : 'Search for products & brands');
    update();
    wide.addEventListener('change', update);
  }

  protected onInput(event: Event): void {
    // Typing searches the whole catalogue, so it also clears any category filter.
    this.search.searchFor((event.target as HTMLInputElement).value);
    this.goHome();
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.goHome();
  }

  protected clearSearch(): void {
    this.search.query.set('');
  }

  protected resetSearch(): void {
    this.search.reset();
    this.moreOpen.set(false);
  }

  protected openTab(tab: (typeof SERVICE_TABS)[number]): void {
    if (tab.search) {
      this.search.searchFor(tab.search);
    } else if (tab.category) {
      this.search.selectCategory(tab.category);
    }
    this.goHome();
  }

  protected closeMoreOnOutsideClick(event: Event): void {
    const wrap = this.moreWrap()?.nativeElement;
    if (wrap && !wrap.contains(event.target as Node)) {
      this.moreOpen.set(false);
    }
  }

  private goHome(): void {
    if (this.router.url.split('?')[0] !== '/') {
      void this.router.navigateByUrl('/');
    }
  }
}
