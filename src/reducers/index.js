import auth from './auth'
import recipes from './recipes'
import current_recipe from './recipe'
import form_options from './formoptions'
import { combineReducers } from 'redux'

const reducers = combineReducers({ 
    auth, 
    recipes, 
    current_recipe,
    form_options 
})

export default reducers