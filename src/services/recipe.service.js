import { API_URL, requestHeader } from '../constants/ApiConfiguration'

export function fetchRecipes() {
    return fetch(API_URL + '/recipes', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

export function fetchRecipe(id) {
    return fetch(API_URL + '/recipes/' + id, {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}