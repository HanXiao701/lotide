const findKeyByValue = function(object, value){
    for (const key in object) {
        if(object[key] == value){
            return key;
        }
    }
    return;
}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Paased: ${actual} === ${expected}`);
      return true;
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
        
    }
  };

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);