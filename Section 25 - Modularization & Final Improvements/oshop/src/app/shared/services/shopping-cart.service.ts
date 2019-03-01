import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProductNode, ProductItem } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  //Shopping Cart API
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async clearCart() {
    let cart = await this.getCartItems();
    cart.remove();
  }

  async getCartItems() {
    let cartId = await this.getOrCreateCartId();
    return this.db.list('/shopping-carts/' + cartId + '/items/') as AngularFireList<ProductItem>;
  }

  async getCartItem(key: string) {
    let cartId = await this.getOrCreateCartId();
    return this.db.list('/shopping-carts/' + cartId + '/items/' + key) as AngularFireList<ProductItem>;
  }

  async addToCart(key: string, product: ProductItem) {
    this.updateItem(key, product);
  }

  async removeFromCart(key: string, product: ProductItem) {
    this.updateItem(key, product);
  }

  //Private Methods
  private async getOrCreateCartId(): Promise<string> {
    let cartID = localStorage.getItem('cartID');
    if (cartID) return cartID;

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }


  //Task 1 - Add Check for Quantity:
  private async updateItem(key: string, product: ProductItem) {
    let cartItems = await this.getCartItems();

    if(product.quantity === 0) {
      let cartItem = await this.getCartItem(product.key);
      cartItem.remove();
    }
    else cartItems.update(key, product);
  }
}