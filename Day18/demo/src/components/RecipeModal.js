import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RecipeModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.RecipeModalhandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenRecipe.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.chosenRecipe.instructions}</Modal.Body>
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}



