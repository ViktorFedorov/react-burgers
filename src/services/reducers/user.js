import {ADD_NEW_USER} from '../constants'

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
    case ADD_NEW_USER:
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