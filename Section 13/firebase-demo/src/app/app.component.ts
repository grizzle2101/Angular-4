import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  courses$;
  course$;
  author$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/Courses').valueChanges();
    //Task 1 - Filter Data for Specific Object:
    this.course$ = db.object('/Courses/3').valueChanges();

    //Task 4 - Create & Display Author Object:
    this.author$ = db.object('/authors/1').valueChanges();
  }
}
