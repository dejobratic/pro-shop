import { userLoginActions } from "app/redux/user-login/actions"

const INITIAL_STATE = {
  error: null,
  currentUser: null,
  isLoaded: true,
}

const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userLoginActions.USER_SIGN_IN_START:
    case userLoginActions.USER_SIGN_UP_START:
    case userLoginActions.USER_SIGN_OUT_START:
      return { ...state, error: null, isLoaded: false }

    case userLoginActions.USER_SIGN_IN_SUCCESS:
    case userLoginActions.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoaded: true,
        currentUser: action.payload,
      }

    case userLoginActions.USER_SIGN_OUT_SUCCESS:
      return { ...state, error: null, isLoaded: true, currentUser: null }

    case userLoginActions.USER_SIGN_IN_FAILURE:
    case userLoginActions.USER_SIGN_UP_FAILURE:
    case userLoginActions.USER_SIGN_OUT_FAILURE:
      return { ...state, error: action.payload, isLoaded: true }

    default:
      return state
  }
}

export default userLoginReducer
