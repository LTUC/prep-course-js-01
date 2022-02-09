'use strict';

function getDate(){
    let getData = localStorage.getItem("date");
    let data = JSON.parse(getData);
    // console.log(data);
    return data;
}

// Single Responsibility Principle

function printDate(){
    let date = getDate();
    let p = document.getElementById("aboutDate");
    p.textContent = date;
}


printDate();