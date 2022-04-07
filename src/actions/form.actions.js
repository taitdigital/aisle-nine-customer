import * as FormOptionsService from '../services/formOptions.service'

export const getRecipeOptions = () => (dispatch) => {
    return FormOptionsService.fetchRecipeOptions().then((data) => {
        dispatch({
          type: '',
          payload: { recipe_options: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: '',
          message: error
        });
      
        return Promise.reject()
      })
}

export const getIngredientOptions = () => (dispatch) => {
    return FormOptionsService.fetchIngredientOptions().then((data) => {
        dispatch({
          type: '',
          payload: { ingredient_options: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: '',
          message: error
        });
      
        return Promise.reject()
      })
}

export const getCategoryOptions = () => (dispatch) => {
    return FormOptionsService.fetchCategoryOptions().then((data) => {
        dispatch({
          type: '',
          payload: { category_options: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: '',
          message: error
        });
      
        return Promise.reject()
      })
}

export const filterRecipeOptions = (searchTerm) => (dispatch) => {
    return FormOptionsService.searchRecipeOptions(searchTerm).then((data) => {
        dispatch({
          type: '',
          payload: { recipe_options: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: '',
          message: error
        });
      
        return Promise.reject()
      })
}

export const filterIngredientOptions = (searchTerm) => (dispatch) => {
    return FormOptionsService.searchIngredientOptions(searchTerm).then((data) => {
        dispatch({
          type: '',
          payload: { ingredient_options: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: '',
          message: error
        });
      
        return Promise.reject()
      })
}

export const filterCategoryOptions = (searchTerm) => (dispatch) => {
    return FormOptionsService.searchCategoryOptions(searchTerm).then((data) => {
        dispatch({
          type: '',
          payload: { category_options: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: '',
          message: error
        });
      
        return Promise.reject()
      })
}
