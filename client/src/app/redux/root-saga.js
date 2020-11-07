import { all, call } from "redux-saga/effects"

import productsSagas from "app/redux/products/sagas"
import productDetailsSagas from "app/redux/product-details/sagas"
import userLoginSagas from "app/redux/user-login/sagas"
import userAccountSagas from "app/redux/user-account/sagas"

export default function* rootSaga() {
  yield all([
    call(productsSagas),
    call(productDetailsSagas),
    call(userLoginSagas),
    call(userAccountSagas),
  ])
}
