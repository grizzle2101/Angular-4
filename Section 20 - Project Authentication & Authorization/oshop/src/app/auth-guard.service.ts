import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  //Task 1 - Add Return URL:
  canActivate(route, state: RouterStateSnapshot) {
    //Bug Fix - Map Result to Boolean, hence why Redirect/AuthGuard was not working.
    return this.auth.user$.pipe(map(user => {
      if(user) { return true };

      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      console.log("No User, Redirecting");
      return false;
    }));
  }
}
