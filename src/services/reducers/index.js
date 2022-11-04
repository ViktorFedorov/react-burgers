import {combineReducers} from 'redux'
import {ingredientsReducer} from './ingredients-reducers'
import {ingredientDetailReducer} from './ingredient-details'
import {orderDetailsReducer} from './order-details'
import {constructorReducer} from './constructor'
import {registerFormReducer} from './register-form'
import {userReducer} from './user'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientConstructor: constructorReducer,
  detail: ingredientDetailReducer,
  order: orderDetailsReducer,
  register: registerFormReducer,
  user: userReducer
})