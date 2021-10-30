import React from 'react'
import {useContext, useState, useEffect} from 'react'
import {DataContext} from '../contexts/DataContext'
import {Col,Card,Row, Icon, CardTitle} from 'react-materialize'
import 'materialize-css'

export default function UserProfile() {
    const {logUser,recipes} = useContext(DataContext)
    const [currentRecipes,setCurrentRecipes] = useState(null)
useEffect(() => {
     let selectRecipes = null
    if(recipes){
        selectRecipes = recipes.filter((recipe)=>{
            return recipe.owner === logUser.username
        })
        setCurrentRecipes(selectRecipes)
    }
}, [])
   

    if(currentRecipes === null){
        return <h1>loading</h1>
    }
    if(currentRecipes.length === 0){
        return <h1>No Recipes :(</h1>
    }
    return (
        <div>
            <h1>Hi, {logUser.username}</h1>



            <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            
    
                        {currentRecipes.map((recipe,id) =>(
                        <Card style={{width:'450px', height:'auto'}}
                        actions={[
                            <a key="1" href={'recipes/' + recipe.title}>View Recipe</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{recipe.title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                        >
                        {recipe.description}
                        </Card>
                        ))}

            
        </div>
        </div>
    )
}
