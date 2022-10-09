import {
  SET_ORDER_DETAILS,
  SET_ORDER_DETAILS_SUCCESS,
  SET_ORDER_DETAILS_FAILED,
  CLOSE_ORDER_DETAILS,
  SET_ORDERS_ID
} from '../constants'

const initialState = {
  open: false,
  order: [],
  ordersId: [],
  loading: false,
  error: false
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_DETAILS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case SET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        open: true,
        order: action.payload
      }
    case SET_ORDER_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      }
    case SET_ORDERS_ID:
      return {
        ...state,
        loading: false,
        error: false,
        ordersId: action.id
      }
    case CLOSE_ORDER_DETAILS:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}