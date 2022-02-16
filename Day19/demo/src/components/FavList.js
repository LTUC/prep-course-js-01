import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';


function FavList(props){
    const [favListData, setFavListData] = useState();

    async function getDataFromDB(){
       const response = await fetch(`${process.env.REACT_APP_SERVER}/favRecipes`);
       const data = await response.json();
       setFavListData(data);
     }
     useEffect(() => {
       getDataFromDB();
     }, []);

   
   async function handleDelete(id){
        const response = await fetch(`${process.env.REACT_APP_SERVER}/deleteFavRecipe/${id}`,{
            method: 'DELETE',
        });
        
        if(response.status === 204){
            getDataFromDB();
            alert("Recipe Deleted Successfully");
            Swal.fire(
                'It is done!',
                'Recipe Deleted Successfully',
                'success'
              )
        }
    }
 return (
     <>
     <h1>This is my favorite list of Recipes</h1>
     {
         favListData && favListData.map(recipe =>{
             return (
                 <>
                   <Card style={{ width: '18rem' }} key={recipe.id}>
                                <Card.Img variant="top" src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    {/* <Card.Text>
                                        Instructions:  {recipe.instructions.substring(0,50)} <p>...</p>
                                    </Card.Text> */}
                                    <Card.Text>
                                        It will be ready in {recipe.readyInMinutes} minutes
                                    </Card.Text>
                                    <Card.Text>
                                        {recipe.comment ? recipe.comment : "No Comment is Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>{handleDelete(recipe.id)}}>Delete</Button>
                                </Card.Body>
                            </Card>
                 </>
             )
         })
     }
     </>
 )
}

export default FavList;