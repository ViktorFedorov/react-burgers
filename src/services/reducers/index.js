import {combineReducers} from 'redux'
import {ingredientsReducer} from './burgerReducers'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer
})