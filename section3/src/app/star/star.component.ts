import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

//Section 5 - Tutorial 10 - View Encapsulation:

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated
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
