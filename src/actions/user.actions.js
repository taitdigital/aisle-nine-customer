import * as UserService from '../services/user.service'

const resolver = (p, success, failure, dispatch) => {
  return p.then((data) => {
    dispatch({
      type: success,
      payload: { 
        [success.replace('_SUCCESS', '').toLowerCase()]: data 
      }
    })
    return Promise.resolve()
  },
  (error) => {
    dispatch({
      type: failure,
      message: error
    })
  
    return Promise.reject()
  })
}

export const getUserRecipes = () => (dispatch) => {
  return resolver(
    UserService.fetchUserCreatedRecipes(),
    'FETCH_USER_RECIPES_SUCCESS',
    'FETCH_USER_RECIPES_FAIL',
    dispatch
  )
}

/** User Created Recipes */
export const createUserRecipe = (payload) => (dispatch) => {
  return resolver(
    UserService.createRecipe(payload),
    'CREATE_RECIPE_SUCCESS',
    'CREATE_RECIPE_FAIL',
    dispatch
  )
}

export const updateUserRecipe = (recipe_id, payload) => (dispatch) => {
  return resolver(
    UserService.updateRecipe(recipe_id, payload),
    'UPDATE_RECIPE_SUCCESS',
    'UPDATE_RECIPE_FAIL',
    dispatch
  )
}

export const deleteUserRecipe = (recipe_id) => (dispatch) => {
  return resolver(
    UserService.deleteRecipe(recipe_id),
    'DELETE_RECIPE_SUCCESS',
    'DELETE_RECIPE_FAIL',
    dispatch
  )
}

/** User Saved Recipes */
export const getSavedRecipes = () => (dispatch) => {
  return resolver(
    UserService.fetchUserSavedRecipes(),
    'FETCH_SAVED_RECIPES_SUCCESS',
    'FETCH_SAVED_RECIPES_FAIL',
    dispatch
  ) 
}

export const createSavedRecipe = (payload) => (dispatch) => {
  return resolver(
    UserService.saveRecipe(payload),
    'CREATE_SAVED_RECIPE_SUCCESS',
    'CREATE_SAVED_RECIPE_FAIL'
  )
}

export const deleteSavedRecipe = (recipe_id) => (dispatch) => {
  return resolver(
    UserService.removeSavedRecipe(recipe_id),
    'DELETE_SAVED_RECIPE_SUCCESS',
    'DELETE_SAVED_RECIPE_FAIL',
    dispatch
  )
}

/** User Mealplans */
export const getUserMealplans = () => (dispatch) => {
  return resolver(
    UserService.fetchUserMealplans(),
    'FETCH_MEALPLANS_SUCCESS',
    'FETCH_MEALPLANS_FAIL',
    dispatch
  )
}

export const createMealplan = (payload) => (dispatch) => {
  return resolver(
    UserService.createMealplan(payload),
    'CREATE_MEALPLAN_SUCCESS',
    'CREATE_MEALPLAN_FAIL',
    dispatch
  )
}

export const updateMealplan = (mealplan_id, payload) => (dispatch) => {
  return resolver(
    UserService.updateMealplan(mealplan_id, payload),
    'UPDATE_MEALPLAN_SUCCESS',
    'UPDATE_MEALPLAN_FAIL',
    dispatch
  )
}

export const deleteMealplan = (mealplan_id) => (dispatch) => {
  return resolver(
    UserService.deleteMealplan(mealplan_id),
    'DELETE_MEALPLAN_SUCCESS',
    'DELETE_MEALPLAN_FAIL',
    dispatch
  )
}

/** User Shoppinglists */
export const getShoppinglists = () => (dispatch) => {
  return resolver(
    UserService.fetchShoppinglists(),
    'FETCH_SHOPPINGLISTS_SUCCESS',
    'FETCH_SHOPPINGLISTS_FAIL',
    dispatch
  )
}

export const createShoppinglist = (payload) => (dispatch) => {
  return resolver(
    UserService.createShoppinglist(payload),
    'CREATE_SHOPPINGLIST_SUCCESS',
    'CREATE_SHOPPINGLIST_FAIL',
    dispatch
  )
}

export const updateShoppinglist = (shoppinglist_id, payload) => (dispatch) => {
  return resolver(
    UserService.updateShoppinglist(shoppinglist_id, payload),
    'UPDATE_SHOPPINGLIST_SUCCESS',
    'UPDATE_SHOPPINGLIST_FAIL',
    dispatch
  )
}

export const deleteShoppinglist = (shoppinglist_id) => (dispatch) => {
  return resolver(
    UserService.deleteShoppinglist(shoppinglist_id),
    'DELETE_SHOPPINGLIST_SUCCESS',
    'DELETE_SHOPPINGLIST_FAIL',
    dispatch
  )
}


/** User Profile */
export const getUserProfile = () => (dispatch) => {
  return resolver(
    UserService.fetchUserProfile(),
    'FETCH_USER_PROFILE_SUCCESS',
    'FETCH_USER_PROFILE_FAIL',
    dispatch
  )
}

export const updateUserProfile = (payload) => (dispatch) => {
  return resolver(
    UserService.updateUserProfile(payload),
    'UPDATE_USER_PROFILE_SUCCESS',
    'UPDATE_USER_PROFILE_FAIL',
    dispatch
  )
}

export const deleteUserProfile = () => (dispatch) => {
  return resolver(
    UserService.deleteUserProfile(),
    'DELETE_USER_PROFILE_SUCCESS',
    'DELETE_USER_PROFILE_FAIL',
    dispatch
  )
}
