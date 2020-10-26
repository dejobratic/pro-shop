import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "app/components/header/Header"
import Footer from "app/components/footer/Footer"

import HomePage from "app/pages/home/HomePage"
import ProductPage from "app/pages/product/ProductPage"

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route exact path="/" component={HomePage} />
					<Route path="/products/:productId" component={ProductPage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
