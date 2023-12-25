const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected){
    // flag result for wether the actual and expected arrays are equal or not
    let flag = eqArrays(actual, expected);
    if (flag === true){
        console.log(`✅Assertion passed: ${actual} === ${expected}`);
        return true;
    }else{
        console.log(`❌Assertion failed: ${actual} !== ${expected}`);
        return false;
    }
}

module.exports = assertArraysEqual;
