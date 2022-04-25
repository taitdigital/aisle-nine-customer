import { getSavedRecipes } from '../../actions/user.actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RecipeListItem from './RecipeListItem'
import Loading from '../UI/Loading'

export default function SavedRecipeList() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const recipes = useSelector(state => state?.user_data?.saved_recipes)
  
    useEffect(() => {
        setLoading(true)

        dispatch(getSavedRecipes()).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div className="w-full">
            <section className="antialiased text-gray-600 px-4">
                <div className="flex flex-col items-center justify-center pt-4">
                    <div className="p-3 w-full lg:w-2/3">
                        <div className="overflow-x-auto">
                            { 
                                (recipes) ?
                                    recipes.map((r) => <RecipeListItem recipe={r} key={r.recipe_id} />)
                                    : 'No Recipes Found' 
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}