import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductNode } from '../../../shared/models/Product';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/ShoppingCart';
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
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService) {}


  async ngOnInit() {
    //Condense Cart & Unwrap in Template
    this.subscription =  (await this.shoppingCartService.getCartItems()).valueChanges().subscribe(items => {
      this.cart = new ShoppingCart(items);
    });
    this.populateProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //Extrate Product Population
  private populateProducts() {
    this.productService.getAllProducts()
    .pipe(switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  //Extract Filter to Private Method
  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.product.category === this.category) :
    this.products;
  }
}
