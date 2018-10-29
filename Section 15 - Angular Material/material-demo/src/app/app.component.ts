import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Task 4 - Use openDialog to redirect to Component:
  constructor(private dialog: MatDialog)
  {}
  openDialog()
  {
    //Note Return type is DialogRef(EditCourseComponent)
    this.dialog.open(EditCourseComponent)
    .afterClosed() //Observeable
    .subscribe(result => console.log(result));//Get Result
  }
}
