import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../constants'

const initialState = {
  loading: false,
  error: false,
  ingredients: []
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ingredients: action.ingredients
      }
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}