import { Component, OnInit, Input } from '@angular/core';
//Section 5 - Tutorial 3 - Input Properties:
//Option 1 - Mark as Input Property
//Option 2 - MetaData - Magic Strings

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  //inputs: ['isActive']
})
export class StarComponent
 {
  @Input() isActive: boolean;
  //isActive: boolean;

  onClick()
  {
    console.log("Star Clicked");
    this.isActive = !this.isActive;
  }
}
