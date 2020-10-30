import { createSelector } from "reselect"

export const selectProducts = (state) => state.products

export const selectProductsData = createSelector(
	[selectProducts],
	(products) => products.data
)

export const selectProductsDataLoaded = createSelector(
	[selectProducts],
	(products) => products.isDataLoaded
)
