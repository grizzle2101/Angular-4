import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

//Task 1 - Setup Category Service:
export class ProductsComponent {
  products$;
  categories$;

  constructor(productService: ProductService, categoryService: CategoryService) { 
    this.products$ = productService.getAllProducts();
    this.categories$ = categoryService.getCategories().valueChanges();
  }
}
