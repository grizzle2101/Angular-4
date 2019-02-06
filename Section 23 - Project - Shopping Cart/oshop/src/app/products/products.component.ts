import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductNode, ShoppingCartItem } from '../models/Product';
import { switchMap, subscribeOn } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductNode[] = [];
  filteredProducts: ProductNode[] = [];
  category: string;
  cartItems: ShoppingCartItem[];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService) {
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

  //Task 3 - Pass ShoppingCart:
  //-Load Values onCreation.
  async ngOnInit() {
    this.subscription =  (await this.shoppingCartService.getCartItems()).valueChanges().subscribe(items => {
      this.cartItems = items;
    });
  }

  //-UnSubscribe
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
