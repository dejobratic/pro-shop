import { checkoutActions } from "app/redux/checkout/actions"

const DEFAULT_STATE = {
  currentStep: 1,
  shippingAddress: null,
  paymentMethod: null,
}

export const checkoutReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case checkoutActions.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }

    case checkoutActions.SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }

    case checkoutActions.SAVE_CURRENT_CHECKOUT_STEP:
      return { ...state, currentStep: action.payload }

    default:
      return state
  }
}

export default checkoutReducer
