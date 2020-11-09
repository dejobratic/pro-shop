import React from "react"

const FormCheck = ({ name, label, onClick, ...otherProps }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        onClick={onClick}
        {...otherProps}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default FormCheck
