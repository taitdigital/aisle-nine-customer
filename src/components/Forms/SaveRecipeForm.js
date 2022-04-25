import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StarIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { createSavedRecipe, deleteSavedRecipe } from '../../actions/user.actions'

export default function SaveRecipeForm({ recipe_id }) {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    const savedRecipes = useSelector(state => state?.user_data?.saved_recipes)

    const [saved, setSaved] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if (savedRecipes) {
            setSaved(savedRecipes.map(r => r.recipe_id).includes(recipe_id))
        }
    })

    const handleToggleSave = async e => {
        e.preventDefault()

        const method = (!saved) 
            ? createSavedRecipe({recipe_id}) 
            : deleteSavedRecipe(recipe_id)

        setLoading(true)

        dispatch(method).then((r) => {
            console.warn('handleToggleSave')

            setSaved(!saved)
            setLoading(false)
        }).catch(() => {
            setSaved(!saved)
            setLoading(false)
        })
    }

    if (!isLoggedIn) {
        return (<></>)
    }

    return (
        <div className="relative">
            <button 
                id="dropdownFavoriteButton" 
                data-dropdown-toggle="dropdownFavorite" 
                className="border mb-2 border-blue-200 rounded-lg text-xs p-1 flex justify-between max-w-[80px]" 
                type="button">
                <StarIcon className={`${saved ? 'text-yellow-300' : 'text-gray-300'} w-4 h-4 pr-1 mr-2 border-r border-blue-200 `} onClick={handleToggleSave} />
                <span className="text-center text-xs text-blue-400">save</span>
                <ChevronDownIcon className="ml-2 w-4 h-4 border-l border-blue-200 text-blue-400" />
            </button>

            <div id="dropdownFavorite" className="absolute hidden z-10 w-44 border border-blue-200 bg-white rounded divide-y divide-gray-100">
                <small className="lowercase text-center py-2 text-gray-400 block">add to meal plan</small>
                
                <ul className="py-2 px-2 text-sm text-gray-600" aria-labelledby="dropdownDividerButton">
                    <li className="py-1 px-1 text-xs hover:bg-blue-100 hover:text-blue-800">
                        
                        <div className="flex items-center">
                            <input 
                                id="mealplan-1" 
                                aria-describedby="mealplan-1" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-100 focus:ring-blue-500" 
                            />
                            <label htmlFor="mealplan-1" className="ml-3 text-xs font-medium">Default Meal Plan</label>
                        </div>

                    </li>
                    <li className="py-1 px-1 text-xs hover:bg-blue-100 hover:text-blue-800">

                        <div className="flex items-center">
                            <input 
                                id="mealplan-1" 
                                aria-describedby="mealplan-1" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-100 focus:ring-blue-500" 
                            />
                            <label htmlFor="mealplan-1" className="ml-3 text-xs font-medium">Another Meal Plan</label>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )

}