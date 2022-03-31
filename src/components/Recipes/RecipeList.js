import { fetchRecipes } from '../../services/recipe.service'
import { getRecipes, recipesLoaded } from '../../actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StarIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

export default function RecipeList() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = (recipe_id) => {
        navigate(`/recipes/${recipe_id}`);
    }

    const recipes = useSelector(state => state.recipes)
    let recipeList = []
  
    useEffect(() => {
      dispatch(getRecipes())
      fetchRecipes().then(r => dispatch(recipesLoaded(r)))
    }, [])

    if (recipes?.recipes) {       
        recipeList = recipes.recipes.map((r) =>        
            <div key={r.recipe_id} className="border-b border-blue-200 flex cursor-pointer hover:bg-blue-50" onClick={() => { handleClick(r.recipe_id) }}>
                <div className="p-2 whitespace-nowrap border-r-3 overflow-hidden h-auto">
                    <img src={r.image} width="90" height="90"  />

                    <button className="
                        px-2 py-1 my-2 rounded-full border bg-blue-400 border-blue-300
                        text-white font-semibold text-xs mr-2 flex align-center 
                        w-max">
                        <StarIcon className="h-4 w-4 text-yellow-200" />
                        <span className="text-[12px] ml-1">save</span>
                    </button> 

                </div>
                <div className="p-2 whitespace-nowrap">
                    <small className="text-left text-gray-400">{r.category.name}</small>
                    <div className="font-medium text-gray-800">{r.name}</div>
                    <div className="text-left">{r.description}</div>
                    <div className="flex flex-wrap border-t border-blue-200 pt-2 mt-4">
                        <small className="text-left text-xs text-blue-400 py-2 border-transparent border pr-2">Ingredients:</small>

                        { 
                            r.recipe_ingredients.map((i) => 
                                <span key={i.ingredient_id} className="
                                    px-2 py-1 my-1 rounded-full border border-blue-400 
                                    text-blue-400 font-semibold text-xs mr-2 flex align-center 
                                    w-max">
                                    {i.ingredient.name}
                                </span> 
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <section className="antialiased text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center pt-4">
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            {recipeList}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}