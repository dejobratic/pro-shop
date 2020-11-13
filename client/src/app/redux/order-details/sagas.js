import { takeLatest, put, call, all } from "redux-saga/effects"

import {
  orderDetailsActions,
  loadOrderDetailsSuccess,
  loadOrderDetailsFailure,
  payOrderSuccess,
  payOrderFailure,
} from "app/redux/order-details/actions"

import { orderService } from "app/services/OrderService"

import { getDetails } from "app/utils/error-extensions"

function* loadOrderDetails(action) {
  try {
    const { orderId, token } = action.payload
    const order = yield orderService.get(orderId, `Bearer ${token}`)
    yield put(loadOrderDetailsSuccess(order))
  } catch (error) {
    yield put(loadOrderDetailsFailure(getDetails(error)))
  }
}

function* payOrder(action) {
  try {
    const { orderId, payment, token } = action.payload
    const order = yield orderService.pay(orderId, payment, `Bearer ${token}`)
    yield put(payOrderSuccess(order))
  } catch (error) {
    yield put(payOrderFailure(getDetails(error)))
  }
}

function* onLoadOrderDetails() {
  yield takeLatest(
    orderDetailsActions.LOAD_ORDER_DETAILS_START,
    loadOrderDetails
  )
}

function* onPayOrder() {
  yield takeLatest(orderDetailsActions.PAY_ORDER_START, payOrder)
}

export default function* orderDetailsSagas() {
  yield all([call(onLoadOrderDetails), call(onPayOrder)])
}
