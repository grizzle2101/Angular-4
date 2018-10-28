import { BrowserModule } from '@angular/platform-browser';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatIconModule } from '@angular/material';
//Task 1 - Import Buttons Module:
import { MatButtonModule } from '@angular/material';
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
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
