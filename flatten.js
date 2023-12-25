const flatten = function(array){
    let finalArr = [];
    for(let i = 0; i< array.length; i++){
        if(Array.isArray(array[i])){
            finalArr = finalArr.concat(flatten(array[i]));
        }else{
            finalArr.push(array[i]);
        }
    }
    return(finalArr);
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));