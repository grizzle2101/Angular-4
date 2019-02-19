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
    if(cartID) return cartID;

    let result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }

  //---Cart Items Methods
  async getCartItems() {
    let cartId = await this.getOrCreateCart();
    return this.db.list('/shopping-carts/' + cartId + '/items/') as AngularFireList<ProductItem>;
  }

  async addToCart(product: ProductNode) {
    console.log('ADDING PRODUCT:', product.product.title);
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: ProductNode) {
    console.log('REMOVING PRODUCT:', product.product.title);
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: ProductNode, change: number) {
    let cartId = await this.getOrCreateCart();
    let cartItems = await this.getCartItems();

    //Crux - Would Like to Access Quantity & Update inside a Subscrption rather than using global variable...
    await this.getQuantity(cartId, product.key)
    .then(() => {
      let p = new ProductItem();
      p.title = product.product.title;
      p.imageUrl = product.product.imageUrl;
      p.price = product.product.price;
      p.quantity = (this.quantity || 0) + change;

      cartItems.update(product.key, p);
    });
  }

  private async getQuantity(cartId: string, key: string){
    let item = this.db.list('/shopping-carts/' + cartId + '/items/', item => item.orderByKey().equalTo(key)) as AngularFireList<ProductItem>;
    item.valueChanges().subscribe(x => this.quantity = x.pop().quantity);
  }
}