const head = function(array){
    if (array.length===0){
        return undefined;
    }else{
        return array[0];
    }
}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    }
  };

assertEqual(head(['dog','cat','hat']),'dog');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");