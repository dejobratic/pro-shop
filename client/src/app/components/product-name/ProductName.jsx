import React from "react"

import ProductLink from "app/components/product-link/ProductLink"

const ProductName = ({ product }) => {
  return <ProductLink id={product._id}>{product.name}</ProductLink>
}

export default ProductName
