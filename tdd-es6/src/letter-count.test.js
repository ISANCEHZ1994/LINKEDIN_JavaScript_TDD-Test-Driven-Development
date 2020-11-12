import { expect } from 'chai';
import { getLetterCount } from './letter-count';

// two new MOCHA keywords DESCRIBE && IT

// describe('getLetterCount - basic functionality', () => {

//     // DESCRIBE is a function that takes in arguments and is used to group similar tests together
//     // first argument is a string that DESCRIBES the group of tests we are running
//     // second is an anonymous function/arrow function which contains the actual test we want to run

//     it('returns an empty oject when passed an empty string', () => {
//         // IT is used to denote/indicate/be a sign of, individual tests that ALSO takes in two arguments
//     // first argument is a string that we use to tell ourselves the EXACT pieces of functionality to test
//     // second is a function that will contain the actual claims we want to make about our code

//         const expected = {};
//         const actual = getLetterCount('');

//     // EXPECT is a function that comes from Chai
        
//         expect(actual).to.deep.equal(expected) 
//     // the reason we use DEEP is because we are comparing objects
//     }) 
    
// })

// BELOW without notes <-----------------------------------

describe('getLetterCount - basic functionality', () => {

    it('returns an empty oject when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);

    });
    it('return the correct letter count for a word with only one of each letter', () => {
        const expected = { c: 1, a: 1, t: 1 }
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);  
    });
    it('should return the correct letter count for words with more than one of certian letters', () => {
        // 'mississippi' <--- the work we are testing
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual = getLetterCount('mississippi');
        expect(actual).to.deep.equal(expected);
    });
});

