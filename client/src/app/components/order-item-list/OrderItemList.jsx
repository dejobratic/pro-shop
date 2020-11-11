import React from "react"
import { useSelector } from "react-redux"

import Warning from "app/components/warning/Warning"
import OrderItem from "app/components/order-item/OrderItem"

import { selectCartProducts } from "app/redux/cart/selectors"

const OrderItemList = () => {
  const cartProducts = useSelector(selectCartProducts)

  return (
    <>
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
    </>
  )
}

export default OrderItemList
