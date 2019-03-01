//Core
import { createStore, compose, applyMiddleware } from "redux";

//Roots
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";

//Middleware
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const __DEV__ = process.env.NODE_ENV === "development";
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = __DEV__ && devtools ? devtools : compose;

export const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
