import { Component, ElementRef, computed, input, output, signal, viewChild } from '@angular/core';
import { Product, ProductSectionData } from '../../../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-section',
  imports: [ProductCard],
  templateUrl: './product-section.html',
})
export class ProductSection {
  readonly section = input.required<ProductSectionData>();
  readonly selected = output<Product>();

  private readonly scroller = viewChild<ElementRef<HTMLElement>>('scroller');
  protected readonly expanded = signal(false);

  protected readonly isGrid = computed(() => this.section().layout === 'grid' || this.expanded());
  protected readonly canExpand = computed(() => this.section().layout === 'scroll');

  protected readonly gridClass = computed(() =>
    this.section().variant === 'feature'
      ? 'grid-cols-1 gap-y-[18px] min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'
      : 'grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8 xl:gap-y-16',
  );
  protected readonly itemClass = computed(() =>
    this.section().variant === 'feature' ? 'w-[238px]' : 'w-[206px]',
  );

  protected scrollBy(direction: 1 | -1): void {
    const el = this.scroller()?.nativeElement;
    el?.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  }
}
