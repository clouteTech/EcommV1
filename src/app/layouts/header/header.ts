import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartStore } from '../../core/services/cart-store';
import { SearchStore } from '../../core/services/search-store';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
  host: {
    '(document:click)': 'closeMoreOnOutsideClick($event)',
    '(document:keydown.escape)': 'moreOpen.set(false)',
  },
})
export class Header {
  private readonly router = inject(Router);
  protected readonly search = inject(SearchStore);
  protected readonly cart = inject(CartStore);

  protected readonly moreOpen = signal(false);
  private readonly moreWrap = viewChild<ElementRef<HTMLElement>>('moreWrap');

  protected readonly tabs = [
    { label: 'Minutes', sub: '10-min delivery' },
    { label: 'Travel', sub: 'Flights & hotels' },
    { label: 'Grocery', sub: 'Daily essentials' },
  ];

  protected readonly moreItems = [
    'Become a Seller',
    'Notification Preferences',
    '24x7 Customer Care',
    'Advertise',
    'Download App',
  ];

  protected onInput(event: Event): void {
    this.search.query.set((event.target as HTMLInputElement).value);
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
    this.search.query.set('');
    this.moreOpen.set(false);
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
