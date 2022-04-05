import React from 'react'

export const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col min-w-full px-10">        
        <div className="p-6 bg-white w-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            { title }
          </h5>
          <hr className="pt-4" />
          <div>
            { children }
          </div>
        </div>
    </div>
  )
}