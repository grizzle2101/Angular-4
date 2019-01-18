import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartID: string) {
    return this.db.list('/shopping-cart/' + cartID);
  }

  private async getOrCreateCart() {
    let cartID = localStorage.getItem('cartID');
    if(!cartID) {
      let result = await this.create();
      localStorage.setItem('cartID', result.key);
      return this.getCart(result.key);
    }
    return this.getCart(cartID);
  }

  addToCart(product: Product) {
    let cart = this.getOrCreateCart();
    //Add to Cart..
  }
}
