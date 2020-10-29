import { takeLatest, put, all, call } from "redux-saga/effects"

import {
	shopAction,
	loadShopProductsSuccess,
	loadShopProductsFailure,
} from "app/redux/shop/shop-actions"

import { productService } from "app/services/ProductService"

export function* loadShopProducts() {
	try {
		const products = yield productService.getAll()
		yield put(loadShopProductsSuccess(products))
	} catch (error) {
		yield put(loadShopProductsFailure(error))
	}
}

export function* onLoadShopCollectionsStart() {
	yield takeLatest(shopAction.LOAD_SHOP_PRODUCTS_START, loadShopProducts)
}

export function* shopSagas() {
	yield all([call(onLoadShopCollectionsStart)])
}
