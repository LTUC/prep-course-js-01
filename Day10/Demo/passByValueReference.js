'use strict';

// Pass by value vs Pass by reference:
let x = 5;
let y = x;
console.log("before x",x);
console.log("before y", y);

// y = 7;
x =7;

console.log("After: x",x);
console.log("After y", y);

//  Pass by reference
let person = {
  name: "Marah",
}

let newPerson = person;

console.log("before person",person);
console.log("before newPerson", newPerson);

newPerson.name = "Marah Refai";

console.log("After person",person);
console.log("After newPerson", newPerson);