import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Task 1 - Send Data as Observerables:
  //Dollar Sign means Observeable(by convention):
  courses$;
  //Alternative Method = courses: Observable;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/Courses').valueChanges();
  }

  /*
  //Don't Need this anymore.
  ngOnDestroy() {
    console.log('Gone');
    this.subscription.unsubscribe();
  }
  */
}
