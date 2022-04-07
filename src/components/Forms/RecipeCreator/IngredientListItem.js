
import React, { useState } from 'react'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/solid'


export default function IngredientListItem({ action }) {
    const [loading, setLoading] = useState(false);

    const handleRemoveIngredient = async e => {
        e.preventDefault()
        // setLoading(true)

        // dispatch([ACTION]).then(() => {
        //     setLoading(false)
        // }).catch(() => {
        //     setLoading(false)
        // })
    }

    const handleAddIngredient = async e => {
        e.preventDefault()
        // setLoading(true)

        // dispatch([ACTION]).then(() => {
        //     setLoading(false)
        // }).catch(() => {
        //     setLoading(false)
        // })
    }

    let button;

    if (action === 'add') {
        button = <PlusCircleIcon className="h-6 w-6 text-green-600 cursor-pointer" onClick={handleAddIngredient} />
    }

    if (action === 'remove') {
        button = <TrashIcon className="h-6 w-6 text-red-600 cursor-pointer" onClick={handleRemoveIngredient} />

    }

    return (
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
                    { button }
                </div>
            </div>
        </li>
    )
}