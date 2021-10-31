import React from 'react'
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import { Button, TextInput } from 'react-materialize'
import {useState,useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'
import axios from 'axios';
import M from 'materialize-css';


export default function EditRecipe() {
     let history = useHistory();
    
    const {recipes} = useContext(DataContext)
    const {id} = useParams()

    const [newRecipe, setNewRecipe] = useState({
		'title': '',
		'category': '',
        'ingredients': '',
        'description': '',
	});
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

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addRecipe = {...newRecipe}
            const addUserURL = `https://boiling-escarpment-83647.herokuapp.com/recipes/` + id
            console.log(addRecipe)
            let res = await axios.put(addUserURL, addRecipe,{headers: {
						Authorization: `token ${localStorage.getItem('token')}`,
					}})
            if(res){
                M.toast({html:'Recipe Updated!'})
                history.push('/')
            }
        } catch (error) {
            console.log(error)
            M.toast({html: 'Unexpected Error! Try Again!'})
        }
    }

    function handleChange(event){
        event.preventDefault();

        setNewRecipe({ ...newRecipe, [event.target.className]: event.target.value })
    } 

    while(!currentRecipes){
        return <h3></h3>
    }
    if(currentRecipes.length === 0){
        return <h5 style={{paddingTop: '100px'}}>No Recipes :(</h5>
    }
    return (
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
            <div style={{width:'65%'}}>
            <h4>Update Recipe</h4>
            <form onSubmit={handleSubmit}>
        <TextInput
            id="TextInput-376"
            label="Title"
            className='title'
            onChange={handleChange}
            /><br/>
        <TextInput
            id="TextInput-376"
            label="Category"
            className='category'
            onChange={handleChange}
            /><br/>
            <TextInput
            id="TextInput-376"
            label="Imgur Link"
            className='image'
            onChange={handleChange}
            /><br/>
            <TextInput
            id="TextInput-376"
            label="Ingredients"
            className='ingredients'
            onChange={handleChange}
            /><br/>
            <TextInput
            id="TextInput-376"
            label="Directions"
            className='directions'
            onChange={handleChange}
            /><br/>
            <TextInput
            id="TextInput-376"
            label="Description"
            className='description'
            onChange={handleChange}
            /><br/>

        <Button type='submit'>SUBMIT</Button>
        
  </form>
  </div>
  <div>

            <h2>{currentRecipes[0].title}</h2>
            <h5><em>{currentRecipes[0].category}</em></h5>
            <p>Posted by: {currentRecipes[0].owner}</p>
            <img alt={currentRecipes[0].title} src={currentRecipes[0].image} style={{width:'70%',maxWidth:'650px'}}/>
            <h5><strong>Ingredients:</strong> {currentRecipes[0].ingredients}</h5>
            <p>{currentRecipes[0].description}</p>

        </div>
        </div>
    )
}