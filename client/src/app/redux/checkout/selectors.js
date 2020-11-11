import { createSelector } from "reselect"

export const selectCheckout = (state) => state.checkout

export const selectShippingAddress = createSelector(
  [selectCheckout],
  (checkout) => checkout.shippingAddress
)

export const selectPaymentMethod = createSelector(
  [selectCheckout],
  (checkout) => checkout.paymentMethod
)

export const selectCurrentCheckoutStep = createSelector(
  [selectCheckout],
  (checkout) => checkout.currentStep
)

export const selectCreatedOrder = createSelector(
  [selectCheckout],
  (checkout) => checkout.createdOrder
)
