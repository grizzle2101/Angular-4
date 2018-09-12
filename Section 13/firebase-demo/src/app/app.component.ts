import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  courses: any[];
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.subscription = db.list('/Courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });
  }

  //Task 1 - Implment ngOnDestroy:
  ngOnDestroy() {
    console.log('Gone');
    this.subscription.unsubscribe();
  }
}
