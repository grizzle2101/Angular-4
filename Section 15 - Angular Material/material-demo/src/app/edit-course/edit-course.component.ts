import { Component, OnInit, Inject } from '@angular/core';
import { DIALOG_DATA } from '../DIALOG_DATA';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  //Task 2 - Use Data in EditComponent Dialog:
  //-Switch Constructor parameters
  //Task 5 - Use Injection Token from Dialog Module:
  constructor(@Inject(MAT_DIALOG_DATA) data: any) 
  {
    //Task 4 - Print Dialog Data:
    console.log("Data:", data);
  }

  ngOnInit() {
  }

}
