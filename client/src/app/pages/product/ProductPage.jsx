import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux"

import Rating from "app/components/rating/Rating"
import Spinner from "app/components/spinner/Spinner"

import { selectShopProductById } from "app/redux/shop/shop-selectors"

const ProductPage = ({ match }) => {
	const product = useSelector(selectShopProductById(match.params.productId))

	console.log(product)

	if (product === undefined) {
		return <Spinner />
	}

	return (
		<>
			<Row>
				<Col md={2}>
					<Link className="btn btn-light my-3" to="/">
						Go Back
					</Link>
				</Col>
				<Col md={9}>
					<h3 className="my-2">{product.name}</h3>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Image fluid src={product.image} alt={product.name} />
				</Col>
				<Col md={3}>
					<ListGroup.Item>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>Price</strong>: ${product.price}
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>Description</strong>: {product.description}
					</ListGroup.Item>
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
