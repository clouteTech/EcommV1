import { IMAGES } from '../../core/constants/image-assets';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartStore } from '../../core/services/cart-store';
import { SearchStore } from '../../core/services/search-store';
import { Product, ProductSectionData } from '../../models/product.model';
import { CategoryList } from './components/category-list/category-list';
import { ProductQuickView } from './components/product-quick-view/product-quick-view';
import { ProductSection } from './components/product-section/product-section';
import { PromotionalBanner } from './components/promotional-banner/promotional-banner';
import { ALL_PRODUCTS, BANNERS, CATEGORIES, SECTIONS } from './data/home-data';
import { filterProducts } from '../../core/utils/product-search';

@Component({
  selector: 'app-home',
  imports: [CategoryList, PromotionalBanner, ProductSection, ProductQuickView],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly emptyIcon = IMAGES.icons.forYou;

  private readonly router = inject(Router);
  private readonly cart = inject(CartStore);
  private readonly search = inject(SearchStore);

  protected readonly categories = CATEGORIES;
  protected readonly banners = BANNERS;
  protected readonly sections = SECTIONS;

  protected readonly activeCategory = this.search.category;
  protected readonly selectedProduct = signal<Product | null>(null);

  /** Present only while a search or category filter is active. */
  protected readonly results = computed<ProductSectionData | null>(() => {
    const query = this.search.query().trim().toLowerCase();
    const category = this.activeCategory();
    if (!query && category === 'for-you') {
      return null;
    }

    // Category pages read only that category's products; search reads the whole catalogue.
    const products = filterProducts(
      ALL_PRODUCTS,
      { category, query },
      (id) => this.categories.find((c) => c.id === id)?.label ?? id,
    );
    const label = this.categories.find((c) => c.id === category)?.label ?? 'Products';

    return {
      id: 'results',
      title: query ? `Results for "${this.search.query().trim()}"` : label,
      subtitle: `${products.length} ${products.length === 1 ? 'item' : 'items'} found`,
      variant: 'listing',
      layout: 'grid',
      products,
    };
  });

  protected selectCategory(id: string): void {
    this.search.selectCategory(id);
  }

  protected clearFilters(): void {
    this.search.reset();
  }

  protected addToCart(product: Product): void {
    this.cart.add(product);
    this.selectedProduct.set(null);
  }

  protected buyNow(product: Product): void {
    this.cart.add(product);
    this.selectedProduct.set(null);
    void this.router.navigateByUrl('/cart');
  }
}
