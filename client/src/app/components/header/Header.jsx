import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ProShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/cart">
                <i className="fas fa-shopping-cart" /> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <i className="fas fa-user" /> Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
