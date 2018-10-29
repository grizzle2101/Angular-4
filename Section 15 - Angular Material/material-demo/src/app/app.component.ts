import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading = false;

  constructor()
  {
    this.isLoading = true;
    this.getCourses()
    .subscribe(x => this.isLoading = false);
  }

  getCourses()
  {
    return timer(2000);
  }
}
