import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import productsReducer from "app/redux/products/reducers"
import productDetailsReducer from "app/redux/product-details/reducers"
import cartReducer from "app/redux/cart/reducers"
import userLoginReducer from "app/redux/user-login/reducers"
import userAccountReducer from "app/redux/user-account/reducers"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "userLogin"],
}

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userAccount: userAccountReducer,
})

export default persistReducer(persistConfig, rootReducer)
