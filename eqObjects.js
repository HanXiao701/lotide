// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = function(array1, array2){
    if(array1.length != array2.length){
        return false
    }
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
};

const eqObjects = function(object1, object2) {
    if(Object.keys(object1).length != Object.keys(object2).length){
        return false;
    }
    for(const key of Object.keys(object1)){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
            if(!eqArrays(object1[key], object2[key])){
                return false;
            }
        }else if(object1[key] !== object2[key]){
            return false;
        }
    }
    return true;
};

const assertEquals = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Paased: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // TEST CODE
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
  //We need to use that return value in combination with assertEquals to test if the function is working correctly.
  assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

  const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
  assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);