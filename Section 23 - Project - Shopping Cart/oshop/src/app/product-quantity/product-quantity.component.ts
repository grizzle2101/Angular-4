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
    Object.assign(this.item, this.product.product);
    this.item.key = this.product.key;
    this.item.quantity = this.cart.getQuantity(this.product) + 1;
    this.cartService.addToCart(this.item.key, this.item);
  }

  removeFromCart(){
    Object.assign(this.item, this.product.product)
    this.item.key = this.product.key;
    this.item.quantity = this.cart.getQuantity(this.product) - 1;
    this.cartService.addToCart(this.item.key, this.item);
  }
}
