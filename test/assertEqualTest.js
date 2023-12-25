// TEST CODE for assertEqual.js
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for 'Listhouse Labs', 'Listhouse Labs'", () => {
    assert.isTrue(assertEqual("Listhouse Labs", "Listhouse Labs"));
  });
  it("returns 'false' for 'Listhouse Labs', 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Listhouse Labs", "Bootcamp")); 
  });
  it("returns 'true' for '1', '1'", () => {
    assert.isTrue(assertEqual("1", "1")); 
  });
  it("returns 'false' for '1', '1.5'", () => {
    assert.isFalse(assertEqual("1", "1.5")); 
  });
});