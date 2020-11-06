export const userAccountActions = {
  USER_SIGN_IN_START: "USER_SIGN_IN_START",
  USER_SIGN_IN_SUCCESS: "USER_SIGN_IN_SUCCESS",
  USER_SIGN_IN_FAILURE: "USER_SIGN_IN_FAILURE",
  USER_SIGN_OUT_START: "USER_SIGN_OUT_START",
  USER_SIGN_OUT_SUCCESS: "USER_SIGN_OUT_SUCCESS",
  USER_SIGN_OUT_FAILURE: "USER_SIGN_OUT_FAILURE",
}

export const userSignIn = (email, password) => ({
  type: userAccountActions.USER_SIGN_IN_START,
  payload: { email, password },
})

export const userSignInSuccess = (user) => ({
  type: userAccountActions.USER_SIGN_IN_SUCCESS,
  payload: user,
})

export const userSignInFailure = (error) => ({
  type: userAccountActions.USER_SIGN_IN_FAILURE,
  payload: error,
})

export const userSignOut = () => ({
  type: userAccountActions.USER_SIGN_OUT_START,
})

export const userSignOutSuccess = () => ({
  type: userAccountActions.USER_SIGN_OUT_SUCCESS,
})

export const userSignOutFailure = (error) => ({
  type: userAccountActions.USER_SIGN_OUT_FAILURE,
  payload: error,
})
