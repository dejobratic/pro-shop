import { createSelector } from "reselect"

export const selectUserAccount = (state) => state.userAccount

export const selectCurrentUser = createSelector(
  [selectUserAccount],
  (userAccount) => userAccount.currentUser
)

export const selectUserAccountError = createSelector(
  [selectUserAccount],
  (userAccount) => userAccount.error
)
