import auth from './auth'
import recipes from './recipes'
import current_recipe from './recipe'
import { combineReducers } from 'redux'

const reducers = combineReducers({ auth, recipes, current_recipe })

export default reducers