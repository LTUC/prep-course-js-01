'use strict';

// object for student
let Ahmad = {
   firstName : "Ahmad" ,
   lastName : "Al-Bazbaz",
   isSleep : false , 
   age : 24,

   drinkCoffee : function(){
    //    console.log("I don't like it");
    //    console.log(this.age)
    return this.age;
   },

   fullName : function(){
       console.log(this.firstName , this.lastName)
   }
}

console.table(Ahmad)
console.log(Ahmad.age);
console.log(111111111111111,Ahmad.fullName)
Ahmad.fullName();
Ahmad.drinkCoffee();
console.log(22222222222222, Ahmad.drinkCoffee() );

// update a property 
Ahmad.isSleep = true;
console.log(Ahmad.isSleep )
// add a new property:
Ahmad.isHappy = true;

console.table(Ahmad)

// Add a new method:
Ahmad.drinkTea = function(){
    console.log("I love it");
}

