import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Section 5 - Tutorial 5 - Output Properties
//Task 1 - Import Output & create change Output variable of type Event Emitter.
//Task 2 - Emit Event(output)

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
    this.change.emit();
  }
}
