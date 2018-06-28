//Section 4 - Tutorial 8 - Event Filtering
//Task 1 - Demonstrate Traditional Event Filtering
//Task 2 - Angular Version
//Much nicer, no need to do Event Filtering in the Component.
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <input (keyup.enter)="onKeyUp()" />` 
})
export class CoursesComponent {
    isActive = true;
    
    onKeyUp()
    {
        console.log("Enter was Pressed");        
    }
}