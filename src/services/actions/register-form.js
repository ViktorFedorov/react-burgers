import {
  SET_REGISTER_FORM_VALUE,
  RESET_REGISTER_FORM
} from '../constants'

export const setRegisterFormValue = (field, value) => ({type: SET_REGISTER_FORM_VALUE, field, value})
export const resetForm = () => ({type: RESET_REGISTER_FORM})


