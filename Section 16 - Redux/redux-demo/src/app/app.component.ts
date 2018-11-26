import { Component } from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import { IAppState } from './store';
import {INCREMENT} from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select('counter') count;
  //Task 5 - Access a Complex Object:
  //@select(['messaging', 'newMessages']) newMessages;
  //@select((s: IAppState) => s.messaging.newMessages) myMessages;

  //Add Redux
  constructor(private ngRedux: NgRedux<IAppState>){}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
