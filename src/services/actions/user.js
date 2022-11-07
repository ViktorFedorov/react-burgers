import {authUser} from '../../utils/api'
import {LOGIN_USER} from '../constants'

export const loginUserThunk = (email, password) => {
  return (dispatch) => {
    authUser(email, password)
      .then(userData => {
        dispatch({type: LOGIN_USER, userData})
      })
  }
}

