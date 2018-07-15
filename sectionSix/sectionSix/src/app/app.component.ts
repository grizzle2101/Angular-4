import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'somethingelse'; //Set Default View

  changeViewMode()
  {
    console.log("View Mode Changed", this.viewMode)
  }
}