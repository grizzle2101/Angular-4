import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductNode } from '../models/Product';
import { switchMap, map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService) {
    
    //Task 2 - Rework Observeavles into Switch Block:
    this.productService.getAllProducts()
    .pipe(switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
      this.products.filter(p => p.product.category === this.category) :
      this.products;
    });
    this.categories$ = categoryService.getAllCategories();
  }
}
