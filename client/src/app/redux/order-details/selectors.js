import { createSelector } from "reselect"

export const selectOrder = (state) => state.orderDetails

export const selectOrderDetails = createSelector(
  [selectOrder],
  (orderDetails) => orderDetails.data
)
