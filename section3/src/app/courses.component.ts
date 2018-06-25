//Section 4 - Tutorial 4 - Adding BootStrap
//Task 1 - NPM Install bootstrap
//Task 2 - Add bootstrap to global style.css
//Task 3 - Use BootStrap Button
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
                <button class="btn btn-primary">Save</button>` 
})
export class CoursesComponent {
    imageUrl = "https://d1yn1kh78jj1rr.cloudfront.net/previews1/free-sample-stamp_MJl0grOu.jpg";
    colSpan = 2;
}