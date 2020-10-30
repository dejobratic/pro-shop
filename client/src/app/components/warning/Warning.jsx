import React from "react"
import { Alert } from "react-bootstrap"

const Warning = ({ variant, children }) => {
	return <Alert variant={variant}>{children}</Alert>
}

Error.defaultProps = {
	variant: "blue",
}

export default Warning
