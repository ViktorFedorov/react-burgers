import {createUser} from '../../utils/api'
import {
  SET_REGISTER_FORM_VALUE,
  SEND_REGISTER_DATA
} from '../constants'

export const setRegisterFormValue = (field, value) => ({type: SET_REGISTER_FORM_VALUE, field, value})

// тут будет санка для отправки формы
// 3 состояния - запрос начат, запрос успешен, провал
export const registerUserThunk = (email, password, name) => {
  return (dispatch) => {
    dispatch({type: SEND_REGISTER_DATA})

    createUser(email, password, name)
      .then(console.log)

    // очистить стэйт полей формы
  }
}