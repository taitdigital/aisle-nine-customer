export default (state = null, action) => {
    const { type, payload } = action

    switch (type) {
        case 'FETCH_RECIPE_SUCCESS':
          return {
            ...state,
            current_recipe: payload.current_recipe,
          };
        case 'FETCH_RECIPE_FAIL':
          return {
            ...state,
          };
        default:
          return state
      }
}