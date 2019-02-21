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
  item: ProductItem = new ProductItem();
  

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.item.title = this.cartItem.title;
    this.item.imageUrl = this.cartItem.imageUrl;
    this.item.price = this.cartItem.price;
    this.item.quantity = this.cartItem.quantity += 1;
    this.item.key = this.cartItem.key;

    this.cartService.addToCart(this.item.key, this.item);
  }

  removeFromCart() {
    this.item.title = this.cartItem.title;
    this.item.imageUrl = this.cartItem.imageUrl;
    this.item.price = this.cartItem.price;
    this.item.quantity = this.cartItem.quantity -= 1;
    this.item.key = this.cartItem.key;

    this.cartService.addToCart(this.item.key, this.item);
  }
}
