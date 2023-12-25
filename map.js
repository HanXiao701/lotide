const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}
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
  
  const assertArraysEqual = function (actual, expected) {
    let flag = eqArrays(actual, expected);
    if (flag === true) {
      console.log(`✅Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    }
  };
  
  assertArraysEqual(map([1,2,3,4], num => num*2),[2,4,6,8]);
  assertArraysEqual(map(['dog','happy','love'], word => word.length),[3,5,4]);
  assertArraysEqual(map([1,NaN], item => Number.isNaN(item)),[false,true]);
  