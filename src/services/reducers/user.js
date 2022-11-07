import {LOGIN_USER} from '../constants'

const initialState = {
  user: {
    email: null,
    name: null
  },
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
        accessToken,
        refreshToken
      }
    default:
      return state
  }
}