import * as FormOptionsService from '../services/formOptions.service'

export const getRecipeOptions = () => (dispatch) => {
    return FormOptionsService.fetchRecipeOptions().then((data) => {
        dispatch({
          type: 'FETCH_RECIPE_OPTIONS_SUCCESS',
          payload: { recipe_options: data },
        })
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'FETCH_RECIPE_OPTIONS_FAIL',
          message: error
        })
      
        return Promise.reject()
      })
}

export const getIngredientOptions = () => (dispatch) => {
    return FormOptionsService.fetchIngredientOptions().then((data) => {
        dispatch({
          type: 'FETCH_INGREDIENT_OPTIONS_SUCCESS',
          payload: { ingredient_options: data },
        })

        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'FETCH_INGREDIENT_OPTIONS_FAIL',
          message: error
        })
      
        return Promise.reject()
      })
}

export const getCategoryOptions = () => (dispatch) => {
    return FormOptionsService.fetchCategoryOptions().then((data) => {
        dispatch({
          type: 'FETCH_CATEGORY_OPTIONS_SUCCESS',
          payload: { category_options: data },
        })

        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'FETCH_CATEGORY_OPTIONS_FAIL',
          message: error
        })
      
        return Promise.reject()
      })
}

export const getFormOptions = () => (dispatch) => {
  return Promise.all([
    FormOptionsService.fetchCategoryOptions(), 
    FormOptionsService.fetchIngredientOptions(),
    FormOptionsService.fetchRecipeOptions() 
  ]).then(
    (data) => {
      dispatch({
        type: 'FETCH_CATEGORY_OPTIONS_SUCCESS',
        payload: { data: data[0].data },
      })

      dispatch({
        type: 'FETCH_INGREDIENT_OPTIONS_SUCCESS',
        payload: { data: data[1].data },
      })

      dispatch({
        type: 'FETCH_RECIPE_OPTIONS_SUCCESS',
        payload: { data: data[2].data },
      })
    }
  ).catch((errors) => {
    return errors
  })
}

// export const filterRecipeOptions = (searchTerm) => (dispatch) => {
//     return FormOptionsService.searchRecipeOptions(searchTerm).then((data) => {
//         dispatch({
//           type: '',
//           payload: { recipe_options: data },
//         });
//         return Promise.resolve()
//       },
//       (error) => {
//         dispatch({
//           type: '',
//           message: error
//         });
      
//         return Promise.reject()
//       })
// }

// export const filterIngredientOptions = (searchTerm) => (dispatch) => {
//     return FormOptionsService.searchIngredientOptions(searchTerm).then((data) => {
//         dispatch({
//           type: '',
//           payload: { ingredient_options: data },
//         });
//         return Promise.resolve()
//       },
//       (error) => {
//         dispatch({
//           type: '',
//           message: error
//         });
      
//         return Promise.reject()
//       })
// }

// export const filterCategoryOptions = (searchTerm) => (dispatch) => {
//     return FormOptionsService.searchCategoryOptions(searchTerm).then((data) => {
//         dispatch({
//           type: '',
//           payload: { category_options: data },
//         });
//         return Promise.resolve()
//       },
//       (error) => {
//         dispatch({
//           type: '',
//           message: error
//         });
      
//         return Promise.reject()
//       })
// }
