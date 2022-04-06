
import React, { useState } from 'react'

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
            <h5>Basic Details</h5>
            <hr className="my-4" />

            <div className="flex min-w-full"> 
                <div className="w-3/5 border-r mr-2 py-4 my-4 px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="example">
                                Recipe Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="RecipeName" 
                                type="text" 
                                placeholder="Name ..."
                                onChange={handleSearch}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

