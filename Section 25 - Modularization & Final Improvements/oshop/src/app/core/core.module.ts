import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule.forRoot(), //Needed for Dropdown
    RouterModule.forChild([])
  ],
  exports: [
    BsNavbarComponent //To Be Used all over application
  ]
})

//Task 2 - Create Core Module
export class CoreModule { }
