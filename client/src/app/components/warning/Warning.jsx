import React from "react"

const Warning = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {children}
    </div>
  )
}

Warning.defaultProps = {
  variant: "primary",
}

export default Warning
