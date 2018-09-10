import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


//Task 1 - Create AdminAuthGuard
@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate()
  {
    //If Admin, allow Access.
    //Check if Current User is Set
    let user = this.authService.currentUser;
    
    if (user && user.admin) return true;

    //Else No Access
    this.router.navigate(['/no-access']);
    return false;
  }

}
