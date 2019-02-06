import { Component, Input } from '@angular/core';
import { ProductNode, ShoppingCartItem } from '../models/Product';
import { ShoppingCartService } from '../shopping-cart.service';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') productNode: ProductNode;
  @Input('show-actions') showActions: boolean = true;
  @Input('shopping-cart') shoppingCartItems: ShoppingCartItem[];

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    console.log('Adding to cart...')
    this.cartService.addToCart(this.productNode);
  }

  removeFromCart(){
    console.log('Removing from cart...')
    this.cartService.removeFromCart(this.productNode);
  }

  getQuantity() {
    //Incase Data is not Loaded.
    if(!this.shoppingCartItems) return 0;

    //Filter by Product Node to get ONE
    let item = this.shoppingCartItems.find(cartProduct => cartProduct.product.title == this.productNode.product.title);
    return item ? item.quantity : 0;
  }
}
