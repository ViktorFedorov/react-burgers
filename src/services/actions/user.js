import {authUser} from '../../utils/api'
import {LOGIN_USER} from '../constants'
import {setCookie, getCookie} from '../../utils/utils'

export const loginUserThunk = (email, password) => {
  return (dispatch) => {
    authUser(email, password)
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