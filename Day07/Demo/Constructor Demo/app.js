'use strict';

let allDrinks = [];

function Drink(name, ingredients, cold, hot, price){
    this.name = name;
    this.ingredients = ingredients;
    this.isCold = cold;
    this.isHot = hot;
    this.price = price;
    this.image = `./images/${this.name}.png`;
    allDrinks.push(this);
}

Drink.prototype.render = function(){
    document.write("<h1> Menu</h1>");
    document.write(`<p> ${this.name}</p>`)
    document.write(`<p> ${this.price}</p>`)
}

let mochaIngredients =  ["espresso", "choclate powder", "milk"];
let americanoDrink = new Drink("americano", ["coffee", "milk"], false, true, 10 );
let mochaDrink = new Drink("mocha", mochaIngredients, true, true, 6);
let latteDrink = new Drink("latte", ["espresso", "choclate powder", "whiped milk"], true, false, 3);


mochaDrink.render();
latteDrink.render();



// console.log(americanoDrink);
// console.log(mochaDrink);

console.log(allDrinks);