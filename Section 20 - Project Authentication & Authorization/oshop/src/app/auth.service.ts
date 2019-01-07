import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>
  
  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute) {
        this.user$ = afAuth.authState;
  }

  login() {
    //Task 2 - Save Return URL:
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    console.log("Logging Out...");
    this.afAuth.auth.signOut();
  }
}
