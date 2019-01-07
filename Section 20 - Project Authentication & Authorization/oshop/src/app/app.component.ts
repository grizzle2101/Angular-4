import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  //Task 3 - Check User Authetnication @ AppComponent:
  constructor(private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      let returnUrl = localStorage.getItem('returnUrl');
      console.log('Getting Value from Storage: ', returnUrl);

      if(user && returnUrl != null) {
        router.navigateByUrl(returnUrl);
        localStorage.clear();
      }
    })
  }
}
