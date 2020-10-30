import { createSelector } from "reselect"

export const selectProduct = (state) => state.productDetails

export const selectProductDetails = createSelector(
	[selectProduct],
	(product) => product.data
)
