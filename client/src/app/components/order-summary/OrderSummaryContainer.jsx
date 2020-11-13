import React from "react"

const OrderSummaryContainer = ({ children }) => {
  return (
    <div className="card">
      <div className="list-group-flush">
        <div className="list-group-item">
          <h2>Order Summary</h2>
        </div>
        {children}
      </div>
    </div>
  )
}

export default OrderSummaryContainer
