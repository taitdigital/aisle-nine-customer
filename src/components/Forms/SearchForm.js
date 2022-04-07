import React, {useState} from 'react'
import { SearchIcon, FilterIcon } from '@heroicons/react/solid'
import { FilterIcon as FilterIconOutline } from '@heroicons/react/outline'


export default function SearchForm() {
    const [showFilters, setShowFilters] = useState(false)
    const toggleFilters = e => { setShowFilters(!showFilters) }

    const handleSearch = async e => {
        e.preventDefault()
    }


    return (
        <div className="flex items-center justify-center items-center">
            <div className="mb-2 pt-2 w-96">
                <div className="relative">
                    <input 
                        type="text" 
                        id="recipe" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search ..."
                        onChange={handleSearch}
                    />
                    <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                        <SearchIcon className="h-6 w-6" />
                    </div>
                </div>
            </div>

            <div className="relative">
                { showFilters 
                    ? <FilterIcon data-dropdown-toggle="dropdown" className="h-6 pl-2 w-6 inline-flex text-gray-600" onClick={toggleFilters} /> 
                    : <FilterIconOutline data-dropdown-toggle="dropdown" className="h-6 pl-2 w-6 inline-flex text-gray-600" onClick={toggleFilters} />
                }
                <div 
                    id="filtersDropdown"
                    className={`absolute right-0 mt-4 z-10 w-44 bg-gray-50 border border-gray-300 text-gray-900 rounded divide-y divide-gray-100 ${showFilters ? 'block' : 'hidden'}`}
                >
                    <label className="p-2 block text-gray-600">Filter</label>
                    <ul className="p-2 text-sm" aria-labelledby="dropdownDefault">
                        <li className="flex items-center pb-1 my-1 border-b">
                            <input 
                                id="Vegetarian" 
                                aria-describedby="Vegetarian" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-300 bg-gray-100 rounded border-gray-300 focus:ring-blue-400" 
                            />
                            <label 
                                htmlFor="Vegetarian" 
                                className="ml-3 text-gray-600"
                            >
                                Vegetarian   
                            </label>
                        </li>
                        <li className="flex items-center py-1 my-1 border-b">
                            <input 
                                id="Vegan" 
                                aria-describedby="Vegan" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />
                            <label 
                                htmlFor="Vegan" 
                                className="ml-3 text-gray-600"
                            >
                                Vegan   
                            </label>
                        </li>
                        <li className="flex items-center py-1 my-1 border-b">
                            <input 
                                id="SugarFree" 
                                aria-describedby="SugarFree" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />
                            <label 
                                htmlFor="SugarFree" 
                                className="ml-3 text-gray-600"
                            >
                                Sugar Free   
                            </label>
                        </li>
                        <li className="flex items-center py-1 my-1 border-b">
                            <input 
                                id="GlutenFree" 
                                aria-describedby="GlutenFree" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />
                            <label 
                                htmlFor="GlutenFree" 
                                className="ml-3 text-gray-600"
                            >
                                Gluten Free   
                            </label>
                        </li>
                        <li className="flex items-center pt-1 my-1">
                            <input 
                                id="DairyFree" 
                                aria-describedby="DairyFree" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />
                            <label 
                                htmlFor="DairyFree" 
                                className="ml-3 text-gray-600"
                            >
                                Dairy Free   
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

