const assertEqual = require('./assertEqual');

const eqArrays = function (actual, expected) {
  let flag = true;
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      flag = false;
    }
  }
  return flag;
};

module.exports = eqArrays;
