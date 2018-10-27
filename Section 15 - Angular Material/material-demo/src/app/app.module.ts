import { BrowserModule } from '@angular/platform-browser';
//Task 6 - Import Browser Animations Module
import  {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import  {NoopAnimationsModule } from '@angular/platform-browser/animations' //No Animations

//Import CheckBox Component:
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Task 6 - Add Browser Animation Module
    BrowserAnimationsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
