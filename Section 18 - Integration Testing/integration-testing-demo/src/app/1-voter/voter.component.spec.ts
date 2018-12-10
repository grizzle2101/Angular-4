import { VoterComponent } from './voter.component';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  //Test 1 - Total Votes is rendered properly.
  it('Should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'))
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(21);
  });

  //Test 2 - Pressing Vote Highlights Button.
  it('Should Highlight the UpVote button if upvoted.', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  //Test 3 - Event Binding, UpVote Button Increments:
  it('Should increment VoteCount if clicked', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click', null); 

    expect(component.totalVotes).toBe(1);
  });
});