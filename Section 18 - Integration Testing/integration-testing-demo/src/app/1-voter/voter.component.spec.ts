import { VoterComponent } from './voter.component';
import {TestBed, ComponentFixture} from '@angular/core/testing';

describe('VoterComponent', () => {
  //Task 3 - Setup Component & Fixture
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  //Task 1 - Setup TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });
    //Task 2 - Use TestBed
    //Set Component & Fixture 
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('', () => {
  });
});
