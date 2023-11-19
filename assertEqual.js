const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Paased: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Listhouse Labs", "Listhouse Labs");
assertEqual("Listhouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 1.5);