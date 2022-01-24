'use strict';

// creating students objects using a construtor

function Student(firstName, lastName,isSleep, age){
    this.firstName = firstName;
    this.lastName = lastName
    this.isSleep = isSleep
    this.age = age
    // this.fullName = function(){
    //     console.log(this.firstName , this.lastName)
    // }
}

// add methods to the constructor using prototype
Student.prototype.fullName = function(){
    console.log(this.firstName , this.lastName)
}



let karam = new Student("Karam", "Al-Qinneh" , false , 23 );
let mohammad = new Student("Mohammad", "Awadallah", false , 25);



if(karam.age < 30){
    console.log("Karam is young");
}

console.log(karam);
console.log(mohammad);

karam.fullName();


