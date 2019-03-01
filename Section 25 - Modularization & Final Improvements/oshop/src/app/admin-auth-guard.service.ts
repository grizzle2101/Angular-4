import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { map, switchMap, switchMapTo, mapTo } from "rxjs/operators";
import { UserService } from './shared/services/user.service';
import { Observable, pipe } from 'rxjs';
import { AppUser } from './shared/models/app-user';
import { AngularFireObject } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService : UserService) { }

  //Task 2 - Refactor canActivate:
  canActivate() {
    return this.auth.appUser$ 
    .pipe(map(appUser => {
      return appUser.isAdmin;
      }));
  }
}
