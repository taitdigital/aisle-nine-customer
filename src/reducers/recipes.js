export default (state = null, action) => {
    const { type, payload } = action

    switch (type) {
        case 'FETCH_RECIPES_SUCCESS':
          return {
            ...state,
            recipes: payload.recipes,
          };
        case 'FETCH_RECIPES_FAIL':
          return {
            ...state,
          };
        case 'FETCH_RECIPE_SUCCESS':
          return {
            ...state,
            recipes: payload.recipe,
          };
        case 'FETCH_RECIPE_FAIL':
          return {
            ...state,
          };
        default:
          return state;
      }
}