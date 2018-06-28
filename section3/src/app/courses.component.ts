//Section 4 - Tutorial 10 - Two Way Data Binding:
//In OO, we should be objects, not variables & properties like we have been doing.
//Task 1 - Use Property Binding to set Email.
//Task 2 - 2 Way Bind to NGModel
//Task 3 - Import NgModel
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <!--<input [value]="email" (keyup.enter)="email= $event.target.value; onKeyUp()" />-->
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />` 
})

export class CoursesComponent {
    email="me@example.com";
    
    onKeyUp(email)
    {
        console.log(this.email);        
    }
}