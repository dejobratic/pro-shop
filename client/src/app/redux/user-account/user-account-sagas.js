import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  userAccountActions,
  userSignInSuccess,
  userSignInFailure,
  userSignUpSuccess,
  userSignUpFailure,
  userSignOutSuccess,
} from "app/redux/user-account/user-account-actions"

import { userAccountService } from "app/services/UserAccountService"

import { getDetails } from "app/utils/error-extensions"

function* logInUser(action) {
  try {
    const { email, password } = action.payload
    const user = yield userAccountService.signInWithEmailAndPassword(
      email,
      password
    )
    yield put(userSignInSuccess(user))
  } catch (error) {
    yield put(userSignInFailure(getDetails(error)))
  }
}

function* signUpUser(action) {
  try {
    const newUser = action.payload
    const signedUpUser = yield userAccountService.signUp(newUser)
    yield put(userSignUpSuccess(signedUpUser))
  } catch (error) {
    yield put(userSignUpFailure(getDetails(error)))
  }
}

function* logOutUser() {
  yield put(userSignOutSuccess())
}

function* onUserSignInStart() {
  yield takeLatest(userAccountActions.USER_SIGN_IN_START, logInUser)
}

function* onUserSignUpStart() {
  yield takeLatest(userAccountActions.USER_SIGN_UP_START, signUpUser)
}

function* onUserSignOutStart() {
  yield takeLatest(userAccountActions.USER_SIGN_OUT_START, logOutUser)
}

export function* userAccountSagas() {
  yield all([
    call(onUserSignInStart),
    call(onUserSignUpStart),
    call(onUserSignOutStart),
  ])
}
