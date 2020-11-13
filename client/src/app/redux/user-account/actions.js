export const userAccountActions = {
  LOAD_USER_PROFILE_START: "LOAD_USER_PROFILE_START",
  LOAD_USER_PROFILE_SUCCESS: "LOAD_USER_PROFILE_SUCCESS",
  LOAD_USER_PROFILE_FAILURE: "LOAD_USER_PROFILE_FAILURE",

  USER_PROFILE_UPDATE_START: "USER_PROFILE_UPDATE_START",
  USER_PROFILE_UPDATE_SUCCESS: "USER_PROFILE_UPDATE_SUCCESS",
  USER_PROFILE_UPDATE_FAILURE: "USER_PROFILE_UPDATE_FAILURE",

  LOAD_USER_ORDERS_START: "LOAD_USER_ORDERS_START",
  LOAD_USER_ORDERS_SUCCESS: "LOAD_USER_ORDERS_SUCCESS",
  LOAD_USER_ORDERS_FAILURE: "LOAD_USER_ORDERS_FAILURE",
}

// USER PROFILE
export const loadUserProfile = (id, token) => ({
  type: userAccountActions.LOAD_USER_PROFILE_START,
  payload: { id, token },
})

export const loadUserProfileSuccess = (profile) => ({
  type: userAccountActions.LOAD_USER_PROFILE_SUCCESS,
  payload: profile,
})

export const loadUserProfileFailure = (error) => ({
  type: userAccountActions.LOAD_USER_PROFILE_FAILURE,
  payload: error,
})

export const userProfileUpdate = (profile, token) => ({
  type: userAccountActions.USER_PROFILE_UPDATE_START,
  payload: { profile, token },
})

export const userProfileUpdateSuccess = (profile) => ({
  type: userAccountActions.USER_PROFILE_UPDATE_SUCCESS,
  payload: profile,
})

export const userProfileUpdateFailure = (error) => ({
  type: userAccountActions.USER_PROFILE_UPDATE_FAILURE,
  payload: error,
})

// USER ORDERS
export const loadUserOrders = (id, token) => ({
  type: userAccountActions.LOAD_USER_ORDERS_START,
  payload: { id, token },
})

export const loadUserOrdersSuccess = (orders) => ({
  type: userAccountActions.LOAD_USER_ORDERS_SUCCESS,
  payload: orders,
})

export const loadUserOrdersFailure = (error) => ({
  type: userAccountActions.LOAD_USER_ORDERS_FAILURE,
  payload: error,
})
