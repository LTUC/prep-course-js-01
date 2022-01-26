'use strict';

console.log(localStorage);
// saving to the local storage
localStorage.setItem("name", "Jalal");
localStorage.setItem("age", "28");
localStorage.setItem("class", "JavaScript");

// getting the data from the local storage
let nameValue = localStorage.getItem("name");
console.log(nameValue);

// remove an item:
localStorage.removeItem("age");

localStorage.clear();