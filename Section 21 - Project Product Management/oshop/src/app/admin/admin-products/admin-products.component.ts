import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnDestroy {
  products: any[];
  filteredList:  any[] = [];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => this.filteredList = this.products = products);
  }

 filter(query: string) {
   this.filteredList = (query) ?
   this.products.filter(p => p.data.title.toLowerCase().includes(query.toLowerCase())) : 
   this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
