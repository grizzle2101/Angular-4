import {compute} from './compute';

//Task 1 - Create Test File
//Task 2 - Create Test Setup (DESCRIBE & IT)

describe('compute', () => {
    //Task 3 - Define Test Methods
    //Test Case 1:
    it('Should return 0 if input is negative.', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    //Test Case 2:
    it('Should increment 1 if input is whole number.', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})
