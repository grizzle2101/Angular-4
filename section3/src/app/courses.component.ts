//Task 1 - Create Filer courses.component.ts (notice the naming convention)
//Task 2 - Create a Class and Module
//Task 3 - Decorate Class as a Component
//Task 4 - Register our Component in a Module
//Task 5 - Add Reference in HTML

import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: '<h2>Courses</h2>' //Can Point to HTML page.
})
export class CoursesComponent {

}