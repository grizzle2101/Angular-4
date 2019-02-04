import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProductNode, ShoppingCartItem } from './models/Product';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  quantity: number;

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  //Task 1 - Refactor Cart Service:
  //-Return CartID instead of Cart Object.
  //-Check CartID first, better design.
  private async getOrCreateCart() {
    let cartID = localStorage.getItem('cartID');
    if(cartID) return cartID;

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  //Task 2 - Implment AddToCart:
  async addToCart(product: ProductNode) {
    let cartId = await this.getOrCreateCart();
    let cartItems = this.db.list('/shopping-carts/' + cartId + '/items/') as AngularFireList<ShoppingCartItem>;

    cartItems.update(product.key, {product: product.product, quantity: 1});
  }




  //Additional Methods for Adding Existing Item, need to be able to Get & Updat
  async getQuantity(cartId: number, key: string) {
    let quantity;
    this.db.list('/shopping-carts/' + cartId + '/items/' + key).valueChanges()
    .subscribe(x => {
     console.log('Quantity:', x[1]);
    });
  }


  private async itemExists(cartId, key) {
    let item = this.db.list('/shopping-carts/' + cartId + '/items/');
    item.stateChanges().subscribe(i => {
      if(i.key == key) return true;
    });
    return false;
  }
}
