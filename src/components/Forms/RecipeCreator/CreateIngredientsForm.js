
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchIngredientOptions } from '../../../actions/form.actions'

import { SearchIcon, TrashIcon } from '@heroicons/react/solid'
import IngredientListItem from './IngredientListItem'

export default function CreateIngredientsForm() {
    const [loading, setLoading] = useState(false);
    const ingredientOptions = useSelector(state => state.form_options?.ingredient_options)
    const dispatch = useDispatch()

    const onAddIngredient = async e => {
        e.preventDefault()
        console.warn('onAddIngredient')
    }

    const onRemoveIngredient = async e => {
        e.preventDefault()
        console.warn('onRemoveIngredient')
    }

    const handleSearch = async e => {
        e.preventDefault()

        dispatch(searchIngredientOptions(e.target.value)).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })        
    }

    return (
        <div className="min-w-full">
            <h5 className="text-center">Add Ingredients</h5>
            <hr className="my-4" />

            <div className="flex min-w-full"> 
                <div className="w-1/2 border-r mr-2 pb-4 my-4 px-8">
                    <form onSubmit={handleSearch}>
                        <div className="mb-4">
                            <label htmlFor="ingredient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Find Ingredient</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="ingredient" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Ingredient name ..."
                                    onChange={handleSearch}
                                />
                                <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                                    <SearchIcon className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </form>

                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
                        <IngredientListItem action="add" />
                    </ul>
                </div>
                <div className="w-1/2">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
                        <IngredientListItem action="remove" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

