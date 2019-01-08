import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Inject Angular Database
  constructor(private db: AngularFireDatabase) { }

  GetUsers() {
    this.db.list('/users').valueChanges().subscribe(users => console.log('Getting Data', users));
  }

  //Task 2 - Implement Save
  Save(user: firebase.User) {
    this.db.list('/users').update(user.uid, {
      name: user.displayName,
      email: user.email
    });
  }
}
