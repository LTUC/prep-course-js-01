'use strict';

const express = require("express");

const app = express();

const axios = require("axios");

const dotenv = require('dotenv');

dotenv.config();

const APIKEY = process.env.APIKEY;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    return res.status(200).send("Hello World");
});

app.get("/recipes", getRecipesHandler);

app.get("/searchRecipes", searchRecipesHandler)

app.use(errorHandler);

app.use("*", notFountHandler);

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

function getRecipesHandler(req,res){
    let recipes = []
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=10`).then(value => {
        value.data.recipes.forEach(recipe => {
            let oneRecipe = new Recipe(recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.id);
            recipes.push(oneRecipe);
            
        })

        
        return res.status(200).json(recipes);
    }).catch((error) => {
        errorHandler(error, req,res);
    })
   
};


function searchRecipesHandler(req, res){
    let serachQuery = req.query.search;

    let recipes = [];

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${serachQuery}`).then(value => {
        value.data.results.forEach(recipe => {
            recipes.push(recipe);
        })

        return res.status(200).json(recipes);
    }).catch(error => {
        errorHandler(error, req,res);
    })
}


function notFountHandler(req,res){
    res.status(404).send("No endpoint with this name");
}

function errorHandler(error, req, res){
    const err = {
        status : 500,
        message : error
    }

    res.status(500).send(err);
}

app.listen(PORT, () => {
    console.log(`I am using port ${PORT}`);
});