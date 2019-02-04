import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductNode } from '../models/Product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') productNode: ProductNode;
  @Input('show-actions') showActions: boolean = true;

  constructor(private cartService: ShoppingCartService) {}

  addToCart(product: ProductNode) {
    console.log('Adding to cart...')
    this.cartService.addToCart(product);
  }
}
