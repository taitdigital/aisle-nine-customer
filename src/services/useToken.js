import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString
      };

    const [token, setToken, deleteToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', userToken.token);
        setToken(userToken.token);
    };

    const removeToken = () => {
        sessionStorage.removeItem('token');
        deleteToken();
    };
    
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user
    }

    const [user, setUser] = useState(getUser())

    const saveUser = user => {
        sessionStorage.setItem('user', JSON.stringify(user.user))
        setUser(user.user)
    }

    return {
        setToken: saveToken,
        token,
        setUser: saveUser,
        user,
        deleteToken: removeToken
      }
}