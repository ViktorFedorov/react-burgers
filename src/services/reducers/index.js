import {combineReducers} from 'redux'
import {ingredientsReducer} from './ingredientsReducers'
import {ingredientDetailReducer} from './ingredientDetails'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  detail: ingredientDetailReducer
})