/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });


  //Test 1 - Should use Color provided as Input.
  it('Should highlight the first element with Cyan', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0]; //Get All Paragraphs, pick first.
    
    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });



  //Test 2 - Should use default color if none provided.
  it('Should highlight the second element with default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1]; //Get All Paragraphs, pick first.
    let directive = de.injector.get(HighlightDirective);

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
