import React from "react"

import Product from "app/components/product/Product"

const HomePage = ({ products }) => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="row">
        {products.map((product) => (
          <div
            className="col col-sm-12 col-md-6 col-lg-4 col-xl-3"
            key={product._id}
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage
