import React from "react"

import OrderSummaryItemContainer from "app/components/order-summary-item/OrderSummaryItemContainer"

const OrderSummaryItem = ({ name, value }) => {
  return (
    <OrderSummaryItemContainer>
      <div className="row">
        <div className="col">{name}</div>
        <div className="col">{value}</div>
      </div>
    </OrderSummaryItemContainer>
  )
}

export default OrderSummaryItem
