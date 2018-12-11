/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

class RouterStub {
  navigate(params) {
  }
}

class ActivatedRouteStub {
  params: Observable<any> = Observable.empty();
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

  //Task 1 - Write a Test to Ensure we are reriected onSave:
  it('Should redirect User to the Users page after saving', () => {
    //Arrange
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    //Act
    component.save();

    //Assert
    expect(spy).toHaveBeenCalledWith(['users']); //Users Page
  });
});
