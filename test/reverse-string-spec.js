const chai = require('chai');
const expect = chai.expect
const reverseString = require('../problems/reverse-string');

describe('reverseString()', () => {
    it('string should be reversed', () => {
        const expected = 'nuf'
        const actual = reverseString('fun')

        expect(actual).to.eql(expected);
    });

    it('should be error if argument type is not a string', () => {
        expect(() => reverseString(2)).to.throw(TypeError);
    })
});
