import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap, switchMapTo, mapTo } from "rxjs/operators";
import { UserService } from './user.service';
import { Observable, pipe } from 'rxjs';
import { AppUser } from './models/app-user';
import { AngularFireObject } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
//Task 1 - Create AdminAuthGuard
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService : UserService) { }

  //Task 4 - Implment CanActivate
  canActivate() {
    return this.auth.user$.pipe(switchMap(user => this.userService.getUser(user.uid).valueChanges()
     .pipe(map(appUser => {
       if(appUser.isAdmin == true){ return true;}
      }))));
  }
}
