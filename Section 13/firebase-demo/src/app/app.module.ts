import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//FireBase
import {AngularFireModule} from 'angularfire2';
//Firebase DB
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
//Environment for Config
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
