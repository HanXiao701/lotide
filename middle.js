const middle = function(arr){
    let middleArr = [];
    if(arr.length>2){
        if(arr.length%2 === 0){
            middleArr = [arr[arr.length/2-1],arr[arr.length/2]];
        }else if (arr.length%2 === 1){
            middleArr = [arr[Math.floor(arr.length/2)]];
        }
    }
    return middleArr;
}

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));// => [3]);
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));