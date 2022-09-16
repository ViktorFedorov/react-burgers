import {CLOSE_INGREDIENT_DETAILS, SET_INGREDIENT_DETAILS} from '../constants'

const initialState = {
  ingredient: {},
  open: false
}

export const ingredientDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return {...state, open: true, ingredient: {...action.payload}}
    case CLOSE_INGREDIENT_DETAILS:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}

