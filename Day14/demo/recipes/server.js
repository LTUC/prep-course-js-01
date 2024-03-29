'use strict';

const express = require("express");

const app = express();

const axios = require("axios");

const dotenv = require('dotenv');

const pg = require("pg");

// const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);


const APIKEY = process.env.APIKEY;
const PORT = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
    return res.status(200).send("Hello World");
});

app.get("/recipes", getRecipesHandler);

app.get("/searchRecipes", searchRecipesHandler)

// Endpoint to insert in the database
// app.post("/addFavRecipe",jsonParser, addFavRecipeHandler)
app.post("/addFavRecipe", addFavRecipeHandler);

//Endpoint to get data (All favorite recipes) from the database
app.get("/getAllFavRecipes", getAllFavRecipesHandler);

// Endpoint that get a specific record (favorite recipe) from database
// http://localhost:3001/getFavRecipe/1
app.get("/getFavRecipe/:id", getFavRecipeHandler);

// Endpoint to update a specific record (one of my favorite recipes) in the database

app.put("/updateFavRecipe/:id", updateFavRecipeHandler);

// Endpoint to delete a specific record (one of my favorite recipes) from the database
app.delete("/deleteFavRecipe/:id", deleteFavRecipeHandler)


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
    console.log(req.query);
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


function addFavRecipeHandler(req,res){
    let recipe = req.body

    const sql = `INSERT INTO favRecipes(title, readInMainutes, summary, vegetarian, instructions, sourceUrl, image, comment) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ;`

    let values = [recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment]
    
    client.query(sql, values).then((data) => {
       
        return res.status(201).json(data.rows[0]);
    }).catch(error => {
        errorHandler(error, req, res);
    })
};

function getAllFavRecipesHandler(req, res){
    const sql = `SELECT * FROM favRecipes`;
    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    }).catch(error => {
        errorHandler(error, req,res);
    })
}

function getFavRecipeHandler(req,res){
    console.log(req.params);
    const id = req.params.id;
    const sql = `SELECT * FROM favRecipes WHERE id=${id}`;

    client.query(sql).then(data => {
        
        res.status(200).json(data.rows);
    }).catch(error => {
        console.log(error);
        errorHandler(error, req, res);
    })
}


function updateFavRecipeHandler(req, res){
    const id = req.params.id;
    const recipe = req.body;

    const sql = `UPDATE favRecipes SET title=$1, readInMainutes=$2, summary=$3, vegetarian=$4, instructions=$5, sourceUrl=$6, image=$7, comment=$8 WHERE id=${id} RETURNING *;`;
    const values = [recipe.title, recipe.readInMainutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment];

    client.query(sql,values).then(data => {
        // return res.status(204).send([]);
        return res.status(200).json(data.rows);
    }).catch(error => {
        errorHandler(error, req, res);
    })
};

function deleteFavRecipeHandler(req, res){
    const id = req.params.id;

    const sql = `DELETE FROM favRecipes WHERE id=${id};`

    client.query(sql).then(() => {
        return res.status(204).json([]);
    }).catch(error => {
        errorHandler(error, req, res);
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


client.connect().then(() => {
    
    app.listen(PORT, () => {
        console.log(`I am using port ${PORT}`);
    });
});