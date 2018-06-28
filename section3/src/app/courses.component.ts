//Section 4 - Tutorial 7 - Event Binding
//Task 1 - Bind Click Event to OnSave Method
//Tasl 2 - Implment onSave Method.
//Task 3 - Pass Event Object. 
//Task 4 - Demonstrate Event Bubbling
//Task 5 - Stop Event Bubbling with stopPropagation
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <div (click)="onDivClick()">
                <button (click)="onSave($event)">Save</button>
                </div>` 
})
export class CoursesComponent {
    isActive = true;
    
    onDivClick()
    {
        console.log("Div was clicked Saved");
    }
    onSave($event)
    {
        $event.stopPropagation();
        
        console.log("Data Saved",  $event);
    }
}