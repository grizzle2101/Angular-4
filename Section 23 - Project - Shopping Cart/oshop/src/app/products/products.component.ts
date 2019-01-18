import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductNode } from '../models/Product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products: ProductNode[] = [];
  filteredProducts: ProductNode[] = [];
  category: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
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
  }
}
