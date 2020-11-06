import React from "react"

const Button = ({ isDisabled, onClick, children, ...otherProps }) => {
  return (
    <button
      className="btn btn-outline-dark"
      disabled={isDisabled}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
