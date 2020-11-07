import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import { userSignOut } from "app/redux/user-login/actions"
import { selectCurrentUser } from "app/redux/user-login/selectors"
import { selectCartProductsQuantity } from "app/redux/cart/selectors"

import "app/components/header/header.css"

const Header = ({ history }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const cartProductsQuantity = useSelector(selectCartProductsQuantity)

  const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(true)
  const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(true)

  const onToggleIsNavBarCollapsed = () => {
    setIsNavBarCollapsed(!isNavBarCollapsed)
  }

  const onToggleIsDropdownCollapsed = () => {
    setIsDropdownCollapsed(!isDropdownCollapsed)
  }

  const onGoToAccount = () => {
    history.push("/account")
  }

  const onGoToCheckout = () => {
    history.push("/checkout")

    setIsDropdownCollapsed(true)
  }

  const onSignOut = () => {
    dispatch(userSignOut())
    history.push("/login")

    setIsDropdownCollapsed(true)
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            ProShop
          </Link>
          <button
            className={`navbar-toggler ${isNavBarCollapsed ? "collapsed" : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-label="Toggle navigation"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavBarCollapsed}
            onClick={onToggleIsNavBarCollapsed}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${
              isNavBarCollapsed ? "" : "show"
            } collapse navbar-collapse`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart" />{" "}
                  {`Cart (${cartProductsQuantity})`}
                </Link>
              </li>

              {currentUser ? (
                <li
                  className={`nav-item dropdown ${
                    isDropdownCollapsed ? "" : "show"
                  }`}
                >
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={!isDropdownCollapsed}
                    onClick={onToggleIsDropdownCollapsed}
                  >
                    {`Hello, ${currentUser.name}`}
                  </Link>
                  <div
                    className={`dropdown-menu ${
                      isDropdownCollapsed ? "" : "show"
                    }`}
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="dropdown-item" onClick={onGoToAccount}>
                      Account
                    </div>
                    <div className="dropdown-item" onClick={onGoToCheckout}>
                      Checkout
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" onClick={onSignOut}>
                      <i className="fas fa-sign-out-alt" /> Sign Out
                    </div>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <i className="fas fa-user" /> Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default withRouter(Header)
