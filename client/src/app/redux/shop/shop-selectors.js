import { createSelector } from "reselect"

const selectShop = (state) => state.shop

export const selectShopProducts = createSelector(
	[selectShop],
	(shop) => shop.products
)

export const selectShopProductById = (productId) =>
	createSelector([selectShopProducts], (products) =>
		products.find((product) => product._id === productId)
	)

export const selectShopProductsLoaded = createSelector(
	[selectShop],
	(shop) => shop.areProductsLoaded
)
