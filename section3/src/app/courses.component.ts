//Section 4 - Tutorial 11 - Pipes
//Task 1 - Setup Course Object & Binding in Template
//Task 2 - 
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                {{course.title | uppercase | lowercase}}<br/>
                {{course.students | number}}<br/>
                {{course.rating | number: '1.1-1'}}<br/>
                {{course.price | currency:'AUD':true:'3.2-2'}}<br/>
                {{course.releaseDate | date:'shortDate' }}<br/>
                ` 
})

export class CoursesComponent {
    course = 
    {
        title: "The Complete Angular Course",
        rating: 4.975,
        students: 47.95,
        price: 190.95,
        releaseDate: new Date(2016, 3 ,1)
    }
}