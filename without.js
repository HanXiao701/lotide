const assertArraysEqual = function(actual, expected) {
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
};

const without = function(source, itemsToRemove) {
    let result = [];
    for (let i = 0; i < source.length; i++){
        if(!itemsToRemove.includes(source[i])){
            result.push(source[i]);
        }
    }
    return result;
}

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual([1, 2, 3], [2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2"]);
