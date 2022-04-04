import { StarIcon } from '@heroicons/react/solid'

export default function SaveRecipeForm() {
    
    return (
        <button className="
            px-2 py-1 my-2 rounded-full border bg-blue-400 border-blue-300
            text-white font-semibold text-xs mr-2 flex align-center 
            w-max">
            <StarIcon className="h-4 w-4 text-yellow-200" />
            <span className="text-[12px] ml-1">save</span>
        </button> 
    )

}