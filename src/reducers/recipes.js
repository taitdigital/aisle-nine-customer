export default (state = null, action) => {
    switch(action.type) {
        case 'GET_RECIPES':
            return { ...state, loading: true };
        case 'RECIPES_LOADED':
            return { ...state, ...{recipes: action.data}, loading: false };
        default:
            return state
    }
}