import React from "react"
import { Link } from "react-router-dom"

const ProductLink = ({ id, children }) => (
  <Link to={`/products/${id}`}>{children}</Link>
)

export default ProductLink
