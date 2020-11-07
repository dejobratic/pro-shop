export const cartActions = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
  CLEAR_PRODUCT_FROM_CART: "CLEAR_PRODUCT_FROM_CART",
}

export const addProductToCart = (product) => ({
  type: cartActions.ADD_PRODUCT_TO_CART,
  payload: product,
})

export const removeProductFromCart = (product) => ({
  type: cartActions.REMOVE_PRODUCT_FROM_CART,
  payload: product,
})

export const clearProductFromCart = (product) => ({
  type: cartActions.CLEAR_PRODUCT_FROM_CART,
  payload: product,
})
