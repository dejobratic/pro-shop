import React from "react"
import { useDispatch } from "react-redux"

import CheckoutStep from "app/components/checkout-step/CheckoutStep"

import { saveCurrentCheckoutStep } from "app/redux/checkout/actions"

import { checkoutStep } from "app/constants/checkout.constants"

const CheckoutStepNavigation = ({ currentStep }) => {
  const dispatch = useDispatch()

  return (
    <>
      <nav className="breadcrumb justify-content-center mb-4">
        <CheckoutStep
          name="Sign In"
          onClick={() => {}}
          completed={currentStep >= checkoutStep.SIGN_IN}
        />
        <CheckoutStep
          name="Shipping"
          onClick={() =>
            dispatch(saveCurrentCheckoutStep(checkoutStep.SHIPPING))
          }
          completed={currentStep >= checkoutStep.SHIPPING}
        />
        <CheckoutStep
          name="Payment"
          onClick={() =>
            dispatch(saveCurrentCheckoutStep(checkoutStep.PAYMENT))
          }
          completed={currentStep >= checkoutStep.PAYMENT}
        />
        <CheckoutStep
          name="Finalize order"
          onClick={() =>
            dispatch(saveCurrentCheckoutStep(checkoutStep.FINALIZE_ORDER))
          }
          completed={currentStep >= checkoutStep.FINALIZE_ORDER}
        />
      </nav>
    </>
  )
}

export default CheckoutStepNavigation
