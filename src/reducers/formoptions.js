export default (state = null, action) => {
    const { type, payload } = action

    console.warn('reducer payload', payload)

    switch (type) {
        case 'FETCH_INGREDIENT_OPTIONS_SUCCESS':
            return {
                ...state,
                ingredient_options: payload.data
            }
        case 'FETCH_INGREDIENT_OPTIONS_FAIL':
            return {
                ...state
            }
        case 'FETCH_RECIPE_OPTIONS_SUCCESS':
            return {
                ...state,
                recipe_options: payload.data,
            }
        case 'FETCH_RECIPE_OPTIONS_FAIL':
            return {
                ...state,
            }
        case 'FETCH_CATEGORY_OPTIONS_SUCCESS':
            return {
                ...state,
                category_options: payload.data,
            }
        case 'FETCH_CATEGORY_OPTIONS_FAIL':
            return {
                ...state,
            }
        default:
          return state
      }
}