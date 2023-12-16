const countLetters = function(text){
    const result = {};
    for(const letter of text){
        if(result[letter]){
            result[letter] += 1;
        }else{
            result[letter] = 1;
        }
    }
    return result;
}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Paased: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // TEST CODE
  console.log(countLetters("Listhouse Labs"))