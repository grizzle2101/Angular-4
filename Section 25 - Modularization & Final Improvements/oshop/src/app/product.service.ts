import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Product, ProductNode } from './models/Product';
import { Observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  key: any;

  constructor(private db: AngularFireDatabase) { }

  createProduct(product: Product) {
    return this.db.list('/products').push(product);
  }

  update(productID, product) {
    console.log('Updating:', productID)
    console.log('P', product);
    return this.db.object('/products/' + productID).update(product);
  }

  remove(key) {
      this.db.list('/products/' + key).remove().then(_ => console.log('Deleted...', key));
  }

  getProducts() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(products => products.map(p => ({key: p.key, data: p.payload.toJSON()}))));
  }

  getAllProducts() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(products => products.map(function(res) {
        var product = new ProductNode();
        product.key = res.key;
        product.product = res.payload.toJSON() as Product;
        return product;
      })));
  }


  getProduct(key): AngularFireList<Product> {
    console.log('Fetching: ', key);
    return this.db.list('/products', x => x.orderByKey().equalTo(key));
  }

}



