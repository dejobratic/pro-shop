import { all, call } from "redux-saga/effects"

import { productsSagas } from "app/redux/products/products-sagas"
import { productDetailsSagas } from "app/redux/product-details/product-details-sagas"

export default function* rootSaga() {
  yield all([call(productsSagas), call(productDetailsSagas)])
}
