'use strict';

let allDrinks = [];
let drinksDiv = document.getElementById("drinks");
let btn = document.getElementById("btn");
let secondBtn = document.getElementById("btn2");
let from = document.getElementById("from");


function Drink(name, ingredients, cold, hot, img) {
    this.name = name;
    this.ingredients = ingredients;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0; // default value
    this.image = img;
    allDrinks.push(this);
}

// Methods
Drink.prototype.render = function () {
    // add the name of the drink:
    let heading = document.createElement('h4');
    heading.textContent = this.name;
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

Drink.prototype.randomPrice = function (min, max) {
    this.price = getRndInteger(min, max);

}


// Functions:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// new Instances:
let mochaIngredients = ["espresso", "choclate powder", "milk"];
let americanoDrink = new Drink("americano", ["coffee", "milk"], false, true, "./images/americano.PNG");
let mochaDrink = new Drink("mocha", mochaIngredients, true, true, "./images/mocha.PNG");
let latteDrink = new Drink("latte", ["espresso", "choclate powder", "whiped milk"], true, false, "./images/latte.PNG");
// let tea = new Drink("tea", ["tea", "water"], false, true);


function renderAll(){
    for (let i = 0; i < allDrinks.length; i++) {
        allDrinks[i].randomPrice(1, 5);
        if (allDrinks[i].isCold) {
            allDrinks[i].randomPrice(3, 5);
        } else {
            allDrinks[i].randomPrice(6, 10);
        }
    
        allDrinks[i].render();
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

    // console.log(drinkImage, coldDrink, hotDrink);

    let newDrink = new Drink(drinkName, ingredientsArr , coldDrink, hotDrink,  drinkImage);

    newDrink.randomPrice();
    // newDrink.render();
    renderAll()

}

// console.log(americanoDrink);
// console.log(mochaDrink);

// console.log(allDrinks);
