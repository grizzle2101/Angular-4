import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  //Add User
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe( user => this.user = user);
  }

  logout() {
    console.log("Logout");
    this.afAuth.auth.signOut();
  }
}
