import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public courses: any[];

  //Task 1 - Get Courses from Database:
  constructor(db: AngularFireDatabase) {
    db.list('/Courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });
  }
}
