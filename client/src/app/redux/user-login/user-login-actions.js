export const userLoginActions = {
  USER_SIGN_IN_START: "USER_SIGN_IN_START",
  USER_SIGN_IN_SUCCESS: "USER_SIGN_IN_SUCCESS",
  USER_SIGN_IN_FAILURE: "USER_SIGN_IN_FAILURE",

  USER_SIGN_UP_START: "USER_SIGN_UP_START",
  USER_SIGN_UP_SUCCESS: "USER_SIGN_UP_SUCCESS",
  USER_SIGN_UP_FAILURE: "USER_SIGN_UP_FAILURE",

  USER_SIGN_OUT_START: "USER_SIGN_OUT_START",
  USER_SIGN_OUT_SUCCESS: "USER_SIGN_OUT_SUCCESS",
  USER_SIGN_OUT_FAILURE: "USER_SIGN_OUT_FAILURE",
}

// SIGN IN
export const userSignIn = (email, password) => ({
  type: userLoginActions.USER_SIGN_IN_START,
  payload: { email, password },
})

export const userSignInSuccess = (user) => ({
  type: userLoginActions.USER_SIGN_IN_SUCCESS,
  payload: user,
})

export const userSignInFailure = (error) => ({
  type: userLoginActions.USER_SIGN_IN_FAILURE,
  payload: error,
})

// SIGN UP
export const userSignUp = (user) => ({
  type: userLoginActions.USER_SIGN_UP_START,
  payload: user,
})

export const userSignUpSuccess = (user) => ({
  type: userLoginActions.USER_SIGN_UP_SUCCESS,
  payload: user,
})

export const userSignUpFailure = (error) => ({
  type: userLoginActions.USER_SIGN_UP_FAILURE,
  payload: error,
})

// SIGN OUT
export const userSignOut = () => ({
  type: userLoginActions.USER_SIGN_OUT_START,
})

export const userSignOutSuccess = () => ({
  type: userLoginActions.USER_SIGN_OUT_SUCCESS,
})

export const userSignOutFailure = (error) => ({
  type: userLoginActions.USER_SIGN_OUT_FAILURE,
  payload: error,
})
