import {combineReducers} from 'redux'
import {ingredientsReducer} from './ingredientsReducers'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer
})