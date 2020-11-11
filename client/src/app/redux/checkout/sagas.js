import { takeLatest, put, call, all } from "redux-saga/effects"

import { orderService } from "app/services/OrderService"

import {
  checkoutActions,
  createOrderFailure,
  createOrderSuccess,
} from "app/redux/checkout/actions"

import { getDetails } from "app/utils/error-extensions"

function* createOrder(action) {
  try {
    const { order, token } = action.payload
    const createdOrder = yield orderService.create(order, `Bearer ${token}`)
    yield put(createOrderSuccess(createdOrder))
  } catch (error) {
    yield put(createOrderFailure(getDetails(error)))
  }
}

function* onCreateOrder() {
  yield takeLatest(checkoutActions.CREATE_ORDER_START, createOrder)
}

export default function* checkoutSagas() {
  yield all([call(onCreateOrder)])
}
