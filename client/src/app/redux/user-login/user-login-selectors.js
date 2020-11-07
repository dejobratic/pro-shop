import { createSelector } from "reselect"

export const selectUserLogin = (state) => state.userLogin

export const selectCurrentUser = createSelector(
  [selectUserLogin],
  (userLogin) => userLogin.currentUser
)

export const selectUserLoginError = createSelector(
  [selectUserLogin],
  (userLogin) => userLogin.error
)