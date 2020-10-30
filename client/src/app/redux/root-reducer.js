import { combineReducers } from "redux"

import productsReducer from "app/redux/products/products-reducer"
import productDetailsReducer from "app/redux/product-details/product-details-reducer"

const rootReducer = combineReducers({
	products: productsReducer,
	productDetails: productDetailsReducer,
})

export default rootReducer
