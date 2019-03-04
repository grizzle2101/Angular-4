import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ProductItem } from '../../../shared/models/Product';
import { ShoppingCart } from '../../../shared/models/ShoppingCart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItemCount: number;
  products: ProductItem[];
  itemPrice: number =0;
  totalPrice: number = 0;
  cart: ShoppingCart;


  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    //Initialize Cart
    let cartItems = await this.shoppingCartService.getCartItems();
    cartItems.valueChanges().subscribe(cart => {
      this.cart = new ShoppingCart(cart);
    });

    let productList = await this.shoppingCartService.getCartItems();
    productList.valueChanges().subscribe(x => this.products = x);
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
}
