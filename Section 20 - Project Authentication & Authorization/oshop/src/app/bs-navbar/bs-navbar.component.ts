import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe( x => console.log("Status: ", x));
  }

  logout() {
    console.log("Logout");
    this.afAuth.auth.signOut();
  }
}
