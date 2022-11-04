import {
  SET_REGISTER_FORM_VALUE,
  RESET_REGISTER_FORM
} from '../constants'

const initialState = {
  name: '',
  email: '',
  password: ''
}

export const registerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_FORM_VALUE:
      return {
        ...state,
        [action.field]: action.value
      }
    case RESET_REGISTER_FORM:
      return {
        name: '',
        email: '',
        password: ''
      }
    default:
      return state
  }
}