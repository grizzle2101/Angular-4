import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state} from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        //Task 1 - Hide Text
        opacity: 0
      })),
      //Task 2 - Expand Box
      transition('collapsed => expanded', [
        animate('300ms ease-out', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*'
        })),
        //Task 3 - Reveal Text
        animate('1s', style({opacity: 1}))
      ]),
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
