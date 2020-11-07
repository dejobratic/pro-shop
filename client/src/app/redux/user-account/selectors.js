import { createSelector } from "reselect"

export const selectUserAccount = (state) => state.userAccount

export const selectUserProfile = createSelector(
  [selectUserAccount],
  (userAccount) => userAccount.profile
)

export const selectUserAccountError = createSelector(
  [selectUserAccount],
  (userAccount) => userAccount.error
)
