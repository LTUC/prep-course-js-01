'use strict';

let drinksDiv = document.getElementById("drinks");
let btn = document.getElementById("btn");
let secondBtn = document.getElementById("btn2");
let from = document.getElementById("from");
let parent = document.getElementById("parent")
let table = document.createElement("table");
parent.appendChild(table);
console.log(parent);

Drink.allDrinks = [];

function Drink(name, ingredients, cold, hot, img) {
    this.name = name;
    this.ingredients = ingredients;
    this.isCold = cold;
    this.isHot = hot;
    this.price =getRndInteger(1, 9);
    this.image = img;
    Drink.allDrinks.push(this);
}

// Methods
Drink.prototype.render = function () {
    // add the name of the drink:
    let heading = document.createElement('h4');
    heading.textContent = this.name;
    // heading.innerHTML = ""
    drinksDiv.appendChild(heading);

    // add the ingredients:
    let ul = document.createElement('ul');
    drinksDiv.appendChild(ul); // unorded list

    for (let i = 0; i < this.ingredients.length; i++) {
        let list = document.createElement('li');
        ul.appendChild(list);
        list.textContent = this.ingredients[i];
    }

    // Add an image of the Drink
    let image = document.createElement('img'); // image = <img>
    image.setAttribute("src", this.image);
    drinksDiv.appendChild(image);



}
// Drink.prototype.randomPrice = function (min, max) {
//     this.price = getRndInteger(min, max);

// }

Drink.prototype.renderBodyTable = function(){
    let tr = document.createElement("tr");
    table.appendChild(tr);
     
    let tdOne = document.createElement("td");

    tdOne.textContent = this.name;
    tr.appendChild(tdOne);

    let tdTwo = document.createElement("td");
    tdTwo.textContent = this.price;
    tr.appendChild(tdTwo);
}


// Functions:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveToLocalStorage() {
    let stringifedData = JSON.stringify(Drink.allDrinks);
    localStorage.setItem("drinks", stringifedData);
}
function getData() {
    let data = localStorage.getItem("drinks");
    let parseData = JSON.parse(data);
    if (parseData != null) {
        console.log(parseData);
        // Drink.allDrinks = parseData;
        for (let i = 0; i < parseData.length; i++) {
            console.log(parseData[i]);
            new Drink(parseData[i].name, parseData[i].ingredients, parseData[i].isCold, parseData[i].isHot, parseData[i].image)
        }
    }
    renderAll();  
}

function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);
     
    let thOne = document.createElement("th");

    thOne.textContent = "Drink Name";
    tr.appendChild(thOne);

    let thTwo = document.createElement("th");
    thTwo.textContent = "Price"
    tr.appendChild(thTwo);
}

function renderBody(){
    for (let i = 0; i < Drink.allDrinks.length; i++) {
       Drink.allDrinks[i].renderBodyTable()
        
    }
}


// new Instances:
let mochaIngredients = ["espresso", "choclate powder", "milk"];
let americanoDrink = new Drink("americano", ["coffee", "milk"], false, true, "./images/americano.PNG");
let mochaDrink = new Drink("mocha", mochaIngredients, true, true, "./images/mocha.PNG");
let latteDrink = new Drink("latte", ["espresso", "choclate powder", "whiped milk"], true, false, "./images/latte.PNG");
// let tea = new Drink("tea", ["tea", "water"], false, true);


function renderAll() {
    for (let i = 0; i < Drink.allDrinks.length; i++) {
        // Drink.allDrinks[i].randomPrice(1, 5);
        Drink.allDrinks[i].render();
    }

}


renderAll();

btn.addEventListener("click", btnFunction)

function btnFunction() {
    alert("Hello, welcome to our coffee House 😊🌹");
}


secondBtn.addEventListener("mouseover", function () {
    secondBtn.textContent = "🙌";
})

secondBtn.addEventListener("mouseout", function () {
    secondBtn.textContent = "Hello again!";
})


from.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    let drinkName = event.target.drinkName.value;
    let ingredients = event.target.ingredients.value;
    let ingredientsArr = ingredients.split(",");
    let drinkImage = event.target.images.value;

    let coldDrink = event.target.isCold.checked;
    let hotDrink = event.target.isHot.checked;
    let newDrink = new Drink(drinkName, ingredientsArr, coldDrink, hotDrink, drinkImage);
    renderAll();
    // newDrink.randomPrice();

    
    // newDrink.render();
    saveToLocalStorage();
    newDrink.renderBodyTable();
    

    // renderBody();
}
renderHeader();
renderBody();
getData();