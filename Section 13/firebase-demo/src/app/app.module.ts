import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';//FireBase
import {AngularFireDatabaseModule} from 'angularfire2/database';//Firebase DB
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';//Environment for Config

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
