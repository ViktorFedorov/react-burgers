import {
  SET_REGISTER_FORM_VALUE,
  SEND_REGISTER_DATA
} from '../constants'

const initialState = {
  name: '',
  email: '',
  password: '',
  user: null,
  accessToken: null,
  refreshToken: null,
  sendQuery: false,
  hasError: false,
}

export const registerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_FORM_VALUE:
      return {
        ...state,
        [action.field]: action.value
      }
    case SEND_REGISTER_DATA:
      return {
        ...state,
        sendQuery: true
      }
    default:
      return state
  }
}