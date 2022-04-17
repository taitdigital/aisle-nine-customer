
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function ConfigureIngredientsForm() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault()
        // setLoading(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5 className="text-center">Configure Ingredients</h5>
            <hr className="my-4" />

            <div className="mb-20">
                <div className="relative overflow-x-auto sm:rounded-lg w-full">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Preparation
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Quanitity
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Measurement
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    <span className="sr-only">Remove</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    <div className="p-2.5">Sausage</div>
                                </th>
                                <td className="px-6 py-4">

                                    <div>
                                        <select id="treatment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Diced</option>
                                        </select>
                                    </div>
                                
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <input 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            id="quantity" 
                                            type="number"
                                            min="1"
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                <div>
                                        <select id="measurement" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>kg</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                </td>
                            </tr>            
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    )
}

