import { expect } from 'chai';
import { isAnagram } from './anagrams';


describe('isAnagram - challange question', () => {

    it('returns true when two known anagrams are passed in', () => {
        const expected = true
        const actual = isAnagram('listen','silent')
        expect(actual).to.deep.equal(expected)
    });
    it('returns false when either of the strings has extra letters', () => {
        const expeceted = false
        const actual = isAnagram('below','elbows')
        expect(actual).to.deep.equal(expeceted)

        //adding an extra check going in reverse!! <----- second check!
        const actual2 = isAnagram('elbows','below')
        expect(actual2).to.deep.equal(expeceted)

    });

});
