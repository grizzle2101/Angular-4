import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList    } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/query';

@Injectable({
  providedIn: 'root'
})
//Task 2 - Create a Service:
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  //Task 5 - Order Alpabetically:
  getCategories(): AngularFireList<any> {
    return this.db.list('/categories', x => x.orderByChild('name'));
  }
}
