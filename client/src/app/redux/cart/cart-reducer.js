import { cartActions } from "app/redux/cart/cart-actions"

import {
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
} from "app/redux/cart/cart-utils"

const INITIAL_STATE = {
  products: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: addProductToCart(state.products, action.payload),
      }

    case cartActions.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: removeProductFromCart(state.products, action.payload),
      }

    case cartActions.CLEAR_PRODUCT_FROM_CART:
      return {
        ...state,
        products: clearProductFromCart(state.products, action.payload),
      }

    default:
      return state
  }
}

export default cartReducer
