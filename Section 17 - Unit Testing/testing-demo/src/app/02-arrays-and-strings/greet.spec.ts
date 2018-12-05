import { greet } from './greet';


//The Reason we don't do a ToBe is because it makes out test brittle, we don't care about punctuation.
describe('greet', () => {
    it('Input is displayed in Message', () => {
        //Arrange

        //Act
        const result = greet('Ben');

        //Assert
        expect(result).toContain('Ben');
    })
})

