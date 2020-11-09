export const checkoutActions = {
  SAVE_SHIPPING_ADDRESS: "SAVE_SHIPPING_ADDRESS",
  SAVE_PAYMENT_METHOD: "SAVE_PAYMENT_METHOD",

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
