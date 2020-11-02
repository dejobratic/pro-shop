import React from "react"

const Button = ({ isDisabled, onClick, children }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
