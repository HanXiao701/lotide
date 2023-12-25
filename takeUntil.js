const takeUntil = function(array, callback) {
    // ...
    const results =[];
    for(const item of array){
        if(callback(item)){
            return results;
        }
        results.push(item);
    }
    return results;
  }

  const eqArrays = function (actual, expected) {
    if (actual.length !== expected.length) {
      return false;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
};
  
  const assertArraysEqual = function (actual, expected) {
    let flag = eqArrays(actual, expected);
    if (flag === true) {
      console.log(`✅Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);