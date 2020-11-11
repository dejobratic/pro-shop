import React from "react"
import { useDispatch } from "react-redux"

import ProductImage from "app/components/product-image/ProductImage"
import ProductName from "app/components/product-name/ProductName"

import { addProductToCart, clearProductFromCart } from "app/redux/cart/actions"

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
        <ProductImage className="img-fluid img-thumbnail" product={item} />
      </div>
      <div className="col-md-3">
        <ProductName product={item} />
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
