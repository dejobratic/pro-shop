import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import Header from "app/components/header/Header"
import Footer from "app/components/footer/Footer"

import { default as HomePage } from "app/pages/home/HomePageContainer"
import { default as ProductPage } from "app/pages/product-details/ProductDetailsPageContainer"
import CartPage from "app/pages/cart/CartPage"
import CheckoutPage from "app/pages/checkout/CheckoutPage"

import { loadProducts } from "app/redux/products/products-actions"

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadProducts())
	}, [dispatch])

	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<Route exact path="/" component={HomePage} />
					<Route path="/products/:productId" component={ProductPage} />
					<Route path="/cart/:productId?" component={CartPage} />
					<Route path="/checkout" component={CheckoutPage} />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
