'use strict'

// functions:

function functionName(params) {
    // body of the function
}

// function to print Hello
// declare a function
function hello() {
    console.log("Hello");
    // 15 lines of code 
}

// call a function (envoke it)
hello();
hello();

// Funcion that print Hello name

function helloName(name) {
    console.log("Hello " + name);
    console.log("after");
}

helloName("Amer");

helloName(true)
let secondResult = helloName("Mohammad")
console.log("secondResult", secondResult);

// function that returns the how are you name
function howAreYou(name, tittle) {
    return `How are you ${tittle} ${name}`;
}

let result = howAreYou("Neveen", "Ms.")
console.log(result)

// reversing an array:

function reverseArr(array){
    if(typeof array != "string"){
        return  array.reverse();
    }
    else {
        console.error("not an array")
        return "Entre an array"
    }
}

let resultOfReverse = reverseArr([1,2,3]);
console.log(resultOfReverse);

let daysReversed = reverseArr(["Sun", "Mon", "Tues"]);
console.log(daysReversed);

let errorExample= reverseArr("sting");
console.log(errorExample);

console.log("type of array in js is ",typeof [1,2,3]);

let string = [1,2,3].toString(); // "1,2,3"
console.log(typeof string, string);
// how to turn a string to array

// other examples of functions
// square of a number

function sqare(number){
    return number*number;
}
// NaN 

// sqare of 3
let resultSquare = sqare(3);
console.log(resultSquare); // console.log(sqare(3))

// Anonymous function is unknown function // without a name
let product = function(x,y){
    return x*y;
}

console.log(product(2,4));

// arrow function // ES6
let oldWay = function average(x,y){
    return (x+y/2);
}

console.log(oldWay)
console.log(oldWay(3,7));
// using arrow functions:

let newWay = (x,y) => {
    let result = (x+y/2)
    return result;
}
console.log(newWay(3,7));

let oneLine = (x,y) => (x+y/2)

// let oneLine = (x,y) => {
//     return  (x+y/2)
// }

console.log(oneLine(3,7));

// let oneParam = (x) => x*x

let oneParam = x => x*x
console.log(oneParam(3));

function oneParamOld(x){
   
    return  oneLine(3,7)*x;
}


// old way
function sum(num1,num2){
    return num1+ num2;
}
//7+9
// let num1 = 7;
// let num2 = 9;
// console.log(sum(num1, num2))

// new way:
let total = (x,y) => {
    return x+y
}


