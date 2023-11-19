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

const flatten = function(input) {
    let result = [];
    for(const i of input){
        let subArray = [];
        subArray.push(i);
        if(Array.isArray(i)){
            subArray = flatten(i);
        }
        for(const j of subArray){
            result.push(j);
        }
    }
    return result;
}

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, [3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
