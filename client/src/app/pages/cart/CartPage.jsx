import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Warning from "app/components/warning/Warning"

import {
  addProductToCart,
  clearProductFromCart,
} from "app/redux/cart/cart-actions"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsQuantity,
} from "app/redux/cart/cart-selectors"
import Button from "app/components/button/Button"

const CartPage = ({ history }) => {
  const dispatch = useDispatch()

  const products = useSelector(selectCartProducts)
  const totalPrice = useSelector(selectCartProductsPrice)
  const totalQuantity = useSelector(selectCartProductsQuantity)

  const onProceedToCheckout = () => {
    history.push("/login?redirect=checkout")
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Shopping Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          {products.length === 0 ? (
            <Warning>Your cart is empty</Warning>
          ) : (
            <ul className="list-group-flush">
              {products.map((product) => (
                <li className="list-group-item" key={product._id}>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        className="img-fluid img-thumbnail"
                        src={product.image}
                        alt={product.name}
                        fluid
                        rounded
                      />
                    </div>
                    <div className="col-md-3">
                      <Link to={`/products/${product._id}`}>
                        {product.name}
                      </Link>
                    </div>
                    <div className="col-md-2">${product.price}</div>
                    <div className="col-md-3">
                      <select
                        className="form-control"
                        value={product.quantity}
                        onChange={(e) =>
                          dispatch(
                            addProductToCart({
                              ...product,
                              quantity: Number(e.target.value),
                            })
                          )
                        }
                      >
                        {[...Array(product.countInStock).keys()].map((el) => (
                          <option key={el + 1} value={el + 1}>
                            {el + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => dispatch(clearProductFromCart(product))}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group-flush">
              <li className="list-group-item">
                <h5> Subtotal ({totalQuantity}) products</h5>${totalPrice}
              </li>
              <li className="list-group-item">
                <Button
                  isDisabled={products.length === 0}
                  onClick={onProceedToCheckout}
                >
                  Proceed to checkout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
