import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

import { Card } from '../../components/UI/Card'
import Stepper from '../../components/UI/Stepper'
import CreateBasicDetailsForm from '../../components/Forms/RecipeCreator/CreateBasicDetailsForm'
import CreateIngredientsForm from '../../components/Forms/RecipeCreator/CreateIngredientsForm'
import ConfigureIngredientsForm from '../../components/Forms/RecipeCreator/ConfigureIngredientsForm'
import CreateStepsForm from '../../components/Forms/RecipeCreator/CreateStepsForm'
import SaveRecipeForm from '../../components/Forms/RecipeCreator/SaveRecipeForm'

export default function RecipeCreator() {

  let navigate = useNavigate()
	const [currentStep, setCurrentStep] = useState(1)
  const location = useLocation()
	
  const stepArray = [
    {
      description: 'Basic Details',
      to: '/recipe-creator' 
    },
    {
      description: 'Add Ingredients',
      to: '/recipe-creator/ingredients' 
    },
    {
      description: 'Configure Ingredients',
      to: '/recipe-creator/configure' 
    },
    {
      description: 'Add Steps',
      to: '/recipe-creator/steps' 
    },
    {
      description: 'Review and Save',
      to: '/recipe-creator/complete' 
    }
	]

  useEffect(() => {
    setCurrentStep(stepArray.findIndex(i => i.to === location.pathname) + 1)
  })

	const handleClick = (clickType) => {
		let newStep = currentStep;

		(clickType == "next") ? newStep++ : newStep--

		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep)
      navigate(stepArray[newStep - 1].to)
		}
	}

  return (
    <div className="pt-6 min-w-full">
      <Card title="Create Recipe">
          <Stepper steps={stepArray} currentStepNumber={currentStep} />
          <hr className="mt-12" />
          <div className="pt-12 flex justify-center items-center">
              <Routes>
                <Route path="/" element={<CreateBasicDetailsForm />} />
                <Route path="/ingredients" element={<CreateIngredientsForm />} />
                <Route path="/configure" element={<ConfigureIngredientsForm />} />
                <Route path="/steps" element={<CreateStepsForm />} />
                <Route path="/complete" element={<SaveRecipeForm />} />
              </Routes>
          </div>
          <hr />
          <div className="container flex justify-around my-8 ">
              <button 
              onClick={() => handleClick()} 
              className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-700 hover:bg-orange-900 text-white font-normal py-2 px-4 mr-1 rounded"> Previous </button>
              
              <button 
              onClick={() => handleClick("next")} 
              className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white font-normal py-2 px-4 rounded"> Next </button>
          </div>
      </Card>
  </div>
  )
}