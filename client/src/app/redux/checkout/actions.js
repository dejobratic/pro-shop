export const checkoutActions = {
  SAVE_SHIPPING_ADDRESS: "SAVE_SHIPPING_ADDRESS",
  SAVE_PAYMENT_METHOD: "SAVE_PAYMENT_METHOD",

  CREATE_ORDER_START: "CREATE_ORDER_START",
  CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAILURE: "CREATE_ORDER_FAILURE",

  SAVE_CURRENT_CHECKOUT_STEP: "SAVE_CURRENT_CHECKOUT_STEP",
}

// SHIPPING ADDRESS
export const saveShippingAddress = (address) => ({
  type: checkoutActions.SAVE_SHIPPING_ADDRESS,
  payload: address,
})

// CHECKOUT STEP
export const saveCurrentCheckoutStep = (step) => ({
  type: checkoutActions.SAVE_CURRENT_CHECKOUT_STEP,
  payload: step,
})

// PAYMENT METHOD
export const savePaymentMethod = (paymentMethod) => ({
  type: checkoutActions.SAVE_PAYMENT_METHOD,
  payload: paymentMethod,
})

// ORDER
export const createOrder = (order, token) => ({
  type: checkoutActions.CREATE_ORDER_START,
  payload: { order, token },
})

export const createOrderSuccess = (order) => ({
  type: checkoutActions.CREATE_ORDER_SUCCESS,
  payload: order,
})

export const createOrderFailure = (error) => ({
  type: checkoutActions.CREATE_ORDER_FAILURE,
  payload: error,
})
