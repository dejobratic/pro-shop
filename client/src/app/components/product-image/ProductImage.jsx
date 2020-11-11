import React from "react"

import ProductLink from "app/components/product-link/ProductLink"

const ProductImage = ({ product, ...otherProps }) => {
  return (
    <ProductLink id={product._id}>
      <img src={product.image} alt={product.name} {...otherProps} />
    </ProductLink>
  )
}

export default ProductImage
