import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>
  
  //Inject UserService
  constructor(
    public afAuth: AngularFireAuth,
     private route: ActivatedRoute,
     private userService: UserService) {
        this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    console.log("Logging Out...");
    this.afAuth.auth.signOut();
  }

  //Task 1 - Expose AppUser Properties:
  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(switchMap(user => this.userService.getUser(user.uid).valueChanges()));
  }
}
