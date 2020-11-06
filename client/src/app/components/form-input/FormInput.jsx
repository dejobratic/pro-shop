import React from "react"

const FormInput = ({ label, onChange, ...otherProps }) => {
  return (
    <div className="form-group" htmlFor={label}>
      <label>{label}</label>
      <input className="form-control" onChange={onChange} {...otherProps} />
    </div>
  )
}

export default FormInput
