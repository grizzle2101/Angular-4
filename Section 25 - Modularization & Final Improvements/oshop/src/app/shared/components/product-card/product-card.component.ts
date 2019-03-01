import { Component, Input } from '@angular/core';
import { ProductNode, ProductItem } from '../../models/Product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/ShoppingCart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: ProductNode;
  @Input('show-actions') showActions: boolean = true;
  @Input('cart') cart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product.key, new ProductItem({
      ...this.product.product,
      key: this.product.key,
      quantity: this.cart.getQuantity(this.product) + 1
    }));
  }
}
