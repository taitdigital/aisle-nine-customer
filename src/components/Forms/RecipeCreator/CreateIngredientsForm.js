
import React, { useState } from 'react'

export default function CreateIngredientsForm() {
    const [loading, setLoading] = useState(false);

    const handleAddIngredient = async e => {
        e.preventDefault()
    }

    const handleRemoveIngredient = async e => {
        e.preventDefault()
    }

    const handleSearch = async e => {
        e.preventDefault()
    }

    return (
        <div className="min-w-full">
            <h5>Basic Details</h5>
            <hr className="my-4" />

            <div className="flex min-w-full"> 
                <div className="w-3/5 border-r mr-2 py-4 my-4 px-8">
                    <form onSubmit={handleSearch}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="example">
                                Find Ingredient
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="SearchIngrdient" 
                                type="text" 
                                placeholder="Search ..."
                            />
                        </div>
                    </form>
                </div>
                <div className="w-2/5">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
                        <li className="py-3 sm:py-4 border-b min-w-full">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full border overflow-hidden" src="" alt="ingredient image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Ingredient Name
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Ingredient Description
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    remove button
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

