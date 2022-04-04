import { getRecipes } from '../../actions/recipe.actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RecipeListItem from './RecipeListItem'
import Loading from '../UI/Loading'

export default function RecipeList() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const recipes = useSelector(state => state.recipes)
  
    useEffect(() => {
        setLoading(true)

        dispatch(getRecipes()).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <section className="antialiased text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center pt-4">
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            { 
                                (recipes?.recipes) ?
                                    recipes.recipes.map((r) => <RecipeListItem recipe={r} key={r.recipe_id} />)
                                    : 'No Recipes Found' 
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}