import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import Rating from "app/components/rating/Rating"

import "app/components/product/product.css"

const ProductLink = ({ id, children }) => (
	<Link to={`/products/${id}`}>{children}</Link>
)

const Product = ({ product }) => {
	const { _id: id } = product

	return (
		<Card className="my-3 p-3 rounded">
			<ProductLink id={id}>
				<Card.Img src={product.image} variant="top" />
			</ProductLink>

			<Card.Body>
				<ProductLink id={id}>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</ProductLink>

				<Card.Text as="div">
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as="h3">${product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
