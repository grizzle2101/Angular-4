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
    this.cartService.addToCart(this.product.key, new ProductItem({
      ...this.product.product,
      key: this.product.key,
      quantity: this.cart.getQuantity(this.product) + 1
    }));
  }

  removeFromCart(){
    this.cartService.addToCart(this.product.key, new ProductItem({
      ...this.product.product,
      key: this.product.key,
      quantity: this.cart.getQuantity(this.product) - 1
    }));
  }
}
