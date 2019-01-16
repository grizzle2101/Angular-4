import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { Product, ProductNode } from 'src/app/models/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnDestroy {
  products: ProductNode[];
  filteredList:  ProductNode[] = [];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription =  this.productService.getAllProducts().subscribe(products => this.filteredList = this.products = products);
    this.productService.getAllProducts().subscribe(products => console.log(products));
  }

 filter(query: string) {
   this.filteredList = (query) ?
   this.products.filter(p => p.product.title.toLowerCase().includes(query.toLowerCase())) : 
   this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
