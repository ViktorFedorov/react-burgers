import {getUserData, login, logout, updateUserData} from '../../utils/api'
import {CHANGE_USER_PROFILE, GET_USER_DATA, LOGIN_USER, LOGOUT_USER} from '../constants'
import {setCookie} from '../../utils/utils'

export const setUserProfile = (field, value) => ({type: CHANGE_USER_PROFILE, field, value})

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

export const updateUserThunk = (name, email) => {
  return (dispatch) => {
    updateUserData(name, email)
      .then(console.log)
  }
}