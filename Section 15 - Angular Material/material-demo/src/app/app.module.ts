import { BrowserModule } from '@angular/platform-browser';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
//import { DIALOG_DATA } from './DIALOG_DATA';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
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
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents: [
    EditCourseComponent
  ],
  //-Use Injection Token:
  providers: [
    //{provide: DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
