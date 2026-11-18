import { Component, input, output } from '@angular/core';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.html',
})
export class CategoryList {
  readonly categories = input.required<Category[]>();
  readonly active = input.required<string>();
  readonly changed = output<string>();
}
