import {CLOSE_ORDER_DETAILS, SET_ORDER_DETAILS, SET_ORDER_DETAILS_SUCCESS, SET_ORDERS_ID} from '../constants'
import {sendData} from '../../utils/api'

const sendQuery = () => ({type: SET_ORDER_DETAILS})
export const setOrdersId = (id) => ({type: SET_ORDERS_ID, id})
const sendOrderSuccess = (payload) => ({type: SET_ORDER_DETAILS_SUCCESS, payload})
export const closeOrderDetails = () => ({type: CLOSE_ORDER_DETAILS})

export const sendOrderDataThunk = (ids) => {
  return (dispatch) => {
    dispatch(sendQuery())

    sendData(ids)
      .then(data => dispatch(sendOrderSuccess(data)))


  }
}