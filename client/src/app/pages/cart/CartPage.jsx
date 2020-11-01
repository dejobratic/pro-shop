import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Warning from "app/components/warning/Warning"

import {
  addProductToCart,
  removeProductFromCart,
} from "app/redux/cart/cart-actions"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsQuantity,
} from "app/redux/cart/cart-selectors"

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
        <div clasName="col-md-8">
          <h1>Shopping Cart</h1>
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
                      <div
                        className="form-control"
                        as="select"
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
                      </div>
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        variant="light"
                        onClick={() => dispatch(removeProductFromCart(product))}
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
              <li>
                <h5> Subtotal ({totalQuantity}) products</h5>${totalPrice}
              </li>
              <li>
                <button
                  type="button"
                  className="btn-block"
                  disabled={products.length === 0}
                  onClick={onProceedToCheckout}
                >
                  Proceed To Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
