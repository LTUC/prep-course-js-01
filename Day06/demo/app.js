'use strict'

// present days of the week with variables
let day1 = "Sunday";
let day2 = "Monday";
// so on

// present days of the week using arrays

let days = ["Sunday", "Monday", "Tuesday", 1, true];

console.log("first array",days);
// the length of the array
console.log(days.length);
// the first element of the array:
console.log(days[0]);


// Array methods:
// push: add an element or more to the end of my Array
let lengthPush = days.push("Friday")
// console.log(lengthPush); // push will return the new length of the array

console.log("After pushing", days);
// Push multiple elements:
days.push("Thurday", "Friday")

console.log("After second push", days);

// unshift method
days.unshift("Satureday")
console.log("After unshift", days);
// another way of adding an element
days[9] = "new";
// console.log(days);

days[6] = "Wednesday";
days[5] = false;

// console.log(days);

// removing elements: pop()

let lastElement = days.pop();
// console.log("Removed Element is ", lastElement);
// console.log("days after removing", days);

// shift()
let firstElement = days.shift();
// console.log("Removed Element is ", firstElement);
// console.log("days after removing", days);

// loops:
// for(start point; end point ; increment or decrement){
    // the body of for loop
//}

for(let i=0 ; i<= 5; i=i+2){

    // console.log(i);
}

// loop over an array:

for(let i =0 ; i<days.length; i++){

    // console.log(`index number ${i} : ${days[i]}`);
    // console.log("index number"+ i + ":" + days[i]);
}
let reversedDays = [];
// reverse the array:
for(let i=days.length-1; i>=0; i--){
    // console.log(days[i]);
    reversedDays.push(days[i]);
    
}
// console.log(days);
// console.log("reversed days:", reversedDays);

// reverse an array using unshift
let reversedDays2=[];

for (let i = 0; i < days.length; i++) {
    
    reversedDays2.unshift(days[i]);
}

// console.log( reversedDays2);


// console.log(days.reverse());
// while + do-while 

let userInput = '';

while(userInput != "male" && userInput != "female" ){
  
  userInput =  prompt("entre male or female");
  if(userInput == "female"){
      break;
  }
}



let i =0;
do {
    console.log("Hello from do while")
    i++;
} while (i=0);


while(i=0){
    console.log("Hello from while");
}

// continue
for (let i = 0; i < 5; i++) {
   if(i ==3) continue;

   console.log(i);
    
}