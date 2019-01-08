import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  //Task 3 - Use Service:
  constructor(private auth: AuthService, router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      let returnUrl = localStorage.getItem('returnUrl');
      console.log('Getting Value from Storage: ', returnUrl);

      if(user && returnUrl != null) {
        //Saving User
        console.log("User:", user.displayName);
        console.log("Email:", user.email);
        //userService.GetUsers();
        userService.Save(user);

        router.navigateByUrl(returnUrl);
        localStorage.clear();
      }
    })
  }
}
