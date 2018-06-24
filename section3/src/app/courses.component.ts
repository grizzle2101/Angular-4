//Section 3 - Tutorial 8 - Dependency Injection
//Task 1 - Create Construcor
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

    //Task 1 - Inject Dependency as Parameter
    constructor(service: CoursesService)
    {
        this.courses = service.getCourses();
    }
}