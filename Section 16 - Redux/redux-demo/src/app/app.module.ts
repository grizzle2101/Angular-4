import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import {IAppState, rootReducer, INITIAL_STATE} from './store'
import {fromJS, Map} from 'immutable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//Task 1 - Convert Initial State to Immutable type:
export class AppModule { 
  constructor(ngRedux: NgRedux<Map<string, any>>){
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}