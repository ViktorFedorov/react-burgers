import {getData} from '../../utils/api'
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS
} from '../constants'

const getIngredients = () => ({type: GET_INGREDIENTS})
const getIngredientsSuccess = (ingredients) => ({type: GET_INGREDIENTS_SUCCESS, ingredients})
const getIngredientsFailed = () => ({type: GET_INGREDIENTS_FAILED})
export const setIngredientDetails = (payload) => ({type: SET_INGREDIENT_DETAILS, payload})
export const closeIngredientDetails = () => ({type: CLOSE_INGREDIENT_DETAILS})

export const getIngredientsThunk = () => {
  return (dispatch) => {
    dispatch(getIngredients())

    getData()
      .then(({data}) => {
        if (data && data.length) {
          dispatch(getIngredientsSuccess(data))
        } else {
          dispatch(getIngredientsFailed())
        }
      })
      .catch(console.log)
  }
}