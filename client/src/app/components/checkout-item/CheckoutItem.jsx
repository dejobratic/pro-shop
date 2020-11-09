import React from "react"

const CheckoutItem = ({ title, label, value }) => {
  return (
    <div className="list-group-item">
      <h2>{title}</h2>
      <p>
        <strong>{label}: </strong> {value}
      </p>
    </div>
  )
}

export default CheckoutItem
