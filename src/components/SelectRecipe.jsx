import React from 'react'
import {useState,useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'
import 'materialize-css'
import {Button} from 'react-materialize'
import axios from 'axios';
import M from 'materialize-css';
import {useHistory, Link} from 'react-router-dom'

export default function SelectRecipe() {

    let history = useHistory();
    const {recipes,logUser} = useContext(DataContext)
    const {id} = useParams()

    const [currentRecipes,setCurrentRecipes] = useState(null)
    let selectRecipes = null
    useEffect(() => {
            if(recipes){
            selectRecipes = recipes.filter((recipe)=>{
                return recipe.id === parseInt(id)
            })
            setCurrentRecipes(selectRecipes)
        }
    }, [recipes])

    async function recipeDelete(event){
        event.preventDefault();

        try {
            const addUserURL = `https://dinnerdashbackend-052fd4a08eaf.herokuapp.com/recipes/${currentRecipes[0].id}`
            
            let res = await axios.delete(addUserURL, {headers: {
						Authorization: `token ${localStorage.getItem('token')}`,
					}} )
            if(res){
                M.toast({html:'Recipe Deleted!'})
                history.push('/user/')
            }
        } catch (error) {
            M.toast({html: 'Unexpected Error! Try Again!'})
        }
    }
 
    let updateURL = '/update_recipe/' + id


    while(!currentRecipes){
        return <h3></h3>
    }
    if(currentRecipes.length === 0){
        return <h5 style={{paddingTop: '100px'}}>No Recipes :(</h5>
    }
    return (
        <div style={{padding: '0 15%', marginBottom: '50px'}}>

            <h2>{currentRecipes[0].title}</h2>
            <h5><em>{currentRecipes[0].category}</em></h5>
            <p>Posted by: {currentRecipes[0].owner}</p>
            <img alt={currentRecipes[0].title} src={currentRecipes[0].image} style={{width:'70%',maxWidth:'650px'}}/>
            <p>{currentRecipes[0].description}</p>
            <h5><strong>Ingredients:</strong> {currentRecipes[0].ingredients}</h5><br/>
            <h5><strong>Directions:</strong> {currentRecipes[0].directions}</h5><br/>
        
            {logUser === currentRecipes[0].owner ? 
            <div style={{display:'flex',justifyContent:'center',gap:'40px',marginBottom: '50px'}}>
            <Button onClick={recipeDelete} style={{backgroundColor:'red'}}>DELETE</Button><br/>
            <Link to={updateURL}>
            <Button>EDIT</Button>
            </Link>
            </div>
             : null}

        </div>
    )
}
