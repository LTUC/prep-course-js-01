'use strict'

// scope
// global scope
// local scope
// block scope

// let, const, var

// Block scope {}

if (true) {
    let i = 1;
}

if (true) {
    let i = 3;
}


// console.error(i);
let x = 0;
// local scope:
function localScope() {
    var x = 3;
    console.log("inside a function", x)
}

localScope();
console.log("outside the function", x)

// global scope:
var nameVar = "Nour";
console.log("before", nameVar);
var nameVar = "Moath"
console.log("after", nameVar);

// using let I can't redeclare a variables
let nameLet = "Nour";
console.log("before", nameLet);
// let nameLet = "Moath"
// console.log("after", nameLet);

nameLet = "Moath"
console.log("after", nameLet);

const nameConst = "Nour";
console.log("before", nameConst);
nameConst = "Moath"
console.log("after", nameConst);

