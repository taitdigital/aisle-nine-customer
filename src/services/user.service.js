import { API_URL, requestHeader } from '../constants/ApiConfiguration'

/** User General Info */
export function fetchUserProfile() {
    return fetch(API_URL + '/profile', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

export function updateUserProfile(payload) {
    return fetch(API_URL + '/profile', {
        method: 'PUT', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function deleteUserProfile() {
    return fetch(API_URL + '/profile', {
        method: 'DELETE', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

/** Mealplans */
export function fetchUserMealplans() {
    return fetch(API_URL + '/user-mealplans/', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

export function createMealplan(payload) {
    return fetch(API_URL + '/user-mealplans/', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function updateMealplan(mealplan_id, payload) {
    return fetch(API_URL + '/user-mealplans/' + mealplan_id, {
        method: 'PUT', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function deleteMealplan(mealplan_id) {
    return fetch(API_URL + '/user-mealplans/' + mealplan_id, {
        method: 'DELETE', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

/** User Created Recipes */
export function fetchUserCreatedRecipes() {
    return fetch(API_URL + '/user-recipe-creator', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

export function createRecipe(payload) {
    return fetch(API_URL + '/user-recipe-creator', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function updateRecipe(recipe_id, payload) {
    return fetch(API_URL + '/user-recipe-creator/' + recipe_id, {
        method: 'PUT', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function deleteRecipe(recipe_id) {
    return fetch(API_URL + '/user-recipe-creator/' + recipe_id, {
        method: 'DELETE', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

/** User Saved Recipes */
export function fetchUserSavedRecipes() {
    return fetch(API_URL + '/user-saved-recipes', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

export function saveRecipe(payload) {
    return fetch(API_URL + '/user-saved-recipes', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function removeSavedRecipe(recipe_id) {
    return fetch(API_URL + '/user-saved-recipes/' + recipe_id, {
        method: 'DELETE', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

/** User Shoppinglists */
export function fetchShoppinglists() {
    return fetch(API_URL + '/user-shoppinglist', {
        method: 'GET', 
        headers: requestHeader()
    }).then(response => response.json()) 
}

export function createShoppinglist(payload) {
    return fetch(API_URL + '/user-shoppinglist', {
        method: 'POST', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function updateShoppinglist(shoppinglist_id, payload) {
    return fetch(API_URL + '/user-shoppinglist/' + shoppinglist_id, {
        method: 'PUT', 
        headers: requestHeader(),
        body: payload
    }).then(response => response.json()) 
}

export function deleteShoppinglist(shoppinglist_id) {
    return fetch(API_URL + '/user-shoppinglist/' + shoppinglist_id, {
        method: 'DELETE', 
        headers: requestHeader()
    }).then(response => response.json()) 
}
