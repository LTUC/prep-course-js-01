`use strict`;

const express = require('express');

const app = express();

const jsonData = require("./data.json");

app.get('/', helloWorldHandler);

app.get("/recipes", recipesHandler);

function Recipe(title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image, id){
    this.title = title;
    this.readyInMinutes = readyInMinutes;
    this.summary = summary;
    this.vegetarian = vegetarian;
    this.instructions = instructions;
    this.sourceUrl = sourceUrl;
    this.image = image;
    this.id = id;
}
function helloWorldHandler(req, res){
    return res.status(200).send("Hello World");
};

function recipesHandler(req, res){
    let recipes = [];
    
    jsonData.data.map(value => {
        let oneRecipe = new Recipe(value.title, value.readyInMinutes, value.summary, value.vegetarian, value.instructions, value.sourceUrl, value.image, value.id);
        recipes.push(oneRecipe);
    });

    return res.status(200).json(recipes);
};

app.listen(3000, () => {
    console.log('Listen to port 3000');
})