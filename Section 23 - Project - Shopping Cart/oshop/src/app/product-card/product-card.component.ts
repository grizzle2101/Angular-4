import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductNode } from '../models/Product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product[] = [];
  @Input('show-actions') showActions: boolean = true;

  constructor(private cartService: ShoppingCartService) {}


  //Task 1 - Refactor Card:
  addToCart(product: Product) {
    let cardId = localStorage.getItem('cartID');
    if(!cardId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartID', result.key);

        //Add Product to Cart:
      });
    }
    else {
      //Add Product to Cart
    }
  }
}
