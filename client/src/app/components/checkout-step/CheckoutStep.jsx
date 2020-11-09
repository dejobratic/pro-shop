import React from "react"

import "app/components/checkout-step/checkout-step.css"

const CheckoutStep = ({ name, onClick, completed }) => {
  return (
    <div className="nav-item">
      {completed ? (
        <div className="nav-link active" onClick={onClick}>
          {name}
        </div>
      ) : (
        <div className="nav-link disabled">{name}</div>
      )}
    </div>
  )
}

export default CheckoutStep
