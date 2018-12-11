/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {
  }
}

//Task 2 - Set Route Params
class ActivatedRouteStub {
  private subject = new Subject();

  //Add Value to Subject
  push(value) {
    this.subject.next(value);
  }
  //Get Subject as Observable
  get params() {
    return this.subject.asObservable();
  }
}


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Test 1 - Ensure we are reriected onSave:
  it('Should redirect User to the Users page after saving', () => {
    //Arrange
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    //Act
    component.save();

    //Assert
    expect(spy).toHaveBeenCalledWith(['users']); //Users Page
  });

  
  //Test 2 - Should navigate to page not found if user == 0
  it('Should redirect User to the page not found, when an invalid user id is passed', () => {
    //Arrange
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    //Act
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id: 0});

    //Assert
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
