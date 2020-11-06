import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  userAccountActions,
  userLogInSuccess,
  userLogInFailure,
  userLogOutSuccess,
} from "app/redux/user-account/user-account-actions"

import { userAccountService } from "app/services/UserAccountService"

import { getDetails } from "app/utils/error-extensions"

function* logInUser(action) {
  try {
    const { email, password } = action.payload
    const user = yield userAccountService.logInWithEmailAndPassword(
      email,
      password
    )
    yield put(userLogInSuccess(user))
  } catch (error) {
    yield put(userLogInFailure(getDetails(error)))
  }
}

function* logOutUser() {
  yield put(userLogOutSuccess())
}

function* onUserLogInStart() {
  yield takeLatest(userAccountActions.USER_LOG_IN_START, logInUser)
}

function* onUserLogOutStart() {
  yield takeLatest(userAccountActions.USER_LOG_OUT_START, logOutUser)
}

export function* userAccountSagas() {
  yield all([call(onUserLogInStart), call(onUserLogOutStart)])
}
