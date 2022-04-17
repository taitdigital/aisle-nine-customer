import { API_BASE, requestHeader } from '../constants/ApiConfiguration'

export function fetchRecipeOptions() {
    return fetch(API_BASE + '/form-options/recipes', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json())
}

export function fetchIngredientOptions() {
    return fetch(API_BASE + '/form-options/ingredients', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json())
} 

export function fetchCategoryOptions() {
    return fetch(API_BASE + '/form-options/categories', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json())
} 

export function searchRecipeOptions(payload) {
    return fetch(API_BASE + '/form-options/recipes/search', {
        method: 'POST', 
        headers: requestHeader(),
        body: JSON.stringify({ search: payload })
    }).then(response => response.json())
}

export function searchIngredientOptions(payload) {

    console.warn('searchIngredientOptions', JSON.stringify({ search: payload }))

    return fetch(API_BASE + '/form-options/ingredients/search', {
        method: 'POST', 
        headers: requestHeader(),
        body: JSON.stringify({ search: payload })
    }).then(response => response.json())
} 

export function searchCategoryOptions(payload) {
    return fetch(API_BASE + '/form-options/categories/search', {
        method: 'POST', 
        headers: requestHeader(),
        body: JSON.stringify({ search: payload })
    }).then(response => response.json())
} 