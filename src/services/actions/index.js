import {GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from '../constants'
import {getData} from '../../utils/api'

const getIngredients = () => ({type: GET_INGREDIENTS})
const getIngredientsSuccess = (payload) => ({type: GET_INGREDIENTS_SUCCESS, payload})
const getIngredientsFailed = () => ({type: GET_INGREDIENTS_FAILED})

const getIngredientsThunk = () => {
  return (dispatch) => {
    dispatch(getIngredients())

    getData()
      .then(({data}) => {
        dispatch(getIngredientsSuccess(data))
      })


  }
}

export {
  getIngredientsThunk
}