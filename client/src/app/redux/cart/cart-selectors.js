import { createSelector } from "reselect"

export const selectCart = (state) => state.cart

export const selectCartProducts = createSelector(
	[selectCart],
	(cart) => cart.products
)

export const selectCartProductsQuantity = createSelector(
	[selectCartProducts],
	(products) =>
		products.reduce((total, product) => total + product.quantity || 0, 0)
)

export const selectCartProductsPrice = createSelector(
	[selectCartProducts],
	(products) =>
		products
			.reduce(
				(total, product) => total + product.price * product.quantity || 0,
				0
			)
			.toFixed(2)
)
