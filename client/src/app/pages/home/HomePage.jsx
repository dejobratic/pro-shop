import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"

import Product from "app/components/product/Product"

import { restService } from "app/services/RestService"
import Spinner from "app/components/spinner/Spinner"

const HomePage = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			const { data: products } = await restService.get("api/products")
			setProducts(products)
		}

		getProducts()
	}, [])

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
