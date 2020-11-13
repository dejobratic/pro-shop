import React from "react"

import Warning from "app/components/warning/Warning"
import OrderItem from "app/components/order-item/OrderItem"

const OrderItemList = ({ orderItems }) => {
  return (
    <>
      <h2>Order items</h2>
      {orderItems.length === 0 ? (
        <Warning>Your order list is empty</Warning>
      ) : (
        <div className="list-group-flush">
          {orderItems.map((item, idx) => (
            <OrderItem key={idx} item={item} />
          ))}
        </div>
      )}
    </>
  )
}

export default OrderItemList
