import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state} from '@angular/animations';


//Task 2 - Implement expandCollapse Trigger
@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      //Task 3 - Create Custom States
      //Task 6 - Fix Styleing Issues:
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        backgroundColor: 'red'
      })),
      /*
      state('expanded',  style({
        height: '*', //* Means Angular with compute @ runtime.
        padding: '*',
        overflow: 'auto'
      })),
      */
      transition('collapsed => expanded', [
        animate('300ms ease-out')
      ]),
      //Task 5 - Implment expanded => collapsed Transition:
      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
