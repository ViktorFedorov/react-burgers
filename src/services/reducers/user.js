import {CHANGE_USER_PROFILE, GET_USER_DATA, LOGIN_USER, LOGOUT_USER} from '../constants'

const initialState = {
  user: {
    email: null,
    name: null
  },
  isAuth: false,
  accessToken: '',
  refreshToken: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const {user, accessToken, refreshToken} = action.userData
      return {
        user: {
          email: user.email,
          name: user.name
        },
        isAuth: true,
        accessToken,
        refreshToken
      }
    case LOGOUT_USER:
      return {
        user: {
          email: null,
          name: null
        },
        isAuth: false,
        accessToken: '',
        refreshToken: ''
      }
    case CHANGE_USER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value
        }
      }
    case GET_USER_DATA:
      return {
        ...state,
        user: {
          email: action.userData.user.email,
          name: action.userData.user.name
        }
      }
    default:
      return state
  }
}