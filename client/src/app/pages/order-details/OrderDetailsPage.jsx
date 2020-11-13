import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import OrderSummaryContainer from "app/components/order-summary/OrderSummaryContainer"
import OrderSummaryItem from "app/components/order-summary-item/OrderSummaryItem"
import CheckoutItemContainer from "app/components/checkout-item/CheckoutItemContainer"
import CheckoutItem from "app/components/checkout-item/CheckoutItem"
import OrderItemList from "app/components/order-item-list/OrderItemList"
import Warning from "app/components/warning/Warning"

import { PayPalButton } from "react-paypal-button-v2"

import { payOrder } from "app/redux/order-details/actions"

import { selectCurrentUser } from "app/redux/user-login/selectors"

import { payPalService } from "app/services/PayPalService"
import OrderSummaryItemContainer from "app/components/order-summary-item/OrderSummaryItemContainer"
import Loader from "app/components/loader/Loader"

const OrderDetailsPage = ({ order }) => {
  const dispatch = useDispatch()

  const { token } = useSelector(selectCurrentUser)
  const [payPalSdkReady, setPayPalSdkReady] = useState(false)

  const {
    shippingAddress,
    paymentMethod,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = order

  // A bug on the server side
  const itemsPrice =
    Number(totalPrice) - Number(shippingPrice) - Number(taxPrice)

  const onSuccessPayment = (response) => {
    const payment = {
      id: response.id,
      status: response.status,
      updateTime: response.update_time,
      email: response.payer.email_address,
    }

    dispatch(payOrder(order._id, payment, token))
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const clientId = await payPalService.getClientId()
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}"`
      script.async = true
      script.onload = () => {
        console.log("aaaaaaaaaaaaaaaa")
        setPayPalSdkReady(true)
      }
      document.body.appendChild(script)

      return script
    }

    if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setPayPalSdkReady(true)
      }
    }
  }, [dispatch, order, token])

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="list-group-flush">
            <CheckoutItemContainer>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}{" "}
              </p>
              <p>
                <strong>E-mail: </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address: </strong>{" "}
                {`${shippingAddress.address}, ${shippingAddress.city}  ${shippingAddress.postalCode}, ${shippingAddress.country}`}
              </p>

              {order.isDelivered ? (
                <Warning variant="success">
                  Delivered on {order.deliveredAt}
                </Warning>
              ) : (
                <Warning variant="danger">Not Delivered</Warning>
              )}
            </CheckoutItemContainer>
            <CheckoutItemContainer>
              <h2>Payment Method</h2>
              <p>
                <strong>Payment: </strong> {order.paymentMethod}{" "}
              </p>

              {order.isPaid ? (
                <Warning variant="success">Paid on {order.paidAt}</Warning>
              ) : (
                <Warning variant="danger">Not paid</Warning>
              )}
            </CheckoutItemContainer>
            <CheckoutItem
              title="Payment Method"
              label="Payment"
              value={paymentMethod}
            />
            <div className="list-group-item">
              <OrderItemList orderItems={order.orderItems} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <OrderSummaryContainer>
            <OrderSummaryItem name="Items" value={`$${itemsPrice}`} />
            <OrderSummaryItem name="Shipping" value={`$${shippingPrice}`} />
            <OrderSummaryItem name="Tax" value={`$${taxPrice}`} />
            <OrderSummaryItem name="Total" value={`$${totalPrice}`} />
            <OrderSummaryItemContainer>
              {order.isPaid ? (
                <Warning variant="success">Order has been paid</Warning>
              ) : payPalSdkReady ? (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={onSuccessPayment}
                ></PayPalButton>
              ) : (
                <Loader />
              )}
            </OrderSummaryItemContainer>
          </OrderSummaryContainer>
        </div>
      </div>
    </>
  )
}

export default OrderDetailsPage
