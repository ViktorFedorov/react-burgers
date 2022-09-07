import {getData} from '../../utils/api'

export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FILED'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'

const getIngredients = () => ({type: GET_INGREDIENTS})
const getIngredientsSuccess = (ingredients) => ({type: GET_INGREDIENTS_SUCCESS, ingredients})
const getIngredientsFailed = () => ({type: GET_INGREDIENTS_FAILED})

const getIngredientsThunk = () => {
  return (dispatch) => {
    dispatch(getIngredients())

    getData()
      .then(({data}) => {
        dispatch(getIngredientsSuccess(data))
      })
      .catch(dispatch(getIngredientsFailed()))
  }
}

export {
  getIngredientsThunk
}