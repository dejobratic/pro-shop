import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"

import rootReducer from "app/redux/root-reducer"
import rootSaga from "app/redux/root-saga"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store
