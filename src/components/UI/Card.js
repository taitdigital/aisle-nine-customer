import React from 'react'

export const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col min-w-full px-2 lg:px-10">        
        <div className="p-6 bg-white w-full rounded-lg border border-gray-200 mb-4">
          <h5 className="mb-2 text-2xl text-center pb-4 tracking-tight text-gray-600">
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