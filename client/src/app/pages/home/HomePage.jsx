import React from "react"
import { Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"

import Product from "app/components/product/Product"
import Spinner from "app/components/spinner/Spinner"

import { selectShopProducts } from "app/redux/shop/shop-selectors"

const HomePage = () => {
	const products = useSelector(selectShopProducts)

	if (products === [] || products === undefined) {
		return <Spinner />
	}

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomePage
