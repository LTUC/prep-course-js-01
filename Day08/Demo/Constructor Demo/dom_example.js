'use strict';

let headerParent = document.getElementById("headerParent");
let main = document.getElementById("main");
console.log(main);


// create an element
// 1. creating the element 
let title = document.createElement("h1"); //title = <h1></h1>
// 2. added tittle inside the h1
title.textContent = "ASAC Coffe Menu"; // title = <h1> ASAC Coffe Menu </h1>
// 3. append the element where I want
headerParent.appendChild(title);
// 4. add styling:
title.style.color = "blue";



// create an h2
let secondTitle = document.createElement("h2");
secondTitle.textContent = "List of Drinks";
headerParent.appendChild(secondTitle);


// create an image
// 1. creating the element
// <img src="" alt=""> in HTML
let image = document.createElement("img");
// 2. add an attribute (src)
image.setAttribute("src", "https://icon-library.com/images/coffee-icon/coffee-icon-4.jpg");
// 3. append the image
// main.appendChild(image);
// 4. add styling
image.style.width = "70px"