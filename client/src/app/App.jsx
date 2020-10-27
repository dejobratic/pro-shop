import { Container } from "react-bootstrap"
import { BrowserRouter, Route } from "react-router-dom"

import Header from "app/components/header/Header"
import Footer from "app/components/footer/Footer"

import HomePage from "app/pages/home/HomePage"
import ProductPage from "app/pages/product/ProductPage"
import CheckoutPage from "app/pages/checkout/CheckoutPage"

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Route exact path="/" component={HomePage} />
					<Route path="/products/:productId" component={ProductPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
