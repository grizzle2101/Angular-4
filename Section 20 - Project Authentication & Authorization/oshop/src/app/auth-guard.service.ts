import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  //Task 2 - Implment AuthGuard:
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.user$.subscribe(user => {
      if(user) return true;

      this.router.navigate(['/login']);
      return false;
    });
  }
}
