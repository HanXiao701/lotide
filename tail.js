const assertEqual = function(actual, expected) {
    if (Array.isArray(actual) && Array.isArray(expected)){
        if(actual.length != expected.length){
            console.log(`🛑🛑🛑Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
        }else{
            for (let i = 0; i < actual.length; i++) {
                if (actual[i] !== expected[i]) {
                    console.log(`🛑🛑🛑Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
                    return;
                }
                console.log(`✅✅✅Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
            }
        }
    }else{
        if (actual === expected) {
            console.log(`✅✅✅Assertion Paased: ${actual} === ${expected}`);
        } else {
            console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
        }
    }
};

const tail = function(input){
    return input.slice(1);
}
  
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!