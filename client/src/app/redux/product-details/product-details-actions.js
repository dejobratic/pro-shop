export const productDetailsActions = {
	LOAD_PRODUCT_DETAILS_START: "LOAD_PRODUCT_DETAILS_START",
	LOAD_PRODUCT_DETAILS_SUCCESS: "LOAD_PRODUCT_DETAILS_SUCCESS",
	LOAD_PRODUCT_DETAILS_FAILURE: "LOAD_PRODUCT_DETAILS_FAILURE",
}

export const loadProductDetails = (productId) => ({
	type: productDetailsActions.LOAD_PRODUCT_DETAILS_START,
	payload: productId,
})

export const loadProductDetailsSuccess = (product) => ({
	type: productDetailsActions.LOAD_PRODUCT_DETAILS_SUCCESS,
	payload: product,
})

export const loadProductDetailsFailure = (error) => ({
	type: productDetailsActions.LOAD_PRODUCT_DETAILS_FAILURE,
	payload: error,
})
