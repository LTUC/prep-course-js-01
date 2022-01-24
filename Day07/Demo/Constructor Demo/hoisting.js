'use strict';

// calling the function before declaring it
// hoisting();
helloWorld();


// declare a function
function helloWorld(){
    
    hoisting();
    console.log("Hello");
}

console.log("Before",neveen);

function hoisting(){
    console.log("Call me where you want me");
    
}

var neveen = function(){
    return "Hello Neveen"
}

console.log("After",neveen());


// call the function 
// hoisting();

// Hoisitng with variables 

number = 5;
console.log(number);

var number;

