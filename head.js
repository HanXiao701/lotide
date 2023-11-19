const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Paased: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const head = function(input) {
    if (input.length > 0) {
        return input[0];
    } else {
        return false;
    }
  }
  
  // TEST CODE
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");