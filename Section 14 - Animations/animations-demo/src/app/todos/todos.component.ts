import { Component } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        //Task 1 - Group Queries:
        /* Task 2 - Group Animations Example:
        group([
          animate(1000, style({background: 'red'})),
          animate(2000, style({transform: 'translateY(50px)'}))
        ])
        */
        group([
          query('h1', [
            style({transform: 'translateY(-20px)'}),
            animate(1000)
          ]),
          query('@todoAnimation', animateChild())
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
