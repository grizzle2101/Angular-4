import { Component } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({transform: 'translateY(-20px)'}),
            animate(1000)
          ]),
          //Task 1 - Stagger:
          //query('@todoAnimation', stagger(200, animateChild()))
          //Task 2 - Staggering useAnimation:
          //query('@todoAnimation', stagger(200, useAnimation(fadeInAnimation)))
          //Task 3 - Stagger Function:
          /*
          query('.list-group-item', 
          stagger(200, [
            style({transform: 'translateX(-20px)', opacity: 0}),
            animate(1000)
          ]))
          */
         //Task 4 - Final Version
         query('@todoAnimation', stagger(200, animateChild()))
          
        ])
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', useAnimation(fadeInAnimation, {
        params:{
          duration:'10s'
        }
      })),
      transition(':leave', [
        style({backgroundColor: 'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
  //Task 2 - Create Methods in Component:
  animationStarted($event) {
    console.log("Started: ", $event)
  }

  animationDone($event) {
    console.log("Done: ", $event)
  }
}
