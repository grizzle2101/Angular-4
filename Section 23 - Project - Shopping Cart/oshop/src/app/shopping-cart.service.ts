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

  //Task 1 - Refactor:
  //-Extract GetCartItems to own method.
  getCartItems(cartId: string) {
    return this.db.list('/shopping-carts/' + cartId + '/items/') as AngularFireList<ShoppingCartItem>;
  }

  private async getOrCreateCart() {
    let cartID = localStorage.getItem('cartID');
    if(cartID) return cartID;

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  async addToCart(product: ProductNode) {
    console.log('PRODUCT:', product.product.title)
    let cartId = await this.getOrCreateCart();
    let cartItems = await this.getCartItems(cartId);

    this.getQuantity(cartId, product).then(x => {
      console.log('USING VALUE', this.quantity);
      cartItems.update(product.key, {product: product.product, quantity: (this.quantity || 0) + 1});
    });
  }



  //Note:
  //Cleanest Approach so far, problem narrowed down to existing value uses BEFORE checking DB.
  //Even when using Await & THEN, still not using the right value.

  //Additional Methods for Adding Existing Item, need to be able to Get & Updat
  async getQuantity(cartId: number, product: ProductNode) {
    //Get Items[]
    let list = this.db.list('/shopping-carts/' + cartId + '/items/', item => item.orderByKey().equalTo(product.key)) as AngularFireList<ShoppingCartItem>
    
    //Get Quantity from the Item:
    list.valueChanges()
    .subscribe(items => {
      items.forEach(item => {
        console.log('DB VALUE:', item.quantity);
        this.quantity = item.quantity;
      });
    });
  }
}