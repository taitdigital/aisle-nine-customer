import { fetchRecipes } from '../../services/recipe.service'
import { getRecipes, recipesLoaded } from '../../actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Recipes() {
    const dispatch = useDispatch()

    const recipes = useSelector(state => state.recipes)
    let recipeList = []
  
    useEffect(() => {
      dispatch(getRecipes())
      fetchRecipes().then(r => dispatch(recipesLoaded(r)))
    }, [])
  
    if (recipes?.recipes) {  
      recipeList = recipes.recipes.map((r) =>        
        <tr key={r.recipe_id}>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{r.recipe_id}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">{r.name}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{r.description}</div>
            </td>
        </tr>

      );
    }

    <ul>
  </ul>

    return (
        <div>
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center pt-4">
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50" >
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">ID</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Description</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {recipeList}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}