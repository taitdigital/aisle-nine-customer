export default (state = null, action) => {
    const { type, payload } = action

    switch(type) {
        /** User profile */
        case 'FETCH_USER_PROFILE_SUCCESS':
            return {
                ...state,
                user_profile: payload.user_profile
            }
        case 'FETCH_USER_PROFILE_FAIL':
                return {
                ...state
                }
        case 'UPDATE_USER_PROFILE_SUCCESS':
            return {
                ...state,
                user_profile: payload.user_profile
            }
        case 'UPDATE_USER_PROFILE_FAIL':
            return {
                ...state
            }
        case 'DELETE_USER_PROFILE_SUCCESS':
            return {
                ...state,
                user_profile: {}
            }
        case 'DELETE_USER_PROFILE_FAIL':
            return {
                ...state
            }

        /** User mealplans */
        case 'FETCH_MEALPLANS_SUCCESS':
            return {
                ...state,
                mealplans: payload.mealplans
            }
        case 'FETCH_MEALPLANS_FAIL':
                return {
                ...state
                }
        case 'CREATE_MEALPLAN_SUCCESS':
            return {
                ...state,
                mealplans: payload.mealplans
            }
        case 'CREATE_MEALPLAN_FAIL':
            return {
                ...state
            }
        case 'UPDATE_MEALPLAN_SUCCESS':
            return {
                ...state,
                mealplans: payload.mealplans
            }
        case 'UPDATE_MEALPLAN_FAIL':
            return {
                ...state
            }
        case 'DELETE_MEALPLAN_SUCCESS':
            return {
                ...state,
                mealplans: []
            }
        case 'DELETE_MEALPLAN_FAIL':
            return {
                ...state
            }

        /** User shoppinglists */
        case 'FETCH_SHOPPINGLISTS_SUCCESS':
            return {
                ...state,
                mealplans: payload.shoppinglists
            }
        case 'FETCH_SHOPPINGLISTS_FAIL':
                return {
                ...state
                }
        case 'CREATE_SHOPPINGLISTS_SUCCESS':
            return {
                ...state,
                shoppinglists: payload.shoppinglists
            }
        case 'CREATE_SHOPPINGLISTS_FAIL':
            return {
                ...state
            }
        case 'UPDATE_SHOPPINGLISTS_SUCCESS':
            return {
                ...state,
                shoppinglists: payload.shoppinglists
            }
        case 'UPDATE_SHOPPINGLISTS_FAIL':
            return {
                ...state
            }
        case 'DELETE_SHOPPINGLISTS_SUCCESS':
            return {
                ...state,
                shoppinglists: payload.shoppinglists
            }
        case 'DELETE_SHOPPINGLISTS_FAIL':
            return {
                ...state
            }
        /** User Created Recipes */
        case 'FETCH_USER_RECIPES_SUCCESS':
            return {
                ...state,
                user_recipes: payload.user_recipes
            }
        case 'FETCH_USER_RECIPES_FAIL':
                return {
                ...state
                }
        case 'CREATE_RECIPE_SUCCESS':
            return {
                ...state,
                user_recipes: payload.user_recipes
            }
        case 'CREATE_RECIPE_FAIL':
            return {
                ...state
            }
        case 'UPDATE_RECIPE_SUCCESS':
            return {
                ...state,
                user_recipes: payload.user_recipes
            }
        case 'UPDATE_RECIPE_FAIL':
            return {
                ...state
            }
        case 'DELETE_RECIPE_SUCCESS':
            return {
                ...state,
                user_recipes: payload.user_recipes
            }
        case 'DELETE_RECIPE_FAIL':
            return {
                ...state
            }

        /** User Saved Recipes */
        case 'FETCH_SAVED_RECIPES_SUCCESS':
            return {
                ...state,
                saved_recipes: payload.saved_recipes
            }
        case 'FETCH_SAVED_RECIPES_FAIL':
                return {
                ...state
                }
        case 'CREATE_SAVED_RECIPE_SUCCESS':
            return {
                ...state,
                saved_recipes: payload.saved_recipes
            }
        case 'CREATE_SAVED_RECIPE_FAIL':
            return {
                ...state
            }
        case 'DELETE_SAVED_RECIPE_SUCCESS':
            return {
                ...state,
                saved_recipes: payload.saved_recipes
            }
        case 'DELETE_SAVED_RECIPE_FAIL':
            return {
                ...state
            }
        
        default:
            return state
    }
}