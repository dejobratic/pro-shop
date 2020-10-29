import { combineReducers } from "redux"

import shopReducer from "app/redux/shop/shop-reducer"

const rootReducer = combineReducers({
	shop: shopReducer,
})

export default rootReducer
