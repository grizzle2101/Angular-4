import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductItem } from '../models/Product';

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


  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    let cart = await this.shoppingCartService.getCartItems();
    cart.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0;
      cart.forEach(item => {
        this.shoppingCartItemCount += item.quantity;
        
        //Refactor move into CartItem:
        this.totalPrice += (item.quantity * item.price);
      });
    });

    let productList = await this.shoppingCartService.getCartItems();
    productList.valueChanges().subscribe(x => this.products = x);
  }
}
