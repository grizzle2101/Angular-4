import { Component, Input } from '@angular/core';
import { ProductItem } from '../models/Product';
import { ShoppingCart } from '../models/ShoppingCart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.css']
})
export class CartQuantityComponent {
  @Input('cartItem') cartItem: ProductItem;
  @Input('cart') cart: ShoppingCart;
  

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
   this.cartService.addToCart(this.cartItem.key, new ProductItem({
    ...this.cartItem,
    quantity: this.cartItem.quantity += 1
  }));
  }

  removeFromCart() {
    this.cartService.addToCart(this.cartItem.key, new ProductItem({
      ...this.cartItem,
      quantity: this.cartItem.quantity -= 1
    }));
  }
}
