import React from 'react'

export default function RecipeStep({ step, ingredientList }) {
  return (
    <div>
      { console.warn(step, ingredientList) }
        <h1>{step.name}</h1>
        <hr />
        <div className="flex">
          <img src={step.image} />
          <p>{step.description}</p>
        </div>
        <hr />
        <div className="flex">
        { 
          ingredientList.filter(i => step.ingredients.includes(i.recipe_ingredient_id)).map((i) => 
              <span key={i.ingredient_id} className="
                                    px-2 py-1 my-1 rounded-full border border-blue-400 
                                    text-blue-400 font-semibold text-xs mr-2 flex align-center 
                                    w-max">
                  {i.quantity} {i.measurement} - {i.treatment} {i.ingredient.name}
              </span> 
          )
        }
        </div>
    </div>
  );
}