import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent
{
  isSelected: boolean = false;

  onClick()
  {
    console.log("Selected");
    this.isSelected = !this.isSelected;
  }

}
