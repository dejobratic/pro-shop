import React from "react"
import { useSelector } from "react-redux"

import OrderSummaryContainer from "app/components/order-summary/OrderSummaryContainer"
import OrderSummaryItem from "app/components/order-summary-item/OrderSummaryItem"
import Button from "app/components/button/Button"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsShippingPrice,
  selectCartProductsTaxPrice,
  selectCartProductsTotalPrice,
} from "app/redux/cart/selectors"
import OrderSummaryItemContainer from "../order-summary-item/OrderSummaryItemContainer"

const OrderSummary = ({ onPlaceOrder }) => {
  const cartProducts = useSelector(selectCartProducts)

  const productsPrice = useSelector(selectCartProductsPrice)
  const shippingPrice = useSelector(selectCartProductsShippingPrice)
  const taxPrice = useSelector(selectCartProductsTaxPrice)
  const totalPrice = useSelector(selectCartProductsTotalPrice)

  return (
    <OrderSummaryContainer>
      <OrderSummaryItem name="Items" value={`$${productsPrice}`} />
      <OrderSummaryItem name="Shipping" value={`$${shippingPrice}`} />
      <OrderSummaryItem name="Tax" value={`$${taxPrice}`} />
      <OrderSummaryItem name="Total" value={`$${totalPrice}`} />
      <OrderSummaryItemContainer>
        <Button
          type="button"
          disabled={cartProducts.length === 0}
          onClick={onPlaceOrder}
        >
          Place Order
        </Button>
      </OrderSummaryItemContainer>
    </OrderSummaryContainer>
  )
}

export default OrderSummary
