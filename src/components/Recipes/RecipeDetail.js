import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getRecipe } from '../../actions/recipe.actions'
import RecipeStep from './RecipeStep'
import { Card } from '../../components/UI/Card'


export default function RecipeDetail() {
    const location = useLocation();
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const recipe = useSelector(state => state.current_recipe)

    useEffect(() => {
        setLoading(true)

        dispatch(getRecipe(location.pathname.split('/')[2])).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }, [])

    if(recipe) {
        return (
            <div className="flex flex-col w-screen pt-6">        
                <div>
                    <div className="grid grid-cols-12 gap-0">
                        <div className="col-span-8 flex flex-col">
                            <Card title={recipe.current_recipe.name}>
                                <div className="flex">
                                    <img src={recipe.current_recipe.image} width="150" height="150" className="border-r-2" />
                                    <div className="pl-4">
                                        <p>{ recipe.current_recipe.description }</p>
                                        <small>Serves: X</small>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <hr className="pt-4" />
                                    <h6 className="mb-2 text-2m font-bold tracking-tight text-gray-900 dark:text-white text-center">Steps</h6>
                                    { 
                                        recipe.current_recipe.recipe_steps.map((s) => 
                                            <RecipeStep step={s} key={s.recipe_step_id} ingredientList={recipe.current_recipe.recipe_ingredients}/>
                                        )
                                    }
                                </div>
                            </Card>
                        </div>
                        <div className="col-span-4">
                            <Card title="Ingredients">
                                { 
                                    recipe.current_recipe.recipe_ingredients.map((i) => 
                                        <span key={i.ingredient_id} className="
                                            px-2 py-1 my-1 border-b border-gray-200 
                                            text-gray-800 font-semibold text-xs mr-2 flex align-center 
                                            w-full">
                                            {i.quantity} {i.measurement} - {i.treatment} {i.ingredient.name}
                                        </span> 
                                    )
                                }
                            </Card>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }

    return (<div>Loading</div>)

}