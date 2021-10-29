import React from 'react'
import { DataContext } from '../../contexts/DataContext'
import { useContext } from 'react'
import {Col,Card,Row, Icon, CardTitle} from 'react-materialize'
import 'materialize-css'

export default function RecipeCard() {
    const {recipes} = useContext(DataContext)

    let selectRecipes = recipes.data

    return (
        <div>
            {selectRecipes.map((recipe,id) =>(
                <Row>
                    <Col
                        xl={2}
                        l={5}
                        m={8}
                        s={12}
                    >
                        <Card
                        actions={[
                            <a key="1" href="#">View Recipe</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{recipe.title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                        >
                        {recipe.description}
                        </Card>
                    </Col>
                    </Row>
            ))}
        </div>
    )
}
