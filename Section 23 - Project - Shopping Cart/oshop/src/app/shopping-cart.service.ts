import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProductNode, ShoppingCartItem } from './models/Product';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  
  async getCartItems() {
    let cartId = await this.getOrCreateCart();
    return this.db.list('/shopping-carts/' + cartId + '/items/') as AngularFireList<ShoppingCartItem>;
  }

  private async getOrCreateCart(): Promise<string> {
    let cartID = localStorage.getItem('cartID');
    if(cartID) return cartID;

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  async addToCart(product: ProductNode) {
    console.log('ADDING PRODUCT:', product.product.title);
    this.updateItemQuantity(product, 1);
  }

  //Task 3 - Implment RemoveFromCart in service:
  async removeFromCart(product: ProductNode) {
    console.log('REMOVING PRODUCT:', product.product.title);
    this.updateItemQuantity(product, -1);
  }

    //Task 4 - Refactor - Extract Common Logic:
  async updateItemQuantity(product: ProductNode, change: number) {
    let cartId = await this.getOrCreateCart();
    let cartItems = await this.getCartItems();

    this.getQuantity(cartId, product).then(x => {
      console.log('USING VALUE', this.quantity);
      cartItems.update(product.key, {product: product.product, quantity: (this.quantity || 0) + change});
    });
  }
  



  async getQuantity(cartId: string, product: ProductNode) {
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