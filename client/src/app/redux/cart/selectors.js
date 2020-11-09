import { createSelector } from "reselect"

export const selectCart = (state) => state.cart

export const selectCartProducts = createSelector(
  [selectCart],
  (cart) => cart.products
)

export const selectCartProductsQuantity = createSelector(
  [selectCartProducts],
  (products) =>
    products.reduce(
      (total, product) => total + Number(product.quantity) || 0,
      0
    )
)

export const selectCartProductsPrice = createSelector(
  [selectCartProducts],
  (products) =>
    products
      .reduce(
        (total, product) =>
          total + Number(product.price) * Number(product.quantity) || 0,
        0
      )
      .toFixed(2)
)

export const selectCartProductsShippingPrice = createSelector(
  [selectCartProductsPrice],
  (price) => (price > 100 ? 0 : 10).toFixed(2)
)

export const selectCartProductsTaxPrice = createSelector(
  [selectCartProductsPrice],
  (price) => (price * 0.15).toFixed(2)
)
