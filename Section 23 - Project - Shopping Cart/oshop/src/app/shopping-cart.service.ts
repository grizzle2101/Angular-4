import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProductNode, ProductItem } from './models/Product';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  quantity: number;

  constructor(private db: AngularFireDatabase) { }

  //---Cart Management Methods:
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCart(): Promise<string> {
    let cartID = localStorage.getItem('cartID');
    if (cartID) return cartID;

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  async getCartItems() {
    let cartId = await this.getOrCreateCart();
    return this.db.list('/shopping-carts/' + cartId + '/items/') as AngularFireList<ProductItem>;
  }

  async addToCart(key: string, product: ProductItem) {
    console.log('ADDING PRODUCT:', product.title);
    this.updateItemQuantity(key, product);
  }

  async removeFromCart(key: string, product: ProductItem) {
    console.log('REMOVING PRODUCT:', product.title);
    this.updateItemQuantity(key, product);
  }

  private async updateItemQuantity(key: string, product: ProductItem) {
    let cartItems = await this.getCartItems();
    product.quantity = product.quantity;

    cartItems.update(key, product);
  }
}