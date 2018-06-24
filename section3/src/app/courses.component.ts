//Section 3 - Tutorial 6 - Directives
//Task 1 - Return List of Courses

import {Component} from '@angular/core'

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
    courses = ["courseOne", "courseTwo", "courseThree"];

}