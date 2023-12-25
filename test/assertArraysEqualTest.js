// TEST CODE for assertEqual.js
const assert = require('chai').assert;
const assertArrayEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for ['Listhouse Labs'], ['Listhouse Labs']", () => {
    assert.isTrue(assertArrayEqual(['Listhouse Labs'], ['Listhouse Labs']));
  });
  it("returns 'false' for ['Listhouse Labs'], ['Listhouse Labs', 'Bootcamp']", () => {
    assert.isFalse(assertArrayEqual(['Listhouse Labs'], ['Listhouse Labs', 'Bootcamp'])); 
  });
  it("returns 'true' for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(assertArrayEqual([1, 2, 3], [1, 2, 3])); 
  });
  it("returns 'false' for [1, 2, 3], [1.5, 2, 3]", () => {
    assert.isFalse(assertArrayEqual([1, 2, 3], [1.5, 2, 3])); 
  });
});