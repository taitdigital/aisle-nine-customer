
import React, { useState } from 'react'

export default function ConfigureIngredientsForm() {
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
        <form onSubmit={handleSubmit}>
            <h5>Configure Ingredients</h5>
            <hr />
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="example">
                    Example
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="example" 
                    type="text" 
                    placeholder="ExampleInput"
                />
            </div>
        </form>
    )
}

