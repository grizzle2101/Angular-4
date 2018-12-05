import { VoteComponent} from './vote.component';

describe('Vote', () => {
  let component: VoteComponent;

  //Task 2 - Use Setup & YearDown
  beforeEach(() => {
    component = new VoteComponent();
  })


  afterEach(() => {
  });

  //Task 1 - Setup Test Cases
  //Test Case 1:
  it('Should Increment VoteCount', () => {
    //Act
    component.upVote();

    //Assert
    expect(component.totalVotes).toBe(1);
  })

  //Test Case 2:
  it('Should Decrement VoteCount', () => {
    //Act
    component.downVote();

    //Assert
    expect(component.totalVotes).toBe(-1);
  })
})