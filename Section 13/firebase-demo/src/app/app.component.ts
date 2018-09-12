import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  courses;
  author;


  //Instansiate DB from Config
  constructor(private db: AngularFireDatabase) {
    this.db.list('/Courses').valueChanges().subscribe(courses => this.courses = courses);
    this.author = this.db.object('/authors/1').valueChanges();
    console.log(this.courses);
  }


  //Task 2 - Impment Adding to Firebase:
  add(course: HTMLInputElement) {
    //this.courses.push(course.value);
    //this.db.list('/Courses').push(course.value);
    //Task 4 - Try Passing a Complex Object:
    this.db.list('/Courses').push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        {title: 'Components'},
        {title: 'Directives'},
        {title: 'Templates'},
      ]
    });
    console.log('Added', course.value);
    //Clear Input
    course.value = '';
  }

}
