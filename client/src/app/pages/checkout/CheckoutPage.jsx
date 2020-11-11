import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CheckoutSteps from "app/components/checkout-step-navigation/CheckoutStepNavigation"
import ShippingAddressForm from "app/components/shipping-address-form/ShippingAddressForm"
import PaymentMethodForm from "app/components/payment-method-form/PaymentMethodForm"
import OrderSummary from "app/components/order-summary/OrderSummary"

import { createOrder } from "app/redux/checkout/actions"
import { clearCart } from "app/redux/cart/actions"

import { selectCurrentUser } from "app/redux/user-login/selectors"

import {
  selectShippingAddress,
  selectPaymentMethod,
  selectCreatedOrder,
  selectCurrentCheckoutStep,
} from "app/redux/checkout/selectors"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsShippingPrice,
  selectCartProductsTaxPrice,
  selectCartProductsTotalPrice,
} from "app/redux/cart/selectors"

import { checkoutStep } from "app/constants/checkout.constants"
import CheckoutItem from "app/components/checkout-item/CheckoutItem"
import OrderItemList from "app/components/order-item-list/OrderItemList"

const CheckoutPage = ({ history }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const createdOrder = useSelector(selectCreatedOrder)
  const shippingAddress = useSelector(selectShippingAddress)
  const paymentMethod = useSelector(selectPaymentMethod)
  const currentStep = useSelector(selectCurrentCheckoutStep)

  const cartProducts = useSelector(selectCartProducts)
  const cartProductsPrice = useSelector(selectCartProductsPrice)
  const cartProductsShippingPrice = useSelector(selectCartProductsShippingPrice)
  const cartProductsTaxPrice = useSelector(selectCartProductsTaxPrice)
  const totalPrice = useSelector(selectCartProductsTotalPrice)

  useEffect(() => {
    if (createdOrder) {
      history.push(`/orders/${createdOrder._id}`)
      return
    }
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
  }, [currentStep, history, createdOrder])

  const onPlaceOrder = () => {
    const order = {
      orderItems: cartProducts.map((p) => {
        return { ...p, product: p._id }
      }),
      shippingAddress,
      paymentMethod,
      itemsPrice: cartProductsPrice,
      shippingPrice: cartProductsShippingPrice,
      taxPrice: cartProductsTaxPrice,
      totalPrice,
    }

    dispatch(createOrder(order, currentUser.token))
    dispatch(clearCart())
  }

  return (
    <>
      <CheckoutSteps currentStep={currentStep} />
      {currentStep === checkoutStep.SHIPPING && <ShippingAddressForm />}
      {currentStep === checkoutStep.PAYMENT && <PaymentMethodForm />}

      {currentStep === checkoutStep.FINALIZE_ORDER && (
        <div className="row">
          <div className="col-md-8">
            <div className="list-group-flush">
              <CheckoutItem
                title="Shipping"
                label="Address"
                value={`${shippingAddress.address}, ${shippingAddress.city}  ${shippingAddress.postalCode}, ${shippingAddress.country}`}
              />
              <CheckoutItem
                title="Payment Method"
                label="Payment"
                value={paymentMethod}
              />
              <div className="list-group-item">
                <OrderItemList />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <OrderSummary onPlaceOrder={onPlaceOrder} />
          </div>
        </div>
      )}
    </>
  )
}

export default CheckoutPage
