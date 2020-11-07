import { all, call } from "redux-saga/effects"

import productsSagas from "app/redux/products/products-sagas"
import productDetailsSagas from "app/redux/product-details/product-details-sagas"
import userLoginSagas from "app/redux/user-login/user-login-sagas"
import userAccountSagas from "app/redux/user-account/user-account-sagas"

export default function* rootSaga() {
  yield all([
    call(productsSagas),
    call(productDetailsSagas),
    call(userLoginSagas),
    call(userAccountSagas),
  ])
}
