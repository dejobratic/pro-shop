import { takeLatest, put, call, all } from "redux-saga/effects"

import { userAccountActions } from "app/redux/user-account/user-account-actions"
import {
  loadUserProfileSuccess,
  loadUserProfileFailure,
  userProfileUpdateSuccess,
  userProfileUpdateFailure,
} from "app/redux/user-account/user-account-actions"

import { userAccountService } from "app/services/UserAccountService"

import { getDetails } from "app/utils/error-extensions"

function* getUserProfile(action) {
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

function* onGetUserProfile() {
  yield takeLatest(userAccountActions.LOAD_USER_PROFILE_START, getUserProfile)
}

function* onUpdateUserProfile() {
  yield takeLatest(
    userAccountActions.USER_PROFILE_UPDATE_START,
    updateUserProfile
  )
}

export default function* userAccountSagas() {
  yield all([call(onGetUserProfile), call(onUpdateUserProfile)])
}
