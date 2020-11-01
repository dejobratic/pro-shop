export const productsActions = {
  LOAD_PRODUCTS_START: "LOAD_PRODUCTS_START",
  LOAD_PRODUCTS_SUCCESS: "LOAD_PRODUCTS_SUCCESS",
  LOAD_PRODUCTS_FAILURE: "LOAD_PRODUCTS_FAILURE",
}

export const loadProducts = () => ({
  type: productsActions.LOAD_PRODUCTS_START,
})

export const loadProductsSuccess = (products) => ({
  type: productsActions.LOAD_PRODUCTS_SUCCESS,
  payload: products,
})

export const loadProductsFailure = (error) => ({
  type: productsActions.LOAD_PRODUCTS_FAILURE,
  payload: error,
})
