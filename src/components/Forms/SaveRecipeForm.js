import { StarIcon } from '@heroicons/react/solid'

export default function SaveRecipeForm() {
    
    return (
        <>
            <small className="text-left text-xs text-blue-400 p-2 block">add to ...</small>
            <small className="text-left text-xs text-blue-400 p-2 block flex">
                <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                <span>favorite</span>
            </small>
        </>
    )

}