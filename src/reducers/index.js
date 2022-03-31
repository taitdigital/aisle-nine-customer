import auth from './auth'
import recipes from './recipes'
import { combineReducers } from 'redux'

const reducers = combineReducers({ auth, recipes })

export default reducers