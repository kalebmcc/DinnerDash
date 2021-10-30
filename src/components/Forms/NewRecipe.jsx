import React from 'react'
import {useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import { Button, Modal, TextInput,Toast } from 'react-materialize'
import axios from 'axios';
import M from 'materialize-css';
import {DataContext} from '../../contexts/DataContext.js'

export default function NewRecipe() {
     let history = useHistory();
    const {loginStatus, setLoginStatus} = useContext(DataContext)
    const { user,setUser } = useContext(DataContext);
    const [newRecipe, setNewRecipe] = useState({
		'title': '',
		'category': '',
        'ingredients': '',
        'description': '',
        'likes': '0',
	});

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addRecipe = {...newRecipe}
            const addUserURL = 'https://boiling-escarpment-83647.herokuapp.com/recipes/'
            console.log(addRecipe)
            let res = await axios.post(addUserURL, addRecipe,{headers: {
						Authorization: `token ${localStorage.getItem('token')}`,
					}})
            if(res){
                console.log(res)
                M.toast({html:'Recipe Added!'})
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
    return (
        <div>
            <h4>New Recipe</h4>
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
            label="Ingredients"
            className='ingredients'
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
    )
}
