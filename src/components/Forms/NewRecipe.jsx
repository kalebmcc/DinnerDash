import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import { Button, TextInput, Select, Textarea, Row  } from 'react-materialize'
import axios from 'axios';
import M from 'materialize-css';

export default function NewRecipe() {
     let history = useHistory();
    
    const [newRecipe, setNewRecipe] = useState({
	});

    async function handleSubmit(event){
        event.preventDefault();

        try {
            let addRecipe = {...newRecipe}
            const addUserURL = 'https://dinnerdashbackend-052fd4a08eaf.herokuapp.com/recipes/'
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

        setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value })
    } 
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:'65%'}}>
            <h4>New Recipe</h4>
            <form onSubmit={handleSubmit}>
            <Row>
        <TextInput
            id="TextInput-376"
            label="Title"
            className='title'
            name="title"
            onChange={handleChange}
            l={12}
            m={12}
            s={12}
            xl={12}
            />
            </Row>
            <br/>
            <Row>
                <TextInput
            id="TextInput-376"
            label="Category"
            className='category'
            name="category"
            onChange={handleChange}
            l={12}
            m={12}
            s={12}
            xl={12}
            />
            {/* <Select
                id="Select-74"
                multiple={false}
                onChange={handleChange}
                l={12}
                m={12}
                s={12}
                xl={12}
                options={{
                    classes: '',
                    dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                    }
                }}
                value=""
                >
                <option
                    disabled
                    value=""
                >
                    Choose your Category
                </option>
                <option value="1">
                    American
                </option>
                <option value="2">
                    Asian
                </option>
                <option value="4">
                    Italian
                </option>
                <option value="5">
                    Mexican
                </option>
                <option value="6">
                    Dessert
                </option>
                <option value="7">
                    Soup
                </option>
                <option value="8">
                    Crockpot
                </option>
                <option value="9">
                    Other
                </option>
                </Select> */}
                </Row>
            <br/>
            <Row>
        <TextInput
            id="TextInput-376"
            label="Link"
            className='image'
            name="image"
            onChange={handleChange}
            l={12}
            m={12}
            s={12}
            xl={12}
            />
            </Row>
            <br/>
            <Row>
                <Textarea
                    id="Textarea-42"
                    label="Ingredients"
                    className="ingredients"
                    name="ingredients"
                    onChange={handleChange}
                    type="text"
                    l={12}
                    m={12}
                    s={12}
                    xl={12}
                />
            </Row>
            <br/>
            <Row>
                <Textarea
                    id="Textarea-42"
                    label="Directions"
                    className="directions"
                    name="directions"
                    onChange={handleChange}
                    type="text"
                    l={12}
                    m={12}
                    s={12}
                    xl={12}
                />
            </Row>
            <br/>
            <Row>
                <Textarea
                    id="Textarea-42"
                    label="Description"
                    className="description"
                    name="description"
                    onChange={handleChange}
                    type="text"
                    l={12}
                    m={12}
                    s={12}
                    xl={12}
                />
            </Row>
            <br/>

        <Button type='submit' style={{marginBottom: '75px'}}>SUBMIT</Button>
        
  </form>
  </div>
        </div>
    )
}
