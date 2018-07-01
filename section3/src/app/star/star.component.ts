import { Component, OnInit, Input } from '@angular/core';

//Section 5 - Tutorial 4 - Aliasing Input Properties:
//Task 1 - Use Input Parameter - Alias

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent
 {
  @Input('is-Active') isActive: boolean;

  onClick()
  {
    console.log("Star Clicked");
    this.isActive = !this.isActive;
  }
}
