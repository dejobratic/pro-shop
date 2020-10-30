import React from "react"

import Spinner from "app/components/loader/Loader"

const withSpinner = (WrappedComponent) => ({ isLoading }) =>
	isLoading ? <Spinner /> : <WrappedComponent />

export default withSpinner
