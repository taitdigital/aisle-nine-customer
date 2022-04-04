import SaveRecipeForm from '../Forms/SaveRecipeForm'
import Chip from '../UI/Chip'

import { useNavigate } from 'react-router-dom'

export default function RecipeListItem({recipe}) {
    const navigate = useNavigate()

    const handleClick = (recipe_id) => {
        navigate(`/recipes/${recipe_id}`)
    }

    return (
        <div className="border-b border-blue-200 flex cursor-pointer hover:bg-blue-50" 
             onClick={() => { handleClick(recipe.recipe_id) }}
        >    
            <div className="p-2 w-[90] whitespace-nowrap border-r-3 overflow-hidden h-auto">
                <img src={recipe.image} width="190" height="190"  />
                <SaveRecipeForm />
            </div>

            <div className="p-2">
                <small className="text-left text-gray-400">{recipe.category.name}</small>
                <div className="font-medium text-gray-800">{recipe.name}</div>
                <div className="text-left flex-wrap flex-shrink-1">{recipe.description}</div>
                
                <div className="flex flex-wrap border-t border-blue-200 pt-2 mt-4">
                    <small className="text-left text-xs text-blue-400 py-2 border-transparent border pr-2">Ingredients:</small>      
                    { recipe.recipe_ingredients.map((i) => <Chip key={i.ingredient_id} value={i.ingredient.name} />) }
                </div>
            </div>
        </div>
    )
}