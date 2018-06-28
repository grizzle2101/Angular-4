//Section 4 - Tutorial 6 - Style Binding
//Task 1 - Appy Class Binding on Button
//Task 2 - Add isActive Property to CourseComponent:
//For more on Style.properties google DOM Style object properties
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>` 
})
export class CoursesComponent {
    isActive = true;
}