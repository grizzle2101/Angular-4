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
    this.db.list('/Courses').valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });

    this.author = this.db.object('/authors/1').valueChanges();
  }


  add(course: HTMLInputElement) {
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
    course.value = '';
  }

  //Task 2  - Implment Update Method:
  update(courseID: string, course: HTMLInputElement){
    courseID = courseID + 1;

    //Get Objec & Set Value
    this.db.object('/Courses/' + courseID)
    //.set(course + '-Updated');
    .set({
      title: course + 'updated',
      price: 150
    });
  }
}
