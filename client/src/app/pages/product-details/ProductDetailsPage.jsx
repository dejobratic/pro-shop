import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"

import Rating from "app/components/rating/Rating"
import Button from "app/components/button/Button"

import { addProductToCart } from "app/redux/cart/actions"

const ProductDetails = ({ product, match, history }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const onChangeQuantity = (event) => {
    const quantity = Number(event.target.value)
    setQuantity(quantity)
  }

  const onAddToCart = () => {
    dispatch(addProductToCart({ ...product, quantity }))
    history.push(`/cart/${product._id}?quantity=${quantity}`)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
        </div>
        <div className="col-md-8">
          <h3 className="my-2">{product.name}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid" src={product.image} alt={product.name} />
        </div>
        <div className="col-md-3">
          <li className="list-group-item">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </li>
          <li className="list-group-item">
            <strong>Price</strong>: ${product.price}
          </li>
          <li className="list-group-item">
            <strong>Description</strong>: {product.description}
          </li>
        </div>
        <div className="col-md-3">
          <div className="card">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <div className="col">Price:</div>
                  <div className="col">
                    <strong>${product.price}</strong>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">Status:</div>
                  <div className="col">
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </div>
                </div>
              </li>
              {product.countInStock > 0 && (
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Quantity:</div>
                    <div className="col">
                      <select
                        className="form-control"
                        value={quantity}
                        onChange={onChangeQuantity}
                      >
                        {[...Array(product.countInStock).keys()].map((el) => (
                          <option key={el + 1} value={el + 1}>
                            {el + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              )}
              <li className="list-group-item d-flex justify-content-center">
                <Button
                  disabled={product.countInStock === 0}
                  onClick={onAddToCart}
                >
                  Add to Cart
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetails)
