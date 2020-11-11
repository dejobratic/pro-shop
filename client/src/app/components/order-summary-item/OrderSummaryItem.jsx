import React from "react"

const OrderSummaryItem = ({ name, value }) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col">{name}</div>
        <div className="col">{value}</div>
      </div>
    </div>
  )
}

export default OrderSummaryItem
