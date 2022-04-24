import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StarIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { createSavedRecipe } from '../../actions/user.actions'

export default function SaveRecipeForm() {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)

    const [saved, setSaved] = useState()
    const [loading, setLoading] = useState(false)

    const handleSave = async e => {
        e.preventDefault()
        setLoading(true)

        dispatch(createSavedRecipe()).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    return (
        <div className="relative">
            <button 
                id="dropdownFavoriteButton" 
                data-dropdown-toggle="dropdownFavorite" 
                className="border mb-2 border-blue-200 rounded-lg text-xs p-1 flex justify-between max-w-[80px]" 
                type="button">
                <StarIcon className="w-4 h-4 pr-1 mr-2 border-r border-blue-200 text-gray-300" onClick={handleSave} />
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