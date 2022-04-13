export const API_BASE = 'http://localhost:8000/api'
export const API_URL = 'http://localhost:8000/api/pwa'
export const IMG_URL = 'http://localhost:8000/uploaded_files/'
export const PLACEHOLDER_IMG = 'http://localhost:8000/placeholder.png'

export const requestHeader = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    } 
}