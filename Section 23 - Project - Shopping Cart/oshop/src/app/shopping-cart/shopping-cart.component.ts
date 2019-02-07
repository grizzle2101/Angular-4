import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItemCount: number;
  keys;
  products;


  //Task 1 - Setup Shopping Cart Data:
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    let cart = await this.shoppingCartService.getCartItems();
    cart.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0;
      cart.forEach(item => {
        this.shoppingCartItemCount += item.quantity
      });
    });


    //Task 4 - Update Component to Pass Data:
    let productList = await this.shoppingCartService.getProductsInCart();
    productList.subscribe(x => this.products = x);
  }
}
