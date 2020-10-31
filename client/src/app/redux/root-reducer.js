import { combineReducers } from "redux"

import productsReducer from "app/redux/products/products-reducer"
import productDetailsReducer from "app/redux/product-details/product-details-reducer"
import cartReducer from "app/redux/cart/cart-reducer"

const rootReducer = combineReducers({
	products: productsReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
})

export default rootReducer
