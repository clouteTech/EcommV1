import { Component, DestroyRef, ElementRef, afterNextRender, inject, input, output, signal, viewChild } from '@angular/core';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.html',
})
export class CategoryList {
  readonly categories = input.required<Category[]>();
  readonly active = input.required<string>();
  readonly changed = output<string>();

  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');
  protected readonly canLeft = signal(false);
  protected readonly canRight = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const el = this.scroller().nativeElement;
      const observer = new ResizeObserver(() => this.update());
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
      this.update();
    });
  }

  /** Show the arrows only while there is more to scroll in that direction. */
  protected update(): void {
    const el = this.scroller().nativeElement;
    this.canLeft.set(el.scrollLeft > 2);
    this.canRight.set(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }

  protected scrollBy(direction: 1 | -1): void {
    const el = this.scroller().nativeElement;
    el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: 'smooth' });
  }
}
