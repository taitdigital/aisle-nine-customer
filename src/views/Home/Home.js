import React from 'react'

import { Card } from '../../components/UI/Card'
import { Carousel } from '../../components/UI/Carousel'

export default function Home() {
  return(

    <div className="pt-6 min-w-full">
        <Card title="Welcome to Aisle 9">
          <div className="flex flex-col items-center">
            <Carousel />

            <div className="flex items-stretch justify-between w-full lg:w-2/3">
              <div className="p-12 border rounded w-1/3 mr-1">
                <h2>Featured Recipe</h2>
              </div>
              <div className="p-12 border rounded w-1/3 mx-1">
                <h2>Featured Categories</h2>
              </div>
              <div className="p-12 border rounded w-1/3 ml-1">
                <h2>Sign Up Free</h2>
              </div>
            </div>
          </div>


        </Card>
    </div>
  )
}