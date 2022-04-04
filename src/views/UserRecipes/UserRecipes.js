import React from 'react'

export default function UserRecipes() {
  return (
    <div className="flex flex-col justify-items-center w-screen px-10">        
        <div className="p-6 bg-white w=full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            My Favorite Recipes
          </h5>
          <hr className="py-4" />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            @todo list of saved recipes
          </p>
        </div>
    </div>
  );
}