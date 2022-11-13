import {login, logout} from '../../utils/api'
import {LOGIN_USER, LOGOUT_USER} from '../constants'
import {setCookie} from '../../utils/utils'

export const loginUserThunk = (email, password) => {
  return (dispatch) => {
    login(email, password)
      .then(userData => {
        if (userData.success) {
          let authToken = userData.accessToken.split('Bearer ')[1]
          if (authToken) {
            setCookie('token', authToken)
          }
          dispatch({type: LOGIN_USER, userData})
        }
      })
  }
}

export const logoutUserThunk = (refreshToken) => {
  return (dispatch) => {
    logout(refreshToken)
      .then(userData => {
        dispatch({type: LOGOUT_USER})
      })
  }
}