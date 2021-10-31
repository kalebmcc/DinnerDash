import React from 'react'
import {useContext, useState, useEffect} from 'react'
import {DataContext} from '../contexts/DataContext'
import {Card, Icon, CardTitle} from 'react-materialize'
import 'materialize-css'

export default function UserProfile() {
    const {logUser,recipes} = useContext(DataContext)
    const [currentRecipes,setCurrentRecipes] = useState()

useEffect(() => {
    let selectRecipes = null
    if(recipes){
        selectRecipes = recipes.filter((recipe)=>{
            return recipe.owner === logUser
        })
        setCurrentRecipes(selectRecipes)
    }
    return() =>{}
},[recipes])


    if(currentRecipes === undefined){
        return <h1>loading</h1>
            
    }
    else if(currentRecipes.length === 0){
           return( <><h1>Hi, {logUser}</h1>
            <h4>Your Recipes:</h4>
            <h5>No Recipes</h5></>)
    }
    return (
        <div>
            <h1>Hi, {logUser}</h1>
            <h4>Your Posts:</h4>



            <div style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center'}}>
            
    
                        {currentRecipes.map((recipe,id) =>(
                        <Card style={{width:'450px', height:'auto'}}
                        actions={[
                            <a key="1" href={'/recipes/' + recipe.id}>View Recipe</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={recipe.image}>{recipe.title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                        >
                        {recipe.description}
                        </Card>
                        ))}

            
        </div>
        </div>
    )
}
