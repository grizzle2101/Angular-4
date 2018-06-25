//Section 4 - Tutorial 2 - Property Binding
//Task 1 - Demonstrate String Interpolation V Property Binding
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: ` <h2>{{title}}</h2>
                <h2>[textContent] = "title"</h2>
                <img [src] ="imageUrl"/>
                <img src="{{ imageUrl }}"/>` 
})
export class CoursesComponent {
    title = "List of Courses:";
    imageUrl = "https://d1yn1kh78jj1rr.cloudfront.net/previews1/free-sample-stamp_MJl0grOu.jpg";
    courses;


    constructor(service: CoursesService)
    {
        this.courses = service.getCourses();
    }
}