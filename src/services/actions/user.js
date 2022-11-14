import {getUserData, login, logout} from '../../utils/api'
import {GET_USER_DATA, LOGIN_USER, LOGOUT_USER} from '../constants'
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
      .catch(console.log)
  }
}

export const logoutUserThunk = (refreshToken) => {
  return (dispatch) => {
    logout(refreshToken)
      .then(userData => {
        if (userData.success) {
          dispatch({type: LOGOUT_USER})
        }
      })
      .catch(console.log)
  }
}

export const getUserThunk = () => {
  return (dispatch) => {
    getUserData()
      .then(userData => {
        if (userData.success) {
          dispatch({type: GET_USER_DATA, userData})
        }
      })
      .catch(console.log)
  }
}