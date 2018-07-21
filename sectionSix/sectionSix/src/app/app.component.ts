import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Task 1 - Return List of Courses
export class AppComponent {
  courses = [
    {id: 1, name: 'CourseOne'},
    {id: 2, name: 'CourseTwo'},
    {id: 3, name: 'CourseThree'}
  ];

  onAdd()
  {
    this.courses.push({id: 4, name: 'CourseFour'});
  }
  onRemove(course)
  {
    let index = this.courses.indexOf(course);
    this.courses.splice(index);
  }
  onChange(course : Course)
  {
    course.name = 'UPDATED NAME';
  }
}

export class Course
{
  id: number;
  name: string;
}