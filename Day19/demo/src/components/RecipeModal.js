import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

export default function RecipeModal(props) {
    const commmentRef = useRef();
    function handleComment(e) {
        e.preventDefault();
        //  console.log(commmentRef.current.value);
        const comment = commmentRef.current.value;
        const newRecipe = { ...props.chosenRecipe, comment };
        //  console.log(newRecipe);

        props.updateRecipes(newRecipe, props.chosenRecipe.id);
    }
   async function handleAddFav(e, recipe){
        e.preventDefault();
       const dataToBeSent = {
        title: recipe.title,
        readyInMinutes: recipe.readyInMinutes,
        summary: recipe.summary,
        vegetarian: recipe.vegetarian,
        instructions: recipe.instructions,
        sourceUrl: recipe.sourceUrl,
        image: recipe.image,
        comment: recipe.comment
       }
       const url = `${process.env.REACT_APP_SERVER}/addFavRecipe`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(response.status);
        console.log(data);
        
    }


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenRecipe.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={props.chosenRecipe.image} alt={props.chosenRecipe.title} />
                    <p>{props.chosenRecipe.instructions.substring(0, 50)}  </p> ...
                    <p>User Comment: {props.chosenRecipe.comment? props.chosenRecipe.comment: "No Comment is added"}</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commmentRef} type="text" placeholder="Enter your comment" />

                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleComment}>
                            Submit
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e)=>{handleAddFav(e,props.chosenRecipe)}}>
                            Add to Favorites
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}



