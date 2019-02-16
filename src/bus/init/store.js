//Core
import { createStore, compose, applyMiddleware } from "redux";

//Roots
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";

//Middleware
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

export const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
