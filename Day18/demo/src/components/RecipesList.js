import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import RecipeModal from './RecipeModal';
import { useState } from 'react';

export default function RecipesList(props) {
    const [show, setShow] = useState(false);
    const [chosenRecipe, setChosenRecipe] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
function handleShowModal(recipeData){
    console.log(recipeData);
    handleShow();
    setChosenRecipe(recipeData)
}
    return (
        <>
            <h1>Recipes List:</h1>

            {
                props.recipes.map(recipe => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text>
                                        Instructions:  {recipe.instructions}
                                    </Card.Text>
                                    <Card.Text>
                                        It will be ready in {recipe.readyInMinutes} minutes
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>{handleShowModal(recipe) }}>Show Modal</Button>
                                </Card.Body>
                            </Card>
                           {
                          chosenRecipe &&  <RecipeModal show={show} handleClose={handleClose} chosenRecipe={chosenRecipe}/>
                           } 
                        </>
                    )
                })
            }
          
        </>
    )
}