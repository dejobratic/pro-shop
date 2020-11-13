import { orderDetailsActions } from "app/redux/order-details/actions"

const INITIAL_STATE = {
  error: null,
  data: {},
  isDataLoaded: false,
}

const orderDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderDetailsActions.LOAD_ORDER_DETAILS_START:
    case orderDetailsActions.PAY_ORDER_START:
      return {
        ...state,
        error: null,
        data: {},
        isDataLoaded: false,
      }

    case orderDetailsActions.LOAD_ORDER_DETAILS_SUCCESS:
    case orderDetailsActions.PAY_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        isDataLoaded: true,
      }

    case orderDetailsActions.LOAD_ORDER_DETAILS_FAILURE:
    case orderDetailsActions.PAY_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        data: {},
        isDataLoaded: true,
      }

    default:
      return state
  }
}

export default orderDetailsReducer
