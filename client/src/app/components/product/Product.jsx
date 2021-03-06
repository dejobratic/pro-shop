import React from "react"

import Rating from "app/components/rating/Rating"
import ProductLink from "app/components/product-link/ProductLink"
import ProductImage from "app/components/product-image/ProductImage"

const Product = ({ product }) => {
  const { _id: id } = product

  return (
    <div className="card my-3 p-3 rounded">
      <ProductImage className="card-img-top" product={product} />

      <div className="card-body">
        <ProductLink id={id}>
          <div className="card-title">
            <strong>{product.name}</strong>
          </div>
        </ProductLink>

        <div className="card-text">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>

        <h3 className="card-text">${product.price}</h3>
      </div>
    </div>
  )
}

export default Product
