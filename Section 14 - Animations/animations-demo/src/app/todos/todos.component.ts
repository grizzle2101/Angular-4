import { Component } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animations';
import { trigger, transition, style, animate, useAnimation} from '@angular/animations';


@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoAnimation', [
      //Task 5 - Use Paramerized Animations
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
}
