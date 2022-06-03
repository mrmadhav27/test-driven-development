const chai = require("chai");
const { type } = require("mocha/lib/utils");
const expect = chai.expect;

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe("returnsThree", () => {
    it("it should return a number three", () => {
        let number = returnsThree();
        expect(number).to.eql(3);
    })
})

describe("reciprocal", () => {
    it ("should return reciprocal of the n", () => {

        let actual1 = reciprocal(4);

        expect(actual1).to.eql(1/4);
    })
    it ("should be greater than zero", () => {
        expect(() => reciprocal(-1)).to.throw(TypeError);
    })
    it ("should be less than one million", () => {
        expect(() => reciprocal(1000002)).to.throw(TypeError);
    })
})
