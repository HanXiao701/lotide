const findKey = function (object1, callback) {
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (callback(object1[key])) {
      return key;
    }
  }
  return undefined;
};
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    }
  };

assertEqual(findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),'noma');

  assertEqual(findKey(
    {
      blackpink: 'Jennie',
      gidle: 'Yuqi',
      aespa:'Ningning',
    },
    name => name==='Yuqi'
  ),'gidle');