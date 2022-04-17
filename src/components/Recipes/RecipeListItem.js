import SaveRecipeForm from '../Forms/SaveRecipeForm'
import { IMG_URL, PLACEHOLDER_IMG } from '../../constants/ApiConfiguration'

import { useNavigate } from 'react-router-dom'

export default function RecipeListItem({recipe}) {
    const navigate = useNavigate()

    const handleClick = (recipe_id) => {
        navigate(`/recipes/${recipe_id}`)
    }

    const allergens = recipe.recipe_ingredients.filter((i) => {
        return (i.ingredient.allergen)
    })

    const vegan = recipe.recipe_ingredients.find((i) => {
        return (!i.ingredient.vegan)
    }) === undefined

    const vegetarian = recipe.recipe_ingredients.find((i) => {
        return (!i.ingredient.vegetarian)
    }) === undefined    

    const sugarFree = recipe.recipe_ingredients.find((i) => {
        return (!i.ingredient.diabetes_ok)
    }) === undefined

    const glutenFree = recipe.recipe_ingredients.find((i) => {
        return (!i.ingredient.gluten_free)
    }) === undefined

    const recipeImage = (recipe.image) ? `${IMG_URL}/${recipe.image}` : PLACEHOLDER_IMG

    return (
        <div className="w-full pb-8 p-1 px-2 hover:bg-blue-50 rounded">
            <small className="text-left text-gray-400 pb-2 block">{recipe.category?.name}</small>
            <div className="flex-1 border-gray-200 flex cursor-pointer" 
                onClick={() => { handleClick(recipe.recipe_id) }}
            >    
                <div>
                    <div className="w-[80px] h-[80px] flex-shrink-0 whitespace-nowrap rounded border border-r-3 overflow-hidden">                
                        <img src={recipeImage} width="80" className="h-full" /> 
                    </div>
                    <div className="flex pt-2">
                        { vegetarian && !vegan ? <span className="border rounded-r-full">V</span> : <></> }
                        { vegan ? <span className="border py-1 mr-1 text-gray-400 text-xs w-6 h-6 text-center rounded-full">VG</span> : <></> }
                        { glutenFree ? <span className="border py-1 text-gray-400 text-xs w-6 h-6 text-center rounded-full">GF</span> : <></> }
                        { sugarFree ? <span className="border py-1 ml-1 text-gray-400 text-xs w-6 h-6 text-center rounded-full">SF</span> : <></> }
                    </div>
                </div>


                <div className="pl-2 mb-4">
                    <div className="font-medium text-gray-800">{recipe.name}</div>
                    <div className="text-left flex-wrap text-sm flex-shrink-1 py-1">{recipe.description}</div>
                    <small className="text-left text-gray-400 text-xs pb-2 block">Serves: {recipe.serves}</small>
                </div>
            </div>

            <div className="p-2 flex justify-end items-end">
                    <SaveRecipeForm />
                </div>

            <div className="flex flex-shrink flex-wrap border-t border-gray-200 pt-2 pb-4">
                {
                    allergens.length > 0 
                        ? <small className="text-left text-xs text-orange-400 pb-2 pr-2">Contains allergens:</small> : <></>
                }
                {    
                    allergens.length > 0 
                       ? allergens.map(i => <span className="text-orange-400 text-xs underline pb-2 pr-2" key={i.ingredient_id}>{i.ingredient.name}</span>)
                       : <></>
                }
                
            </div>
        </div>
    )
}