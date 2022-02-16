import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import RecipeList from './RecipesList';
import recipesData from "./data/data.json";

function Home() {
    const [recipes, setRecipes] = useState(recipesData);
    // const getRecipes = async () => {
    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_SERVER}/recipes`)
    //         const data = await response.json();
    //         console.log(data);
    //         setRecipes(data);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };
    function updateRecipes(newRecipe, id) {
        let updatesRecipe = recipes.map(recipe => {
            if (recipe.id == id) {
                recipe.comment = newRecipe.comment;
                return recipe;
            } else {
                return recipe;
            }
        })
        setRecipes(updatesRecipe);
    }

    // useEffect(() => {
    //     getRecipes();
    // }, []);

    return (
        <>
            <h1>Home Page</h1>
            <Container fluid className="main-container">
                <Row className="flex-row" style={{ display: "flex", justifyContent: "space-around" }}>
                    {
                        recipes && (<RecipeList recipes={recipes} updateRecipes={updateRecipes} />)
                    }
                </Row>
            </Container>

        </>
    )
}

export default Home;

