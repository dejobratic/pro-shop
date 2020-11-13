import { all, call } from "redux-saga/effects"

import productsSagas from "app/redux/products/sagas"
import productDetailsSagas from "app/redux/product-details/sagas"
import userLoginSagas from "app/redux/user-login/sagas"
import userAccountSagas from "app/redux/user-account/sagas"
import checkoutSagas from "app/redux/checkout/sagas"
import orderDetailSagas from "app/redux/order-details/sagas"

export default function* rootSaga() {
  yield all([
    call(productsSagas),
    call(productDetailsSagas),
    call(userLoginSagas),
    call(userAccountSagas),
    call(checkoutSagas),
    call(orderDetailSagas),
  ])
}
