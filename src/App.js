import './App.css'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

  if(!currentUser) {
    return (

    <BrowserRouter>
      <div>
        <Header className="flex flex-col h-screen"/>

        <div className="flex items-start min-h-screen w-screen py-2">
          <div className="w-screen">            
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/recipes" element={<Recipes/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} exact />              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
        
    )
  }

  return (
        <>
          <BrowserRouter>
            <div className="flex flex-col h-screen">
              <Header />

              <div className="flex items-start pt-20 justify-center min-h-screen w-screen py-2">       
                <Sidebar />

                <div className="w-screen">
                  <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/recipes" element={<Recipes/>} />
                    <Route path="/recipes/:id" element={<RecipeDetail />} exact />              
                    <Route path="/user-meal-plans" element={<MealPlans/>} />
                    <Route path="/user-recipes" element={<UserRecipes/>} />
                    <Route path="/user-dashboard" element={<UserDashboard/>} />
                    <Route path="/user-shopping-lists" element={<ShoppingList/>} />
                    <Route path="/recipe-creator" element={<RecipeCreator/>} />
                    <Route path="/user-preferences" element={<UserPreferences/>} />
                    <Route path="/contact-beta" element={<BetaBugReport />} />
                  </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </>
  )
}

export default App
