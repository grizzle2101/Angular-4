import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*Task 3 - Simulate Progress
  progress = 0;
  timer;

  
  constructor() {
    this.timer = setInterval(() =>{
      this.progress++;
      console.log(this.progress);
      if(this.progress == 100) clearInterval(this.timer)
    }, 20);
  }
  */

  //Task 6 - Simulate a API Service:
  //Should be part of a service but not important for this.
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
