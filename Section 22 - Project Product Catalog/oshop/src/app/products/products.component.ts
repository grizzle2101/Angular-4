import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

//Task 1 - Setup Products Component:
export class ProductsComponent {
  products$;

  constructor(productService: ProductService) { 
    this.products$ = productService.getAllProducts();
  }
}
