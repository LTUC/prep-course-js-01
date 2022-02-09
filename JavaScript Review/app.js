'use strict';

let btn = document.getElementById("btn");
let parent = document.getElementById("parent");

btn.addEventListener("click", handleClick);

function handleClick(){
    let today = Date();
    let newDate = formatDate(today);
    // The p element already exists in the html
    let p = document.getElementById("date");
    p.textContent = newDate;
    // create a p element form js
    let p2 = document.createElement("p");
    parent.appendChild(p2);
    p2.textContent = "Hello World"
    console.log("parent", parent);
}

function formatDate(date){ // date = today
    let dateArr = date.split(" ");
    console.log(dateArr);
    return `${dateArr[2]} / ${dateArr[1]} / ${dateArr[3]}, time is: ${dateArr[4]}`;
}

function testingAt(arr){
    console.log(11, arr[arr.length-1]);
  
    console.log( 22, arr.at(-2));
}

const array1 = [5, 12, 8, 130, 44];
testingAt(array1);

