import React from "react"
import ProductLink from "../product-link/ProductLink"

const OrderItem = ({ item }) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-1">
          <ProductLink id={item._id}>
            <img
              className="img-fluid img-thumbnail"
              src={item.image}
              alt={item.name}
            />
          </ProductLink>
        </div>
        <div className="col">
          <ProductLink id={item._id}>{item.name}</ProductLink>
        </div>
        <div className="col-md-4">
          {item.quantity} x ${item.price} = $
          {(item.quantity * item.price).toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default OrderItem
