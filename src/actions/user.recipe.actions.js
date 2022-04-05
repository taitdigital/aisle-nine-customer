import * as UserRecipeService from '../services/recipe.service'

export const getUserRecipes = () => (dispatch) => {
    return RecipeService.fetchUserRecipes().then((data) => {
        dispatch({
          type: 'FETCH_USER_RECIPES_SUCCESS',
          payload: { user_recipes: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'FETCH_USER_RECIPES_FAIL',
          message: error
        });
      
        return Promise.reject()
      })
}
