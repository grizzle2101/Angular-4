import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  courses: any[];
  author;


  //Instansiate DB from Config
  constructor(private db: AngularFireDatabase) {
    this.db.list('/Courses').valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });

    this.author = this.db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement) {
    this.db.list('/Courses').set((this.courses.length + 1).toString(), course.value);
    console.log('Added', course.value);
    course.value = '';
  }

  update(courseID: string, course: HTMLInputElement){
    courseID = courseID + 1;
    console.log('ID:' + courseID + ' Course:' + course);

    //Get Objec & Set Value
    this.db.object('/Courses/' + courseID).set(course + '-Updated');

  }

  //Task 2 - Implment Delete Method
  delete(courseID: string, course: HTMLInputElement) {
    this.db.list('/Courses/' + (courseID + 1 )).remove()
    .then(response => {console.log('Deleted', response)});
  }
}
