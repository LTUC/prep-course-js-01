"use strict"; // indicate that the code should be executed in "strict mode"
// I can't use undeclared variables in strict mode


// Example: without strict mode:

// explainingStrictMode = 5;
// explainingStrictMod = 6;
// console.log(explainingStrictMode); // result is 5

// Example: with strict mode:
var explainingStrictMode = 5;

explainingStrictMode = 6;

console.log(explainingStrictMode); //result is 6

// Declaring variable:
// 1. let
// 2. const
// 3. var