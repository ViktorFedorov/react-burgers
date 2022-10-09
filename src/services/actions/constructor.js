import {
  SET_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT
} from '../constants'

export const setConstructorIngredient = (ingredient) => ({type: SET_CONSTRUCTOR_INGREDIENT, ingredient})
export const deleteConstructorIngredient = (id) => ({type: DELETE_CONSTRUCTOR_INGREDIENT, id})