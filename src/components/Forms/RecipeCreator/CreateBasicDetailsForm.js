
import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'


export default function CreateBasicDetailsForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()
    }

    const handleSearch = async e => {
        e.preventDefault()
    }

    return (
        <div className="min-w-full">
            <h5 className="text-center">Basic Details</h5>
            <hr className="my-4" />

            <div className="flex min-w-full justify-center"> 
                <div className="w-3/5 mr-2 py-4 my-4 px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recipe Name</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Recipe name ..."
                                    onChange={handleSearch}
                                />
                                <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                                    <SearchIcon className="h-6 w-6" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                            <textarea 
                                id="description" 
                                rows="4" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Description..."></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload file</label>
                            <input 
                                className="block w-full overflow-hidden text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                aria-describedby="recipe_image_help" 
                                id="recipe_image" 
                                type="file" 
                            />
                            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="recipe_image_help">
                                (Optional) a picture of the completed meal
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

