import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  GetUsers() {
    this.db.list('/users').valueChanges().subscribe(users => console.log('Getting Data', users));
  }

  Save(user: firebase.User) {
    this.db.list('/users').update(user.uid, {
      name: user.displayName,
      email: user.email
    });
  }

  //Task 2 - Read Users Tables Given User:
  //FirebaseObjectObservable changes since V5
  getUser(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
