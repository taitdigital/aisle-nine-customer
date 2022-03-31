const API_URL = 'http://localhost:8000/api'

export const login = (payload) => {
    return fetch(API_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        return response.json()
    }).then((r) => {
        localStorage.setItem('token', r.token)
        return r
    })
}

export function logout() {
    return fetch(API_URL + '/logout', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        } 
    }).then((response) => {
        localStorage.removeItem('token')
        return response.json()
    }) 
}