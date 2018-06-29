//Section 4 - Tutorial 12 - Custom Pipes
//Task 1 - Setup Text
//Task 2 - Create File Summary.pipe.ts
//Task 3 - Create Class
//Task 4 - Register in App.Module
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                {{text | summary:10}}
                ` 
})

export class CoursesComponent {
    text = `lorem epsum bla bla bla bla bla bla`;
    
}