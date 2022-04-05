import React from 'react'

import { Card } from '../../components/UI/Card'
import RecipeList from '../../components/Recipes/RecipeList'
import SearchForm from '../../components/Forms/SearchForm'

export default function Recipes() {

    return (
        <div className="pt-6 min-w-full">
            <Card title="Browse Recipes">
                <SearchForm />
                <hr className="my-4" />
                <RecipeList />
            </Card>
        </div>
    )
}