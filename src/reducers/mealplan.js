export default (state = null, action) => {
    const { type, payload } = action

    switch (type) {
        case 'FETCH_MEALPLANS_SUCCESS':
            return {
                ...state,
                user_recipes: payload.user_recipes
            }
        case 'FETCH_MEALPLANS_FAIL':
            return {
                ...state
            }
        case 'CREATE_MEALPLAN_SUCCESS':
            return {
                ...state,
                user_recipes: payload.user_recipes
            }
        case 'CREATE_MEALPLAN_FAIL':
            return {
              ...state
            }
        default:
                return state
    }
}