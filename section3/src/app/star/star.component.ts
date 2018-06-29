import { Component, OnInit } from '@angular/core';

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
