const API_URL = 'http://localhost:8000/api'

export function fetchRecipes() {
    return fetch(API_URL + '/recipes', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        } 
    }).then(response => response.json()) 
}