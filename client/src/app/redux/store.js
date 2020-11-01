import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

import rootReducer from "app/redux/root-reducer"
import rootSaga from "app/redux/root-saga"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
