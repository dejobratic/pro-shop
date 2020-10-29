import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

import Header from "app/components/header/Header"
import Footer from "app/components/footer/Footer"

import HomePage from "app/pages/home/HomePage"
import ProductPage from "app/pages/product/ProductPage"
import CheckoutPage from "app/pages/checkout/CheckoutPage"

import useActionDispatch from "app/hooks/useActionDispatch"

import { loadShopProducts } from "app/redux/shop/shop-actions"

const App = () => {
	useActionDispatch(loadShopProducts)

	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<Route exact path="/" component={HomePage} />
					<Route path="/products/:productId" component={ProductPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
