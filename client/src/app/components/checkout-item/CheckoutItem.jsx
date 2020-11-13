import React from "react"

import CheckoutItemContainer from "app/components/checkout-item/CheckoutItemContainer"

const CheckoutItem = ({ title, label, value }) => {
  return (
    <CheckoutItemContainer>
      <h2>{title}</h2>
      <p>
        <strong>{label}: </strong> {value}
      </p>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
