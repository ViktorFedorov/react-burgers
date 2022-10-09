import {
  SET_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT
} from '../constants'

const initialState = {
  bun: null,
  toppings: []
}

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONSTRUCTOR_INGREDIENT:
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          bun: action.ingredient
        }
      } else {
        return {
          ...state,
          toppings: [...state.toppings, action.ingredient]
        }
      }
    case DELETE_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        toppings: [...state.toppings.filter(ingredient => ingredient.uid !== action.id)]
      }
    default:
      return state
  }
}