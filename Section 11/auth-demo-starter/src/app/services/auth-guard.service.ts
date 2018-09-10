import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
//Task 1 - Create Route Guard
//Convention, we don't label this as service.
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  //Task 2 - Implement canActivate
  canActivate()
  {
    if(this.authService.isLoggedIn()) return true;

    this.router.navigate(['login']);
    return false;
  }
}
