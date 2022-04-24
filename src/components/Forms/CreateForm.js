import React, {useState} from 'react'
import { PlusIcon } from '@heroicons/react/solid'


export default function SearchForm() {
    const [name, setName] = useState('')

    const handleCreate = async e => {
        e.preventDefault()
        console.warn('handleCreate', e)
    }

    return (
        <div className="flex items-center justify-center">
            <div className="mb-2 pt-2 w-96">
                <div className="flex">
                    <input 
                        type="text" 
                        id="recipe" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5" 
                        placeholder="Name ..."
                        onChange={e => setName(e.target.value)} 
                    />
                    <button 
                        onClick={handleCreate}
                        type="button" 
                        class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                            <PlusIcon className='w-5 h-5' />
                        </button>

                </div>
            </div>
        </div>
    )
}

