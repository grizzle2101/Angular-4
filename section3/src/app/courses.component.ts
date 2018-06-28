//Section 4 - Tutorial 9 - Template Variables:
//How can we get the value from the input field?
//Task 1 - Get Value through event object
//Task 2 - Angular Version - template Variables
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <input #email (keyup.enter)="onKeyUp(email.value)" />` 
})
export class CoursesComponent {
    isActive = true;
    
    onKeyUp(email)
    {
        console.log(email);        
    }
}