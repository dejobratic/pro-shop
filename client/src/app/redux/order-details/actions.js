export const orderDetailsActions = {
  LOAD_ORDER_DETAILS_START: "LOAD_ORDER_DETAILS_START",
  LOAD_ORDER_DETAILS_SUCCESS: "LOAD_ORDER_DETAILS_SUCCESS",
  LOAD_ORDER_DETAILS_FAILURE: "LOAD_ORDER_DETAILS_FAILURE",

  PAY_ORDER_START: "PAY_ORDER_START",
  PAY_ORDER_SUCCESS: "PAY_ORDER_SUCCESS",
  PAY_ORDER_FAILURE: "PAY_ORDER_FAILURE",
}

export const loadOrderDetails = (orderId, token) => ({
  type: orderDetailsActions.LOAD_ORDER_DETAILS_START,
  payload: { orderId, token },
})

export const loadOrderDetailsSuccess = (order) => ({
  type: orderDetailsActions.LOAD_ORDER_DETAILS_SUCCESS,
  payload: order,
})

export const loadOrderDetailsFailure = (error) => ({
  type: orderDetailsActions.LOAD_ORDER_DETAILS_FAILURE,
  payload: error,
})

export const payOrder = (orderId, payment, token) => ({
  type: orderDetailsActions.PAY_ORDER_START,
  payload: { orderId, payment, token },
})

export const payOrderSuccess = (order) => ({
  type: orderDetailsActions.PAY_ORDER_SUCCESS,
  payload: order,
})

export const payOrderFailure = (error) => ({
  type: orderDetailsActions.PAY_ORDER_FAILURE,
  payload: error,
})
