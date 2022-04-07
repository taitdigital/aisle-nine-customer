import SaveRecipeForm from '../Forms/SaveRecipeForm'
import Chip from '../UI/Chip'
import { IMG_URL } from '../../constants/ApiConfiguration'

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


    return (
        <div className="w-full pb-8 p-1 hover:bg-blue-50">
            <small className="text-left text-gray-400 pb-2 block">{recipe.category.name}</small>
            <div className="flex-1 border-gray-200 flex cursor-pointer" 
                onClick={() => { handleClick(recipe.recipe_id) }}
            >    
                <div>
                    <div className="w-[80px] h-[80px] flex-shrink-0 whitespace-nowrap rounded border border-r-3 overflow-hidden">
                        {
                            (recipe.image) ?                     
                                <img 
                                    src={`${IMG_URL}/${recipe.image}`} 
                                    width="80"
                                    className="h-full" 
                                /> : <span></span>
                        }
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