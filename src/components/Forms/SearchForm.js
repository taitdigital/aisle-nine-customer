import { SearchIcon } from '@heroicons/react/solid'

export default function SearchForm() {
    
    return (
        <div className="flex items-center justify-center">
            <div className="flex border rounded-md overflow-hidden">
                <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
                <button className="flex items-center justify-center px-4 border-l">
                    <SearchIcon className="h-7 w-7" />
                </button>
            </div>
        </div>
    )
}

