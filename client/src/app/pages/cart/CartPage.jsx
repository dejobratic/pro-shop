import React from "react"
import { useSelector } from "react-redux"

import Warning from "app/components/warning/Warning"
import Button from "app/components/button/Button"
import CartItem from "app/components/cart-item/CartItem"

import {
  selectCartProducts,
  selectCartProductsPrice,
  selectCartProductsQuantity,
} from "app/redux/cart/selectors"

const CartPage = ({ history }) => {
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
                  <CartItem item={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group">
              <li className="list-group-item">
                <h5> Subtotal ({totalQuantity}) products</h5>${totalPrice}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                <Button
                  disabled={products.length === 0}
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
