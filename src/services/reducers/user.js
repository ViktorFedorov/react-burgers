import {LOGIN_USER, LOGOUT_USER} from '../constants'

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
      console.log(666)
      return {
        user: {
          email: null,
          name: null
        },
        isAuth: false,
        accessToken: '',
        refreshToken: ''
      }
    default:
      return state
  }
}