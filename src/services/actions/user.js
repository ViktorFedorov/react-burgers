import {createUser} from '../../utils/api'
import {ADD_NEW_USER, RESET_REGISTER_FORM} from '../constants'

export const registerUserThunk = (email, password, name) => {
  return (dispatch) => {
    createUser(email, password, name)
      .then(userData => {
        dispatch({type: ADD_NEW_USER, userData})
      })
      .finally(dispatch({type: RESET_REGISTER_FORM}))





  }
}