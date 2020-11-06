import React from "react"

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn btn-outline-dark" {...otherProps}>
      {children}
    </button>
  )
}

export default Button
