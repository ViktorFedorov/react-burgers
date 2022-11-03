import {SET_REGISTER_FORM_VALUE} from '../constants'

export const setRegisterFormValue = (field, value) => ({type: SET_REGISTER_FORM_VALUE, field, value})