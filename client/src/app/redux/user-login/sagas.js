import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  userLoginActions,
  userSignInSuccess,
  userSignInFailure,
  userSignUpSuccess,
  userSignUpFailure,
  userSignOutSuccess,
} from "app/redux/user-login/actions"

import { userLoginService } from "app/services/UserLoginService"

import { getDetails } from "app/utils/error-extensions"

function* logInUser(action) {
  try {
    const { email, password } = action.payload
    const user = yield userLoginService.signInWithEmailAndPassword(
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
    const signedUpUser = yield userLoginService.signUp(newUser)
    yield put(userSignUpSuccess(signedUpUser))
  } catch (error) {
    yield put(userSignUpFailure(getDetails(error)))
  }
}

function* logOutUser() {
  yield put(userSignOutSuccess())
}

function* onUserSignInStart() {
  yield takeLatest(userLoginActions.USER_SIGN_IN_START, logInUser)
}

function* onUserSignUpStart() {
  yield takeLatest(userLoginActions.USER_SIGN_UP_START, signUpUser)
}

function* onUserSignOutStart() {
  yield takeLatest(userLoginActions.USER_SIGN_OUT_START, logOutUser)
}

export default function* userLoginSagas() {
  yield all([
    call(onUserSignInStart),
    call(onUserSignUpStart),
    call(onUserSignOutStart),
  ])
}
