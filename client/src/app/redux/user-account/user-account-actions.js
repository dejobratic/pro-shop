export const userAccountActions = {
  USER_LOG_IN_START: "USER_LOG_IN_START",
  USER_LOG_IN_SUCCESS: "USER_LOG_IN_SUCCESS",
  USER_LOG_IN_FAILURE: "USER_LOG_IN_FAILURE",
  USER_LOG_OUT_START: "USER_LOG_OUT_START",
  USER_LOG_OUT_SUCCESS: "USER_LOG_OUT_SUCCESS",
  USER_LOG_OUT_FAILURE: "USER_LOG_OUT_FAILURE",
}

export const userLogIn = (email, password) => ({
  type: userAccountActions.USER_LOG_IN_START,
  payload: { email, password },
})

export const userLogInSuccess = (user) => ({
  type: userAccountActions.USER_LOG_IN_SUCCESS,
  payload: user,
})

export const userLogInFailure = (error) => ({
  type: userAccountActions.USER_LOG_IN_FAILURE,
  payload: error,
})

export const userLogOut = () => ({
  type: userAccountActions.USER_LOG_OUT_START,
})

export const userLogOutSuccess = () => ({
  type: userAccountActions.USER_LOG_OUT_SUCCESS,
})

export const userLogOutFailure = (error) => ({
  type: userAccountActions.USER_LOG_OUT_FAILURE,
  payload: error,
})
