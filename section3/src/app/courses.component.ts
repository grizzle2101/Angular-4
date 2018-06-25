//Section 4 - Tutorial 5 - Class Binding:
//Task 1 - Apply Class Binding on Button
//Task 2 - Add Property to CourseComponent
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan"></td>
                    </tr>
                </table>
                <button class="btn btn-primary" [class.active]="isActive">Save</button>` 
})
export class CoursesComponent {
    isActive = true;
}