import { takeLatest, put, call, all } from "redux-saga/effects"

import {
  userAccountActions,
  loadUserProfileSuccess,
  loadUserProfileFailure,
  userProfileUpdateSuccess,
  userProfileUpdateFailure,
  loadUserOrdersSuccess,
  loadUserOrdersFailure,
} from "app/redux/user-account/actions"

import { userAccountService } from "app/services/UserAccountService"
import { orderService } from "app/services/OrderService"

import { getDetails } from "app/utils/error-extensions"

function* loadUserProfile(action) {
  try {
    const { id, token } = action.payload
    const profile = yield userAccountService.getProfile(id, `Bearer ${token}`)
    yield put(loadUserProfileSuccess(profile))
  } catch (error) {
    yield put(loadUserProfileFailure(getDetails(error)))
  }
}

function* updateUserProfile(action) {
  try {
    const { profile, token } = action.payload
    const updatedProfile = yield userAccountService.updateProfile(
      profile,
      `Bearer ${token}`
    )
    yield put(userProfileUpdateSuccess(updatedProfile))
  } catch (error) {
    yield put(userProfileUpdateFailure(getDetails(error)))
  }
}

function* loadUserOrders(action) {
  try {
    const { id, token } = action.payload
    const orders = yield orderService.getByUserId(id, `Bearer ${token}`)
    yield put(loadUserOrdersSuccess(orders))
  } catch (error) {
    yield put(loadUserOrdersFailure(getDetails(error)))
  }
}

function* onLoadUserProfile() {
  yield takeLatest(userAccountActions.LOAD_USER_PROFILE_START, loadUserProfile)
}

function* onUpdateUserProfile() {
  yield takeLatest(
    userAccountActions.USER_PROFILE_UPDATE_START,
    updateUserProfile
  )
}

function* onLoadUserOrders() {
  yield takeLatest(userAccountActions.LOAD_USER_ORDERS_START, loadUserOrders)
}

export default function* userAccountSagas() {
  yield all([
    call(onLoadUserProfile),
    call(onUpdateUserProfile),
    call(onLoadUserOrders),
  ])
}
