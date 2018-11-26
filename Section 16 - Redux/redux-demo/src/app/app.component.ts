import { Component } from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import { IAppState } from './store';
import {INCREMENT} from './actions'
import {Map} from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Task 3 - Refactor App Component for Immuteable Objects:
export class AppComponent {
  title = 'app works!';
  @select(s => s.get('counter')) count;

  constructor(private ngRedux: NgRedux<Map<string, any>>){}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
