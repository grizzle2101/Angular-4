//Section 3 - Tutorial 7 - Services
//Task 1 - Create Service
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                    {{course}}
                    </li>
                </ul>` 
})
export class CoursesComponent {
    title = "List of Courses:";
    courses;

    //Logic for Calling API Service
}