import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private auth: AuthService, router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      let returnUrl = localStorage.getItem('returnUrl');
      console.log('Getting Value from Storage: ', returnUrl);

      if(user && returnUrl != null) {
        userService.Save(user);
        router.navigateByUrl(returnUrl);
        localStorage.clear();
      }
    })
  }
}
