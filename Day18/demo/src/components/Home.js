import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import RecipeList from './RecipesList';
// axios.get().then().catch()

function Home() {
    const [recipe, setRecipe] = useState();
    const getRecipes = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/recipes`)
            const data = await response.json();
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
                {
                    recipe && (<RecipeList recipes={recipe} />)
                }
         

        </>
    )
}

export default Home;

