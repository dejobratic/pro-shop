import React from "react"
import { useSelector } from "react-redux"

import OrderSummaryItem from "app/components/order-summary-item/OrderSummaryItem"
import Button from "app/components/button/Button"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsShippingPrice,
  selectCartProductsTaxPrice,
  selectCartProductsTotalPrice,
} from "app/redux/cart/selectors"

const OrderSummary = ({ onPlaceOrder }) => {
  const cartProducts = useSelector(selectCartProducts)

  const productsPrice = useSelector(selectCartProductsPrice)
  const shippingPrice = useSelector(selectCartProductsShippingPrice)
  const taxPrice = useSelector(selectCartProductsTaxPrice)
  const totalPrice = useSelector(selectCartProductsTotalPrice)

  console.log(totalPrice)

  return (
    <div className="card">
      <div className="list-group-flush">
        <div className="list-group-item">
          <h2>Order Summary</h2>
        </div>
        <OrderSummaryItem name="Items" value={`$${productsPrice}`} />
        <OrderSummaryItem name="Shipping" value={`$${shippingPrice}`} />
        <OrderSummaryItem name="Tax" value={`$${taxPrice}`} />
        <OrderSummaryItem name="Total" value={`$${totalPrice}`} />
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
  )
}

export default OrderSummary
