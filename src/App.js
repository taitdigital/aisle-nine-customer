import './App.css'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/Utility/PrivateRoute'
import { useSelector } from 'react-redux'


import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Recipes from './views/Recipes/Recipes'
import MealPlans from './views/MealPlans/MealPlans'
import UserRecipes from './views/UserRecipes/UserRecipes'
import UserDashboard from './views/UserDashboard/UserDashboard'
import RecipeCreator from './views/RecipeCreator/RecipeCreator'
import ShoppingList from './views/ShoppingList/ShoppingList'
import UserPreferences from './views/UserPreferences/UserPreferences'
import BetaBugReport from './views/BetaBugReport/BetaBugReport'
import RecipeDetail from './components/Recipes/RecipeDetail'

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
        <>
          <BrowserRouter>
            <div className="flex flex-col h-screen">
              <Header />

              <div className="flex items-start justify-center min-h-screen bg-blue-100 w-full py-2">
                { (currentUser) ? <Sidebar /> : ''  }       
                
                <div className="w-screen pt-12 flex justify-center items-center">
                    <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route path="/home" element={<Home/>} />
                      <Route path="/recipes" element={<Recipes/>} />
                      <Route path="/recipes/:id" element={<RecipeDetail />} exact />              
                      <Route path="/user-meal-plans" element={<PrivateRoute><MealPlans/></PrivateRoute>} />
                      <Route path="/user-recipes" element={<PrivateRoute><UserRecipes/></PrivateRoute>} />
                      <Route path="/user-dashboard" element={<PrivateRoute><UserDashboard/></PrivateRoute>} />
                      <Route path="/user-shopping-lists" element={<PrivateRoute><ShoppingList/></PrivateRoute>} />
                      <Route path="/recipe-creator/*" element={<PrivateRoute><RecipeCreator/></PrivateRoute>} />
                      <Route path="/user-preferences" element={<PrivateRoute><UserPreferences/></PrivateRoute>} />
                      <Route path="/contact-beta" element={<PrivateRoute><BetaBugReport /></PrivateRoute>} />
                    </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </>
  )
}

export default App