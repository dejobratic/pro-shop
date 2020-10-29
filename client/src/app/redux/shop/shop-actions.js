export const shopAction = {
	LOAD_SHOP_PRODUCTS_START: "LOAD_SHOP_PRODUCTS_START",
	LOAD_SHOP_PRODUCTS_SUCCESS: "LOAD_SHOP_PRODUCTS_SUCCESS",
	LOAD_SHOP_PRODUCTS_FAILURE: "LOAD_SHOP_PRODUCTS_FAILURE",
}

export const loadShopProducts = () => ({
	type: shopAction.LOAD_SHOP_PRODUCTS_START,
})

export const loadShopProductsSuccess = (products) => ({
	type: shopAction.LOAD_SHOP_PRODUCTS_SUCCESS,
	payload: products,
})

export const loadShopProductsFailure = (error) => ({
	type: shopAction.LOAD_SHOP_PRODUCTS_FAILURE,
	payload: error,
})
