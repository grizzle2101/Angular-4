import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  //Toggle Check Box.
  isChecked = true;

  //Display Event Obj
  onChange($event){
    console.log("Captured: ", $event);
  }
}
