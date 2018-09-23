import { Component } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';

//Task 1 - Add Animations to MetaData:
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade', [ //Create Fade Annotation
      transition('void => *', [ //On Change from Void to Default
        style({opacity: 0}), //Styles to Apply
        animate(2000) //Time & Style for Animated State
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
