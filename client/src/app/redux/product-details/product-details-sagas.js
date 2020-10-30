import { takeLatest, put, all, call } from "redux-saga/effects"

import {
	productDetailsActions,
	loadProductDetailsSuccess,
	loadProductDetailsFailure,
} from "app/redux/product-details/product-details-actions"

import { productService } from "app/services/ProductService"

function* loadProductDetails(action) {
	try {
		const product = yield productService.getById(action.payload)
		yield put(loadProductDetailsSuccess(product))
	} catch (error) {
		yield put(loadProductDetailsFailure(error))
	}
}

function* onLoadProductDetails() {
	yield takeLatest(
		productDetailsActions.LOAD_PRODUCT_DETAILS_START,
		loadProductDetails
	)
}

export function* productDetailsSagas() {
	yield all([call(onLoadProductDetails)])
}
