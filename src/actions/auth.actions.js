import * as AuthService from '../services/auth.service'

export const login = (credentials) => (dispatch) => {
    return AuthService.login(credentials).then(
        (data) => {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user: data },
          });
          return Promise.resolve()
        },
        (error) => {
          dispatch({
            type: 'LOGIN_FAIL',
            message: error
          })
        
          return Promise.reject()
        }
      )
}
  
export const logout = () => (dispatch) => {
    AuthService.logout()
    dispatch({ type: 'LOGOUT' })
}

export const register = (payload) => (dispatch) => {
  return AuthService.login(payload).then(
      (data) => {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: { user: data },
        });
        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: 'REGISTER_FAIL',
          message: error
        })
      
        return Promise.reject()
      }
    )
}

export const verifyEmail = (payload) => (dispatch) => {}

export const resetPassword = (payload) => (dispatch) => {}

export const resetPasswordLink = (payload) => (dispatch) => {}