/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  //Task 2 - Import RouterTestingModule
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  //Task 1 - Create Test 1, Should have a Router Outlet:
  //Get a reference to RouterOutlet, then assert that this element is NOT Null.
  it('Should have a route Outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });

  //Task 3 - Test 2, Ensure todos Link exist
  //Verify we have the correct links in app.module.
  it('Should have a link for Todos', () => {
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let index = de.findIndex(de => de.properties['href'] == '/todos');

    expect(index).toBeGreaterThan(-1);
  });
});
