import * as AuthService from '../services/auth.service';

export const login = (credentials) => (dispatch) => {
    return AuthService.login(credentials).then(
        (data) => {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user: data },
          });
          return Promise.resolve();
        },
        (error) => {
          dispatch({
            type: 'LOGIN_FAIL',
            message: error
          });
        
          return Promise.reject();
        }
      );
}
  
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({ type: 'LOGOUT' });
}