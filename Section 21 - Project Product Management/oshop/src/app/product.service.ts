import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  key: any;

  constructor(private db: AngularFireDatabase) { }

  createProduct(product: Product) {
    return this.db.list('/products').push(product);
  }

  //Task 1 - Create Update Method:
  update(productID, product) {
    console.log('Updating:', productID)
    console.log('P', product);
    return this.db.object('/products/' + productID).update(product);
  }

  getProducts() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(products => products.map(p => ({key: p.key, data: p.payload.toJSON()}))));
  }

  getProduct(key): AngularFireList<Product> {
    console.log('Fetching: ', key);
    return this.db.list('/products', x => x.orderByKey().equalTo(key));
  }

}



