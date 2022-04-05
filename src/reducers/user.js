export default (state = null, action) => {
    const { type, payload } = action

    switch(type) {
        case 'FETCH_USER':
            return { 
                ...state, 
                loading: true 
            }
        case 'UPDATE_USER':
            return { 
                ...state, 
                ...{ user: payload.user }, 
                loading: false 
            }
        default:
            return state
    }
}