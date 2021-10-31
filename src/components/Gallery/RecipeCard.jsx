import React from 'react'
import { DataContext } from '../../contexts/DataContext'
import { useContext, useEffect, useState } from 'react'
import {Card, Icon, CardTitle} from 'react-materialize'
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
    
    

    while(!currentRecipes){
        return <h5 style={{paddingTop: '100px'}}>Click a Category!</h5>
    }
    if(currentRecipes.length === 0){
        return <h5 style={{paddingTop: '100px'}}>No Recipes :(</h5>
    }
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center'}}>
            
    
                        {currentRecipes.map((recipe,id) =>(
                        <Card style={{width:'450px', height:'auto'}}
                        actions={[
                            <a key="1" href={'recipes/' + recipe.id}>View Recipe</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={recipe.image}>{recipe.title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                        >
                        {recipe.description}
                        </Card>
                        ))}

            
        </div>
    )
}
