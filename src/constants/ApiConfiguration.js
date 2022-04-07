export const API_URL = 'http://localhost:8000/api/pwa'
export const IMG_URL = 'http://localhost:8000/uploaded_files/'


export const requestHeader = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    } 
}