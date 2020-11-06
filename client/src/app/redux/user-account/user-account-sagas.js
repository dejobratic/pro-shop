import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  userAccountActions,
  userSignInSuccess,
  userSignInFailure,
  userSignOutSuccess,
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
    yield put(userSignInSuccess(user))
  } catch (error) {
    yield put(userSignInFailure(getDetails(error)))
  }
}

function* logOutUser() {
  yield put(userSignOutSuccess())
}

function* onUserSignInStart() {
  yield takeLatest(userAccountActions.USER_SIGN_IN_START, logInUser)
}

function* onUserSignOutStart() {
  yield takeLatest(userAccountActions.USER_SIGN_OUT_START, logOutUser)
}

export function* userAccountSagas() {
  yield all([call(onUserSignInStart), call(onUserSignOutStart)])
}
