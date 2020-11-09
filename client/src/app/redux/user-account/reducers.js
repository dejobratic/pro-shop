import { userAccountActions } from "app/redux/user-account/actions"

const INITIAL_STATE = {
  error: null,
  profile: null,
  shippingAddress: null, //TODO: handle
  orders: [],
  isDataLoaded: false,
}

const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAccountActions.LOAD_USER_PROFILE_START:
    case userAccountActions.USER_PROFILE_UPDATE_START:
      return {
        ...state,
        error: null,
        profile: null,
        isDataLoaded: false,
      }

    case userAccountActions.LOAD_USER_PROFILE_SUCCESS:
    case userAccountActions.USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        profile: action.payload,
        isDataLoaded: true,
      }

    case userAccountActions.LOAD_USER_PROFILE_FAILURE:
    case userAccountActions.USER_PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        profile: null,
        isDataLoaded: true,
      }

    default:
      return state
  }
}

export default userAccountReducer
