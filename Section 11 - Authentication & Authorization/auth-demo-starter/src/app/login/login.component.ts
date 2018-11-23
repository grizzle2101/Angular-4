import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router,
    //Import Activated Route
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }


  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
        {
          //Check Query Params
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

          //Redirect to ReturnUrl if Provided.
          this.router.navigate([returnUrl || '/']);
        }
          
        else
          this.invalidLogin = true; 
      });
  }
}
