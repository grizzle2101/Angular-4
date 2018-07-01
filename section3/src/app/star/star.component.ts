import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Section 5 - Tutorial 7 - Aliasing Output Properties
//Task 1 - Set Ouput alias for change
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent
 {
  @Input('is-Active') isActive: boolean;
  @Output("change") changed = new EventEmitter();

  onClick()
  {
    console.log("Star Clicked");
    this.isActive = !this.isActive;

    //publish Event
    this.changed.emit({newValue: this.isActive});
  }
}

export interface FavouriteChangedEventArgs
{
  newValue : boolean
}
