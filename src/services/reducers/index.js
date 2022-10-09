import {combineReducers} from 'redux'
import {ingredientsReducer} from './ingredients-reducers'
import {ingredientDetailReducer} from './ingredient-details'
import {orderDetailsReducer} from './order-details'
import {constructorReducer} from './constructor'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientConstructor: constructorReducer,
  detail: ingredientDetailReducer,
  order: orderDetailsReducer
})