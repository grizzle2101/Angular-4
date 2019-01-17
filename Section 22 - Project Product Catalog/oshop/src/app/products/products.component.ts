import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductNode } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

//Task 2 - Get RouterParams:
export class ProductsComponent {
  products: ProductNode[] = [];
  filteredProducts: ProductNode[] = [];
  categories$;
  category: string;

  constructor(route: ActivatedRoute, productService: ProductService, categoryService: CategoryService) { 
    this.categories$ = categoryService.getAllCategories();


    productService.getAllProducts().subscribe(x => this.products = x);

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      //Filter Products
      this.filteredProducts = (this.category) ? 
      this.products.filter(p => p.product.category === this.category) : this.products;
    })
  }
}
