import React from "react"
import { useSelector } from "react-redux"

import HomePage from "app/pages/home/HomePage"
import Loader from "app/components/loader/Loader"
import Warning from "app/components/warning/Warning"

import { selectProducts } from "app/redux/products/products-selectors"

const HomePageContainer = () => {
	const { error, data, isDataLoaded } = useSelector(selectProducts)

	if (error) return <Warning variant="danger">{error.message}</Warning>

	if (isDataLoaded) return <HomePage products={data} />

	return <Loader />
}

export default HomePageContainer
