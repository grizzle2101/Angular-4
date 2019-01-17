import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
//Task 3 - Extract Categories Logic:
export class ProductFilterComponent {
  categories$;
  //Task 4 - Fix Category Highlighting:
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAllCategories();
   }
}
