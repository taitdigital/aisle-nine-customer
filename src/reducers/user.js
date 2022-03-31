const API_URL = 'http://localhost:8000/api'


export default (state = null, action) => {
    switch(action.type) {
        case 'GET_USER':
            return { ...state, loading: true };
        case 'UPDATE_USER':
            return { ...state, ...{user: action.data}, loading: false };
        default:
            return state
    }
}