import React from "react"

import ProductImage from "app/components/product-image/ProductImage"
import ProductName from "app/components/product-name/ProductName"

const OrderItem = ({ item }) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-1">
          <ProductImage className="img-fluid img-thumbnail" product={item} />
        </div>
        <div className="col">
          <ProductName product={item} />
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
