export const addProductToCart = (products, productToAdd) => {
	const existingProduct = products.find(
		(product) => product._id === productToAdd._id
	)

	if (existingProduct) {
		return products.map((product) =>
			product._id === productToAdd._id
				? { ...product, quantity: productToAdd.quantity }
				: product
		)
	}

	return [...products, { ...productToAdd, quantity: 1 }]
}

export const removeProductFromCart = (products, productToRemove) => {
	const existingProduct = products.find(
		(product) => product._id === productToRemove._id
	)

	if (existingProduct && existingProduct.quantity > 1) {
		return products.map((product) =>
			product._id === productToRemove._id
				? { ...product, quantity: product.quantity - 1 }
				: product
		)
	}

	return clearProductFromCart(products, productToRemove)
}

export const clearProductFromCart = (products, productToClear) =>
	products.filter((product) => product._id !== productToClear._id)
