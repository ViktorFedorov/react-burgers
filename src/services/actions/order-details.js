import {
  CLOSE_ORDER_DETAILS,
  SET_ORDER_DETAILS,
  SET_ORDER_DETAILS_SUCCESS,
  SET_ORDER_DETAILS_FAILED,
  SET_ORDERS_ID
} from '../constants'
import {sendData} from '../../utils/api'

export const closeOrderDetails = () => ({type: CLOSE_ORDER_DETAILS})
export const setOrdersId = (id) => ({type: SET_ORDERS_ID, id})

const sendQuery = () => ({type: SET_ORDER_DETAILS})
const sendOrderSuccess = (payload) => ({type: SET_ORDER_DETAILS_SUCCESS, payload})
const sendQueryFailed = () => ({type: SET_ORDER_DETAILS_FAILED})

export const sendOrderDataThunk = (ids) => {
  return (dispatch) => {
    dispatch(sendQuery())

    sendData(ids)
      .then(data => {
        if (data && data.success) {
          dispatch(sendOrderSuccess(data))
        } else {
          dispatch(sendQueryFailed())
        }
      })
  }
}