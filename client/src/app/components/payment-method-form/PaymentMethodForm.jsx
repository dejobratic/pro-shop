import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import FormContainer from "app/components/form-container/FormContainer"
import Button from "app/components/button/Button"

import {
  savePaymentMethod,
  saveCurrentCheckoutStep,
} from "app/redux/checkout/actions"

import {
  selectPaymentMethod,
  selectCurrentCheckoutStep,
} from "app/redux/checkout/selectors"
import FormCheck from "../form-check/FormCheck"

const PaymentMethodForm = () => {
  const dispatch = useDispatch()
  const currentPaymentMethod = useSelector(selectPaymentMethod)
  const currentCheckoutStep = useSelector(selectCurrentCheckoutStep)

  const [paymentMethod, setPaymentMethod] = useState(currentPaymentMethod)

  const onSetPaymentMethod = (e) => {
    setPaymentMethod(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    dispatch(saveCurrentCheckoutStep(currentCheckoutStep + 1))
  }

  return (
    <FormContainer>
      <h2>Payment method</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-10 py-3">
              <FormCheck
                name="paymentMethod"
                id="PayPal"
                value="PayPal"
                onClick={onSetPaymentMethod}
                label="PayPal or Credit Card"
                defaultChecked
              />
              {/* <FormCheck
                name="paymentMethod"
                id="Stripe"
                value="Stripe"
                onClick={onSetPaymentMethod}
                label="Stripe"
                defaultChecked
              /> */}
            </div>
          </div>
        </fieldset>
        <Button type="submit">Continue</Button>
      </form>
    </FormContainer>
  )
}

export default PaymentMethodForm
