import { checkoutActions } from "app/redux/checkout/actions"

const DEFAULT_STATE = {
  currentStep: 1,
  shippingAddress: null,
  paymentMethod: null,

  // TODO: to different reducer
  error: null,
  createdOrder: null,
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

    case checkoutActions.CREATE_ORDER_START:
      return { ...state, error: null, createdOrder: null }

    case checkoutActions.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        createdOrder: action.payload,
      }

    case checkoutActions.CREATE_ORDER_FAILURE:
      return { ...state, error: action.payload, createdOrder: null }

    default:
      return state
  }
}

export default checkoutReducer
