import { userAccountActions } from "app/redux/user-account/user-account-actions"

const INITIAL_STATE = {
  error: null,
  currentUser: null,
  isLoaded: true,
}

const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAccountActions.USER_LOG_IN_START:
    case userAccountActions.USER_LOG_OUT_START:
      return { ...state, error: null, isLoaded: false }

    case userAccountActions.USER_LOG_IN_SUCCESS:
      return {
        ...state,
        error: null,
        isLoaded: true,
        currentUser: action.payload,
      }

    case userAccountActions.USER_LOG_OUT_SUCCESS:
      return { ...state, error: null, isLoaded: true, currentUser: null }

    case userAccountActions.USER_LOG_IN_FAILURE:
    case userAccountActions.USER_LOG_OUT_FAILURE:
      return { ...state, error: action.payload, isLoaded: true }

    default:
      return state
  }
}

export default userAccountReducer
