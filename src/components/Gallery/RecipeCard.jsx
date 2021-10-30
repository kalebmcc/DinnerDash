import React from 'react'
import { DataContext } from '../../contexts/DataContext'
import {Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import {Col,Card,Row, Icon, CardTitle} from 'react-materialize'
import 'materialize-css'

export default function RecipeCard() {
    const {recipes,cat} = useContext(DataContext)
    const [currentRecipes,setCurrentRecipes] = useState(null)
    let selectRecipes = null
 useEffect(() => {
        if(recipes){
        selectRecipes = recipes.filter((recipe)=>{
            return recipe.category === cat.category
        })
        setCurrentRecipes(selectRecipes)
    }
 }, [cat])
    
    console.log(currentRecipes)
    

    if(currentRecipes === null){
        return <h1>loading</h1>
    }
    if(currentRecipes.length === 0){
        return <h1>No Recipes :(</h1>
    }
    return (
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
    )
}
