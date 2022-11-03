import {SET_REGISTER_FORM_VALUE} from '../constants'

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
    default:
      return state
  }
}