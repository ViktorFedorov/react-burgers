import {GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS} from '../actions/ingredients'

const initialState = {
  loading: false,
  error: false,
  ingredients: [],
  ingredientsInConstructor: [],
  currentlyViewedIngredient: {},
  order: {}
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {...state, loading: true, error: false}
    case GET_INGREDIENTS_SUCCESS:
      return {...state, loading: false, ingredients: action.ingredients}
    default:
      return state
  }
}