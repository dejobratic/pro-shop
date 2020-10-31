import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"

import Rating from "app/components/rating/Rating"

import { addProductToCart } from "app/redux/cart/cart-actions"

const ProductDetails = ({ product, match, history }) => {
	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState(1)

	const onChangeQuantity = (event) => {
		const quantity = event.target.value
		setQuantity(quantity)
	}

	const onAddToCart = () => {
		dispatch(addProductToCart({ ...product, quantity }))
		history.push(`/cart/${product._id}?quantity=${quantity}`)
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
							{product.countInStock > 0 && (
								<ListGroup.Item>
									<Row>
										<Col>Quantity:</Col>
										<Col>
											<Form.Control
												as="select"
												value={quantity}
												onChange={onChangeQuantity}
											>
												{[...Array(product.countInStock).keys()].map((el) => (
													<option key={el + 1} value={el + 1}>
														{el + 1}
													</option>
												))}
											</Form.Control>
										</Col>
									</Row>
								</ListGroup.Item>
							)}
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
									onClick={onAddToCart}
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

export default withRouter(ProductDetails)
