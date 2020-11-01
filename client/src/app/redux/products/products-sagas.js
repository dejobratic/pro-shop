import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  productsActions,
  loadProductsSuccess,
  loadProductsFailure,
} from "app/redux/products/products-actions"

import { productService } from "app/services/ProductService"

function* loadProducts() {
  try {
    const products = yield productService.getAll()
    yield put(loadProductsSuccess(products))
  } catch (error) {
    yield put(loadProductsFailure(error))
  }
}

function* onLoadProductsStart() {
  yield takeLatest(productsActions.LOAD_PRODUCTS_START, loadProducts)
}

export function* productsSagas() {
  yield all([call(onLoadProductsStart)])
}
