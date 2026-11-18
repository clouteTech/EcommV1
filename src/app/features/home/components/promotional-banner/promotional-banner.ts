import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Banner } from '../../../../models/banner.model';

@Component({
  selector: 'app-promotional-banner',
  templateUrl: './promotional-banner.html',
})
export class PromotionalBanner {
  readonly banners = input.required<Banner[]>();

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  protected readonly activeIndex = signal(0);

  /** Distance between the left edges of two neighbouring slides. */
  private step(): number {
    const slides = this.track().nativeElement.children;
    return slides.length > 1
      ? (slides[1] as HTMLElement).offsetLeft - (slides[0] as HTMLElement).offsetLeft
      : this.track().nativeElement.clientWidth;
  }

  protected onScroll(): void {
    const el = this.track().nativeElement;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    const last = this.banners().length - 1;
    this.activeIndex.set(atEnd ? last : Math.min(last, Math.round(el.scrollLeft / this.step())));
  }

  protected next(): void {
    const el = this.track().nativeElement;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: this.step(), behavior: 'smooth' });
    }
  }

  protected prev(): void {
    const el = this.track().nativeElement;
    if (el.scrollLeft <= 2) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -this.step(), behavior: 'smooth' });
    }
  }

  protected goTo(index: number): void {
    this.track().nativeElement.scrollTo({ left: index * this.step(), behavior: 'smooth' });
  }
}
