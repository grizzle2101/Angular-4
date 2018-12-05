import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  //Test Case 1 -
  it('Should Raise VoteChanged event when UpVote is triggered', () => {
    //Arrange
    //Subscribe to Event & Get Votes
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);

    //Act
    component.upVote();

    //Assert
    expect(totalVotes).toBe(1);
  });
});