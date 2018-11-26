import { Component } from '@angular/core';
//Import Redux Type
import {NgRedux} from 'ng2-redux';
import { IAppState } from './store';
//Extract Action Magic Strings
import {INCREMENT} from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter = 0;

  //Add Redux
  constructor(private ngRedux: NgRedux<IAppState>){}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
