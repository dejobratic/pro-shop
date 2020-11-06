import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import {
  addProductToCart,
  clearProductFromCart,
} from "app/redux/cart/cart-actions"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const onAddProductToCart = (event) => {
    const quantity = Number(event.target.value)
    dispatch(addProductToCart({ ...item, quantity }))
  }

  const onClearProductFromCart = () => {
    dispatch(clearProductFromCart(item))
  }

  return (
    <div className="row">
      <div className="col-md-2">
        <img
          className="img-fluid img-thumbnail"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="col-md-3">
        <Link to={`/products/${item._id}`}>{item.name}</Link>
      </div>
      <div className="col-md-2">${item.price}</div>
      <div className="col-md-3">
        <select
          className="form-control"
          value={item.quantity}
          onChange={onAddProductToCart}
        >
          {[...Array(item.countInStock).keys()].map((el) => (
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
          onClick={onClearProductFromCart}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default CartItem
