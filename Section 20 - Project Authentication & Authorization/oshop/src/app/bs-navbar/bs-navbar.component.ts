import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  //Refactor to use Async directly in Template.
  public appUser: AppUser;
  
  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(x => {this.appUser = x});
   }

  logout() {
    this.authService.logout();
  }
}
