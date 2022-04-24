export default (state = null, action) => {
    const { type, payload } = action

    switch (type) {
        case 'FETCH_RECIPES_SUCCESS':
          return {
            ...state,
            recipes: payload.recipes,
          }
        case 'FETCH_RECIPES_FAIL':
          return {
            ...state,
          }
        default:
          return state
      }
}