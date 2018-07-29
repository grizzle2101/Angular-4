import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent
{
  courseCatagories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Business'},
    {id: 3, name: 'Primary Teaching'},
  ];

  submit(course)
  {
    console.log("Submitting: " , course);
  }
}
