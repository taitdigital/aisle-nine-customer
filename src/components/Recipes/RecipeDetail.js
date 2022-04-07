import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IMG_URL, PLACEHOLDER_IMG } from '../../constants/ApiConfiguration'
import { getRecipe } from '../../actions/recipe.actions'
import RecipeStep from './RecipeStep'
import { Card } from '../../components/UI/Card'
import RecipeDetailItem from './RecipeDetailItem'


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

    if(!recipe) {
        return (<div>Loading</div>)
    }

    return (
        <div className="flex flex-col w-screen pt-6">        
            
                <Card title={recipe.current_recipe.name}>
                    <div className="w-full flex justify-center">
                        <div className="flex w-10/12">
                            <div className="w-8/12">
                                <div className="flex">
                                    <RecipeDetailItem recipe={recipe.current_recipe} />
                                </div>
                                <div className="mt-12 border-t pt-12">
                                    { 
                                        recipe.current_recipe.recipe_steps
                                            .sort((a, b) => a.step_order > b.step_order ? 1 : -1)
                                            .map((s) => 
                                                <RecipeStep 
                                                    step={s} 
                                                    key={s.recipe_step_id} 
                                                    ingredientList={recipe.current_recipe.recipe_ingredients}
                                                />
                                        )
                                    }
                                </div>
                            </div>

                            <div className="w-4/12 pl-4">
                                <div className="border rounded p-1 border-gray-200">
                                    <label className="pb-4 pt-2 block text-center text-gray-600">Ingredients</label>
                                    <ul>
                                        {
                                            recipe.current_recipe.recipe_ingredients.map((i) =>
                                            {
                                                const ingredientImage = (i.image) ? `${IMG_URL}/${i.image}` : PLACEHOLDER_IMG

                                                return (
                                                    <li className="py-2 px-4 border-t min-w-full" key={i.recipe_ingredient_id}>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="flex-shrink-0">
                                                                <img 
                                                                    className="w-8 h-8 rounded-full border overflow-hidden" 
                                                                    src={ingredientImage}
                                                                     alt="ingredient image" 
                                                                />
                                                            </div>                                                       
                                                            <div className="flex-1 min-w-0">
                                                                <p className={`text-sm truncate ${i.ingredient.allergen ? 'text-orange-400' : 'text-gray-600'}`}>
                                                                    {i.quantity} {i.measurement} {i.treatment} {i.ingredient.name}
                                                                </p>
                                                                {
                                                                    i.ingredient.allergen ? <small className="text-xs text-orange-400">allergen warning</small> : <></>
                                                                }
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        
    )
}