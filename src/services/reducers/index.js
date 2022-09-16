import {combineReducers} from 'redux'
import {ingredientsReducer} from './ingredients-reducers'
import {ingredientDetailReducer} from './ingredient-details'
import {orderDetailsReducer} from './order-details'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  detail: ingredientDetailReducer,
  order: orderDetailsReducer
})