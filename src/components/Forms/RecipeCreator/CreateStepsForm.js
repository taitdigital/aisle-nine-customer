import React, { useState } from 'react'

export default function CreateStepsForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()
        // setLoading(true)

        // dispatch([ACTION]).then(() => {
        //     setLoading(false)
        // }).catch(() => {
        //     setLoading(false)
        // })
    }

    return (
        <div className="min-w-full">
            <h5 className="text-center">Create Steps</h5>
            <hr className="my-4" />

            <div className="flex min-w-full justify-center"> 
                <div className="w-3/5 mr-2 py-4 my-4 px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Step Name</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Step Name ..."
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                            <textarea 
                                id="description" 
                                rows="4" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Step Description..."></textarea>
                        </div>
                    </form>
                </div>

                <div className="w-2/5">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
                        <li className="py-3 sm:py-4 border-b min-w-full">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Step Name
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Step Description
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    edit
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    remove
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

