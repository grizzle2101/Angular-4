import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Section 5 - Tutorial 6 - Passing Event Data:
//Task 1 - Pass isActive in Emit.
//Task 2 - Take in Boolean in onFavouriteChange
//Task 3 - Pass $Event in HTML
//Task 4 - Refactor send Annoymous Object
//Task 5 - Refactor to Interface
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent
 {
  @Input('is-Active') isActive: boolean;
  @Output() change = new EventEmitter();

  onClick()
  {
    console.log("Star Clicked");
    this.isActive = !this.isActive;

    //publish Event
    this.change.emit({newValue: this.isActive});
  }
}

export interface FavouriteChangedEventArgs
{
  newValue : boolean
}
