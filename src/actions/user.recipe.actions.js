import * as RecipeService from '../services/recipe.service'

export const getRecipes = () => (dispatch) => {
    return RecipeService.fetchRecipes().then((data) => {
        dispatch({
          type: 'FETCH_RECIPES_SUCCESS',
          payload: { recipes: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'FETCH_RECIPES_FAIL',
          message: error
        });
      
        return Promise.reject()
      })
}

export const getRecipe = (id) => (dispatch) => {
    return RecipeService.fetchRecipe(id).then((data) => {
        dispatch({
          type: 'FETCH_RECIPE_SUCCESS',
          payload: { current_recipe: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'FETCH_RECIPE_FAIL',
          message: error
        })
      
        return Promise.reject()
      })
}