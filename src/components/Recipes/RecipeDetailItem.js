import SaveRecipeForm from '../Forms/SaveRecipeForm'
import { IMG_URL, PLACEHOLDER_IMG } from '../../constants/ApiConfiguration'

export default function RecipeDetailItem({recipe}) {
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
        <div className="w-full pb-8 p-1 px-2 rounded">
            <small className="text-left text-gray-400 pb-2 block">{recipe.category.name}</small>
            <div className="flex-1 border-gray-200 flex flex-col lg:flex-row">    
                <div className="flex lg:flex-col flex-row">
                    <div className="w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] flex-shrink-0 whitespace-nowrap rounded border border-r-3 overflow-hidden">   
                        <img src={recipeImage} className="w-[30px] lg:w-[80px]"className="h-full" />
                    </div>
                    <div className="flex pt-2 pr-2 lg:pr-0">
                        { vegetarian && !vegan ? <span className="border rounded-r-full">V</span> : <></> }
                        { vegan ? <span className="border py-1 mr-1 text-gray-400 text-xs w-6 h-6 text-center rounded-full">VG</span> : <></> }
                        { glutenFree ? <span className="border py-1 text-gray-400 text-xs w-6 h-6 text-center rounded-full">GF</span> : <></> }
                        { sugarFree ? <span className="border py-1 ml-1 text-gray-400 text-xs w-6 h-6 text-center rounded-full">SF</span> : <></> }
                    </div>
                    <SaveRecipeForm />
                </div>


                <div className="lg:pl-2 mb-4">
                    <small className="text-left text-gray-400 text-xs pb-2 block">Serves: {recipe.serves}</small>
                    <div className="text-left flex-wrap text-lg text-gray-800 whitespace-pre-wrap flex-shrink-1 py-1">{recipe.description}</div>
                </div>
            </div>
        </div>
    )
}