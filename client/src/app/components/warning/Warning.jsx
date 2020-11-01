import React from "react"

const Warning = ({ variant, children }) => {
  return <div className={`alert alert-${variant}`}>{children}</div>
}

Error.defaultProps = {
  variant: "primary",
}

export default Warning
