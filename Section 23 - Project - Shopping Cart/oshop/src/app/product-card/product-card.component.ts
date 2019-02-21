import { Component, Input } from '@angular/core';
import { ProductNode, ProductItem } from '../models/Product';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/ShoppingCart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: ProductNode;
  @Input('show-actions') showActions: boolean = true;
  @Input('cart') cart: ShoppingCart;
  item: ProductItem = new ProductItem();

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    Object.assign(this.item, this.product.product)
    this.item.key = this.product.key;
    this.item.quantity = this.cart.getQuantity(this.product) + 1;
    this.cartService.addToCart(this.item.key, this.item);
  }
}
