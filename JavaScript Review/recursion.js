'use strict';

function power(base, number){
    if(number === 0){
        return 1;
    } else if(number === 1){
        return base;
    }
    else {
        return base * power(base, number - 1);
    }
}

console.log(power(2, 3)); 

// finding max:
function findMax(arr, index, length){
    if(length ===1){
        return arr[index];
    }
    else {
       return Math.max(arr[index], findMax(arr, index + 1, length - 1));
    }
}

console.log(findMax([1, 2, 3, 14, 5], 0, 5));