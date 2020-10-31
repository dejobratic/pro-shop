import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import Warning from "app/components/warning/Warning"

import {
	addProductToCart,
	clearProductFromCart,
	removeProductFromCart,
} from "app/redux/cart/cart-actions"

import {
	selectCartProducts,
	selectCartProductsPrice,
	selectCartProductsQuantity,
} from "app/redux/cart/cart-selectors"

const CartPage = ({ history }) => {
	const dispatch = useDispatch()

	const products = useSelector(selectCartProducts)
	const totalPrice = useSelector(selectCartProductsPrice)
	const totalQuantity = useSelector(selectCartProductsQuantity)

	const onProceedToCheckout = () => {
		history.push("/login?redirect=checkout")
	}

	return (
		<>
			<Row>
				<Col md={8}>
					<h1>Shopping Cart</h1>
					{products.length === 0 ? (
						<Warning>Your cart is empty</Warning>
					) : (
						<ListGroup variant="flush">
							{products.map((product) => (
								<ListGroup.Item key={product._id}>
									<Row>
										<Col md={2}>
											<Image
												src={product.image}
												alt={product.name}
												fluid
												rounded
											/>
										</Col>
										<Col md={3}>
											<Link to={`/products/${product._id}`}>
												{product.name}
											</Link>
										</Col>
										<Col md={2}>${product.price}</Col>
										<Col md={2}>
											<Form.Control
												as="select"
												value={product.quantity}
												onChange={(e) =>
													dispatch(
														addProductToCart({
															...product,
															quantity: Number(e.target.value),
														})
													)
												}
											>
												{[...Array(product.countInStock).keys()].map((el) => (
													<option key={el + 1} value={el + 1}>
														{el + 1}
													</option>
												))}
											</Form.Control>
										</Col>
										<Col md={2}>
											<Button
												type="button"
												variant="light"
												onClick={() => dispatch(clearProductFromCart(product))}
											>
												<i className="fas fa-trash"></i>
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							))}
						</ListGroup>
					)}
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h5> Subtotal ({totalQuantity}) products</h5>${totalPrice}
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									type="button"
									className="btn-block"
									disabled={products.length === 0}
									onClick={onProceedToCheckout}
								>
									Proceed To Checkout
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default CartPage
