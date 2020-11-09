import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import CheckoutSteps from "app/components/checkout-steps/CheckoutSteps"
import ShippingAddressForm from "app/components/shipping-address-form/ShippingAddressForm"
import PaymentMethodForm from "app/components/payment-method-form/PaymentMethodForm"

import {
  selectShippingAddress,
  selectPaymentMethod,
  selectCurrentCheckoutStep,
} from "app/redux/checkout/selectors"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsShippingPrice,
  selectCartProductsTaxPrice,
} from "app/redux/cart/selectors"

import { checkoutStep } from "app/constants/checkout.constants"
import Warning from "app/components/warning/Warning"
import OrderItem from "app/components/order-item/OrderItem"
import Button from "app/components/button/Button"

const CheckoutPage = ({ history }) => {
  const shippingAddress = useSelector(selectShippingAddress)
  const paymentMethod = useSelector(selectPaymentMethod)
  const currentStep = useSelector(selectCurrentCheckoutStep)

  const cartProducts = useSelector(selectCartProducts)
  const cartProductsPrice = useSelector(selectCartProductsPrice)
  const cartProductsShippingPrice = useSelector(selectCartProductsShippingPrice)
  const cartProductsTaxPrice = useSelector(selectCartProductsTaxPrice)

  const totalPrice = (
    Number(cartProductsPrice) +
    Number(cartProductsShippingPrice) +
    Number(cartProductsTaxPrice)
  ).toFixed(2)

  const onPlaceOrder = () => {}

  useEffect(() => {
    switch (currentStep) {
      case 1:
        history.push("/checkout/shipping")
        break
      case 2:
        history.push("/checkout/payment")
        break
      case 3:
        history.push("/checkout/finalize")
        break
      default:
        return null
    }
  }, [currentStep, history])

  return (
    <>
      <CheckoutSteps currentStep={currentStep} />
      {currentStep === checkoutStep.SHIPPING && <ShippingAddressForm />}
      {currentStep === checkoutStep.PAYMENT && <PaymentMethodForm />}

      {currentStep === checkoutStep.FINALIZE_ORDER && (
        <div className="row">
          <div className="col-md-8">
            <div className="list-group-flush">
              <div className="list-group-item">
                <h2>Shipping</h2>
                <p>
                  <strong>Address: </strong>
                  {`${shippingAddress.streetAddress}, ${shippingAddress.city}  ${shippingAddress.postalCode}, ${shippingAddress.country}`}
                </p>
              </div>
              <div className="list-group-item">
                <h2>Payment Method</h2>
                <p>
                  <strong>Payment: </strong>
                  {paymentMethod}
                </p>
              </div>
              <div className="list-group-item">
                <h2>Order items</h2>
                {cartProducts.length === 0 ? (
                  <Warning>Your cart is empty</Warning>
                ) : (
                  <div className="list-group-flush">
                    {cartProducts.map((product, idx) => (
                      <OrderItem key={idx} item={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="list-group-flush">
                <div className="list-group-item">
                  <h2>Order Summary</h2>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">Items</div>
                    <div className="col">${cartProductsPrice}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">Shipping</div>
                    <div className="col">${cartProductsShippingPrice}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">Tax</div>
                    <div className="col">${cartProductsTaxPrice}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">Total</div>
                    <div className="col">${totalPrice}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <Button
                    type="button"
                    disabled={cartProducts.length === 0}
                    onClick={onPlaceOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CheckoutPage
