//Section 4 - Tutorial 3 - Attribute Binding
//Task 1 - Demonstrate String Interpolation V Property Binding
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <img [src] ="imageUrl"/>
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan"></td>
                    </tr>
                </table>` 
})
export class CoursesComponent {
    imageUrl = "https://d1yn1kh78jj1rr.cloudfront.net/previews1/free-sample-stamp_MJl0grOu.jpg";
    colSpan = 2;
}