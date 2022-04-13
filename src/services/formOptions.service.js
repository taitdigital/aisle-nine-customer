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
    return fetch(API_BASE + '/form-options/recipes', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json())
}

export function searchIngredientOptions(payload) {
    return fetch(API_BASE + '/form-options/ingredients', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json())
} 

export function searchCategoryOptions(payload) {
    return fetch(API_BASE + '/form-options/categories', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json())
} 