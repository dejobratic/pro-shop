import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"

import Rating from "app/components/rating/Rating"
import Spinner from "app/components/spinner/Spinner"

import { restService } from "app/services/RestService"

const ProductPage = ({ match }) => {
	const [product, setProduct] = useState()

	useEffect(() => {
		const getProduct = async () => {
			const { data: product } = await restService.get(
				`/api/products/${match.params.productId}`
			)
			setProduct(product)
		}

		getProduct()
	}, [match])

	if (product === undefined) {
		return <Spinner />
	}

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image fluid src={product.image} alt={product.name} />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup.Item>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</ListGroup.Item>
					<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
					<ListGroup.Item>Description: {product.description}</ListGroup.Item>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
								>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductPage
