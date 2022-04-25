import React, { useState } from 'react'

import SavedRecipeList from '../../components/Recipes/SavedRecipeList'
import { Card } from '../../components/UI/Card'

export default function UserRecipes() {
  const [tab, setTab] = useState('saved')

  const handleToggleTab = (e) => {
    e.preventDefault()
    setTab(e.target.href.split('#')[1])
  }

  return (
    <div className="pt-6 min-w-full">
        <Card title="My Recipes">
          
          <div className="w-full flex flex-col items-center pt-6">
            <ul className="w-full lg:w-2/3 flex justify-center flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <li className="mr-2">
                    <a 
                      href="#saved" 
                      aria-current="page"
                      onClick={handleToggleTab}  
                      className={`${tab === 'saved' ? 'active bg-gray-100': ''} inline-block p-4 text-gray-600  rounded-t-lg`}
                    >
                        Saved Recipes
                    </a>
                </li>
                <li className="mr-2">
                    <a 
                      href="#custom"
                      onClick={handleToggleTab} 
                      className={`${tab === 'custom' ? 'active bg-gray-100': ''} inline-block p-4 text-gray-600 rounded-t-lg`}
                    >
                      Custom Recipes
                    </a>
                </li>
            </ul>

            {
              tab === 'saved' ? <SavedRecipeList /> : 'show created list'   
            }
          </div>
        </Card>
    </div>
  )
}