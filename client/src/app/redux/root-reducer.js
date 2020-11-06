import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import productsReducer from "app/redux/products/products-reducer"
import productDetailsReducer from "app/redux/product-details/product-details-reducer"
import cartReducer from "app/redux/cart/cart-reducer"
import userAccountReducer from "app/redux/user-account/user-account-reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "userAccount"],
}

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userAccount: userAccountReducer,
})

export default persistReducer(persistConfig, rootReducer)
