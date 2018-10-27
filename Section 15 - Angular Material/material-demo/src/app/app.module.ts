import { BrowserModule } from '@angular/platform-browser';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule } from '@angular/material/checkbox';
//Task 2 - Import Radio Module
import {MatRadioModule} from '@angular/material/radio';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    //Task 2 - Import Radio Module
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
