import { Component, Input } from '@angular/core';
import { ProductNode, ProductItem } from '../models/Product';
import { ShoppingCart } from '../models/ShoppingCart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: ProductNode;
  @Input('cart') cart: ShoppingCart;
  item: ProductItem = new ProductItem();

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.item.title = this.product.product.title;
    this.item.imageUrl = this.product.product.imageUrl;
    this.item.price = this.product.product.price;
    this.item.quantity = this.cart.getQuantity(this.product) + 1;
    this.item.key = this.product.key;

    this.cartService.addToCart(this.item.key, this.item);
  }

  removeFromCart(){
    this.item.title = this.product.product.title;
    this.item.imageUrl = this.product.product.imageUrl;
    this.item.price = this.product.product.price;
    this.item.quantity = this.cart.getQuantity(this.product) - 1;
    this.item.key = this.product.key;

    this.cartService.addToCart(this.item.key, this.item);
  }
}
