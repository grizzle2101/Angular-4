import { Component, OnInit } from '@angular/core';

//Section 5 - Tutorial 2 - Component API:
//Task 1 - Return some Data in app.component
//Task 2 - Attempt to Bind Post data to StartSelected property
//Problem - Even though both post and Star have the property, its impossible to bind.
//Solution - We need a Output Property

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent
 {
  isActive: boolean;

  onClick()
  {
    console.log("Star Clicked");
    this.isActive = !this.isActive;
  }
}
