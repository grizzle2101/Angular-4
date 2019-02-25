import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCart: ShoppingCartService) { }

  async placeOrder(order) {
     let result = await this.db.list('/orders').push(order);
     this.shoppingCart.clearCart();
     return result;
  }
}
