import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList    } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(): AngularFireList<any> {
    return this.db.list('/categories', x => x.orderByChild('name'));
  }

  getAllCategories() {
    return this.db.list('/categories').snapshotChanges().pipe(
      map(products => products.map(p => ({key: p.key, category: p.payload.toJSON()}))));
  }
}
