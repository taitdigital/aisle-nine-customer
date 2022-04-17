import React from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'
import { IMG_URL, PLACEHOLDER_IMG } from '../../constants/ApiConfiguration'

export default function RecipeStep({ step, ingredientList }) {

  const stepImage = (step.image) ? `${IMG_URL}/${step.image}` : PLACEHOLDER_IMG
  
  const displayFormat = (value) => { 
    return value.split(':').map(i => i.length < 2 ? '0' + i : i).join(':')
  } 

  return (
    <div className="border-b mb-12 pb-12">
        <div className="flex items-center">
          <span className="block border-gray-600 text-gray-600 rounded-full border py-2 px-4">{step.step_order}</span>
          <label className="lowercase pl-2 text-gray-600">{step.name}</label>
        </div>

        <div className="flex py-12">
          <div className="w-[80px] h-[80px] flex-shrink-0 whitespace-nowrap rounded border border-r-3 overflow-hidden">                
              <img src={stepImage} width="80" className="h-full" /> 
          </div>
          <p className="pl-4 whitespace-pre-wrap">
            <small className="flex items-center text-xs text-gray-400 my-2">
              <PlayIcon className="w-4 h-4 mr-2" />
              <span>{displayFormat(step.timer)}</span>
            </small>
            {step.description}
          </p>
        </div>

        <div className="flex flex-wrap">
          <span className="text-gray-400 text-xs border border-transparent p-1 m-1">Ingredients in this step: </span>
          { 
            ingredientList.filter(i => step.ingredients.includes(i.recipe_ingredient_id)).map((i) => 
                <span key={i.ingredient_id} className="text-gray-400 rounded-lg text-xs border p-1 m-1"
                >
                    {i.quantity} {i.measurement} - {i.treatment} {i.ingredient.name}
                </span> 
            )
          }
        </div>
    </div>
  );
}