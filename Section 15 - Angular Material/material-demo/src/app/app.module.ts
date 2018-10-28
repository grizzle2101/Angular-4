import { BrowserModule } from '@angular/platform-browser';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule } from '@angular/material';
//Task 1 - Import DataPicker Module:
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  //Task 4 - Limit Date Selection:
  //Create Min & Max Dates in Component.
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 2, 2);

  
 }
