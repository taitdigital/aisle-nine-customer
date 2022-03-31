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
        console.warn(r)
        localStorage.setItem('token', r.token)
        localStorage.setItem('user', JSON.stringify(r.user))
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
        localStorage.removeItem('user')
        window.location.href = '/login'
        window.location.reload()
    }) 
}