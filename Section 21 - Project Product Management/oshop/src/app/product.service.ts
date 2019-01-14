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

  //Fix - Map Key & Payload
  getProducts() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(products => products.map(p => ({key: p.key, data: p.payload.toJSON()}))));
  }

  //Task 2 - Get Single Product:
  getProduct(key): AngularFireList<Product> {
    console.log('Fetching: ', key);
    return this.db.list('/products', x => x.orderByKey().equalTo(key));
  }

}



