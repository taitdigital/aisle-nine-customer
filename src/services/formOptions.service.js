import { API_URL, requestHeader } from '../constants/ApiConfiguration'

export function fetchRecipeOptions() {
    return fetch(API_URL + '/form-options/recieps', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json())
}

export function fetchIngredientOptions() {
    return fetch(API_URL + '/form-options/ingreidents', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json())
} 

export function fetchCategoryOptions() {
    return fetch(API_URL + '/form-options/categories', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json())
} 

export function searchRecipeOptions(payload) {
    return fetch(API_URL + '/form-options/recieps', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json())
}

export function searchIngredientOptions(payload) {
    return fetch(API_URL + '/form-options/ingreidents', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json())
} 

export function searchCategoryOptions(payload) {
    return fetch(API_URL + '/form-options/categories', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json())
} 