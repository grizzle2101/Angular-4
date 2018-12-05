import { getCurrencies } from './getCurrencies';

//Again, don't get to specific. We don't care about the order, just that they're included.
//If I chose to make these ordered alpabetically, my test should not break.
describe('getCurrencies', () => {
    it('Validate currencies are returned', () => {
        //Arrange

        //Act
        const result = getCurrencies();

        //Assert
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})