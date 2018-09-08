import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  //See Auth Service
  constructor(
    private router: Router, 
    private authService: AuthService) { }

  //Using Template Driven Forms, we pass the form data to the SignIn Method here.
  signIn(credentials) {
    this.authService.login(credentials)
    //Service Returns Observeable
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else
        //Triggers validation Error
          this.invalidLogin = true; 
      });
  }
}
